import * as React from "react";
import Routes from "./main/routes/Routes";
import { createGlobalStyle } from "styled-components";
import { globalStyle } from "./library/common/constants/cssVariables";
import "./library/css/variables.css";
import { QueryClientProvider, QueryClient } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";
import Navbar from "./library/common/components/Navbar/Navbar";

const GlobalStyles = createGlobalStyle`
  ${globalStyle}
`;
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: Infinity,
      refetchOnWindowFocus: false,
    },
  },
});

export default class App extends React.Component {
  public render() {
    return (
      <QueryClientProvider client={queryClient}>
        <div>
          <GlobalStyles />
          <Routes>
            <Navbar />
          </Routes>
        </div>
        <ReactQueryDevtools initialIsOpen={false} />
      </QueryClientProvider>
    );
  }
}
