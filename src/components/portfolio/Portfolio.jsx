
import { useEffect, useState } from "react";
import PortfolioList from "../portfolioList/PortfolioList";
import './portfolio.scss';
import {
  allPortfolio,
  rorPortfolio,
  djangoPortfolio,
  reactPortfolio,
  phpPortfolio,
} from "../../data";

export default function Portfolio() {
  const [selected, setSelected] = useState("all");
  const [data, setData] = useState([]);
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

  useEffect(() => {
    switch (selected) {
      case "all":
        setData(allPortfolio);
        break;
      case "ror":
        setData(rorPortfolio);
        break;
      case "django":
        setData(djangoPortfolio);
        break;
      case "react":
        setData(reactPortfolio);
        break;
      case "php":
        setData(phpPortfolio);
        break;
      default:
        setData(allPortfolio);
    }
  }, [selected]);

  return (
    <div className="portfolio" id="portfolio">
        <h1>Portfolio</h1>
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
