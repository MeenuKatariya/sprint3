import "./App.css";
import React from "react";
import Navbar from "./components/Navbar"
import {Routes,Route} from "react-router-dom"
import Login from "./pages/Login";
import Home from "./pages/Home";




function App() {


  return <div className="App">
 <Navbar/>
 <Routes>
  <Route path="/" element={<Login/>}></Route>
  <Route path="/home"element={<Home/>}></Route>
 </Routes>
  </div>;
}

export default App;
