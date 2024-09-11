import { useState } from 'react';
import axios from 'axios';
import Header from './Header';



export default function Pc() {
  const [formData, setFormData] = useState({
    pcname: '',
    name: '',
    uptecid: '',
    time: '',
    date: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    axios.post('http://localhost:5000/bookedpc', formData)
      .then((response) => {
        if (response.status === 200) {
          console.log('pc booked');
          alert('your uptec pc and class is booked, be on time to attend the class');
        }
      })
      .catch((error) => {
        console.error('Error during booking:', error.response ? error.response.data : error.message);
      });
  };
  const [formData1, setFormData1] = useState({
    problem: '',
    details: ''
  });

  const handleChange1 = (e) => {
    const { name, value } = e.target;
    setFormData1((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit1 = (e) => {
    e.preventDefault();

    axios.post('http://localhost:5000/report', formData1)
      .then((response) => {
        if (response.status === 200) {
          console.log('report sended');
          alert('your report has been submitted');
        }
      })
      .catch((error) => {
        console.error('Error during report:', error.response ? error.response.data : error.message);
      });
  };

  return (
    <div>
      <Header />
      <center><h4 className='pcname'>PC NAME: L3PC7</h4></center>
      <div className='pcContainer'>
        <div className='div1'>
          <center> <button className='infoBtn'>Profile</button></center>

        </div>
        <div className='div2'>
          <center> <h3>Booking Slots</h3></center>
          <form onSubmit={handleSubmit}>
            <table align='center'>
              <tr>
                <td> <h4>PC Name</h4></td>
                <td><input type='text' name="pcname" onChange={handleChange} value={formData.pcname} required /></td>
              </tr>
              <tr>
                <td> <h4>Name</h4></td>
                <td><input type='text' name="name" onChange={handleChange} value={formData.name} required /></td>
              </tr>
              <tr>
                <td> <h4>UPTEC ID</h4></td>
                <td><input type='text' name="uptecid" onChange={handleChange} value={formData.uptecid} required /></td>
              </tr>
              <tr>
                <td> <h4>Select Time Slots</h4></td>
                <td> <select name="time" onChange={handleChange} value={formData.time} required>
                  <option>10:00 AM - 12:00 PM</option>
                  <option>12:00 PM - 02:00 PM</option>
                  <option>02:00 PM - 04:00 PM</option>
                  <option>04:00 PM - 06:00 PM</option>
                </select></td>
              </tr>
              <tr>
                <td><h4>Select Date</h4></td>
                <td><input type='date' name="date" onChange={handleChange} value={formData.date} required /></td>
              </tr>
              <tr>
                <td></td>
                <td align='left'> <button type='submit'>BOOK</button></td>
              </tr>
            </table>
          </form>
        </div>
        <div className='div3'>
          <center>
            <h3>Report Maintanence</h3>
            <form onSubmit={handleSubmit1}>
              <h4 className='exm'>Problem type <br></br> Hardwarwe/Software</h4><input type='text' name="problem" onChange={handleChange1} value={formData.problem} required ></input>
              <h4 className='exm'>Mention details</h4><textarea cols={40} rows={5} name="details" onChange={handleChange1} value={formData.details} required />
              <br></br>
              <button type='submit'>Report</button>
            </form>
          </center>
        </div>
      </div>
    </div >
  )
}
