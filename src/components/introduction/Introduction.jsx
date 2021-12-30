import './introduction.scss';

export default function Introduction() {
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
                 <h3>Software Engineer<span></span></h3>
            </div>
            <a href="#portfolio">
               <img src="assets/icons/arrow-down.png" alt="arrow-down"/>
            </a>
         </div>
    </div>
  );
}
