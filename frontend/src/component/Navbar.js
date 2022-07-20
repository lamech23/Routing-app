import React from 'react'
import {Link} from 'react-router-dom';
function Navbar({setOpenModal,setOpenModalRegister}) {
  return (
    <div >
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
  <div className="container-fluid">
    <h3>My app</h3>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="/Home">Home</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/About">About</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/Services">Services</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/Contact">Contact</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/Blog">Blog</Link>
        </li>
        
        
        
        
         
      </ul>
      <form className="d-flex">
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button className="btn btn-outline-success" type="submit">Search</button>
      </form>
      <button type='button'onClick={()=>{setOpenModal(true)}} className='btn btn-primary mx-2 ' data-toggle="modal" data-target="#modalForm"> Login</button>
     <button type='button' onClick={()=>{setOpenModalRegister(true)}}className="btn btn-primary mx-2">Signup</button>

    </div>
  </div>
</nav>
    </div>
  )
}

export default Navbar