import {ApolloProvider} from "@apollo/client";
import type {AppProps} from "next/app";
import {Footer} from "../components/footer";
import {AuthProvider} from "../context/AuthContext";
import {client} from "../http/apollo";
import "../styles/global.css";
import "../styles/tailwind.css";

function MyApp({Component, pageProps}: AppProps) {
  return (
    <ApolloProvider client={client}>
      <AuthProvider>
        <Component {...pageProps} />
        <Footer />
      </AuthProvider>
    </ApolloProvider>
  );
}

export default MyApp;
