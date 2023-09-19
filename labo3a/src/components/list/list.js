import React from "react";
import Genlist from './GenList';
import axios from "axios";


class List extends React.Component{

    constructor(props){
        super(props);
        this.state={
            util:[]
        }
    }


    componentDidMount() {
        axios.get("http://10.30.40.121:3340/dataRoute/data")
          .then(res => {
            this.setState({ util: res.data });
          })
          .catch(error => {
            console.log(error);
          });
      }
    
  
      delUtil=(id)=>{
        axios.delete("http://10.30.40.121:3340/dataRoute/delData/" + id)
        .then(res => console.log(res.data));
        this.setState({
            util : this.state.util.filter(el=>el._id !== id)
        });
     }

  
      
    
    ListUser(){
        return this.state.util.map(UtlisCourant => {
            return <Genlist unUtlis ={UtlisCourant} delUtil={this.delUtil} key={UtlisCourant.code}/>
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
                            <th>Prenom</th>
                            <th>Nom</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.ListUser()}
                    </tbody>
                </table>
            </div>
        )
    }
}


export default List;