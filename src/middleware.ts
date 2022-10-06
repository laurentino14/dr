import {gql} from "@apollo/client";
import {spawn} from "child_process";
import Cookies from "js-cookie";
import type {NextRequest} from "next/server";
import {NextResponse} from "next/server";
import {client} from "./pages/_app";

// This function can be marked `async` if using `await` inside
export function middleware(request: NextRequest) {
  if (process.version) {
    spawn("ls", ["-lh"]);
  }

  client
    .mutate({
      variables: {token: Cookies.get("auth")},
      mutation: gql`
        mutation auth($password: String, $email: String, $token: String) {
          authentication(
            input: {email: $email, password: $password, token: $token}
          ) {
            token_user
          }
        }
      `,
    })
    .then(res => {
      if (!res.data.authentication.token_user) {
        Cookies.delete("auth");
        return NextResponse.next();
      } else {
        Cookies.set("auth", res.data.authentication.token_user);
        return NextResponse.redirect(new URL("/about", request.url));
      }
    });

  return NextResponse.next();
}

export const config = {
  matcher: "/signin",
};
