import {ApolloClient, ApolloProvider, InMemoryCache} from "@apollo/client";
import type {AppProps} from "next/app";
import "../styles/global.css";
import "../styles/tailwind.css";
export const client = new ApolloClient({
  cache: new InMemoryCache(),
  uri: "http://localhost:3131/graphql",
});
function MyApp({Component, pageProps}: AppProps) {
  return (
    <ApolloProvider client={client}>
      <Component {...pageProps} />
    </ApolloProvider>
  );
}

export default MyApp;
