import React from 'react'
import { useForm } from "react-hook-form"
import '../pages/Signup.css'
// import { setCookie } from 'react-use-cookie'
import { useCookies } from 'react-cookie'

function Login() {
    const {
        register,
        handleSubmit,
        watch,
        reset,
        formState: { errors },
      } = useForm()

      const [,setCookie] = useCookies();
    
      const onSubmit = (data) => {
        setCookie('user', data, { path: '/' })
        // console.log(data);
        reset()
      }
      // localStorage.setItem(`username${data.name}`,data.name)}
    
      console.log(watch("example"))
  return (
    <div className='max-w-lg h-auto my-5 mx-auto bg-blue-950 box-border py-5 px-0 rounded-md'>
      <form className='w-2/3 h-auto relative my-5 mx-auto' onSubmit={handleSubmit(onSubmit)}>
          <label className='text-white w-2/6 h-6'>Name : </label>
          <input type='text' {...register("name", { required: true })} /><br/>
          {errors.name && <p className="error">This field is required</p>}<br/>
          <label className='text-white w-2/6 h-6'>Contact No. : </label>
          <input type='number' {...register("number", { required: true, minLength:10, maxLength: 10 })} /><br/>
          {errors?.number?.type==='required' && <p className="error">This field is required</p>}
          {errors?.number?.type==='minLength' && <p className="error">should be 10 characters.</p>}
          {errors?.number?.type==='maxLength' && <p className="error">cannot exceed 10 characters.</p>}<br/>
          <label className='text-white w-2/6 h-6'>Email Id. : </label>
          <input type='email' {...register("email", { required: true })} /><br/>
          {errors.email && <p className="error">This field is required</p>}<br/>
          <label className='text-white w-2/6 h-6'>Gender : </label>
          <select {...register("gender")}>
            <option value="select">select</option>
            <option value="female">female</option>
            <option value="male">male</option>
            <option value="other">other</option>
          </select>
          <input type="submit" />
      </form>
    </div>
  )
}

export default Login
