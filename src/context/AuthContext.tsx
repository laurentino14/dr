import {useRouter} from "next/dist/client/router";
import {destroyCookie, parseCookies, setCookie} from "nookies";
import {createContext, useEffect, useState} from "react";
import {
  GetUserAuthenticatedDocument,
  useAuthMutation,
} from "../graphql/graphql";
import {client} from "../http/apollo";

type AuthContext = {
  user: User | null;
  signIn: (data: signInData) => Promise<void>;
  signOut: () => void;
};

export type User = {
  id: string;
  firstname: string;
  lastname: string;
  username: string;
  email: string;
  avatar: string;
  cellphone: string;
  token_user: string;
};

type signInData = {
  email: string;
  password: string;
};

export const AuthContext = createContext({} as AuthContext);

export function AuthProvider({children}) {
  const [user, setUser] = useState<User | null>(null);
  const [reqUser, _] = useAuthMutation();
  const {reload, push} = useRouter();

  useEffect(() => {
    const {auth: token} = parseCookies();

    if (token) {
      try {
        client
          .query({
            query: GetUserAuthenticatedDocument,
            variables: {token: String(token)},
          })
          .then(data =>
            setUser({
              id: data.data.userAuthenticated.id,
              firstname: data.data.userAuthenticated.firstname,
              lastname: data.data.userAuthenticated.lastname,
              email: data.data.userAuthenticated.email,
              username: data.data.userAuthenticated.username,
              avatar: data.data.userAuthenticated.avatar,
              token_user: data.data.userAuthenticated.token_user,
              cellphone: data.data.userAuthenticated.cellphone,
            }),
          );
      } catch (err) {
        setUser(null);
        destroyCookie(undefined, "auth");
      }
    } else {
      setUser(null);
      destroyCookie(undefined, "auth");
    }
  }, []);

  async function signIn({email, password}: signInData) {
    await reqUser({variables: {email: email, password: password}}).then(res => {
      setUser({
        id: res.data.authentication.id,
        cellphone: res.data.authentication.cellphone,
        email: res.data.authentication.email,
        avatar: res.data.authentication.avatar,
        username: res.data.authentication.username,
        firstname: res.data.authentication.firstname,
        lastname: res.data.authentication.lastname,
        token_user: res.data.authentication.token_user,
      });
      destroyCookie(undefined, "auth");
      setCookie(undefined, "auth", res.data.authentication.token_user, {
        maxAge: 60 * 60 * 24 * 2,
      });

      reload();
    });
  }

  function signOut() {
    setUser(null);
    destroyCookie(undefined, "auth");

    setTimeout(() => {
      reload();
    }, 300);
  }

  return (
    <AuthContext.Provider value={{signIn, user, signOut}}>
      {children}
    </AuthContext.Provider>
  );
}
