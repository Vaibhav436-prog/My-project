import React from 'react'
import { useNavigate } from 'react-router-dom'

export default function SignIn() {
    const navigate = useNavigate()
    const handleSubmit = () => {
        navigate('/profile')

    }
  return (
    <div class="main-block my-3">
    <h1>Sign In</h1>
    <form className='signUpForm'>
      <hr/>
      <label id="icon" for="name"><i class="fas fa-envelope"></i></label>
      <input type="text" name="name" id="name" placeholder="Email" required/>
     
      <label id="icon" for="name"><i class="fas fa-unlock-alt"></i></label>
      <input type="password" name="name" id="name" placeholder="Password" required/>

      <hr/>
      <div class="btn-block">
        <p>Don't have account?<span onClick={()=>navigate("/")}> Sign Up</span></p>
        <p>Forgot password?<span onClick={()=>navigate("/forgot_password")}> Reset password</span></p>


        <button onClick={handleSubmit}>Log In</button>
      </div>
    </form>
  </div>
  )
}
