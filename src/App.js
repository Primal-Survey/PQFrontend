import React from "react";
import {useEffect} from "react"
import "./App.css";
import Header from "./Components/Header/Header";
import BodyBox from "./Components/Body/BodyBox";
import Footer from "./Components/Footer/Footer";
import { HashRouter as Router } from "react-router-dom";
import { Helmet } from "react-helmet";
import QuestionsContext from "./Components/Contexts/QuestionContext";
import Questions from "./Components/Contexts/Questions";
import "materialize-css/dist/css/materialize.min.css";
import M from "materialize-css/dist/js/materialize.min.js";


function App() {
  useEffect(() => {
    //auto initializes Materialize's JS
    M.AutoInit();
  }, []);
  return (
    <div className="App">
      <QuestionsContext.Provider value={Questions}>
        <div>
          <Helmet>
            <title>Primal Quiz</title>
          </Helmet>
          <Header />
          <Router basename="/">
            <BodyBox />
          </Router>
          <Footer />
        </div>
      </QuestionsContext.Provider>
    </div>
  );
}

export default App;
