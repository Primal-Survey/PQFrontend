import React from "react";
import MetaDataForm from "./QuestionForms/MetaDataForm";

function Home( surveyInfo ) {
  return (
    <div>
      {console.log(surveyInfo)}
      <div>
        <MetaDataForm surveyInfo={surveyInfo}/>
      </div>
    </div>
  );
}

export default Home;
