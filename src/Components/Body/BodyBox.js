import React, { useState } from "react";
import { Link, Route } from "react-router-dom";
import initialState from "../Contexts/SubmitInfo";
import Home from "./Home";
import QuestionPage1 from "./QuestionPage1";

function BodyBox() {
  const [surveyInfo, setSurveyInfo] = useState(initialState);

  const handleChange = ({ target: { name, value } }) =>
    setSurveyInfo({ ...surveyInfo, [name]: value });

  return (
    <div>
      <div>
        <Link to="/">Home</Link>
        <Link to="/questionpage1/">question page1</Link>
        <Link to="/questionpage2/">question page2</Link>
        <Link to="/questionpage3/">question page3</Link>
        <Link to="/questionpage4/">question page4</Link>
        <Link to="/questionpage5/">question page5</Link>
        <Link to="/questionpage6/">question page6</Link>
        <Link to="/questionpage7/">question page7</Link>
      </div>

      <Route
        path="/"
        render={(props) => (
          <Home
            surveyInfo={surveyInfo}
            handleChange={handleChange}
            keys={[
              "region",
              "gender",
              "age",
              "income",
              "education",
              "industry",
              "workrole",
              "employment",
              "entrepreneur",
              "workSite",
              "coidReact",
            ]}
          />
        )}
      />
      <Route
        path="/questionpage1/"
        render={(props) => (
          <QuestionPage1
            {...props}
            prev={null}
            next={2}
            surveyInfo={surveyInfo}
            handleChange={handleChange}
            keys={["relentless1", "oppositional1", "agnostic1"]}
            questions={["Relentless1", "Oppositional1", "Agnostic1"]}
          />
        )}
      />
      <Route
        path="/questionpage2/"
        render={(props) => (
          <QuestionPage1
            {...props}
            prev={1}
            next={3}
            surveyInfo={surveyInfo}
            handleChange={handleChange}
            keys={["messianic1", "gallant1", "insecure1"]}
            questions={["Messianic1", "Gallant1", "Insecure1"]}
          />
        )}
      />
      <Route
        path="/questionpage3/"
        render={(props) => (
          <QuestionPage1
            {...props}
            prev={2}
            next={4}
            surveyInfo={surveyInfo}
            handleChange={handleChange}
            keys={["nuts1", "relentless2", "agnostic2"]}
            questions={["Nuts1", "Relentless2", "Agnostic2"]}
          />
        )}
      />
      <Route
        path="/questionpage4/"
        render={(props) => (
          <QuestionPage1
            {...props}
            prev={3}
            next={5}
            surveyInfo={surveyInfo}
            handleChange={handleChange}
            keys={["oppositional2", "messianic2", "gallant2"]}
            questions={["Oppositional2", "Messianic2", "Gallant2"]}
          />
        )}
      />
      <Route
        path="/questionpage5/"
        render={(props) => (
          <QuestionPage1
            {...props}
            prev={4}
            next={6}
            surveyInfo={surveyInfo}
            handleChange={handleChange}
            keys={["nuts2", "insecure2", "relentless3"]}
            questions={["Nuts2", "Insecure2", "Relentless3"]}
          />
        )}
      />
      <Route
        path="/questionpage6/"
        render={(props) => (
          <QuestionPage1
            {...props}
            prev={5}
            next={7}
            surveyInfo={surveyInfo}
            handleChange={handleChange}
            keys={["oppositional3", "agnostic3", "messianic3"]}
            questions={["Oppositional3", "Agnostic3", "Messianic3"]}
          />
        )}
      />
      <Route
        path="/questionpage7/"
        render={(props) => (
          <QuestionPage1
            {...props}
            prev={6}
            next={null}
            surveyInfo={surveyInfo}
            handleChange={handleChange}
            keys={["gallant3", "insecure3", "nuts3"]}
            questions={["Gallant3", "Insecure3", "Nuts3"]}
          />
        )}
      />
      <Route path="/results" render={() => <h1>Results</h1>} />
    </div>
  );
}

export default BodyBox;
