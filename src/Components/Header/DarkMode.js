import React, { useState } from "react";
import { Switch } from "react-materialize";

function DarkMode() {
  const [darkMode, setDarkMode] = useState(1);

  return (
    <div>
      {darkMode ? <link rel="stylesheet" type="text/css" href={process.env.PUBLIC_URL + "/darkmode.css"} /> : null}
      <Switch id="darkmode-switch" onChange={() => setDarkMode((darkMode) => !darkMode)} />
    </div>
  );
}

export default DarkMode;
