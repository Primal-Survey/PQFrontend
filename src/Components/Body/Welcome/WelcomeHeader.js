import React from "react";
import Fade from "react-reveal/Fade";
import styled from "styled-components";

const WelcomeHeader = () => {
  return (
    <Fade>
      <Section className="row">
        <h3>HOW PRIMITIVE ARE YOU?</h3>
      </Section>
      <Section className="row">
        <h5>
          Everyone has a "<i>Civilized</i>" side, but have you ever wondered
          about your "<i>Primitive</i>" side?
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
  max-width: 100%;
`;

export default WelcomeHeader;
