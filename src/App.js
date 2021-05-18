import React, { Component } from 'react';
import Header from "./Header";
import "./App.css";

class App extends Component {
  render() {
    let contactDetails = [
      {
         id: 101, // unique
         name: "Dev",
         phone: "1231231234"
      },
      {
         id: 102, // unique
         name: "Ana",
         phone: "9879879876"
      }
   ];

    return (
      <div className="component-container">
      <Header heading="Phone Directory"/>      
      <div className="component-body-container">
        <button className="custom-btn add-btn">Add</button>

        <div className="grid-container heading-container">
          <span className="grid-item name-heading">Name</span>
          <span className="grid-item phone-heading">Phone</span>
        </div>
        
        {
          contactDetails.map(elem=>{
            return <div key={elem.id} className="grid-container">
                    <span className="grid-item name-heading">{elem.name}</span>
                    <span className="grid-item phone-heading">{elem.phone}</span>
                    <span className="grid-item action-btn-container">
                      <button className="custom-btn delete-btn">Delete</button>
                    </span>
                  </div>
          })
        }
       
      </div>
    </div>
    );
  }
}

export default App;