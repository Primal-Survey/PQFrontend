import React from "react";
import styled from "styled-components";

function Footer() {
  return (
    <Foot
      className="page-footer black"
      style={{
        textAlign: "center",
        padding: "20px",
        left: "0",
        bottom: "0",
        width: "100%",
      }}
    >
      <div className="container">
        <div className="row">
          <div>
            <h5 className="white-text">Footer Content</h5>
            <p className="grey-text text-lighten-4">Footer Content</p>
          </div>
        </div>
      </div>
      <div className="footer-copyright">
        <div className="container">
          © 2020 Marco Greenberg. All Rights Reserved.{" "}
        </div>
      </div>
    </Foot>
  );
}
const Foot = styled.footer`
  display: flex;
  min-height: 50vh;
  flex-direction: column;
`;
export default Footer;
