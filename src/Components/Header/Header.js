import React from "react";
import styled from "styled-components";

function Header() {
  return (
    <Section className="page-footer black">
      <div className="container">
        <h1>The Primitive Book Quiz</h1>
      </div>
    </Section>
  );
}
const Section = styled.header`
  padding-bottom: 50px;
`;

export default Header;
