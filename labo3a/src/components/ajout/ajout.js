import React from 'react';
import axios from 'axios';


class Ajout extends React.Component{

    constructor(props){
        super(props);
        this.state={
            code:'',
            nom:'',
            prenom:'',
            data:[]
        }
        this.handleChange = this.handleChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        
    }

    handleChange(e){
        this.setState({[e.target.name]:e.target.value});
    }

    onSubmit(e){
        e.preventDefault();
    const data = {
      code: this.state.code,
      nom: this.state.nom,
      prenom: this.state.prenom
    };

    axios.post('http://10.30.40.121:3340/dataRoute/newData', data)
      .then(res => {
        console.log(res.data);
      })
      .catch(error => {
        console.log(error);
      });
      this.setState({
        code:'',
        nom:'',
        prenom:''
    });
    };
    
        
    
    render(){
        return(
            <div className='container'>
                <h3>Ajouter un utilisateur</h3>
                <form onSubmit={this.onSubmit}>
                    <div className='form-group'>
                        <label>Code</label>
                        <input type="text" required
                        className='form-control'
                        value={this.state.code}
                        name="code"
                        onChange={this.handleChange}/>
                        <label>Nom</label>
                        <input type="text" required
                        className='form-control'
                        value={this.state.nom}
                        name="nom"
                        onChange={this.handleChange}/>
                        <label>Prenom</label>
                        <input type="text" required
                        className='form-control'
                        value={this.state.prenom}
                        name="prenom"
                        onChange={this.handleChange}/>
                    </div>
                    <br/>
                    <div className='form-group'>
                        <input type="submit" value="Ajouter" className='btn btn-primary'/>
                    </div>

                </form>
            </div>
        )
    }
}

export default Ajout;