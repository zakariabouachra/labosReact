import React from "react";
import GenList from "./genList";



let utils = [{code:'GreMa',nom:'Grenier',prenom:'Marc'},
{code:'RoyPa',nom:'Roy',prenom:'Patrick'}];


class List extends React.Component{

    constructor(props){
        super(props);
        this.state={
            utilisateurs:[]
        }
    }

    componentDidMount(){
        this.setState({utilisateurs:utils})
    }

    userList(){
        return this.state.utilisateurs.map(utilCourant => {
            return <GenList utilisateur = {utilCourant}Key={utilCourant.code}/>
        })
    }

    render(){
        return(
            <div className="container">
                <h3>Liste des utilisateurs</h3>
                <table className="table">
                    <thead className="thead-light">
                        <tr>
                            <th>Code</th>
                            <th>Nom</th>
                            <th>Prenom</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.userList()}
                    </tbody>
                </table>
            </div>
        )
    }
}
 export default List;

