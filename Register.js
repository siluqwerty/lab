import React from 'react';
import Header from './Header';

export default function Register() {
    return (
        <div>
            <Header />

            <form>
                <h2>Registration Form</h2>
                <h3>First Name</h3><input type='text' />
                <h3>Last Name</h3><input type='text' />
                <h3>Mob. No.</h3><input type='number' />
                <h3>Adhar No.</h3><input type='number' />
                <h3>Select Course ID</h3><select>
                    <option>01FWD:Full Stack Web Development</option>
                    <option>02PHP:Hypertext Preprocessor</option>
                    <option>03PY:Python</option>
                    <option>04JS:Java Script</option>
                </select>
                <h2>Educational Qualification</h2>
                <h3>High School</h3>
                <h4>School Name</h4><input type='text' />
                <h4>Board Name</h4><input type='text' /><h4>Select Passout Date</h4><input type='date' />
                <h3>Graduation</h3>
                <h4>Institute Name</h4><input type='text' />
                <h4>Course Name</h4><input type='text' />
                <h4>Select Passout Date</h4><input type='date' />
                <button>REGISTER</button>
            </form>
        </div>
    )
}
