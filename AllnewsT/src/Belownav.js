import { React} from "react";
import { Link } from "react-router-dom";

export default function Belownav() {
    return(
        <>
        <main>
        <div className="belownav">
          <div className="infotemp">
            <div className="title">Technews of languages:-</div>
            <div className="newstemp">
                <div className="iconstemp">
                 <Link to='/HTML' className="ComputerLang">  HTML</Link> 
                </div>
                <div className="iconstemp">
                <Link to='/JAVA' className="ComputerLang">JAVA</Link>
                </div>
                <div className="iconstemp">
                 <Link to='/CSS' className="ComputerLang">  CSS</Link>
                </div>
            </div>
            <div className="newstemp">
                <div className="iconstemp">
                <Link to='/JS' className="ComputerLang">JS</Link>
                </div>
                <div className="iconstemp">
                <Link to='PYTHON' className="ComputerLang">PYTHON</Link>
                </div>
                <div className="iconstemp">
                <Link to='/REACT' className="ComputerLang">REACTJS</Link>
                </div>
            </div>
            <div className="newstemp">
                <div className="iconstemp">
                <Link to='/ANGULAR' className="ComputerLang">ANGULAR</Link>
                </div>
                <div className="iconstemp">
                <Link to='/C' className="ComputerLang">C</Link>
                </div>
                <div className="iconstemp">
                <Link to='/C++' className="ComputerLang">C++</Link> 
                </div>
            </div>
          </div>
         
        </div>
        </main>
        
        </>
    )
    
}