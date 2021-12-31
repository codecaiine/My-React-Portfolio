
import { useEffect, useState } from "react";
import PortfolioList from "../portfolioList/PortfolioList";
import './portfolio.scss';

export default function Portfolio() {
  const [selected, setSelected] = useState("all");
  const stackList = [
    {
      id: "all",
      title: "All",
    },
    {
      id: "django",
      title: "Django",
    },
    {
      id: "ror",
      title: "Ruby On Rails",
    },
    {
      id: "react",
      title: "React",
    },
    {
      id: "php",
      title: "Php",
    },
  ];

  return (
    <div className="portfolio" id="portfolio">
        <h1>Portfolio</h1>
        <ul>
        <ul>
        {stackList.map((item) => (
          <PortfolioList
            title={item.title}
            active={selected === item.id}
            setSelected={setSelected}
            id={item.id}
          />
        ))}
      </ul>
        </ul>
        <div className="container">
           <div className="work-item">
             <img src="assets/social/coding.png" alt="my-work" />
             <h3>My blog App</h3>
           </div>
           <div className="work-item">
             <img src="assets/social/coding.png" alt="my-work" />
             <h3>My blog App</h3>
           </div>
           <div className="work-item">
             <img src="assets/social/coding.png" alt="my-work" />
             <h3>My blog App</h3>
           </div>
           <div className="work-item">
             <img src="assets/social/coding.png" alt="my-work" />
             <h3>My blog App</h3>
           </div>
           <div className="work-item">
             <img src="assets/social/coding.png" alt="my-work" />
             <h3>My blog App</h3>
           </div>
        </div>
    </div>
  );
}
