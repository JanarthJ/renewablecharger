
import './App.css';
import Home from "./components/home/home";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate
} from "react-router-dom";
import Header from './components/header/header';

function App() {
  return (
    <div className="App">
      
      <Router>
        <Header/>
        <div className="container">
        <Routes>
            <Route path="/home" element={<Home />} />
            <Route path="/" element={<Navigate replace to="/home" />} />
            {/* <Route path="/dashboard" element={<Dashboard />} /> */}
        </Routes>
        </div>
       
      </Router>
    </div>
  );
}

export default App;
