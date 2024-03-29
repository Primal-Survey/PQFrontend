import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import axios from "axios";

const SubmitButton = (surveyInfo) => {
  const HandleSubmit = () => {
    axios
      .post(
        `https://pq-backend-a52333f1cc00.herokuapp.com/api/results`,
        surveyInfo.surveyInfo
      )
      .then((res) => {
        console.log(res.data);
      });
  };

  return (
    <Link to="/results/">
      <Button onClick={HandleSubmit} className="waves-effect waves-light btn">
        <i className="material-icons right ">send</i>See my results!
      </Button>
    </Link>
  );
};
const Button = styled.footer`
  margin-bottom: 0px;
  min-width: 175px;
`;

// make same size as the other buttons

export default SubmitButton;
