import React from "react";

import "./App.css";
import Header from "../Header/Header";
import MemeGenerator from "../MemeGenerator/MemeGenerator";

class App extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <MemeGenerator />
      </div>
    );
  }
}

export default App;
