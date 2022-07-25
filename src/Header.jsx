import React from "react";
import styled from "styled-components";

const HeaderDiv = styled.div`
  position: absolute;
  width: 1790px;
  height: 61px;
  left: 65px;
  top: 35px;
`;

const LogoImg = styled.img`
  position: absolute;
  width: 124px;
  height: 28px;
  top: 41px;
`;

const HomeDiv = styled.div`
  position: absolute;
  width: 3.946%;
  height: 31px;
  left: 573px;
  top: 38px;

  font-family: "Pretendard";
  font-style: normal;
  font-weight: 600;
  font-size: 26px;
  line-height: 31px;
  display: flex;
  align-items: center;
  text-align: center;

  color: #181818;
`;

const AboutDiv = styled.div`
  position: absolute;
  width: 6.946%;
  height: 31px;
  left: 717px;
  top: 38px;

  font-family: "Pretendard";
  font-style: normal;
  font-weight: 600;
  font-size: 26px;
  line-height: 31px;
  display: flex;
  align-items: center;
  text-align: center;

  color: #181818;
`;

const BoardDiv = styled.div`
  position: absolute;
  width: 100px;
  height: 31px;
  left: 902px;
  top: 38px;

  font-family: "Pretendard";
  font-style: normal;
  font-weight: 800;
  font-size: 26px;
  line-height: 31px;
  display: flex;
  align-items: center;
  text-align: center;

  color: #3435ce;
`;

const LogDiv = styled.div`
  position: absolute;
  width: 120px;
  height: 36px;
  left: 1500px;
  top: 35px;

  font-family: "Pretendard";
  font-style: normal;
  font-weight: 600;
  font-size: 26px;
  line-height: 31px;
  display: flex;
  align-items: center;
  text-align: center;

  color: #181818;
`;

const RingImg = styled.img`
  position: absolute;
  width: 25px;
  height: 25px;
  left: 1576px;
  top: 41px;

  transform: matrix(-1, 0, 0, 1, 0, 0);
`;
const ProfileImg = styled.img`
  position: absolute;
  width: 31px;
  height: 31px;
  left: 1635px;
  top: 38px;
`;
const Header = () => {
  return (
    <>
      <HeaderDiv>
        <LogoImg src="img/logo.png" />

        <HomeDiv>Home</HomeDiv>
        <AboutDiv>About Us</AboutDiv>
        <BoardDiv>소통 공간</BoardDiv>

        <RingImg src="img/Ring.png" />
        <ProfileImg src="img/profile.png" />
      </HeaderDiv>
    </>
  );
};

export default Header;
