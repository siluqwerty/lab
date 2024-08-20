import React from 'react';
import LoginForm from './LoginForm';
import HomePage from './Homepage';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Lab1 from './Lab1';
import Lab2 from './Lab2';
import Lab3 from './Lab3';
import Pc from './pc';
import Register from './Register'
import Dashboard from './Dashboard';

export default function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route exact path="/" element={<LoginForm />} />
          <Route exact path="/home" element={<HomePage />} />
          <Route exact path="/lab1" element={<Lab1 />} />
          <Route exact path="/lab2" element={<Lab2 />} />
          <Route exact path="/lab3" element={<Lab3 />} />
          <Route exact path="/pc" element={<Pc />} />
          <Route exact path="/Register" element={<Register />} />
          <Route exact path="/dashboard" element={<Dashboard />} />

        </Routes>
      </Router>
    </div>

  );
}

