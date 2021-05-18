import React,{Component} from 'react';

import Header from "./Header";

import './AddSubscriber.css';

class AddSubscriber extends Component{
    render(){
        return(
            <div>
                <Header heading="Add subscriber"/>
                <div className="component-body-container">
                    <button className="custom-btn">Back</button>
                    <form className="subscriber-form">
                        <label htmlFor="name" className="label-control">Name: </label>
                        <input id="name" name="name" type="text" className="input-control"/><br/><br/>

                        <label htmlFor="phone" className="label-control">Phone: </label>
                        <input id="phone" name="phone" type="text" className="input-control"/><br/><br/>

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
