import React from 'react'
import Login from '../components/Login'
// import { CookiesProvider } from 'react-cookie'
// import Welcome from '../components/Welcome'
// import { getCookie } from 'react-use-cookie'
// import { useCookies } from 'react-cookie'

function SignUp() {

  // const[cookies] = useCookies('user');
  return (
    <div>
      <h1 className='text-3xl text-center'>Sign Up</h1>
      <Login />
      {/* <div>{cookies.user ? <Welcome /> : <Login /> }</div> */}
    </div>
  )
}

export default SignUp