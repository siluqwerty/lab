import React from 'react';
import Header from './Header';
import { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

export default function Register() {
    const [formData, setFormData] = useState({
        name: '',
        password: '',
        mob: '',
        adhar: '',
        courseid: '',
        schoolname: '',
        schoolboard: '',
        schoolpass: '',
        institutename: '',
        institutecourse: '',
        institutepass: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };
    const navigate = useNavigate();
    const handleSubmit = (e) => {
        e.preventDefault();

        axios.post('http://localhost:5000/api/signup', formData)
            .then((response) => {
                if (response.status === 200) {
                    console.log('User signed up successfully');
                    alert('you are now a regitered user of uptec. please remember your password');
                    navigate('/');

                }
            })
            .catch((error) => {
                console.error('Error during sign up:', error.response ? error.response.data : error.message);
            });
    };
    return (
        <div>
            <Header />
            <center>
                <h2>Registration Form</h2>
                <form onSubmit={handleSubmit}>
                    <table>
                        <tr>
                            <td><h3> Name</h3><input type='text' name="name" onChange={handleChange} value={formData.name} required /></td>
                            <td><h3>Set Password</h3><input type='text' name="password" onChange={handleChange} value={formData.password} required /></td>
                            <td><h3>Mob. No.</h3><input type='number' name="mob" onChange={handleChange} value={formData.mob} required /></td>
                            <td><h3>Adhar No.</h3><input type='number' name="adhar" onChange={handleChange} value={formData.adhar} required /></td>
                            <td><h3>Select Course ID</h3><select name="courseid" onChange={handleChange} value={formData.courseid} required >
                                <option>course ID</option>
                                <option><li>01FWD:Full Stack Web Development</li></option>
                                <option><li>02PHP:Hypertext Preprocessor</li></option>
                                <option><li>03PY:Python</li></option>
                                <option><li>04JS:Java Script</li></option>
                            </select></td>
                        </tr>
                        <tr>
                            <td><h2>Educational <br></br>Qualification</h2></td>
                            <td><h3>High School</h3></td>
                            <td><h4>School Name</h4><input type='text' name="schoolname" onChange={handleChange} value={formData.schoolname} required /></td>
                            <td><h4>Board Name</h4><input type='text' name="schoolboard" onChange={handleChange} value={formData.schoolboard} required /></td>
                            <td><h4>Select Passout Date</h4><input type='date' name="schoolpass" onChange={handleChange} value={formData.schoolpass} required /></td>
                        </tr>
                        <tr>
                            <td></td>
                            <td><h3>Graduation</h3></td>
                            <td> <h4>Institute Name</h4><input type='text' name="institutename" onChange={handleChange} value={formData.institutename} /></td>
                            <td> <h4>Course Name</h4><input type='text' name="institutecourse" onChange={handleChange} value={formData.institutecourse} /></td>
                            <td><h4>Select Passout Date</h4><input type='date' name="institutepass" onChange={handleChange} value={formData.institutepass} /></td>
                        </tr>
                    </table>
                    <button className='themeBtn' type="submit"> REGISTER</button>
                </form>
            </center>
        </div>
    )
}
