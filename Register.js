import React from 'react';
import Header from './Header';

export default function Register() {
    return (
        <div>
            <Header />
            <center>
                <h2>Registration Form</h2>
                <form>
                    <table>
                        <tr>
                            <td><h3>First Name</h3><input type='text' /></td>
                            <td><h3>Last Name</h3><input type='text' /></td>
                            <td><h3>Mob. No.</h3><input type='number' /></td>
                            <td><h3>Adhar No.</h3><input type='number' /></td>
                            <td><h3>Select Course ID</h3><select>
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
                            <td><h4>School Name</h4><input type='text' /></td>
                            <td><h4>Board Name</h4><input type='text' /></td>
                            <td><h4>Select Passout Date</h4><input type='date' /></td>
                        </tr>
                        <tr>
                            <td></td>
                            <td><h3>Graduation</h3></td>
                            <td> <h4>Institute Name</h4><input type='text' /></td>
                            <td> <h4>Course Name</h4><input type='text' /></td>
                            <td><h4>Select Passout Date</h4><input type='date' /></td>
                        </tr>
                    </table>
                    <input type='submit' className='regBtn'></input>
                </form>
            </center>
        </div>
    )
}
