import './topbar.scss';
import { Person, Mail } from '@material-ui/icons';

export default function Topbar({ menuOpen, setOpenMenu }) {
  return (
    <div className={`topbar${menuOpen && 'active'}`}>
      <div className="wrapper">
        <div className="left">
          <a href="#introduction" className="logo">CoDecaine</a>
          <div className="itemContainer">
            <Person className="icon" />
            <span>+225 0709981789</span>
          </div>
          <div className="itemContainer">
            <Mail className="icon" />
            <span>akabrouyannickn@gmail.com</span>
          </div>
        </div>
        <div className="right">
          <div className="hamburger">
            <span className="line1" />
            <span className="line2" />
            <span className="line3" />
          </div>
        </div>
      </div>
    </div>
  );
}
