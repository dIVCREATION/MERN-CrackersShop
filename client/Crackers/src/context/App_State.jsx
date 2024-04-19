import React, { useEffect, useState } from 'react';
import { AppContext } from './App_context';
import axios from 'axios';

 export const  App_State = (props) => {

  const url = "http://localhost:8080/api";
  const [token, setToken] = useState("");
  const [cracker, setCracker] = useState([])

  useEffect(()=> {
const fetchCracker = async () =>{
  const api = await axios.get(`${url}/` ,{
    headers:{
      "Content-Type": "application/json"
    },
    withCredentials: true
  });

  console.log(api.data.cracker)
  setCracker(api.data.cracker)
}
fetchCracker()
  },[]);

  const register = async (name, email, password) =>{
    const api = await axios.post(`${url}/register`,{
      name, email, password
    },{
      headers:{
        'Content-Type':'application/json'
      },
      withCredentials: true
    })
    return api;
  }

  const login = async (email,password) => {
    const api = await axios.post(`${url}/login` ,{
      email, password
    },{
      headers:{
        "Content-Type": "application/json"
      },
      withCredentials: true
    })
  console.log(api)
  setToken(api.data.token)
 // setisAuthenticated(true)

  return api;
  }

  const addCracker = async (
    Pdname, price, images, Stock
  ) => {
    const api = await axios.post(
      `${url}/add`,
      {
        Pdname, price, images, Stock
      },
      {
        headers: {
          "Content-Type": "application/json",
          Auth: token,
        },
        withCredentials: true,
      }
    );
//setreload(!reload)
    return api;
  };



  return (
    <AppContext.Provider value={{ login,register,addCracker,cracker }}> {props.children}</AppContext.Provider>
  )
}
export default App_State;