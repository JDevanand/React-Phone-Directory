import React, { Component, Fragment } from 'react';
import Header from "./Header";
import "./App.css";

class App extends Component {
  render() {
    return (
      <Fragment>
        <Header />
        <button className="btn-green add-btn">ADD</button>
        <div className="directory">
          <span>Name</span>              
          <span>Phone</span>
        </div>       
      </Fragment>
    );
  }
}

export default App;