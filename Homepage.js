import React from 'react';
import Header from './Header';

import { useNavigate } from 'react-router-dom';


export default function Homepage() {
  const navigate = useNavigate();
  const lab1 = () => {
    navigate('/lab1');
  }
  const lab2 = () => {
    navigate('/lab2');
  }
  const lab3 = () => {
    navigate('/lab3');
  }
  const dashboard = () => {
    navigate('/Dashboard');
  }
  return (
    <div>
      <button onClick={dashboard}>Go To Dashboard</button>
      <Header />
      <center> <h3>Select lab to manage</h3></center>
      <div className='container'>
        <button className='card1' onClick={lab1}><h2>Lab no.1</h2></button>
        <button className='card2' onClick={lab2}><h2>Lab no.2</h2></button>
        <button className='card3' onClick={lab3}><h2>Lab no.3</h2></button>

      </div>
    </div>
  );
}
