import React from "react";
import { Routes, Route } from "react-router-dom";
import Header from "./Header";
import Main from "./Main";
import List from "./List";
import { GlobalStyle } from "./style";
import FreeBoard from "./FreeBoard";
import QuestionBoard from "./QuestionBoard";
import TipBoard from "./TipBoard";
import ErrorBoard from "./ErrorBoard";
import Write from "./Write";
const App = () => {
  return (
    <>
      <GlobalStyle />
      <Header />
      <Main />
      <Write />
    </>
  );
};

export default App;
