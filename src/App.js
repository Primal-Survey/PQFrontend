import React from "react";
import "./App.css";
import Header from "./Components/Header/Header";
import BodyBox from "./Components/Body/BodyBox";
import Footer from "./Components/Footer/Footer";
import { HashRouter as Router } from "react-router-dom";
import { Helmet } from "react-helmet";

function App() {
  return (
    <div className="App">
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
    </div>
  );
}

export default App;
