import React from "react";
import styled from "styled-components";
import data from "./data.json";
import List from "./List";
import { useState } from "react";

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
  height: 25px;
  left: 1585px;
  top: -58px;
  font-family: "Pretendard";
  font-style: normal;
  font-weight: 400;
  font-size: 26px;
  line-height: 31px;
  text-align: center;

  color: #181818;

  opacity: 0.55;
`;

const LikeImg = styled.img`
  position: relative;
  width: 23px;
  top: -30px;
  height: 20px;
  left: 1490px;

  cursor: pointer;
`;

const Board = ({ value }) => {
  const [like, setLike] = useState(false);

  const newData = data.filter((list) => list.type === parseInt(value));

  return (
    <>
      <List />
      <ListLineImg src="img/ListLine.png" />
      <ListTextImg src="img/list.png" />
      <TextDiv>
        {newData.map((list) => (
          <div>
            <TextNum>{list["id"]}</TextNum>
            <ContentDiv>{list["text"]}</ContentDiv>
            <LikeImg
              onClick={setLike}
              src={like ? "img/Like.png" : "img/SelectLike.png"}
            />
            <LikeDiv>{list["like"]}</LikeDiv>
          </div>
        ))}
      </TextDiv>
    </>
  );
};

export default Board;
