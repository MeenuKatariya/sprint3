import React from "react";
import { AuthContext } from "../context/AuthContext";
import {Link} from "react-router-dom"
import { CartContext } from "../context/CartContext";
const Navbar = () => {
  const {isAuth,handleAuth} =React.useContext(AuthContext);
  const {cart}=React.useContext(CartContext)
  return <div>
       {
        isAuth? <Link to="/Home">Home</Link> : <p>Home</p>

       }
      
      {
        isAuth? <p>Cart:{cart.length}</p> : null
      } 
    
      <p>{cart.length}</p>

       {
        isAuth? <button onClick={handleAuth}>Logout</button>:<Link to="/">Login</Link>
       }
     
  </div>;
};

export default Navbar;