import './introduction.scss';
import { init } from "ityped";
import { useEffect, useRef } from "react";

const Introduction = () => {
  const textRef = useRef();

  useEffect(() => {
    init(textRef.current, {
      showCursor: true,
      backDelay: 1500,
      backSpeed:60,
      strings: ["Software Engineer", "IT Auditor", "Entrepreneur"],
    });
  }, []);
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
                 <h3>
                  Remote <span ref={textRef}></span>
                </h3>
            
            <a href="#portfolio">
               <img src="assets/icons/arrow-down.png" alt="arrow-down"/>
            </a>
            </div>
         </div>
    </div>
  )
}
export default Introduction;