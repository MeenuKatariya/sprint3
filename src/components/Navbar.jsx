import React from "react";
import { AuthContext } from "../context/AuthContext";
import {Link} from "react-router-dom"

const Navbar = () => {
  const {isAuth,handleAuth} =React.useContext(AuthContext);

  return <div>
       {
        isAuth? <Link to="/Home">Home</Link> : <p>Home</p>

       }
       {
        isAuth? <button onClick={handleAuth}>Logout</button>:<Link to="/">Login</Link>
       }
     
  </div>;
};

export default Navbar;