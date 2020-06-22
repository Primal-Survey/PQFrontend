import React from "react";
import MetaDataForm from "./QuestionForms/MetaDataForm";

function Home(keys, ...rest) {
  return (
    <div>
      <div>Home Box!</div>
      <MetaDataForm questionKey={keys[0]} {...rest} />
      {console.log({ ...rest })}
    </div>
  );
}

export default Home;
