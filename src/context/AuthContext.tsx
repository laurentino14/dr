import {useRouter} from "next/dist/client/router";
import {parseCookies, setCookie} from "nookies";
import {createContext, useEffect, useState} from "react";
import {
  GetUserAuthenticatedDocument,
  useAuthMutation,
} from "../graphql/graphql";
import {client} from "../pages/_app";

type AuthContext = {
  user: User;
  signIn: (data: signInData) => Promise<void>;
};

type User = {
  id: string;
  firstname: string;
  lastname: string;
  email: string;
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
            }),
          )
          .then();
      } catch (err) {
        console.log(err);
      }
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
      });

      setCookie(undefined, "auth", res.data.authentication.token_user, {
        maxAge: 60 * 60 * 24 * 2,
      });

      push("/");
    });
  }

  return (
    <AuthContext.Provider value={{signIn, user}}>
      {children}
    </AuthContext.Provider>
  );
}
