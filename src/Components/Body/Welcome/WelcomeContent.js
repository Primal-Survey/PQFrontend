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
          </P>
          <StartButton />
        </Section>

        <BackgroundLayer></BackgroundLayer>

        <Section>
          <H2>Why Primal?</H2>

          <CenteredText>
            Research Shows that, when we use our strengths, we're happier, more
            engaged and more likely to achieve our goals. This doesn't just
            benefit you, but also the people, groups, teams, and organizations
            you work with. When each person knows their strengths and makes use
            of them, group and team relationships are stronger and people
            achieve better results.{" "}
          </CenteredText>

          <StatSection>
            <div className="row">
              <div>
                <StatContainer className="col s12 m6 l3">
                  <Div>
                    <Number>2.5x</Number>
                  </Div>
                  <Div>
                    <CenteredP>
                      <i className="material-icons ">remove</i>
                    </CenteredP>
                  </Div>
                  <Div>
                    <CenteredP>
                      Those with a “high Primal Quotient” are more likely to
                      start an entrepreneurial venture
                    </CenteredP>
                  </Div>
                </StatContainer>

                <StatContainer className="col s12 m6 l3">
                  <Div>
                    <Number>3x</Number>
                  </Div>
                  <Div>
                    <CenteredP>
                      <i className="material-icons ">remove</i>
                    </CenteredP>
                  </Div>
                  <Div>
                    <CenteredP>
                      Those with a high PQ report greater success in their
                      entrepreneurial ventures
                    </CenteredP>
                  </Div>
                </StatContainer>

                <StatContainer className="col s12 m6 l3">
                  <Div>
                    <Number>67%</Number>
                  </Div>
                  <Div>
                    <CenteredP>
                      <i className="material-icons ">remove</i>
                    </CenteredP>
                  </Div>
                  <Div>
                    <CenteredP>
                      People who say they are sometimes, very often, or always
                      burned out at work.
                    </CenteredP>
                  </Div>
                </StatContainer>

                <StatContainer className="col s12 m6 l3">
                  <Div>
                    <Number>13%</Number>
                  </Div>
                  <Div>
                    <CenteredP>
                      <i className="material-icons ">remove</i>
                    </CenteredP>
                  </Div>
                  <Div>
                    {" "}
                    <CenteredP>
                      People who describe themselves as “actively disengaged”
                      with “miserable work experiences”
                    </CenteredP>
                  </Div>
                </StatContainer>
              </div>
            </div>
            <SecondButton />
          </StatSection>

          <P>
            ** "High PQ" is defined as those in the top 75% and "Low PQ" is
            defined as those who are less than 25%.
          </P>
        </Section>

        <BackgroundLayer></BackgroundLayer>

        <Section>
          <H2>What Primitive Types are there?</H2>
          <PrimitiveTypesContainer />
        </Section>
      </Section>
    </Fade>
  );
};

const P = styled.p`
  text-align: justify;
  margin-bottom: 10em;
  /* border: 1px solid red; */
`;

const H2 = styled.h2`
  font-size: 5rem;
  color: black;
  margin: 1em 0em;
`;

const Section = styled.section`
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  align-items: center;
  margin: auto;
  max-width: 80%;
  /* border: 1px solid orange; */
`;

const Number = styled.p`
  font-size: 5em;
  font-weight: 100;
  /* border: 1px solid red; */
  margin: 0;
`;
const CenteredP = styled.p`
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  /* border: 1px solid black; */
  margin: 0;
  height: 100%;
`;
const Div = styled.div`
  margin: 1em;
  text-align: center;
  /* border: 1px solid black; */
`;
const CenteredText = styled.p`
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  /* border: 1px solid pink; */
  /* margin: 5em; */
  min-height: 5em;
  width: 100%;
`;
const StatSection = styled.div`
  /* display: flex;
  justify-content: space-evenly;
  flex-direction: wrap;
  align-items: center;
  width: 100%; */
  min-height: 500px;
  /* border: 1px solid blue; */
`;
const StatContainer = styled.div`
  display: flex;
  justify-content: stretch;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 400px;
  /* border: 1px solid red; */
`;

const BackgroundLayer = styled.div`
  border-bottom: 2px lightgray solid;
  width: 100%;
  margin: auto;
`;
export default WelcomeContent;
