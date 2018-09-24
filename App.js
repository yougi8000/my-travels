import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

import Travels from "./Travels";

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">My Travels</h1>
        </header>
        <Travels
          destination="Venise"
          country="Italie"
          photo="http://s1.1zoom.me/b5152/156/Italy_Houses_Marinas_Boats_Venice_Canal_Street_528094_1024x768.jpg"
	  distance="1261 Km"
        />
        <Travels
          destination="Amsterdam"
          country="Pays-Bas"
          photo="http://studylife.fr/wp-content/uploads/2015/05/amsterdam2_1-1024x682.jpg"
	  distance="1089 Km"
        />
      </div>
    );
  }
}
export default App;