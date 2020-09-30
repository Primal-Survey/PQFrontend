import React from "react";
import Fade from "react-reveal/Fade";
import styled from "styled-components";

const WelcomeHeader = () => {
  return (
    <Fade>
      <Section className="row">
        <H2>HOW PRIMITIVE ARE YOU?</H2>
      </Section>
      <Section className="row">
        <H5>
          Everyone has a{" "}
          <WhiteSpace>
            <i>Civilized </i>side
          </WhiteSpace>
          , but have you ever wondered about your{" "}
          <WhiteSpace>
            <i>Primitive </i> side?
          </WhiteSpace>
        </H5>
      </Section>
    </Fade>
  );
};
const Section = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: auto;
  max-width: 100%;
`;

const H2 = styled.h2`
  color: black;
  font-size: 5rem;
`;
const H5 = styled.h5`
  color: black;
`;
const WhiteSpace = styled.span`
  word-spacing: 5px;
`;
export default WelcomeHeader;
