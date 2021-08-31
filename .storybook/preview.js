export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
};

import React from "react";

import { QueryClientProvider, QueryClient } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
const queryClient = new QueryClient();
import { createGlobalStyle } from "styled-components";
import { globalStyle } from "../src/library/common/constants/cssVariables";
import "../src/library/css/variables.css";

const GlobalStyles = createGlobalStyle`
  ${globalStyle}
`;

export const decorators = [
  (story) => (
    <Router>
      <GlobalStyles />

      <QueryClientProvider client={queryClient}>
        {story()}
        <ReactQueryDevtools initialIsOpen={true} />
      </QueryClientProvider>
    </Router>
  ),
];
// get the mocked handlers (endpoints) and starts the service worker
if (typeof global.process === "undefined") {
  const { worker } = require("../src/mocks/browser");
  worker.start();
}
