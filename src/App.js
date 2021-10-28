import './App.css';
import Contact from './components/contact/Contact';
import Introduction from './components/introduction/Introduction';
import Portfolio from './components/portfolio/Portfolio';
import Testimonials from './components/testimonials/Testimonials';
import Topbar from './components/topbar/Topbar';
import Works from './components/works/Works';

function App() {
  return (
    <div className="App">
      <Topbar />
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
