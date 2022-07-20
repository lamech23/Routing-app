import React,{useContext,useState} from 'react'
import { ModuleloginContext } from '../context/ModuleLoginContext'
import { useNavigate } from 'react-router-dom'
import axios from 'axios';


import './Login.css'

function Login() {
   const {setOpenModal} = useContext(ModuleloginContext)
   const [email, setEmail] = useState('');
   const [password, setPassword] = useState('');
   const navigate =useNavigate

   const saveLogings = async (e) => {
    e.preventDefault();
    await axios.post('http://localhost:8000/login',{
        email: email,
        password: password
    });
    navigate("/");
}

  return (
    <div className='container'>
        <div className='modal-app'>
        <div className="modal-dialog">
            <div className="modal-content">
            <div className="modal-header">
                <h5 className="modal-title" id="exampleModalLabel">Login Here</h5>
                <button type="button" onClick={() =>setOpenModal(false)} className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>

            </div>
            <div className="modal-body">
            <form onSubmit={saveLogings} >
        <div className="mb-3">
            <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
            <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" value={email} onChange={ (e) => setEmail(e.target.value)}  required/>
        </div>
        <div className="mb-3">
            <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
            <input type="password" className="form-control" id="exampleInputPassword1" value={password} onChange={ (e) => setPassword(e.target.value)}  required />
            <div id="emailHelp" className="form-text">We'll never share your password with anyone else.</div>

        </div>
        
        <button type="submit" className="btn btn-primary">Submit</button>
        </form>
            </div>
            <div className="modal-footer">
            <button type="button" onClick={() => setOpenModal(false)} className="btn btn-secondary" data-bs-dismiss="modal">Close</button>

                <button type="button" className="btn btn-primary">Login</button>
            </div>
            </div>
        </div>
        </div>
    </div>
  )
}

export default Login