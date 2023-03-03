import React from 'react'

export default function ForgotPassword() {
  return (
    <div class="main-block my-3">
    <h1>Forgot Password</h1>
    <form className='signUpForm'>
      <hr/>
      <label id="icon" for="name"><i class="fas fa-envelope"></i></label>
      <input type="text" name="name" id="name" placeholder="Email" required/>

      <hr/>
      <div class="btn-block">

        <button onClick={()=>{alert("Reset link has been sent to your email")}}>Reset Password</button>
      </div>
    </form>
  </div>
  )
}
