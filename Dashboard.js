import Header from './Header';
import React, { useState } from 'react';
import axios from 'axios';

export default function Dashboard() {
    const [data, setData] = useState([]);
    const [data1, setData1] = useState([]);
    const [data2, setData2] = useState([]);

    // Function to fetch student data
    const fetchStudentData = () => {
        axios.get('http://localhost:5000/studentdata')
            .then((response) => {
                setData(response.data); // Store the received data in state
            })
            .catch((error) => {
                console.error('Error fetching student data:', error);
            });
    };

    // Function to fetch booked PC data
    const fetchBookedPCData = () => {
        axios.get('http://localhost:5000/showpc')
            .then((response) => {
                setData1(response.data); // Store the received data in state
            })
            .catch((error) => {
                console.error('Error fetching booked PC data:', error);
            });
    };

    // Function to fetch maintenance data
    const fetchMaintenanceData = () => {
        axios.get('http://localhost:5000/showmaintenance')
            .then((response) => {
                setData2(response.data); // Store the received data in state
            })
            .catch((error) => {
                console.error('Error fetching maintenance data:', error);
            });
    };

    return (
        <div>
            <Header />
            <div className='pcContainer'>
                <div className='div1'>
                    <button onClick={fetchStudentData}>Student Data</button>
                    <table border="1">
                        <thead>
                            <tr>
                                <th>Name</th>
                                <th>Contact</th>
                                <th>Adhar no.</th>
                                <th>Course</th>
                                <th>School</th>
                                <th>College</th>
                            </tr>
                        </thead>
                        <tbody>
                            {data.map((item) => (
                                <tr key={item.id}>
                                    <td>{item.name}</td>
                                    <td>{item.mobile_no}</td>
                                    <td>{item.aadhar_no}</td>
                                    <td>{item.course_id}</td>
                                    <td>{item.high_school_name}</td>
                                    <td>{item.graduation_institute}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>

                <div className='div2'>
                    <button onClick={fetchBookedPCData}>List of Booked PC</button>
                    <table border="1">
                        <thead>
                            <tr>
                                <th>PC Name</th>
                                <th>Booked by</th>
                                <th>Uptec ID</th>
                                <th>Booked Time Slot</th>
                                <th>Booked for Date</th>
                            </tr>
                        </thead>
                        <tbody>
                            {data1.map((item) => (
                                <tr key={item.id}>
                                    <td>{item.pc_name}</td>
                                    <td>{item.name}</td>
                                    <td>{item.uptec_id}</td>
                                    <td>{item.time}</td>
                                    <td>{item.date}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>

                <div className='div3'>
                    <button onClick={fetchMaintenanceData}>Check Maintenance</button>
                    <table border="1">
                        <thead>
                            <tr>
                                <th>Problem Type</th>
                                <th>Details</th>
                            </tr>
                        </thead>
                        <tbody>
                            {data2.map((item) => (
                                <tr key={item.id}>
                                    <td>{item.problem_type}</td>
                                    <td>{item.details}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
} 
