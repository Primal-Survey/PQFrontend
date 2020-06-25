import React from "react";
import NavBar from "./NavBar";
import styled from "styled-components";

function Header() {
  return (
    <Section className="page-footer black">
      <div className="container">
        <NavBar />
        <h1 className="teal-text">The Primitive Book Quiz</h1>
      </div>
    </Section>
  );
}
const Section = styled.header`
  /* padding-bottom: 25px; */
  min-height: 25vh;
`;

export default Header;
