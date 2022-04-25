import './App.css';
import First from './components/first/First';
import Second from './components/second/Second';
import Third from './components/third/Third';
import Fourth from './components/fourth/Fourth';
import Fifth from './components/fifth/Fifth';
import Sixth from './components/sixth/Sixth';

import { BrowserRouter as Router, Routes, 
  Route, Navigate,} from "react-router-dom";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<First/>}/>
        <Route path="/szerviz" element={<Second/>}/>
        <Route path="/faq" element={<Third/>}/>
        <Route path="/garancia" element={<Fourth/>}/>
        <Route path="/aszf" element={<Fifth/>}/>
        <Route path="/adatvedelmi" element={<Sixth/>}/>
      </Routes>
      
    </Router>
  );
}

export default App;
