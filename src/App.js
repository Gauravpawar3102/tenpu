import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import ResumeBuilder from './pages/ResumeBuilder';
import Email from './pages/Email';
import Navbar from './components/Navbar';
import Xurdo from './components/resume/xurdo/Xurdo';
function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/resume-builder" element={<ResumeBuilder />} />
          <Route path="/email-generator" element={<Email />} />
          <Route path="/resume" element={<Xurdo />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
