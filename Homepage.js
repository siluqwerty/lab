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

  return (
    <div>
      <Header />

      <center> <h3 className='homeHeading'>Select lab to manage</h3></center>
      <div className='container'>
        <button className='labBtn' onClick={lab1}><div className='doorplate'><h2 className='labnumb'>Lab 1</h2></div><div className='nophone'></div></button>
        <button className='labBtn' onClick={lab2}><div className='doorplate'><h2 className='labnumb'>Lab 2</h2></div><div className='nophone'></div></button>
        <button className='labBtn' onClick={lab3}><div className='doorplate'><h2 className='labnumb'>Lab 3</h2></div><div className='nophone'></div></button>

      </div>
      <div className='profcontain'>
        <div><button className='prof'>Profile</button>
        </div>
        <div> <button className='uprof'>Update Profile</button>
        </div>
      </div>
    </div >
  );
}
