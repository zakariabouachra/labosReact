import './App.css';
import React from 'react';
import {BrowserRouter,Navigate,Routes,Route} from "react-router-dom";
import Navbar from './components/navbar/navbar';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import Logo from './components/logo/logo';
import List from './components/list/list';
import Ajout from './components/ajout/ajout';
import Edit from './components/edit/edit';


function App() {
  return (
    <div className='container'>
      <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Navigate to="/logo"/>}/>
        <Route path='/logo' element={<Logo/>}></Route>
        <Route path='/util' element={<List/>}></Route>
        <Route path='/ajout' element={<Ajout/>}></Route>
        <Route path="/edit/:id" element={<Edit/>}></Route>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
