import React, { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import Fade from "react-reveal/Fade";

import axios from "axios";
const BACKEND = process.env.REACT_APP_BACKEND;

// script for
//
// EMAIL ME THE RESULTS
//

const EmailMeForm = (props) => {
  const { TextBlock, range } = props;
  TextBlock.rangeInfo = range;
  //   console.log(10, TextBlock, range);
  const [emailAddy, setEmail] = useState({
    email: "",
  });
  const [emailerr, setEmailerr] = useState("");

  //   const BACKEND = process.env.BACKEND;

  // console.log(10, emailAddy);
  const doChange = (e) => {
    setEmail({ [e.target.name]: e.target.value });
  };

  const doSubmit = (e, emailAddy, TextBlock) => {
    e.preventDefault();
    if (/^[a-zA-Z0-9]+@(?:[a-zA-Z0-9]+\.)+[A-Za-z]+$/.test(emailAddy.email)) {
      TextBlock[0].targetEmail = emailAddy.email;
      axios
        .post(`${BACKEND}/api/results/mailer/`, TextBlock)
        .then((sent) => {
          if ((sent.data[0].statusCode = 202)) {
            setEmailerr(`Email sent to ${emailAddy.email}!`);
          }
          setEmail({ email: "" });
        })
        .catch((err) => {
          setEmailerr(`There was an error sending the email. \n${err}`);
        });
    } else {
      setEmailerr("Please enter a valid email address.");
      setEmail({ email: "" });
    }
  };
  const style = {
    color: "#000000",
    ":focus": {
      color: "#0f0",
    },
  };

  return (
    <>
      <div
        style={{
          minWidth: "99vw",
          height: "auto",
          //   border: "1px solid black",
        }}
      >
        <div className="row">
          <form
            id="results"
            onSubmit={(e) => {
              //   console.log(54, TextBlock);
              doSubmit(e, emailAddy, TextBlock);
            }}
            className="col s12"
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Emails
              className="row"
            >
              <EmailErr>{emailerr}</EmailErr>
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
                  name="email"
                  id="icon_prefix"
                  type="text"
                  className="validate"
                  onChange={doChange}
                  value={emailAddy.email}
                  style={style}
                />
                <label htmlFor="icon_prefix">Your Email Address</label>
              </div>
            </Emails>
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
              <Button className="waves-effect waves-light btn">
                <i className="material-icons left">autorenew</i>
                Back to start
              </Button>
            </Link>
            <Link to="/results/">
              <Button
                className="waves-effect waves-light btn"
                onClick={(e) => {
                  //   console.log(54, TextBlock);
                  doSubmit(e, emailAddy, TextBlock);
                }}
              >
                <i className="material-icons right">send</i>
                Email me my results.
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

const Button = styled.footer`
  margin-bottom: 20px;
  min-width: 275px;
`;

const Emails = styled.div`
	width: 50%;
	@media (max-width: 782px) {
		width: 75%;
	}
`;

const EmailErr = styled.div`
  min-height: 2.5rem;
  margin: 1rem;
  font-weight: bolder;
`;

export default EmailMeForm;
