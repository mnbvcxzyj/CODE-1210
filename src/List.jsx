import React from "react";
import { useState } from "react";
import styled from "styled-components";
import data from "./data.json";
import { useNavigate, NavLink } from "react-router-dom";

const ListDiv = styled.div`
  position: absolute;
  width: 1000px;
  height: 70px;
  left: 80px;
  top: 80px;

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
    position: "relative",
    width: "180px",
    height: "68px",
    top: "1096px",
    background: "#3435CE",
    borderRadius: "10px",
    textDecoration: "none",

    justifyContent: "center",

    fontFamily: "Pretendard",
    fontStyle: "normal",
    fontWeight: "700",
    fontSize: "26px",
    lineHeight: "31px",
    display: "flex",
    alignItems: "center",

    color: "#FFFFFF",
  };

  const nonActiveStyle = {
    position: "relative",
    width: "180px",
    height: "68px",
    top: "1096px",
    textDecoration: "none",
    background: "#FFFFFF",
    borderRadius: "10px",

    justifyContent: "center",

    fontFamily: "Pretendard",
    fontStyle: "normal",
    fontWeight: "700",
    fontSize: "26px",
    lineHeight: "31px",
    display: "flex",
    alignItems: "center",
    textAlign: "center",

    color: "#181818",
  };

  return (
    <>
      <div>
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
      </div>
    </>
  );
};

export default List;
