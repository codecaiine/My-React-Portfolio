import "./portfolioList.scss"

const PortfolioList = ({ id, title, active, setSelected }) =>{
    return (
      <li
        className={active ? "portfolioList active" : "portfolioList"}
        onClick={() => setSelected(id)}
      >
        {title}
      </li>
    );
}

export default PortfolioList;
