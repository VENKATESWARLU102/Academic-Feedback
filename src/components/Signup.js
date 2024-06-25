import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate, Link } from 'react-router-dom';
import './style.css';
// import './Loginsign.css';


function Signup() {
    const history = useNavigate();
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    async function submit(e) {
        e.preventDefault();
        try {
            const res = await axios.post('http://localhost:8000/signup', {
            
                username,
                password
            });
    
            if (res.data === 'exist') {
                alert('User already exists');
            } else if (res.data === 'notexist') {
            //    history('/home', { state: { id: username } });
            console.log("not matched");
   
            history("/home1");

            }
        } catch (error) {
            console.log('Error:', error.message);
            alert('Network Error: Unable to reach the server');
        }
    }

    return (
        <div className='body'>
        <div className='container'>
            <h1>Signup</h1>
            <form onSubmit={submit}>
                {/* <div className='inputbox'>
                    <label className='lab' htmlFor="email">Email</label>
                    <input type="email" onChange={(e) => setEmail(e.target.value)} placeholder="" name="email" id="email" required/>
                </div>   */}
                <div className='inputbox'>
                    <label className='lab' htmlFor="text">Username</label>
                    <input type="text" onChange={(e) => setUsername(e.target.value)} placeholder="" name="text" id="text" required/>
                </div>
                <div className='inputbox'>
                    <label className='lab' htmlFor="password">Password</label>
                    <input type="password" onChange={(e) => setPassword(e.target.value)} placeholder="" name="password" id="password" required/>
                </div> 
                <div className='subclass'>
                    <input type="submit" className='sub' />
                </div>
            </form>
            <br />
            <p><Link to='/'>Login page</Link></p>
        </div>
        </div>
    );
}

export default Signup;
