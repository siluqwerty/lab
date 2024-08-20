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
      <div className='container'>
        <div className='card1'><button onClick={lab1}>lab no.1</button></div>
        <div className='card2'><button onClick={lab2}>lab no.2</button></div>
        <div className='card3'><button onClick={lab3}>lab no.3</button></div>

      </div>
    </div>
  );
}
