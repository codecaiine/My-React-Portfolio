import './introduction.scss';
import { init } from "ityped";

export default function Introduction() {
  const textRef = useRef();
  
  return (
    <div className="introduction" id="introduction">
         <div className="left">
             <div className="img-profile">
                  <img src="assets/pictures/profile.png" alt="Profile"/>
             </div>
         </div>
         <div className="right">
            <div className="wrapper">
                 <h2> Hello My name is</h2>
                 <h1>Yannick Noel</h1>
                 <h3>Remote<span> Software Engineer</span></h3>
            
            <a href="#portfolio">
               <img src="assets/icons/arrow-down.png" alt="arrow-down"/>
            </a>
            </div>
         </div>
    </div>
  );
}
