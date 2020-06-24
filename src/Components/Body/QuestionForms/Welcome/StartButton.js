import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const StartButton = () => {
  return (
    <Link to="/startPage/">
      <Button className="waves-effect waves-light btn">
        <i class="material-icons right">send</i>Begin Survey
      </Button>
    </Link>
  );
};
const Button = styled.footer`
  margin-bottom: 20px;
`;
export default StartButton;
