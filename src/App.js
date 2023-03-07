import './App.css';
import { Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar';

import 'bootstrap/dist/css/bootstrap.min.css';

import Footer from './components/Footer';
import Projects from './pages/Projects';
import About from './pages/About';
import Home from './pages/Home';

function App() {

  return (
    <div className="App">
      <NavBar className="navbar" />

      <main style={{minHeight: "84vh", display: "flex"}}>
        <Routes>
          <Route index element={<Home />} />
          <Route path="/Projects" element={<Projects />} />
          <Route path="/About" element={<About />} />
        </Routes>
      </main>

      <Footer className="footer"/>
    </div>
  );
}

export default App;
