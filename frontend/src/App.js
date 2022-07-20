import React, {useEffect, useState } from 'react'
import './App.css'
import axios from "axios"
import Navbar from './component/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import About from './component/About';
import Services from './component/Services';
import Home from './component/Home';
import Contact from './component/Contact';
import Blog from './component/Blog';
import Login from './component/Login';
import Register from './component/Register';
import { ModuleloginContext } from './context/ModuleLoginContext';
import { ModalContext } from './context/ModalContext';




function App() {
  const [Content , setContent] = useState();
  // const [users , setUsers] = useState([]);
  const[OpenModal,setOpenModal]=useState(false)
  const [OpenModalRegister, setOpenModalRegister] = useState(false)


  // useEffect(() => {
  //   getContent()
  // }, [])

  // useEffect(() => {
  //   getUser()
  // }, [])

  // const getContent = async () => {
  //   const response = await axios.get('http://localhost:8000/');
  //  setContent(response.data)
  // }

  // const getUser = async () => {
  //   const response = await axios.get('http://localhost:8000/users');
  //  setUsers(response.data)
  // }

  // const table = users.map (item  => {
  //   return(
  //    <tbody key={item.id}>
  //      <tr>
  //     <td>{item.id}</td>
  //     <td>{item.Name}</td>
  //     </tr>
  //    </tbody>
  //   )
  // })

  return (
    <div>
      
      <BrowserRouter>
      <Navbar setOpenModal={setOpenModal}setOpenModalRegister={setOpenModalRegister}/>
        <ModuleloginContext.Provider value={{setOpenModal}}>
         {OpenModal && <Login />}
      </ModuleloginContext.Provider>

      <ModalContext.Provider value={{setOpenModalRegister}}>
      {OpenModalRegister && <Register/>}
      </ModalContext.Provider>
    
    
      <Routes>
      <Route  path='/' element={<Home/>} />
        <Route  path='/About' element={<About/>} />
        <Route  path='/Services' element={<Services/>} />
        <Route  path='/Contact' element={<Contact/>} />
        <Route  path='/Blog' element={<Blog/>} />
        <Route  path='/Login' element={<Login/>} />
        <Route  path='/Register' element={<Register/>} />
    

      </Routes>
      </BrowserRouter>
      <p>{Content}</p>
      <table>
      {/* {table} */}
      </table>
    </div>
  )
}

export default App


