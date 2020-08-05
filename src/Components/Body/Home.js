////////////////////////////////////////NOT IN USE CURRENTLY PER CLIENT///////////////////////////////////////////////////////

import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

import MetaDataForm from "./QuestionForms/MetaDataForm";

function Home(surveyInfo) {
  return (
    <div>
      {/* {console.log(surveyInfo)} */}
      <div>
        <MetaDataForm surveyInfo={surveyInfo} />
      </div>

      <Link to="/questionpage1/">
        <Button className="waves-effect waves-light btn">
          <i className="material-icons right">send</i>Next page
        </Button>
      </Link>
    </div>
  );
}
const Button = styled.footer`
  margin-bottom: 20px;
`;
export default Home;
