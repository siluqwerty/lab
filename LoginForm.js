import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import uptec from './uptec.png';



export default function Login() {
  const [id, setId] = useState();
  const [password, setPassword] = useState();
  const navigate = useNavigate();
  const Loginset = (e) => {
    e.preventDefault();
    if (id === '123' && password === '123') {
      navigate('/home');
    }
    else {
      alert('wrong id or password');
    }
  }

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
                <th>UPTEC ID</th>
                <th><input type="text" value={id} className="input" onChange={(e) => setId(e.target.value)} /></th>
              </tr>
              <tr>
                <th>Password</th>
                <th><input type="password" value={password} className="input" onChange={(e) => setPassword(e.target.value)} /></th>
              </tr>
              <tr>
                <th><button className="login" onClick={Loginset}>LOGIN</button></th>
              </tr>
            </table>
            <div className="regbtn"><button onClick={registernav}>REGISTER</button></div>
          </form>

        </div>
        <center>
          <h4 className='uptecanchor'>Click here to go<a href="http://www.uptecnet.com"><font size="5">UPTEC</font> </a> website</h4>
        </center>

      </div>
    </div >

  );
}
