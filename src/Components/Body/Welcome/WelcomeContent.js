import React from "react";
import Fade from "react-reveal/Fade";
import styled from "styled-components";
import { Collapsible, CollapsibleItem, Icon } from "react-materialize";
import "../../../App.css";
import StartButton from "./StartButton";
import SecondButton from "./SecondButton";
import HeaderBanner from "../../../Assets/Images/HeaderBanner.jpg";
import PrimitiveTypesContainer from "./PrimitiveTypesContainer";

const WelcomeContent = () => {
  //   const [largeDataSet, setLargeDataSet] = useState({});

  //   useEffect(() => {
  //     pullAndCompare();
  //     // averageTheResults()
  //   }, []);

  //   const pullAndCompare = () => {
  //     axios.get(`https://pq-backend.herokuapp.com/api/results`).then((res) => {
  //       setLargeDataSet(res.data);
  //     });
  //   };

  //   const all = Object.values(largeDataSet);

  //this axios call for some reason breaks the dropdowns. no matter where it is placed in app.

  return (
    <Fade>
      <Section>
        <Section>
          <P>
            The <strong>“ROAMING SURVEY”</strong> is a 21-question
            self-assessment created to discover your Primal Quotient (PQ). Your
            PQ is an overall score that tells you how likely you are to follow
            your innate, instinctive, and intuitive side in your professional
            life. <br />
            <br />
            This is not corporate BS or business jargon. It is also not meant to
            be psychology. This survey gets to the heart of the matter for those
            eager to jump ahead of the pack in an unusually challenging economic
            landscape. This survey is based on a study created by a St. Joseph’s
            University Professor of Management in conjunction with a methodology
            developed by Marco Greenberg in his new book, <i>Primitive</i>:
            Tapping the Primal Drive that Powers the World’s Most Successful
            People.
            <br />
            <br />
            <br />
            <br />
          </P>
          <StartButton />
        </Section>

        <BackgroundLayer></BackgroundLayer>

        <Collapsible accordion className={"Accordian"}>
          <CollapsibleItem
            expanded={false}
            header={
              <h5 className="teal-text" style={{ margin: "auto" }}>
                Why Primal?
              </h5>
            }
            node="div"
          >
            <Section>
              <P>Research Shows:</P>
              <P>
                2.5x = Those with a “high Primitive Quotient” are more likely to
                start an entrepreneurial venture
              </P>
              <P>
                3x = Those with a high PQ report greater success in their
                entrepreneurial ventures
              </P>
              <P>
                67% = people who say they are sometimes, very often, or always
                burned out at work<sup>2</sup> (cite to Gallup)
              </P>
              <P>
                13% = people who describe themselves as “actively disengaged”
                with “miserable work experiences”
              </P>
              <SecondButton />
              <p>
                ** "High PQ" is defined as those in the top 75% and "Low PQ" is
                defined as those who are less than 25%.
              </p>
            </Section>
          </CollapsibleItem>
          <CollapsibleItem
            expanded={false}
            header={
              <h5 className="teal-text" style={{ margin: "auto" }}>
                What Primitive Types are there?
              </h5>
            }
            node="div"
          >
            <Section>
              <PrimitiveTypesContainer />
            </Section>
          </CollapsibleItem>
        </Collapsible>
        <Cite>
          <sup>1</sup> Need Cite info for the reference here
        </Cite>
        <Cite>
          <sup>2</sup> Need Cite info for the reference here
        </Cite>
      </Section>
    </Fade>
  );
};

const P = styled.p`
  text-align: justify;
`;
const Cite = styled.p`
  /* display: flex; */
  font-weight: 900;
  font-size: 0.65em;
`;

const Section = styled.section`
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  align-items: center;
  margin: auto;
  max-width: 80%;
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
  margin: 10px 0;
  width: 100vw;
`;

export default WelcomeContent;
