import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const SecondButton = () => {
  return (
    <Link to="/questionpage1/">
      <Button className="waves-effect waves-light btn">
        <i className="material-icons right">send</i>FIND YOUR PRIMITIVE QUOTIENT
        NOW
      </Button>
    </Link>
  );
};
const Button = styled.button`
  margin: 3em 0em;
`;
export default SecondButton;
