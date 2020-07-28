import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const StartButton = () => {
  return (
    <Link to="/questionpage1/">
      <Button className="waves-effect waves-light btn">
        <i className="material-icons right">send</i>Begin Survey
      </Button>
    </Link>
  );
};
const Button = styled.button`
  /* margin-bottom: 10em; */
`;
export default StartButton;
