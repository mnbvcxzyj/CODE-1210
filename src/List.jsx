import React from "react";
import { useState } from "react";
import styled from "styled-components";
import data from "./data.json";
import { useNavigate, NavLink } from "react-router-dom";
import FreeBoard from "./FreeBoard";
import QuestionBoard from "./QuestionBoard";
import TipBoard from "./TipBoard";
import ErrorBoard from "./ErrorBoard";

const ListDiv = styled.div`
  position: absolute;
  width: 119px;
  height: 31px;
  left: 76px;
  top: 1114px;

  font-family: "Pretendard";
  font-style: normal;
  font-weight: 700;
  font-size: 26px;
  line-height: 31px;
  display: flex;
  align-items: center;
  text-align: center;

  color: #181818;
`;

const List = () => {
  const navigate = useNavigate();

  const activeStyle = {
    position: "absolute",
    width: "180px",
    height: "68px",
    left: "104px",
    top: "1096px",

    background: "#3435CE",
    borderRadius: "10px",
  };

  const nonActiveStyle = {
    position: "absolute",
    width: "180px",
    height: "68px",
    left: "104px",
    top: "1096px",

    background: "white",
    borderRadius: "10px",
  };
  return (
    <>
      <ListDiv>
        <NavLink
          to={"/free"}
          style={({ isActive }) => (isActive ? activeStyle : nonActiveStyle)}
        >
          자유게시판
        </NavLink>
        <NavLink
          to={"/question"}
          style={({ isActive }) => (isActive ? activeStyle : nonActiveStyle)}
        >
          질문 있어요
        </NavLink>
        <NavLink
          to={"/tip"}
          style={({ isActive }) => (isActive ? activeStyle : nonActiveStyle)}
        >
          꿀팁 있어요
        </NavLink>
        <NavLink
          to={"/error"}
          style={({ isActive }) => (isActive ? activeStyle : nonActiveStyle)}
        >
          오류 있어요
        </NavLink>
      </ListDiv>
    </>
  );
};

export default List;
