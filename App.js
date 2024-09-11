import React, { useState } from 'react';
import LoginForm from './LoginForm';
import HomePage from './Homepage';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Lab1 from './Lab1';
import Lab2 from './Lab2';
import Lab3 from './Lab3';
import L1pc1 from './l1pc1';
import L1pc2 from './l1pc2';
import L1pc3 from './l1pc3';
import L1pc4 from './l1pc4';
import L1pc5 from './l1pc5';
import L1pc6 from './l1pc6';
import L1pc7 from './l1pc7';
import L1pc8 from './l1pc8';
import L1pc9 from './l1pc9';
import L1pc10 from './l1pc10';
import L1pc11 from './l1pc11';
import L1pc12 from './l1pc12';
import L1pc13 from './l1pc13';
import L1pc14 from './l1pc14';
import L1pc15 from './l1pc15';
import L1pc16 from './l1pc16';
import L2pc1 from './l2pc1';
import L2pc2 from './l2pc2';
import L2pc3 from './l2pc3';
import L2pc4 from './l2pc4';
import L2pc5 from './l2pc5';
import L2pc6 from './l2pc6';
import L2pc7 from './l2pc7';
import L2pc8 from './l2pc8';
import L2pc9 from './l2pc9';
import L2pc10 from './l2pc10';
import L2pc11 from './l2pc11';
import L2pc12 from './l2pc12';
import L2pc13 from './l2pc13';
import L2pc14 from './l2pc14';
import L2pc15 from './l2pc15';
import L2pc16 from './l2pc16';
import L3pc1 from './l3pc1';
import L3pc2 from './l3pc2';
import L3pc3 from './l3pc3';
import L3pc4 from './l3pc4';
import L3pc5 from './l3pc5';
import L3pc6 from './l3pc6';
import L3pc7 from './l3pc7';
import L3pc8 from './l3pc8';
import L3pc9 from './l3pc9';
import L3pc10 from './l3pc10';
import L3pc11 from './l3pc11';
import L3pc12 from './l3pc12';
import L3pc13 from './l3pc13';
import L3pc14 from './l3pc14';
import L3pc15 from './l3pc15';
import L3pc16 from './l3pc16';

import Register from './Register'
import Dashboard from './Dashboard';
import './App.css';


export default function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <div className={isDarkMode ? 'dark-mode' : 'light-mode'}>
      <button className='themeBtn' onClick={toggleTheme}>
        {isDarkMode ? 'Light' : 'Dark'}
      </button>
      <Router>
        <Routes>
          <Route exact path="/" element={<LoginForm />} />
          <Route exact path="/home" element={<HomePage />} />
          <Route exact path="/lab1" element={<Lab1 />} />
          <Route exact path="/lab2" element={<Lab2 />} />
          <Route exact path="/lab3" element={<Lab3 />} />
          <Route exact path="/l1pc1" element={<L1pc1 />} />
          <Route exact path="/l1pc2" element={<L1pc2 />} />
          <Route exact path="/l1pc3" element={<L1pc3 />} />
          <Route exact path="/l1pc4" element={<L1pc4 />} />
          <Route exact path="/l1pc5" element={<L1pc5 />} />
          <Route exact path="/l1pc6" element={<L1pc6 />} />
          <Route exact path="/l1pc7" element={<L1pc7 />} />
          <Route exact path="/l1pc8" element={<L1pc8 />} />
          <Route exact path="/l1pc9" element={<L1pc9 />} />
          <Route exact path="/l1pc10" element={<L1pc10 />} />
          <Route exact path="/l1pc11" element={<L1pc11 />} />
          <Route exact path="/l1pc12" element={<L1pc12 />} />
          <Route exact path="/l1pc13" element={<L1pc13 />} />
          <Route exact path="/l1pc14" element={<L1pc14 />} />
          <Route exact path="/l1pc15" element={<L1pc15 />} />
          <Route exact path="/l1pc16" element={<L1pc16 />} />
          <Route exact path="/l2pc1" element={<L2pc1 />} />
          <Route exact path="/l2pc2" element={<L2pc2 />} />
          <Route exact path="/l2pc3" element={<L2pc3 />} />
          <Route exact path="/l2pc4" element={<L2pc4 />} />
          <Route exact path="/l2pc5" element={<L2pc5 />} />
          <Route exact path="/l2pc6" element={<L2pc6 />} />
          <Route exact path="/l2pc7" element={<L2pc7 />} />
          <Route exact path="/l2pc8" element={<L2pc8 />} />
          <Route exact path="/l2pc9" element={<L2pc9 />} />
          <Route exact path="/l2pc10" element={<L2pc10 />} />
          <Route exact path="/l2pc11" element={<L2pc11 />} />
          <Route exact path="/l2pc12" element={<L2pc12 />} />
          <Route exact path="/l2pc13" element={<L2pc13 />} />
          <Route exact path="/l2pc14" element={<L2pc14 />} />
          <Route exact path="/l2pc15" element={<L2pc15 />} />
          <Route exact path="/l2pc16" element={<L2pc16 />} />
          <Route exact path="/l3pc1" element={<L3pc1 />} />
          <Route exact path="/l3pc2" element={<L3pc2 />} />
          <Route exact path="/l3pc3" element={<L3pc3 />} />
          <Route exact path="/l3pc4" element={<L3pc4 />} />
          <Route exact path="/l3pc5" element={<L3pc5 />} />
          <Route exact path="/l3pc6" element={<L3pc6 />} />
          <Route exact path="/l3pc7" element={<L3pc7 />} />
          <Route exact path="/l3pc8" element={<L3pc8 />} />
          <Route exact path="/l3pc9" element={<L3pc9 />} />
          <Route exact path="/l3pc10" element={<L3pc10 />} />
          <Route exact path="/l3pc11" element={<L3pc11 />} />
          <Route exact path="/l3pc12" element={<L3pc12 />} />
          <Route exact path="/l3pc13" element={<L3pc13 />} />
          <Route exact path="/l3pc14" element={<L3pc14 />} />
          <Route exact path="/l3pc15" element={<L3pc15 />} />
          <Route exact path="/l3pc16" element={<L3pc16 />} />
          <Route exact path="/Register" element={<Register />} />
          <Route exact path="/dashboard" element={<Dashboard />} />

        </Routes>
      </Router>
    </div>

  );
}

