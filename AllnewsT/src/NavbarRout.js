import { React } from "react";
import Navbar from "./Navbar";
import Allnews from "./Allnews";
import {  Route, Routes } from "react-router-dom";
import About from "./About";
import HTML from "./HTML";
import Cplus from "./C++";
import JAVA from "./JAVA";
import JS from "./JS";
import PYTHON from "./PYTHON";
import REACT from "./REACTJS";
import ANGULAR from "./ANGULAR";
import C from "./C";
import CSS from "./CSS";

export default function NavbarRout() {
    return(
        <>
      <Routes>
      <Route path='/' element={<Navbar></Navbar>}/>
          <Route path='/about' element={<About></About>}/>
          <Route path='/Allnews' element={<Allnews></Allnews>}/>
          <Route path='/HTML' element={<HTML></HTML>}/>
          <Route path='/C++' element={<Cplus></Cplus>}/>
          <Route path='/JAVA' element={<JAVA></JAVA>}/>
          <Route path='/REACT' element={<REACT></REACT>}/>
          <Route path='/ANGULAR' element={<ANGULAR></ANGULAR>}/>
          <Route path='/JS' element={<JS></JS>}/>
          <Route path='/PYTHON' element={<PYTHON></PYTHON>}/>
          <Route path='/C' element={<C></C>}/>
          <Route path='/CSS' element={<CSS></CSS>}/>
      </Routes>
      </>
    )
    
}