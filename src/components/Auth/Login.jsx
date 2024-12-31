import React, { useState } from 'react'

const Login = ({handleLogin}) => {

    const[email,setEmail]=useState("");
    const[password,setPassword]=useState("");


    const submitHandler=(e)=>{
        // two way binding
        e.preventDefault();
        // console.log("Email is",email);
        // console.log("Password is",password);
        handleLogin(email,password);

        setEmail("");
        setPassword("");

    }
  return (
    <div className='flex h-screen w-screen items-center justify-center'>
        <div className='border-2 rounded-xl border-emerald-600 p-20'>
            <form onSubmit={(e)=>{
                submitHandler(e);
            }} className='flex flex-col items-center justify-center'>
                <input required className='outline-none bg-transparent border-2 border-emerald-600 py-3 px-5 text-xl rounded-full placeholder:text-gray-400
                ' type="email" placeholder='Enter your email' 
                value={email}
                onChange={(e)=>{
                    setEmail(e.target.value)
                }} 
                />

                <input required className='outline-none bg-transparent border-2 border-emerald-600 py-3 px-5 text-xl rounded-full mt-3 placeholder:text-gray-400' type="password" placeholder='Enter password' 
                value={password}
                onChange={(e)=>{
                    setPassword(e.target.value)
                }} 
                
                />

                <button className='text-white outline-none  bg-emerald-600 py-3 px-5 text-xl rounded-full mt-5 placeholder:text-white'>Log In</button>
            </form>
        </div>
      
    </div>
  )
}

export default Login
