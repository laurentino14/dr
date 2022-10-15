import NextAuth from "next-auth";
import GithubProvider from "next-auth/providers/github";
import GoogleProvider from "next-auth/providers/google";
import {client} from "../../../http/apollo";
import {
  CreateUserGithubDocument,
  CreateUserGoogleDocument,
} from "./../../../graphql/graphql";

export default NextAuth({
  providers: [
    GithubProvider({
      clientId: process.env.GITHUB_CLIENT_ID,
      clientSecret: process.env.GITHUB_CLIENT_SECRET,
      authorization: {params: {scope: "user"}},
    }),
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
      authorization: {params: {scope: "openid email profile"}},
    }),
  ],
  callbacks: {
    async session({session, token, user}) {
      console.log(session);
      return session;
    },
    async jwt({token, user, account, profile, isNewUser}) {
      return token;
    },
    async signIn({profile, user, account, email}) {
      if (account.provider === "google") {
        const name = profile.name.split(" ");
        const firstname = name[0];
        const lastname = name[1];
        await client
          .mutate({
            mutation: CreateUserGoogleDocument,
            variables: {
              firstname: firstname,
              lastname: lastname,
              username: String(
                firstname + lastname + Math.round(Math.random() * 10000),
              ).toLowerCase(),
              avatar: profile.picture.replace("s96-c", "s2000-c"),
              email: profile.email,
            },
          })
          .then()
          .catch(err => null);
      }

      if (account.provider === "github") {
        let name = profile.name.split(" ");
        let firstname = name[0];
        let lastname = name[1];
        await client
          .mutate({
            mutation: CreateUserGithubDocument,
            variables: {
              firstname: firstname,
              lastname: lastname,
              username: profile.login,
              avatar: profile.avatar_url,
              email: profile.email,
              github: profile.html_url,
              bio: profile.bio,
              location: profile.location,
              twitter: profile.twitter_username,
              site: profile.blog,
            },
          })
          .then()
          .catch(err => null);
      }
      return true;
    },
  },
});
