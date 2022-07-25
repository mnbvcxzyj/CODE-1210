import React from "react";
import styled from "styled-components";

const LineImg = styled.img`
  position: absolute;
  left: 65px;
  top: 130px;
`;

const MainLogoImg = styled.img`
  position: absolute;
  left: 135px;
  top: 254px;
`;

const LCircleImg = styled.img`
  position: absolute;
  left: 1.7px;
  top: 154.24px;
`;

const MainText = styled.img`
  position: absolute;
  left: 950px;
  top: 426px;
`;

const RCircleImg = styled.img`
  position: absolute;

  left: 1455px;
  top: 391px;
`;

const RLineCircleImg = styled.img`
  position: absolute;
  left: 1486px;
  top: 417px;
`;

const RBCircleImg = styled.img`
  position: absolute;
  left: 1807px;
  top: 259px;
`;

const RUCircleImg = styled.img`
  position: absolute;
  left: 1790px;
  top: 193px;
`;

const Main = () => {
  return (
    <>
      <LineImg src="img/Line 1.png" />

      <LCircleImg src="img/LeftCircle.png" />
      <MainLogoImg src="img/MainLogo.png" />
      <RLineCircleImg src="img/RightLineCircle.png" />
      <RCircleImg src="img/RightCircle.png" />
      <MainText src="img/MainText.png" />
      <RBCircleImg src="img/RightBCircle.png" />
      <RUCircleImg src="img/RightUCircle.png" />
    </>
  );
};

export default Main;
