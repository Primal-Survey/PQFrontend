import React from "react";
import styled from "styled-components";

function OneFiveForm({ questionKey, surveyInfo, handleChange }) {
  return (
    <div>
      <Form action="#">
        <RadioButtonContainer>
          <RadioButton>
            <label>
              <input
                onChange={handleChange}
                value={1}
                className="with-gap"
                name={questionKey}
                checked={surveyInfo[questionKey] === "1"}
                type="radio"
              />
              <Strong>1</Strong>
            </label>
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
              <Strong>2</Strong>
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
              <Strong>4</Strong>
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
              <Strong>5</Strong>
            </label>
          </RadioButton>
        </RadioButtonContainer>{" "}
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
export default OneFiveForm;
