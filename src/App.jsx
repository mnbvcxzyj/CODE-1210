import React from "react";
import data from "./data.json";
import { Routes, Route } from "react-router-dom";
import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";
import Board from "./Board";
import { GlobalStyle } from "./style";

import Write from "./Write";
const App = () => {
  return (
    <>
      <GlobalStyle />
      <Header />
      <Main />
      <Write />

      <Routes>
        <Route path={"/free"} element={<Board />}></Route>
        <Route path={"/question"} element={<Board />}></Route>
        <Route path={"/tip"} element={<Board />}></Route>
        <Route path={"/error"} element={<Board />}></Route>
      </Routes>

      <Footer />
    </>
  );
};

export default App;
