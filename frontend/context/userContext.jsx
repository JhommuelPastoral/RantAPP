import axios from "axios";
import { createContext, useState,useEffect } from "react";
import { useNavigate } from "react-router-dom";

export const userContext = createContext({});

export default function userContextProvider({children}) {

  const navigate = useNavigate();
  const [user, setUser] = useState(null);
  const apiUrl = import.meta.env.VITE_API_URL;

  useEffect(()=>{
    axios.get(`${apiUrl}/api/users/profile`)
    .then(({data}) =>{
      if(data){
        setUser(data);
        navigate('/dashboard');
      }
      else{
        navigate('/')
      }

    })
    .catch((err=>{
      console.error("Token expired or request failed:", err);
      setUser(null);
    }));

  },[]);

  return (
    <userContext.Provider value ={{user,setUser}}>
      {children}
    </userContext.Provider>

  )
}
