import './topbar.scss';
import { Person, Mail } from '@material-ui/icons';

export default function Topbar() {
  return (
    <div className="topbar">
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
          This is right.
        </div>
      </div>
    </div>
  );
}
