import React from "react";
import Fade from "react-reveal/Fade";
import styled from "styled-components";

const WelcomeHeader = () => {
  return (
    <Fade>
      <Section className="row">
        <H3>HOW PRIMAL ARE YOU?</H3>
      </Section>
      <Section className="row">
        <H5>
          Everyone has a <i>Civilized </i> side, but have you ever wondered
          about your <i>Primal </i> side?
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

const H3 = styled.h3`
  color: black;
`;
const H5 = styled.h5`
  color: black;
`;

export default WelcomeHeader;
