import {ApolloProvider} from "@apollo/client";
import {ChakraProvider, theme} from "@chakra-ui/react";
import type {Session} from "next-auth";
import {SessionProvider} from "next-auth/react";
import type {AppProps} from "next/app";
import "react-toastify/dist/ReactToastify.css";
import {Footer} from "../components/footer";
import {AuthProvider} from "../context/AuthContext";
import {SocketProvider} from "../context/SocketContext";
import {client} from "../http/apollo";
import "../styles/global.css";
import "../styles/tailwind.css";

function MyApp({
  Component,
  pageProps: {session, ...pageProps},
}: AppProps<{session: Session}>) {
  return (
    <ChakraProvider theme={theme}>
      <SessionProvider>
        <ApolloProvider client={client}>
          <AuthProvider>
            <SocketProvider>
              <Component {...pageProps} />
            </SocketProvider>
            <Footer />
          </AuthProvider>
        </ApolloProvider>
      </SessionProvider>
    </ChakraProvider>
  );
}

export default MyApp;
