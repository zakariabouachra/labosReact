import React from "react";

let toto = [{dep:'Gestion de reseaux',superviseur:'Marc Grenier',code:'420.ab'},
{dep:'Programmation web',superviseur:'Patrick Roy',code:'420.ac'},
{dep:'AjoutSup',superviseur:'Test',code:'420.test'}];

class Ajout2 extends React.Component{

    
    componentDidMount(){
        this.setState({
            deps:toto.map(dep => dep.dep),
            dep : toto[0].dep,
        })
    }
    constructor(props){
        super(props);
        this.state={
            local : '',
            batisse : '',
            dep:'',
            deps:[]
        }
        //this.onChangeBat=this.onChangeBat.bind(this);
        //this.onChangeLocal=this.onChangeLocal.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
        //this.onChangeDep = this.onChangeDep.bind(this)

    }

   /* onChangeBat(e){
        this.setState({
            batisse : e.target.value
        })
    }

    onChangeDep(e){
        this.setState({
            dep : e.target.value
        })
    }

    onChangeLocal(e){
        this.setState({
            local : e.target.value
        })
    }
    */
   handleChange(e){
    this.setState({[e.target.name]:e.target.value})
    console.log(e.target.name);
   }
    onSubmit(e){
        e.preventDefault()
        const loc = {
            dep: this.state.dep,
            batisse : this.state.batisse,
            local : this.state.local
        }
        console.log(loc);
    }
    render(){
        return(
            <div className="container">
                <h3>Liste et recuperation</h3>
                <form onSubmit={this.onSubmit}>
                    <div className="form-group">
                        <label>Departement</label>
                        <select
                            required
                            className="form-control"
                            //onChange={this.onChangeDep}
                            onChange={this.handleChange}
                            name="Dep">
                                {
                                    this.state.deps.map(function(dep){
                                        return<option key={dep}
                                        value={dep}>{dep}
                                        </option>
                                    })
                                }
                        </select>
                        <label>Local : </label>
                        <input type="text" required className="form-control"
                         value={this.state.Local}
                         name="local"
                         //onChange={this.onChangeLocal}
                         onChange={this.handleChange}/>
                        <label>Batisse : </label>
                        <input type="text" required className="form-control" 
                        value={this.state.Bat}
                        name="batisse"
                        //onChange={this.onChangeBat}
                        onChange={this.handleChange}/>
                    </div>
                    <br/>
                    <div className="form-group">
                        <input type="submit" value="Ok" className="btn btn-primary"/>
                    </div>
                </form>
            </div>
        )
    }
}

export default Ajout2;