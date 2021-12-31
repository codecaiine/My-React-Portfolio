import './portfolio.scss';

export default function PortfolioList() {
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
        {stackList.map((item) => (
          <PortfolioList/>
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
