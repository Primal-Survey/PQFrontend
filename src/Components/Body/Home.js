import React from "react";
import { Link } from "react-router-dom";
import MetaDataForm from "./QuestionForms/MetaDataForm";

function Home(surveyInfo) {
  return (
    <div>
      {/* {console.log(surveyInfo)} */}
      <div>
        <MetaDataForm surveyInfo={surveyInfo} />
      </div>
      <Link to="/questionpage1/">Question Page 1</Link>
    </div>
  );
}

export default Home;
