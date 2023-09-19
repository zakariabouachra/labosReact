import React from "react";
import reactlogo from '../reactlogo.png';


class Logo extends React.Component{
    render(){
        return(
            <div className="container">
                <div className="row">
                    <a href="https://fr.reactjs.org/"><img src={reactlogo} alt="logo"/></a>
                </div>
            </div>
        )
    }
}


export default Logo;