import {useRouter} from "next/dist/client/router";
import {destroyCookie, parseCookies, setCookie} from "nookies";
import {createContext, useEffect, useState} from "react";
import {
  GetUserAuthenticatedDocument,
  useAuthMutation,
} from "../graphql/graphql";
import {client} from "../http/apollo";

type AuthContext = {
  user: User | "erro" | null;
  signIn: (data: signInData) => Promise<void>;
  signOut: () => void;
};

type User = {
  id: string;
  firstname: string;
  lastname: string;
  email: string;
  cellphone: string;
  token_user: string;
  logged: false | boolean;
};

type signInData = {
  email: string;
  password: string;
};

export const AuthContext = createContext({} as AuthContext);

export function AuthProvider({children}) {
  const [user, setUser] = useState<User | null | "erro">(null);
  const [reqUser, _] = useAuthMutation();
  const {push} = useRouter();

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
              token_user: data.data.userAuthenticated.token_user,
              cellphone: data.data.userAuthenticated.cellphone,
              logged: true,
            }),
          );
      } catch (err) {
        setUser("erro");
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
        firstname: res.data.authentication.firstname,
        lastname: res.data.authentication.lastname,
        token_user: res.data.authentication.token_user,
        logged: true,
      });

      setCookie(undefined, "auth", res.data.authentication.token_user, {
        maxAge: 60 * 60 * 24 * 2,
      });

      push("/app").then();
    });
  }

  function signOut() {
    setUser(null);
    destroyCookie(undefined, "auth");
    push("/").then();
  }

  return (
    <AuthContext.Provider value={{signIn, user, signOut}}>
      {children}
    </AuthContext.Provider>
  );
}
