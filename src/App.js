import './App.css';
import Contact from './components/contact/contact';
import Introduction from './components/introduction/introduction';
import Portfolio from './components/portfolio/portfolio';
import Testimonials from './components/testimonials/testimonials';
import Topbar from './components/topbar/topbar';
import Works from './components/works/works';

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
