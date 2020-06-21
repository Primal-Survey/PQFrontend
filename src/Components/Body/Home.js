import React from "react";
import {useState} from "react";
import submitInfo from "../Contexts/SubmitInfo"



function Home() {
  const [submitState, setSubmitState] = useState(submitInfo)

  return (
    <div>
      <div>Home Box!</div>
    </div>
  );
}

export default Home;
