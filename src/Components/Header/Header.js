import React from "react";
import NavBar from "./NavBar";
import styled from "styled-components";
import HeaderBanner from "./../../Assets/Images/HeaderBanner.jpg";

function Header() {
  return (
    <BackgroundLayer>
      <Section className="">
        <div className="container">
          {/* <h3>The Roaming Survey</h3> */}
          <NavBar />
        </div>
      </Section>
    </BackgroundLayer>
  );
}
const Section = styled.header`
  /* padding-bottom: 25px; */
  height: 10vh;
  display: flex;
`;

const BackgroundLayer = styled.div`
  text-align: center;
  background: url(${HeaderBanner}) no-repeat center center fixed;
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: cover;
  color: white;
  min-height: 10vh;
  margin: auto;
`;

export default Header;
