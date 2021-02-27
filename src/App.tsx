import * as React from "react";
import Routes from "./main/routes/Routes";
import { createGlobalStyle } from "styled-components";
import { globalStyle } from "./library/common/constants/cssVariables";
import "./library/css/variables.css";
const GlobalStyles = createGlobalStyle`
  ${globalStyle}
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
