import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import SignIn from './SignIn'

export default function SignUp() {
    const navigate = useNavigate()
    const handleSubmit = () => {
        navigate('/profile')    

    }
  return (
    <>
    <div class="main-block my-3">
      <h1>Registration</h1>
      <form className='signUpForm'>
        <hr/>
        <label id="icon" for="name"><i class="fas fa-user"></i></label>
        <input type="text" name="name" id="name" placeholder="Name" required/>

        <label id="icon" for="name"><i class="fas fa-envelope"></i></label>
        <input type="text" name="name" id="name" placeholder="Email" required/>
       
        <label id="icon" for="name"><i class="fas fa-unlock-alt"></i></label>
        <input type="password" name="name" id="name" placeholder="Password" required/>

        <label id="icon" for="name"><i class="fas fa-envelope"></i></label>
        <input type="text" name="name" id="name" placeholder="phone" required/>
        <hr/>
        <div class="gender">
          <input type="radio" value="none" id="male" name="gender" checked/>
          <label for="male" class="radio">Male</label>
          <input type="radio" value="none" id="female" name="gender" />
          <label for="female" class="radio">Female</label>
        </div>
        <hr/>
        <div class="btn-block">
          <p>By clicking Register, you agree on our <a href="https://www.w3docs.com/privacy-policy">Privacy Policy for W3Docs</a>.</p>
          <p>Already user?<span onClick={()=>navigate("/login")}> Log in</span></p>

          <button onClick={handleSubmit}>Submit</button>
        </div>
      </form>
    </div>
    </>
  )
}
