import React from "react";
//import { useState } from "react";
//import ReactDOM from 'react-dom/client';

const handleSubmit = (event) => {
    event.preventDefault();
    const name = document.getElementById("name").value;
    const prenom = document.getElementById("prenom").value;
    const age = document.getElementById("age").value;
    console.log("votre nom est :" + name + "votre prenom est :" + prenom + "votre age est :" + age);
  }      
        
      

class Formulaire extends React.Component{
    render(){
        return(
        <div className="container">
          <form onSubmit={handleSubmit}>
            <label>entrer your name: 
              <input type="text"  id="name"/>
            </label>
            <label>entrer your prenom:
              <input type="text"  id="prenom"/>
            </label>
            <label>entrer votre age:
              <input type="text"  id="age"/>
            </label>
            <br></br>
            <input type="submit" />
          </form>
          </div>
        )
    }
        
}


export default Formulaire;


