import React from 'react'
import { Link } from 'react-router-dom'
import Header from './header'

function PasswordReset() {
  return (
    <div>
         <Header />

<div class ="container">
<div class="row">
<div class="col-sm-12">
<h2 className='secHeader'>Sign In</h2>
     <input className='username' type ="text" placeholder='Enter Email/Username' /> <br></br> <br></br>
     <input className='password' type ="password" placeholder='Enter new Password' /><br></br> <br></br>
     <input className='username' type ="text" placeholder='Repeat Password' /> <br></br><br></br>
     <p>
     <Link to="/"> <button className='ResetBtn'>Reset Password</button> </Link>
     </p>
   
     <br></br> 
     <a href='/' style={{color: "green"}}>Back to Login</a>
</div>
</div>

</div>
</div>
  
  )
}

export default PasswordReset