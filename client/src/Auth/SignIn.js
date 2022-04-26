import React from 'react'
import Header from './header'
import './css/SignIn.css'
import { Link } from 'react-router-dom'

function SignIn() {
  return (
    <div>
        <Header />

        <div class="container">
            <h2 className='secHeader'>Sign In</h2>
             <input className='username' type ="text" placeholder='Enter Email/Username' /> <br></br> <br></br>
             <input className='password' type ="password" placeholder='Enter Password' /><br></br> <br></br>
             <p>
             <Link to="/Dashboard"> <button className='loginBtn'>Login</button> </Link>
             </p>
             <br></br> <br></br>
             <a style={{color: "red"}} href='/PasswordReset'>Forgot password</a>
             <br></br> <br></br>
             <a href='/SignUp' style={{color: "green"}}>Create Account</a> <br></br>

             <p>
                 <Link to="/Dashboard"><button className='loginWithGoogle'>Login With Google</button></Link>
             </p>

             <p>
             <Link to="/Dashboard"><button className='loginWithLinkedIn'>login With LinkedIn</button></Link>
             </p>
             <p>
             <Link to="/Dashboard"><button className='loginWithFacebook'>login With FaceBook</button></Link>
             </p>
        </div>
    </div>
  )
}

export default SignIn