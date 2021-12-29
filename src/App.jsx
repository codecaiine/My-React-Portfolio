import './App.scss';
import { useState } from 'react';
import Contact from './components/contact/Contact';
import Introduction from './components/introduction/Introduction';
import Portfolio from './components/portfolio/Portfolio';
import Testimonials from './components/testimonials/Testimonials';
import Topbar from './components/topbar/Topbar';
import Works from './components/works/Works';
import Menu from './components/menu/Menu';

function App() {
  const [menuOpen, setMenuOpen] = useState(true);
  return (
    <div className="App">
      <Topbar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <Menu menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <div className="sections">
        <Introduction />
        <Portfolio />
        <Works />
        <Testimonials />
        <Contact />
      </div>
    </div>
  );
}

export default App;
