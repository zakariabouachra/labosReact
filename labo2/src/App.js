import React from 'react';
//import logo from './logo.svg';
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import Navbar from './components/navbar';
import {BrowserRouter, Navigate, Route,Routes} from "react-router-dom";
import List from './components/list';
import Ajout from './components/ajout';
import Ajout2 from './components/ajout2';
import Logo from './components/logo';


class App extends React.Component{
  render() {
    return (
   <div className="container">
      <BrowserRouter>
        <Navbar/>
        <Routes>
        <Route path='/' element={<Navigate to="/logo"/>}/>
        <Route path='/logo' element={<Logo/>}></Route>
        <Route path='/list' element={<List/>}></Route>
        <Route path='/ajout' element={<Ajout/>}></Route>
        <Route path='/ajout2' element={<Ajout2/>}></Route>
        </Routes>
      </BrowserRouter>
      
   </div>
    );
  }
}

export default App;
