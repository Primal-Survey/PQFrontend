import React from "react";
import styled from "styled-components";

function OneFiveForm({ questionKey, surveyInfo, handleChange }) {
  return (
    <div>
      <Form action="#">
        <RadioButtonContainer>
          <StrongWord className="deep-purple-text ">
            <p>Strongly Disagree </p>
          </StrongWord>
          <RadioButton>
            <label style={{ transform: "scale(1.65)", padding: "10px" }}>
              <input
                onChange={handleChange}
                value={1}
                className="with-gap teal-text"
                name={questionKey}
                checked={surveyInfo[questionKey] === "1"}
                type="radio"
              />

              <StrongNumber className="deep-purple-text text-lighten-1">
                1
              </StrongNumber>
            </label>
          </RadioButton>
          <br />
          <RadioButton>
            <label style={{ transform: "scale(1.3)", padding: "10px" }}>
              <input
                onChange={handleChange}
                value={2}
                className="with-gap"
                name={questionKey}
                checked={surveyInfo[questionKey] === "2"}
                type="radio"
              />
              <StrongNumber className="deep-purple-text text-lighten-3">
                2
              </StrongNumber>
            </label>
          </RadioButton>

          <RadioButton>
            <label style={{ transform: "scale(1)", padding: "10px" }}>
              <input
                onChange={handleChange}
                value={3}
                className="with-gap"
                name={questionKey}
                checked={surveyInfo[questionKey] === "3"}
                type="radio"
              />
              <StrongNumber>3</StrongNumber>
            </label>
          </RadioButton>

          <RadioButton>
            <label style={{ transform: "scale(1.3)", padding: "10px" }}>
              <input
                onChange={handleChange}
                value={4}
                className="with-gap"
                name={questionKey}
                checked={surveyInfo[questionKey] === "4"}
                type="radio"
              />
              <StrongNumber className="teal-text text-darken-1">4</StrongNumber>
            </label>
          </RadioButton>

          <RadioButton>
            <label style={{ transform: "scale(1.65)", padding: "10px" }}>
              <input
                onChange={handleChange}
                value={5}
                className="with-gap"
                name={questionKey}
                checked={surveyInfo[questionKey] === "5"}
                type="radio"
              />
              <StrongNumber className="teal-text text-darken-2">5</StrongNumber>
            </label>
          </RadioButton>
          <StrongWord className="teal-text text-darken-3">
            <p>Strongly Agree</p>
          </StrongWord>
        </RadioButtonContainer>
      </Form>
    </div>
  );
}
const Form = styled.form`
  max-width: 100vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  /* border: 1px solid black; */
`;
const RadioButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-width: 50vw;
  /* border: 1px solid blue; */
`;

const RadioButton = styled.div`
  /* border: 1px solid red; */
  display: flex;
  justify-content: center;
  align-items: center;
`;

// const Input = styled.input`
//   color: red;
//   font-size: 5em;
//   /* border: 1px solid blue !important;
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   margin: 0em 1em; */
// `;

const StrongWord = styled.span`
  font-weight: 700;
  color: black;
  margin: 0em 1em;
  /* border: 1px solid purple; */
`;

const StrongNumber = styled.span`
  font-weight: 700;
  color: black;
  margin: 0em 1em;

  /* border: 1px solid purple; */
`;

const Label = styled.label`
  /* font-size: 1em !important; */
  font-weight: 900;
  text-decoration-color: blue;
`;
export default OneFiveForm;
