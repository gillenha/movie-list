import React, { Component } from "react";
import Movies from "./components/movies";
import GenreSort from "./components/genreSort";
import "./App.css";

class App extends Component {
  render() {
    return (
      <main className="container">
        <div className="row">
          <div className="col col-lg-2">
            <GenreSort />
          </div>
          <div className="col">
            <Movies />
          </div>
        </div>
      </main>
    );
  }
}

export default App;
