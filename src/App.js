
import './App.css';
import Home from "./components/home/home";
import Contact from "./components/contactus/contact";
import About from './components/about/about';

import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate
} from "react-router-dom";
import Header from './components/header/header';
import Partners from './components/Partners/partner';

function App() {
  return (
    <div className="App">
      
      <Router>
        <Header/>
        <div className="container">
        <Routes>
            <Route path="/home" element={<Home />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/about" element={<About />} />
            <Route path="/partners" element={<Partners />} />
            <Route path="/" element={<Navigate replace to="/home" />} />
            {/* <Route path="/dashboard" element={<Dashboard />} /> */}
        </Routes>
        </div>
       
      </Router>
    </div>
  );
}

export default App;
