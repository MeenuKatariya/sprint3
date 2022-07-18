import React, { useState, useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import {useNavigate} from "react-router-dom"
const Login = () => {
  const [email,setemail]=React.useState("");
  const [password,setPassword]=React.useState("")
  const {handleAuth} = React.useContext(AuthContext)
  const navigate =useNavigate();

  
    const handleSubmit=()=>{
      if(email=="eve.holt@reqres.in" && password=="cityslicka")
      {
        handleAuth();
         navigate("/Home")
      }
    }
    
    
  return <div>
    <input type="text" placeholder="Enter Email" value={email} onChange={(e)=>{setemail(e.target.value)}} />
    <input type="text" placeholder="Enter Password"  value={password} onChange={(e)=>{setPassword(e.target.value)}} />
    <input type="submit"   onClick={handleSubmit} />
  </div>;
};

export default Login;