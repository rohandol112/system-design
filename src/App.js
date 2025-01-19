import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from './context/ThemeContext';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import Home from './pages/Home/Home';
import Topics from './pages/Topics/Topics';
import CaseStudies from './pages/CaseStudies/CaseStudies';
import About from './pages/About/About';
import LoadBalancing from './pages/Topics/LoadBalancing/LoadBalancing';
import Caching from './pages/Topics/Caching/Caching';
import DatabaseSharding from './pages/Topics/DatabaseSharding/DatabaseSharding';
import Microservices from './pages/Topics/Microservices/Microservices';
import SystemSecurity from './pages/Topics/SystemSecurity/SystemSecurity';
import APIDesign from './pages/Topics/APIDesign/APIDesign';

function App() {
  return (
    <ThemeProvider>
      <Router>
        <div className="min-h-screen flex flex-col">
          <Navbar />
          
          <main className="flex-grow pt-[100px]">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/topics" element={<Topics />} />
              <Route path="/case-studies" element={<CaseStudies />} />
              <Route path="/about" element={<About />} />
              <Route path="/topics/load-balancing" element={<LoadBalancing />} />
              <Route path="/topics/caching" element={<Caching />} />
              <Route path="/topics/database-sharding" element={<DatabaseSharding />} />
              <Route path="/topics/microservices" element={<Microservices />} />
              <Route path="/topics/system-security" element={<SystemSecurity />} />
              <Route path="/topics/api-design" element={<APIDesign />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </Router>
    </ThemeProvider>
  );
}

export default App;