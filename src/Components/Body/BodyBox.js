import React from "react";
import { Route, Link } from "react-router-dom";
import Home from "./Home"
import QuestionPage1 from "./QuestionPage1";
import QuestionPage2 from "./QuestionPage2";
import QuestionPage3 from "./QuestionPage3";
import QuestionPage4 from "./QuestionPage4";


function BodyBox() {
  return (
    <div>
        <div>
          <Link to="/">Home</Link>
          <Link to="/questionpage1/">question page1</Link>
          <Link to="/questionpage2/">question page2</Link>
          <Link to="/questionpage3/">question page3</Link>
          <Link to="/questionpage4/">question page4</Link>
        </div>

        <Route path="/" exact component={Home} />
        <Route path="/questionpage1/" component={QuestionPage1} />
        <Route path="/questionpage2/" component={QuestionPage2} />
        <Route path="/questionpage3/" component={QuestionPage3} />
        <Route path="/questionpage4/" component={QuestionPage4} />
      </div>
  );
}

export default BodyBox;
