import './portfolio.scss';

export default function Portfolio() {
  return (
    <div className="portfolio" id="portfolio">
        <h1>Portfolio</h1>
        <ul>
            <li className="active">All</li>
            <li>Ruby</li>
            <li>Python</li>
            <li>PHP</li>
            <li>Java</li>
            <li>JavaScript</li>
        </ul>
        <div className="container">
           <div className="work-item">
             <img src="assets/social/coding.png" alt="my-work" />
             <h3>My blog App</h3>
           </div>
        </div>
    </div>
  );
}
