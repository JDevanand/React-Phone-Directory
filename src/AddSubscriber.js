import React,{Component} from 'react';

import Header from "./Header";

import './AddSubscriber.css';

class AddSubscriber extends Component{

    constructor(){
        //Mandatory to call super method before initializing state
        super();
        //Initialize state
        this.state = {
            id:0,
            name:"",
            phone:""
        }        
    }

    //Event handler points
    //note- use this.inputChangeHandler defining event handler in the element
    // if "this" is not used, then it throws compiler error

    inputChangeHandler = (e)=>{  //get the event handler e
        const state = this.state;    
        state[e.target.name]= e.target.value; //take values thru event handler
        // read as state[phone] = (phone.value) ;  here "phone" is the 'name' of element from where its invoked
        this.setState(state);  //very much required to update the state variable         
        //doing above step will not render it unless the state variable is tagged to element that receives it
        console.log(this.state);
    }

    render(){
        return(
            <div>
                <Header heading="Add subscriber"/>
                <div className="component-body-container">
                    <button className="custom-btn">Back</button>
                    <form className="subscriber-form">
                        <label htmlFor="name" className="label-control">Name: </label>
                        <input id="name" name="name" type="text" className="input-control" onChange={this.inputChangeHandler}/><br/><br/>

                        <label htmlFor="phone" className="label-control">Phone: </label>
                        <input id="phone" name="phone" type="text" className="input-control" onChange={this.inputChangeHandler}/><br/><br/>    

                        <div className="subscriber-info-container">
                            <span className="subscriber-to-add-heading">Subscriber to be addded: </span><br/>
                            <span className="subscriber-info">Name: </span><br/>
                            <span className="subscriber-info">Phone: </span>
                        </div>

                        <button type="submit" className="custom-btn add-btn">Add</button>
                    </form>
                </div>
            </div>
        )
    }
}

export default AddSubscriber;
