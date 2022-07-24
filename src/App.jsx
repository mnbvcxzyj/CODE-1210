import React from "react";
import Header from "./Header";
import Main from "./Main";
import { GlobalStyle } from "./style";
const App = () => {
  return (
    <>
      <GlobalStyle />
      <Header />
      <Main />
    </>
  );
};

export default App;
