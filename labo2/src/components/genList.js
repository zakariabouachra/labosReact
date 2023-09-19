import React from "react";


class GenList extends React.Component{
    render(){
        return(
            <tr>
                <td>{this.props.utilisateur.code}</td>
                <td>{this.props.utilisateur.nom}</td>
                <td>{this.props.utilisateur.prenom}</td>
            </tr>
        )
    }
}


export default GenList;