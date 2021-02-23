import * as React from "react";
import Routes from "./main/routes/Routes";
import { createGlobalStyle } from "styled-components";
const GlobalStyles = createGlobalStyle`
  html {
    --color-text: black;
    --color-background: white;
    --color-primary: palevioletred;
  }
`;
// routing, etc.

export default class App extends React.Component {
  public render() {
    return (
      <div>
        <GlobalStyles />
        <Routes />
      </div>
    );
  }
}
