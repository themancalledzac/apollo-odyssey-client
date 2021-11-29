import React from "react";
import { ApolloProvider, ApolloClient, InMemoryCache } from "@apollo/client";
import ReactDOM from "react-dom";
import GlobalStyles from "./styles";
import Pages from "./pages";

const client = new ApolloClient({
  uri: "https://apollo-odyssey-server-edens.herokuapp.com/",
  cache: new InMemoryCache(),
});

ReactDOM.render(
  <ApolloProvider client={client}>
    <GlobalStyles />
    <Pages />
  </ApolloProvider>,
  document.getElementById("root")
);
