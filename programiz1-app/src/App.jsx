import React from "react";
import {BrowserRouter,Routes,Route} from "react-router-dom";
import Home from "./home";
import Signup from "./signup";
import Login from "./login";
import Javascript from "./javascript";
import Python from "./python";
import Nav from "./nav";



function App(){
  return(
    <div>
      <BrowserRouter>
      <Routes>
        <Route path="/home" element = {<Home/>}></Route>
        <Route path="/" element = {<Signup/>}></Route>
        <Route path="/login" element = {<Login/>}></Route>
        <Route path="/nav" element = {<Nav/>}></Route>
        <Route path="/js" element = {<Javascript/>}></Route>
        <Route path="/py" element = {<Python/>}></Route>
      </Routes>
      </BrowserRouter>
    </div>
  )
}
export default App 