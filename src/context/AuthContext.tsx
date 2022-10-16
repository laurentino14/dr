import {signOut as signOutSession, useSession} from "next-auth/react";
import {useRouter} from "next/dist/client/router";
import {destroyCookie, parseCookies, setCookie} from "nookies";
import {createContext, useEffect, useState} from "react";
import {
  AuthDocument,
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
  [x: string]: any;
  id: string;
  lastname: string;
  role: string;
  firstname: string;
  email: string;
  avatar: string;
  github: string;
  platform: string;
  bio: string;
  location: string;
  twitter: string;
  site: string;
  username: string;
  token_user: string;
};

export type UserForComponents = {
  user: {
    [x: string]: any;
    id: string;
    lastname: string;
    role: string;
    firstname: string;
    email: string;
    avatar: string;
    github: string;
    platform: string;
    bio: string;
    location: string;
    twitter: string;
    site: string;
    username: string;
    token_user: string;
  };
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
  const {data} = useSession();

  useEffect(() => {
    if (data) {
      try {
        client
          .mutate({
            mutation: AuthDocument,
            variables: {email: data.user.email, password: ""},
          })
          .then(res => {
            setUser({
              id: res.data.authentication.id,
              firstname: res.data.authentication.firstname,
              lastname: res.data.authentication.lastname,
              bio: res.data.authentication.bio,
              github: res.data.authentication.github,
              location: res.data.authentication.location,
              platform: res.data.authentication.platform,
              role: res.data.authentication.role,
              site: res.data.authentication.site,
              twitter: res.data.authentication.twitter,
              email: res.data.authentication.email,
              username: res.data.authentication.username,
              avatar: res.data.authentication.avatar,
              token_user: res.data.authentication.token_user,
            }),
              setCookie(undefined, "auth", res.data.authentication.token_user, {
                maxAge: 60 * 60 * 24 * 2,
              });
            signOutSession();
            reload();
          });
      } catch {
        setUser(null);
        destroyCookie(undefined, "auth");
      }
    }
  }, [data]);

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
              bio: data.data.userAuthenticated.bio,
              github: data.data.userAuthenticated.github,
              location: data.data.userAuthenticated.location,
              platform: data.data.userAuthenticated.platform,
              role: data.data.userAuthenticated.role,
              site: data.data.userAuthenticated.site,
              twitter: data.data.userAuthenticated.twitter,
              email: data.data.userAuthenticated.email,
              username: data.data.userAuthenticated.username,
              avatar: data.data.userAuthenticated.avatar,
              token_user: data.data.userAuthenticated.token_user,
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
        email: res.data.authentication.email,
        avatar: res.data.authentication.avatar,
        bio: res.data.authentication.bio,
        github: res.data.authentication.github,
        location: res.data.authentication.location,
        platform: res.data.authentication.platform,
        role: res.data.authentication.role,
        site: res.data.authentication.site,
        twitter: res.data.authentication.twitter,
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
