import React from "react";
import './oneFiveForm.css';
function OneFiveForm({questionKey, surveyInfo, handleChange}) {
  return (
    <form action="#">
      <div className="radio-buttons">
        <p>
          <label>
            <input
              onChange={handleChange}
              value={1}
              className="with-gap"
              name={questionKey}
              checked={surveyInfo[questionKey] === "1"}
              type="radio"
            />
            <span>1</span>
          </label>
        </p>

        <p>
          <label>
            <input
              onChange={handleChange}
              value={2}
              className="with-gap"
              name={questionKey}
              checked={surveyInfo[questionKey] === "2"}
              type="radio"
            />
            <span>2</span>
          </label>
        </p>
        <p>
          <label>
            <input
              onChange={handleChange}
              value={3}
              className="with-gap"
              name={questionKey}
              checked={surveyInfo[questionKey] === "3"}
              type="radio"
            />
            <span>3</span>
          </label>
        </p>
        <p>
          <label>
            <input
              onChange={handleChange}
              value={4}
              className="with-gap"
              name={questionKey}
              checked={surveyInfo[questionKey] === "4"}
              type="radio"
            />
            <span>4</span>
          </label>
        </p>
        <p>
          <label>
            <input
              onChange={handleChange}
              value={5}
              className="with-gap"
              name={questionKey}
              checked={surveyInfo[questionKey] === "5"}
              type="radio"
            />
            <span>5</span>
          </label>
        </p>
      </div>
    </form>
  );
}

export default OneFiveForm;
