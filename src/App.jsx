import styles from './style';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import About from './pages/About';
import ErrorPage from './pages/ErrorPage';
import Home from './pages/Home';
import Careers from './pages/Careers';
import How from './pages/How';
import NavBar from './components/Navbar';

function App() {
  return (
    <Router>
      <nav style={{ ...styles.stickyNav, backgroundColor: 'rgba(242, 242, 242, 0.965)' }}>
        <div className="w-full overflow-hidden">
          <div
            className={` ${styles.paddingX} ${styles.flexCenter}`}
            style={{ borderBottom: '1px solid #181818' }}
          >
            <div className={`${styles.boxWidth}`}>
              <NavBar />
            </div>
          </div>
        </div>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/instalily/" element={<Home />} />
        <Route path="/how" element={<How />} />
        <Route path="/about" element={<About />} />
        <Route path="/careers" element={<Careers />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </Router>
  );
}

export default App;
