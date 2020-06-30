import React from "react";
import NavBar from "./NavBar";
import styled from "styled-components";
import HeaderBanner from "./../../Assets/Images/HeaderBanner.jpg";

function Header() {
  return (
    <BackgroundLayer>
      <Section className="">
        <div className="container">
          <NavBar />
          <h1 className="#87cbce-text">The Primitive Book Quiz</h1>
        </div>
      </Section>
    </BackgroundLayer>
  );
}
const Section = styled.header`
  /* padding-bottom: 25px; */
  min-height: 25vh;
`;

const BackgroundLayer = styled.div`
  text-align: center;
  background: url(${HeaderBanner}) no-repeat center center fixed;
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: cover;
  color: white;
  min-height: 20vh;
  margin: auto;
`;

export default Header;
