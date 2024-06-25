import React,{useEffect,useState} from 'react'
import axios from "axios"
import{useNavigate,Link} from 'react-router-dom';
import './style.css';
// import './Loginsign.css';


function Login () {
const history=useNavigate();

    const [username,setUsername]=useState('')
    const [password,setPassword]=useState('')

    async function submit(e){
        e.preventDefault();
    try{
        await axios.post("http://localhost:8000/",{
            username,password
        })
        .then(res=>{
            if(res.data==="exist"){
                // const loggedInUsername = 'setUsername'; // Replace with actual username
                // localStorage.setItem('username', loggedInUsername);
                // history(`/home/${username}`);
                history("/home1",{ state: {id: username } });
            }
            else if(res.data==="notexist"){
                alert("user have not sign up")
            }
            else if(res.data==="passwordnotexist"){
                alert("incorrect password")
            }
        })
        .catch(e=>{
            alert("wrong details")
            console.log(e);
        })
    }
    catch{
        console.log(e);
    }
}

    

  return (
    <div className='body'>
    <div className='container'>
        <h1>Login</h1>
        <form action="POST">
            <div className='inputbox'>
                <label className='lab' for="name">Username</label>            
             <input type="text" onChange={(e)=>{setUsername(e.target.value)}} placeholder="" name="text" id="text" required/>

            </div>
           
            <div className='inputbox'>
                <label className='lab' for="Password">Password</label>
                <input type="password" onChange={(e)=>{setPassword(e.target.value)}} placeholder="" name="password" id="password" required/>
            </div>
            <div className='subclass'>
            <input type="submit" className='sub' onClick={submit}/>

            </div>


        </form>
        <br/>
        <p>Forgot password?</p>
        <p><Link to='/signup'>Signup page</Link></p>
    </div>
    </div>
  )
}
export default Login;