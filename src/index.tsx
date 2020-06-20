import React from "react";
import ReactDOM from "react-dom";
import ApolloClient from "apollo-boost";
import { Routes } from "./Routes";
import { ApolloProvider } from "@apollo/react-hooks";
import "./index.css";

const client = new ApolloClient({
  uri: "http://localhost:4000/graphql",
});

ReactDOM.render(
  <ApolloProvider client={client}>
    <React.Fragment>
      <Routes />
    </React.Fragment>
  </ApolloProvider>,
  document.getElementById("root")
);
