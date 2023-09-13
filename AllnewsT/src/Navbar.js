import { React } from "react";
import Belownav from "./Belownav";
import { Link } from "react-router-dom";

export default function Navbar() {
    //rgba(228, 23, 217, 0.2);
    return(
    <>
        <header>
        <div className="navbar">
        <div className="home">HOME</div>
         <div ><Link to='/about'className="about">ABOUT US</Link></div> 
         <div ><Link to='/Allnews'className="AllnewsNav">ALLNEWS</Link></div>
        </div>
        </header>
        <Belownav></Belownav>
        </>
    )
}