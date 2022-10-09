import {ApolloClient, InMemoryCache} from "@apollo/client";
import {createUploadLink} from "apollo-upload-client";
export const client = new ApolloClient({
  cache: new InMemoryCache(),
  uri: "http://localhost:3131/graphql",
  link: createUploadLink({uri: "http://localhost:3131/graphql"}),
});
