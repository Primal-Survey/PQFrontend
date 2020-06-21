import React, { useContext } from "react";
import { Link } from "react-router-dom";
import QuestionsContext from "../Contexts/QuestionContext";
import OneFiveForm1 from "./QuestionForms/OneFiveForm1";

function QuestionPage1({keys, ...rest}) {
  const Questions = useContext(QuestionsContext);


  return (
    <div>
      <div>
        {Questions.Relentless1.text}
        <OneFiveForm1 questionKey={keys[0]} {...rest} />
      </div>

      <div>
        {Questions.Oppositional1.text}
        <OneFiveForm1 questionKey={keys[1]} {...rest} />
      </div>

      <div>
        {Questions.Agnostic1.text}
        <OneFiveForm1 questionKey={keys[2]} {...rest}  />
      </div>
      <Link to="/questionpage2/">Question page 2</Link>
      {/* <Route path="/questionpage2/" component={QuestionPage2} /> */}
    </div>
  );
}

export default QuestionPage1;
