import React from "react";
import {Link} from 'react-router-dom';

class GenList extends React.Component{
    render(){
        return(
            <tr>
                <td>{this.props.unUtlis.code}</td>
                <td>{this.props.unUtlis.prenom}</td>
                <td>{this.props.unUtlis.nom}</td>
                <td><Link to={"/edit/"+this.props.unUtlis._id}>Edition</Link>| <a href="#" onClick={() => { this.props.delUtil(this.props.unUtlis._id) }}>Supprimer</a></td>
            </tr>
        )
    }
}

export default GenList;
