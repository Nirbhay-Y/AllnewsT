import { React } from "react";
import { Link } from "react-router-dom";
export default function About() {
    return(
        <>
         <header>
        <div className="navbar">
        <div ><Link to='/'className="about">HOME</Link></div>
         <div ><Link to='/Allnews'className="AllnewsNav">ALLNEWS</Link></div>
        </div>
        </header>
        <div className="InformationAboutus">
       <div className="Single">
       Welcome to AllnewsT, your trusted source for comprehensive and unbiased news coverage. At AllnewsT, we are passionate
       about delivering the latest news and information to keep you informed and engaged in today's ever-changing world.
       </div>
       </div>
       <div className="Contact">Contact Us On: YadavAllnewsT@gmail.com
       <span className="Number">Phone Number: +91 9999999999</span>
       </div>
       </>
    )
    
}