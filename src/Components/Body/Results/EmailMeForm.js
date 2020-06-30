import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import Fade from "react-reveal/Fade";

const EmailMeForm = () => {
  return (
    <Fade>
      <div
        style={{
          minWidth: "99vw",
          height: "auto",
          //   border: "1px solid black",
        }}
      >
        <div className="row">
          <form
            className="col s12"
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <div
              className="row"
              style={{
                width: "50%",
              }}
            >
              <div
                className="input-field col s6 "
                style={{
                  width: "100%",
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                <i
                  className="material-icons prefix teal-text"
                  style={{ fontSize: "3em", textColor: "teal" }}
                >
                  email
                </i>
                <input
                  id="icon_prefix"
                  type="text"
                  className="validate"
                ></input>
                <label htmlFor="icon_prefix">Email Address</label>
              </div>
            </div>
          </form>{" "}
          <div
            style={{
              minWidth: "99vw",
              height: "auto",
              //   border: "1px solid red",
            }}
          >
            <Link
              to="/"
              style={{
                margin: "1em",
              }}
            >
              <Button classNameName="waves-effect waves-light btn">
                <i className="material-icons left">autorenew</i>
                Back to start
              </Button>
            </Link>
            <Link to="/results/">
              <Button classNameName="waves-effect waves-light btn">
                <i className="material-icons right">send</i>
                Email me my results.
              </Button>
            </Link>
            <p>**Personal information is not collected**</p>
          </div>
        </div>
      </div>
    </Fade>
  );
};

const Button = styled.footer`
  margin-bottom: 20px;
  min-width: 275px;
`;

export default EmailMeForm;
