import NextAuth from "next-auth";
import GithubProvider from "next-auth/providers/github";
import GoogleProvider from "next-auth/providers/google";
import {client} from "../../../http/apollo";
import {GetAllUsersDocument} from "./../../../graphql/graphql";

export default NextAuth({
  providers: [
    GithubProvider({
      clientId: process.env.GITHUB_CLIENT_ID,
      clientSecret: process.env.GITHUB_CLIENT_SECRET,
      authorization: {params: {scope: "user"}},
      async profile(profile, tokens) {
        console.log(profile.node_id);
        await client
          .query({
            query: GetAllUsersDocument,
          })
          .then(res => console.log(res.data))
          .catch(err => console.log(err));
        return profile;
      },
    }),
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
  ],
  callbacks: {
    async session({session, token, user}) {
      return session;
    },

    async jwt({token, user, account, profile, isNewUser}) {
      return profile;
    },
    async signIn({profile, user, account, email}) {
      if (account.provider === "google") {
        return profile.email_verified && profile.email.endsWith("@gmail.com");
      }
      return true;
    },
  },
  events: {
    async signIn({profile, user}) {
      // console.log(user);
    },
    createUser({user}) {
      console.log(user);
    },
  },
});
