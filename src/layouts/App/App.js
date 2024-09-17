import './App.css';

import Navigation from '../Navigation/Navigation';
import Footer from '../Footer/Footer';
import { BrowserRouter as Router} from 'react-router-dom';
import Content from '../Content/Content';
import { useEffect, useState } from 'react';

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const [isScrolled, setIsScrolled] = useState(false);

  const handleScroll = () => {
    if (window.scrollY >= 40) {
      setIsScrolled(true);
    } else {
      setIsScrolled(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const navClass = isScrolled ? 'navigation' : 'navigation-active';
  

  return (
    <div className="App">

      <Router>
        <nav className={navClass}>
        <Navigation isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />
        </nav>

        <main>
        <Content setIsLoggedIn={setIsLoggedIn} />
        </main>
      

      <footer>
        <Footer />
      </footer>
    </Router>

    </div>
  );
}

export default App;
