import React from 'react';
import Navbar from './component/Navbar.jsx';
import Login from './component/Login';
import Home from './component/Home.jsx';
import Register from './component/Register.jsx';
import AddCracker from './component/AddCracker.jsx';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";


export const  App=()=> {
  return (
    <>    
     <Router>
        <Navbar />
        <Routes>

          < Route path="/" element={<Home />} />
          
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} /> 
           {/* <Route path="/profile" element={<Profile />} />  */}
          {/* <Route path="/saved" element={<Saved />} /> */}
          <Route path="/add" element={<AddCracker />} />
         {/* <Route path="/:id" element={<Detail />} /> */}
          
        </Routes>
      </Router>

    
    </>
  )
}

export default App