import React from "react";
import styled from "styled-components";
import data from "./data.json";
import List from "./List";

const ListLineImg = styled.img`
  position: absolute;
  left: 100px;
  top: 1239px;
`;

const ListTextImg = styled.img`
  position: absolute;
  width: 1644px;
  height: 29px;
  left: 138px;
  top: 1280px;
`;

const TextDiv = styled.div`
  position: relative;
  width: 1800px;
  height: 34px;
  left: 130px;
  top: 1070px;
`;

const TextNum = styled.div`
  position: absolute;
  width: 64px;
  left: 16px;
  height: 31px;

  font-family: "Pretendard";
  font-style: normal;
  font-weight: 400;
  font-size: 26px;
  line-height: 31px;

  color: #181818;

  opacity: 0.7;
`;

const ContentDiv = styled.div`
  position: relative;
  width: 1000px;
  left: 145px;

  font-family: "Pretendard";
  font-style: normal;
  font-weight: 600;
  font-size: 28px;
  line-height: 34px;
  /* identical to box height */

  color: #181818;

  opacity: 0.7;
`;

const LikeDiv = styled.div`
  position: relative;
  width: 17px;
  height: 31px;
  left: 1585px;

  font-family: "Pretendard";
  font-style: normal;
  font-weight: 400;
  font-size: 26px;
  line-height: 31px;
  text-align: center;

  color: #181818;

  opacity: 0.55;
`;

const Board = () => {
  return (
    <>
      <List />
      <ListLineImg src="img/ListLine.png" />
      <ListTextImg src="img/list.png" />
      <TextDiv>
        {data.map((list) => (
          <div>
            <TextNum>{list.num}</TextNum>
            <ContentDiv>{list.text}</ContentDiv>
            <LikeDiv>{list.like}</LikeDiv>
          </div>
        ))}
      </TextDiv>
    </>
  );
};

export default Board;
