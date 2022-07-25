import React from "react";
import styled from "styled-components";

const FooterImg = styled.img`
  position: absolute;
  left: 859px;
  top: 2409px;

  display: flex;
  align-items: center;
`;

const Footer = () => {
  return (
    <>
      <FooterImg src="img/Footer.png" />
    </>
  );
};

export default Footer;
