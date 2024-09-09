
import React, { useState } from 'react';
import Header from './Header';



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
      <div className='pcContainer'>
        <div className='div1'>
          <center> <button className='infoBtn' onClick={getSystemInfo}>Show System Info</button></center>
          {systemInfo && (
            <div>
              <center>
                <p><strong>User Agent:</strong> {systemInfo.userAgent}</p>
                <p><strong>Platform:</strong> {systemInfo.platform}</p>
                <p><strong>Language:</strong> {systemInfo.language}</p>
                <p><strong>Online Status:</strong> {systemInfo.onlineStatus}</p>
              </center>
            </div>
          )}
        </div>
        <div className='div2'>
          <center> <h3>Booking Slots</h3></center>
          <table align='center'>
            <tr>
              <td> <h4>Name</h4></td>
              <td><input type='text' /></td>
            </tr>
            <tr>
              <td> <h4>UPTEC ID</h4></td>
              <td><input type='text' /></td>
            </tr>
            <tr>
              <td> <h4>Select Time Slots</h4></td>
              <td> <select>
                <option>10:00 AM - 12:00 PM</option>
                <option>12:00 PM - 02:00 PM</option>
                <option>02:00 PM - 04:00 PM</option>
                <option>04:00 PM - 06:00 PM</option>
              </select></td>
            </tr>
            <tr>
              <td><h4>Select Date</h4></td>
              <td><input type='date' /></td>
            </tr>
            <tr>
              <td></td>
              <td align='left'> <button>BOOK</button></td>
            </tr>
          </table>
        </div>
        <div className='div3'>
          <center>
            <h3>Report Maintanence</h3>
            <h4>Problem type</h4><input type='checkbox' />Hardware
            <input type='checkbox' />Software
            <h4>Mention details</h4><textarea cols={40} rows={5} />
            <br></br> <br></br>
            <button>Report</button>
          </center>
        </div>
      </div>
    </div >
  )
}
