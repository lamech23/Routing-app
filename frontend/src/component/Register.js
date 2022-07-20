import React from 'react'
import './Register.css'
import axios from 'axios';
import {useState,useContext } from 'react'
import  { useNavigate } from 'react-router-dom';
import { ModalContext } from '../context/ModalContext'

function Register() {
    
    const [userName, setUserName] = useState('');
    const [userEmail, setUserEmail] = useState('');
    const [password, setUserPassword] = useState('');
    const navigate = useNavigate();
    const {setOpenModalRegister: closeModal} = useContext(ModalContext)

 
    const saveUser = async (e) => {
        e.preventDefault();
        await axios.post('http://localhost:8000/users',{
            userName: userName,
            userEmail: userEmail,
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
            <h5 className="modal-title" id="exampleModalLabel"> Sign up here</h5>
            <button type="button" onClick={() => closeModal(false)} className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div className="modal-body">
        <form onSubmit={saveUser}>
    <div className="mb-3">
        <label htmlFor="exampleInputUserName" className="form-label">User Name</label>
        <input type="userName" className="form-control" id="exampleInputUserName" aria-describedby="nameHelp"  value={userName} onChange={ (e) => setUserName(e.target.value)} required />
    </div>
    <div className="mb-3">
        <label htmlFor="exampleInputEmail" className="form-label">Email address</label>
        <input type="email" className="form-control" id="exampleInputEmail"value={userEmail} onChange={ (e) => setUserEmail(e.target.value)} required />
    </div>
    <div className="mb-3">
        <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
            <input type="password" className="form-control" id="exampleInputPassword1" required value={password}onChange={ (e) => setUserPassword(e.target.value)}  />
    </div>
    
    <button type="submit" className="btn btn-primary">Submit</button>
    </form>
        </div>
        <div className="modal-footer">
        <button type="button" onClick={()=>closeModal(false)} className="btn btn-secondary" data-bs-dismiss="modal">Close</button>

            <button type="button"  className="btn btn-primary">Sign Up</button>
        </div>
        </div>
    </div>
    </div>
</div>
  )
}

export default Register