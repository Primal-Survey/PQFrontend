import React, { useState } from "react";
import { Link, Route, Switch } from "react-router-dom";
import initialState from "../Contexts/SubmitInfo";
import styled from "styled-components";

import Home from "./Home";
import Welcome from "./Welcome/Welcome";
import QuestionPage1 from "./QuestionPage";
import Results from "./Results/Results";

function BodyBox() {
  const [surveyInfo, setSurveyInfo] = useState(initialState);

  const handleChange = ({ target: { name, value } }) =>
    setSurveyInfo({ ...surveyInfo, [name]: value });

  return (
    <Main>
      <Switch>
        <Route exact path="/" component={Welcome} />
        {/* <Route
          path="/startPage/"
          render={(props) => (
            <Home
              {...props}
              surveyInfo={surveyInfo}
              handleChange={handleChange}
            />
          )}
        /> */}
        {/* metadata page is disabled per client */}

        <Route
          path="/questionpage1/"
          render={(props) => (
            <QuestionPage1
              {...props}
              prev={0}
              current={1}
              next={2}
              surveyInfo={surveyInfo}
              handleChange={handleChange}
              keys={["relentless1", "oppositional1", "agnostic1", "messianic1"]}
              questions={[
                "Relentless1",
                "Oppositional1",
                "Agnostic1",
                "Messianic1",
              ]}
            />
          )}
        />
        <Route
          path="/questionpage2/"
          render={(props) => (
            <QuestionPage1
              {...props}
              prev={1}
              current={2}
              next={3}
              surveyInfo={surveyInfo}
              handleChange={handleChange}
              keys={["gallant1", "insecure1", "nuts1", "relentless2"]}
              questions={["Gallant1", "Insecure1", "Nuts1", "Relentless2"]}
            />
          )}
        />
        <Route
          path="/questionpage3/"
          render={(props) => (
            <QuestionPage1
              {...props}
              prev={2}
              current={3}
              next={4}
              surveyInfo={surveyInfo}
              handleChange={handleChange}
              keys={["agnostic2", "oppositional2", "messianic2", "gallant2"]}
              questions={[
                "Agnostic2",
                "Oppositional2",
                "Messianic2",
                "Gallant2",
              ]}
            />
          )}
        />
        <Route
          path="/questionpage4/"
          render={(props) => (
            <QuestionPage1
              {...props}
              prev={3}
              current={4}
              next={5}
              surveyInfo={surveyInfo}
              handleChange={handleChange}
              keys={["nuts2", "insecure2", "relentless3", "oppositional3"]}
              questions={["Nuts2", "Insecure2", "Relentless3", "Oppositional3"]}
            />
          )}
        />
        <Route
          path="/questionpage5/"
          render={(props) => (
            <QuestionPage1
              {...props}
              prev={4}
              current={5}
              next={6}
              surveyInfo={surveyInfo}
              handleChange={handleChange}
              keys={["agnostic3", "messianic3", "gallant3", "insecure3"]}
              questions={["Agnostic3", "Messianic3", "Gallant3", "Insecure3"]}
            />
          )}
        />
        <Route
          path="/questionpage6/"
          render={(props) => (
            <QuestionPage1
              {...props}
              prev={5}
              current={6}
              next={7}
              surveyInfo={surveyInfo}
              handleChange={handleChange}
              keys={["nuts3", "relentless4", "oppositional4", "agnostic4"]}
              questions={["Nuts3", "Relentless4", "Oppositional4", "Agnostic4"]}
            />
          )}
        />
        <Route
          path="/questionpage7/"
          render={(props) => (
            <QuestionPage1
              {...props}
              prev={6}
              current={7}
              next={null}
              surveyInfo={surveyInfo}
              handleChange={handleChange}
              keys={["messianic4", "gallant4", "insecure4", "Nuts4"]}
              questions={["Messianic4", "Gallant4", "Insecure4", "Nuts4"]}
            />
          )}
        />
        <Route
          path="/results"
          render={(props) => <Results {...props} surveyInfo={surveyInfo} />}
        />
      </Switch>
    </Main>
  );
}
const Main = styled.main`
  display: flex;
  min-height: 60vh;
  flex-direction: column;
  justify-content: center;
`;
export default BodyBox;
