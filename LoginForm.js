import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import uptec from './uptec.png';
import axios from 'axios';

export default function Login() {
  const [name, setName] = useState();
  const [password, setPassword] = useState();
  const navigate = useNavigate();
  const Loginset = (e) => {
    e.preventDefault();
    axios.post('http://localhost:5000/login', {
      name,
      password,
    })
      .then((response) => {
        if (response.data === 'Login successful') {

          navigate('/home');
        } else {
          alert('Invalid credentials');
        }
      })
      .catch((error) => {
        console.error('Error:', error);
        alert('Error during login. Please try again.');
      });
  };
  const registernav = () => {
    navigate('/register');
  }

  return (
    <div>
      <div className="body1">

      </div>
      <div className="body2">
        <div className="head1">
          <div className="container-logo">
            <img className="upteclogo" src={uptec} alt='daya! kuch gadbad hai' />
          </div>
        </div>
        <p align="center"> KANPUR</p>
        <div className="head2">
          <h2 align="center">LAB MANAGEMENT SYSTEM</h2>
        </div>
        <div className="head3">
          <h3 align="center">Please login to manage UPTEC labs</h3>
        </div>
        <div className="form">
          <form>
            <table cellspacing="20px" align="center">
              <tr>
                <th>Name</th>
                <th><input type="text" value={name} className="input" onChange={(e) => setName(e.target.value)} /></th>
              </tr>
              <tr>
                <th>Password</th>
                <th><input type="password" value={password} className="input" onChange={(e) => setPassword(e.target.value)} /></th>
              </tr>
              <tr>
                <th><button className="login" onClick={Loginset}>LOGIN</button></th>
                <th align='right'><button className='regbtn' onClick={registernav}>REGISTER</button></th>
              </tr>
            </table>

          </form>

        </div>
        <center>
          <h4 className='uptecanchor'>Click here to go<a href="http://www.uptecnet.com"><font size="5">UPTEC</font> </a> website</h4>
        </center>

      </div>
    </div >

  );
}
