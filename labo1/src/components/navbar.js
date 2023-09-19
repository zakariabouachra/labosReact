import React from "react";
import {Link} from 'react-router-dom';


class Navbar extends React.Component{
    render(){
        return(
            <div className="container">
                <nav className="navbar navbar-expand-lg bg-dark navbar-dark">
                    <div className="container-fluid">
                        <a className="navbar-brand" href="/">Bienvenue</a>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarNav">
                            <div className="navbar-nav">
                                <Link to="/accueil" className="nav-link">Accueil</Link>
                                <Link to="/admin" className="nav-link">Admin</Link>
                                <Link to="/formulaire" className="nav-link">Formulaire</Link>
                            </div>
                        </div>
                    </div>
                </nav>
            </div>
        )
    }
}

export default Navbar;