import React from "react";

function OneFiveForm({questionKey, surveyInfo, handleChange}) {
  
  console.log(surveyInfo)
  return (
    <form action="#">
      <div>
        <p>
          <label>
            <input
              onChange={handleChange}
              value={1}
              class="with-gap"
              name={questionKey}

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
              class="with-gap"
              name={questionKey}
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
              class="with-gap"
              name={questionKey}
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
              class="with-gap"
              name={questionKey}
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
              class="with-gap"
              name={questionKey}
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
