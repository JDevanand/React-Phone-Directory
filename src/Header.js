import React from 'react';
import "./Header.css";

const Header = function(props){
    return(
        <div className="header">
            {props.heading}
        </div>
    );
}

// Use of class for creating component
// class Header extends React.Component{
//     render(){
//         return(
//             <div className="header">
//             {this.props.heading}    //props should be referred with 'this' keyword
//         </div>
//         )
//     }
// }

export default Header;
