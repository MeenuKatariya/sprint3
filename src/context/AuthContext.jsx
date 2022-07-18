import React, { createContext } from "react";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  // code here
  const [isAuth,setISAuth]=React.useState(false)
   
 const handleAuth=()=>{
   setISAuth(!isAuth)
 }


  return <AuthContext.Provider  value={{handleAuth,isAuth}} >{children}</AuthContext.Provider>;
};
