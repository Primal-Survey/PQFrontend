import React from "react";
import { useContext } from "react";
import QuestionsContext from "../Contexts/QuestionContext";

function OneFiveForm() {
  const Questions = useContext(QuestionsContext);

  return (
    <form action="#">
      <p>
        <label>
          <input class="with-gap" name="group1" type="radio" />
          <span>1</span>
        </label>
      </p>

      <p>
        <label>
          <input class="with-gap" name="group1" type="radio" />
          <span>2</span>
        </label>
      </p>
      <p>
        <label>
          <input class="with-gap" name="group1" type="radio" />
          <span>3</span>
        </label>
      </p>
      <p>
        <label>
          <input class="with-gap" name="group1" type="radio" />
          <span>4</span>
        </label>
      </p>
      <p>
        <label>
          <input class="with-gap" name="group1" type="radio" />
          <span>5</span>
        </label>
      </p>
    </form>
  );
}

export default OneFiveForm;
