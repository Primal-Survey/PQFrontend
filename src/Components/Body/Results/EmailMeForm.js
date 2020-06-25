import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const EmailMeForm = () => {
  return (
    <Link to="/results/">
      <Button className="waves-effect waves-light btn">
        <i class="material-icons right">send</i>Email me my results.
      </Button>
    </Link>
  );
};
const Button = styled.footer`
  margin-bottom: 20px;
`;
export default EmailMeForm;
