import React from 'react'
import { Link } from 'react-router-dom'
import Header from './header'

function SignUp() {
  return (
    <div>
    <Header />

    <div class = "container">
        <h2 className='secHeader'>Create Account</h2>
         <input className='username' type ="text" placeholder='Enter Email/Username' /> <br></br> <br></br>
         <input className='password' type ="password" placeholder='Set Password' /><br></br> <br></br>
         <input className='password' type ="password" placeholder='Repeat Password' />
         <p>
         <Link to="/Dashboard"> <button className='loginBtn'>Sign Up</button> </Link>
         </p>
       
         <br></br> <br></br>
         <a href='/' style={{color: "green"}}>Back to Login</a>

    </div>
</div>
  )
}

export default SignUp