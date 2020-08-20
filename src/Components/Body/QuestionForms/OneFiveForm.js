import React from "react";
import styled from "styled-components";

function OneFiveForm({ questionKey, surveyInfo, handleChange }) {
  return (
    <div>
      <Form action="#">
        <RadioButtonContainer>
          <Strong>
            <p className="red-text text-darken-3">Disagree </p>
          </Strong>
          <RadioButton>
            <Label>
              <input
                onChange={handleChange}
                value={1}
                className="with-gap teal-text"
                name={questionKey}
                checked={surveyInfo[questionKey] === "1"}
                type="radio"
              />

              <Strong className="red-text text-darken-3">1</Strong>
            </Label>
          </RadioButton>
          <br />
          <RadioButton>
            <label>
              <input
                onChange={handleChange}
                value={2}
                className="with-gap"
                name={questionKey}
                checked={surveyInfo[questionKey] === "2"}
                type="radio"
              />
              <Strong className="red-text text-lighten-2 ">2</Strong>
            </label>
          </RadioButton>

          <RadioButton>
            <label>
              <input
                onChange={handleChange}
                value={3}
                className="with-gap"
                name={questionKey}
                checked={surveyInfo[questionKey] === "3"}
                type="radio"
              />
              <Strong>3</Strong>
            </label>
          </RadioButton>

          <RadioButton>
            <label>
              <input
                onChange={handleChange}
                value={4}
                className="with-gap"
                name={questionKey}
                checked={surveyInfo[questionKey] === "4"}
                type="radio"
              />
              <Strong className="teal-text text-lighten-2">4</Strong>
            </label>
          </RadioButton>

          <RadioButton>
            <label>
              <input
                onChange={handleChange}
                value={5}
                className="with-gap"
                name={questionKey}
                checked={surveyInfo[questionKey] === "5"}
                type="radio"
              />
              <Strong className="teal-text text-darken-2">5</Strong>
            </label>
          </RadioButton>
          <Strong>
            <p className="teal-text text-darken-2"> Agree</p>
          </Strong>
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
  padding: 0.5em;
`;
const Strong = styled.span`
  font-weight: 700;
  color: black;
  /* border: 1px solid purple; */
`;

const Label = styled.label`
  /* font-size: 1em !important; */
  font-weight: 900;
  text-decoration-color: blue;
`;
export default OneFiveForm;
