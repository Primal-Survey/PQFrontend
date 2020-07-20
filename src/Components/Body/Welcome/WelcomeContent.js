import React from "react";
import Fade from "react-reveal/Fade";
import styled from "styled-components";

const WelcomeContent = () => {
  return (
    <Fade>
      <Section>
        <Section>
          <P>
            The <strong>“ROAMING” SURVEY</strong>is a 21-question
            self-assessment designed to discover your Primitive Quotient (PQ).
            Similar to your IQ and EQ, your PQ tells you what innate,
            instinctive, and intuitive qualities you gravitate most towards.
            Based on your responses, find out whether you are more{" "}
            <strong>R</strong>elentless, <strong>O</strong>ppositional,{" "}
            <strong>A</strong>gnostic, <strong>M</strong>essianic,{" "}
            <strong>I</strong>nsecure, <strong>N</strong>uts, or{" "}
            <strong>G</strong>allant. Compare your score to everyone who has
            taken the assessment and email a detailed analysis to yourself upon
            completion. <br />
            <br />
            This is not corporate BS or business jargon. It is also not meant to
            be psychology. This survey gets to the heart of the matter for those
            eager to jump ahead of the pack in an unusually challenging economic
            landscape. The ROAMING SURVEY is based on a study<sup>1</sup>{" "}
            created by a St. Joseph’s University Professor of Management in
            conjunction with a methodology developed by Marco Greenberg in his
            new book, <i>Primitive</i>: Tapping the Primal Drive that Powers the
            World’s Most Successful People.
            <br />
            <br />
            Research indicates that you’ll be more fulfilled and make more money
            the more you are able to tap into your Primitive side. As it stands,
            67% of people feel burnt out one way or another. This survey is
            meant to help stuck individuals feel empowered and liberated. It
            provides you with a lucid roadmap on how to start, reinvent, or
            recalibrate their careers.
            <br />
            <br />
            Start by clicking <strong>“Begin Survey”</strong> below. And don’t
            forget, this is a spectrum. It is the balance between{" "}
            <i>Civilized</i> and <i>Primitive</i>, the push and the pull. The
            world cannot blossom without Civilized people! Civilized folks are
            key. You need both. But with the world changing right under our
            feet, it is now more important than ever to tap into our Primitive
            sides
            <br />
            <br />
            <br />
            <Cite>
              <sup>1</sup> Need Cite info for the reference here
            </Cite>
          </P>
        </Section>
      </Section>
    </Fade>
  );
};

const P = styled.p`
  text-align: justify;
`;
const Cite = styled.p`
  font-weight: 900;
  font-size: 0.75em;
`;

const Section = styled.section`
  display: flex;
  justify-content: space;
  align-items: center;
  margin: auto;
  max-width: 80%;
`;

export default WelcomeContent;
