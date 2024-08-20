
import React, { useState } from 'react';
import Header from './Header';
import './pc.css';


export default function Pc() {

  const [systemInfo, setSystemInfo] = useState(null);

  const getSystemInfo = () => {
    const info = {
      userAgent: navigator.userAgent,
      platform: navigator.platform,
      language: navigator.language,
      onlineStatus: navigator.onLine ? "Online" : "Offline"
    };
    setSystemInfo(info);
  };

  return (
    <div>
      <Header />
      <div className='div1'>
        <button onClick={getSystemInfo}>Show System Info</button>
        {systemInfo && (
          <div>
            <p><strong>User Agent:</strong> {systemInfo.userAgent}</p>
            <p><strong>Platform:</strong> {systemInfo.platform}</p>
            <p><strong>Language:</strong> {systemInfo.language}</p>
            <p><strong>Online Status:</strong> {systemInfo.onlineStatus}</p>
          </div>
        )}
      </div>
      <div className='div2'>
        <h3>Booking Slots</h3>
        <h4>Name</h4><input type='text' />
        <h4>Student ID</h4><input type='text' />
        <select>Select slot
          <option>10:00 AM - 12:00 PM</option>
          <option>12:00 PM - 02:00 PM</option>
          <option>02:00 PM - 04:00 PM</option>
          <option>04:00 PM - 06:00 PM</option>
        </select> <input type='date' /><br></br>
        <button>BOOK</button>
      </div>
      <div className='div3'>

        <h3>Report Maintanence</h3>
        <h4>Problem type</h4><input type='checkbox' />Hardware
        <input type='checkbox' />Software
        <h4>Mention details</h4><textarea cols={40} rows={5} />



      </div>
    </div>
  )
}
