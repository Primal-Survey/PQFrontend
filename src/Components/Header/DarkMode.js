import React, { useState } from "react";
import { Switch } from "react-materialize";

function DarkMode() {
  const [darkMode, setDarkMode] = useState(true);

  return (
    <div className="darkmode-switch">
      {darkMode ? (
        <link
          rel="stylesheet"
          type="text/css"
          href={process.env.PUBLIC_URL + "/darkmode.css"}
        />
      ) : null}
      <Switch
        id="darkmode"
        onChange={() => setDarkMode((darkMode) => !darkMode)}
      />
    </div>
  );
}

export default DarkMode;
