import React, { useState } from "react";
import { Link, Route } from "react-router-dom";
import initialState from "../Contexts/SubmitInfo";
import Home from "./Home";
import QuestionPage1 from "./QuestionPage1";
import QuestionPage2 from "./QuestionPage2";
import QuestionPage3 from "./QuestionPage3";
import QuestionPage4 from "./QuestionPage4";
import QuestionPage5 from "./QuestionPage5";
import QuestionPage6 from "./QuestionPage6";
import QuestionPage7 from "./QuestionPage7";

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
      <Route path="/questionpage1/" component={QuestionPage1} />
      <Route path="/questionpage2/" component={QuestionPage2} />
      <Route path="/questionpage3/" component={QuestionPage3} />
      <Route path="/questionpage4/" component={QuestionPage4} />
      <Route path="/questionpage5/" component={QuestionPage5} />
      <Route path="/questionpage6/" component={QuestionPage6} />
      <Route path="/questionpage7/" component={QuestionPage7} />
    </div>
  );
}

export default BodyBox;
