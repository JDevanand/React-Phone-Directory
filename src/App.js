import React, { Component, Fragment } from 'react';
import Header from "./Header";


class App extends Component {
  render() {
    return (
      <Fragment>
        <Header />
        <button>Add</button>
        <div>
          <span>Name</span>
          <br/>     
          <span>Phone</span>
        </div>       
      </Fragment>
    );
  }
}

export default App;