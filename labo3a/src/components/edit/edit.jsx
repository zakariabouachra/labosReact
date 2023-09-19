import { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";

const Edit = () =>{
    const Navigate = useNavigate();
    const {id} = useParams();
    console.log(id);

    const[code,setCode] = useState('');
    const[nom,setNom] = useState('');
    const[prenom,setPrenom]= useState('');

    useEffect(() => {
        const url = 'http://10.30.40.121:3340/dataRoute/lireUnData/'+id;
        axios.get(url)
        .then((reponse)=>{
            const {code,nom,prenom} = reponse.data;
            setCode(code);
            setNom(nom);
            setPrenom(prenom);
        })
        .catch((err)=>{
            console.log(err);
        });
    },[]);

    const handleChange = (e) => {
        switch (e.target.name) {
            case 'code':
                setCode(e.target.value);
                break;
            case 'nom':
                setNom(e.target.value);
                break;
            case 'prenom':
                setPrenom(e.target.value);
                break;
            default:
                break;
        }
    };
    const onSubmit = (e) =>{
        e.preventDefault();
        console.log("la fonction est appelee");

        const util = {
            code:code,
            nom:nom,
            prenom:prenom
        }

        axios.post("http://10.30.40.121:3340/dataRoute/editData/"+id,util)
        .then(res=>{
            console.log(res.data);
            Navigate("/util");
        })
    }

    return(
        <div className='container'>
            <h3>Modifier l'utilisateur</h3>
            <form onSubmit={onSubmit}>
                <div className='form-group'>
                    <label>Code</label>
                    <input type="text" required
                    className='form-control'
                    value={code}
                    name="code"
                    onChange={handleChange}/>
                    <label>Nom</label>
                    <input type="text" required
                    className='form-control'
                    value={nom}
                    name="nom"
                    onChange={handleChange}/>
                    <label>Prenom</label>
                    <input type="text" required
                    className='form-control'
                    value={prenom}
                    name="prenom"
                    onChange={handleChange}/>
                </div>
                <br/>
                <div className='form-group'>
                    <input type="submit" value="Modifier" className='btn btn-primary'/>
                </div>

            </form>
        </div>
    )
}
    export default Edit;
    