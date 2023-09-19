import React from 'react';
//import logo from './logo.svg';
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import Navbar from './components/navbar';
import Admin from './components/admin';
import Accueil from './components/accueil';
import {BrowserRouter,Routes,Route} from "react-router-dom";
import Formulaire from './components/formulaire';

class App extends React.Component{
  render() {
    return (
   <div className="container">
      <BrowserRouter>
        <Navbar/>
        <Routes>
          <Route path="/admin" element={<Admin/>}/>
          <Route path="/accueil" element={<Accueil/>}/>
          <Route path="/formulaire" element={<Formulaire/>}/>
        </Routes>
      </BrowserRouter>
      
   </div>
    );
  }
}

export default App;
