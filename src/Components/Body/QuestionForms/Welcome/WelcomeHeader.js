import React from "react";
import Fade from "react-reveal/Fade";
import styled from "styled-components";

const WelcomeHeader = () => {
  return (
    <Fade>
      <Section className="row">
        <h3>Find your Primal Quotient</h3>
      </Section>
      <Section className="row">
        <h5>
          Everyone has a Civilized side, but have you ever wondered how Primal
          you are?
        </h5>
      </Section>
    </Fade>
  );
};
const Section = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: auto;
  max-width: 90%;
`;
export default WelcomeHeader;
