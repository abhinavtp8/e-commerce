import React from 'react'
import LoginForm from '../components/LoginForm'
import loginImg from '../assets/login.png'

const Login = () => {
    return (
        <div className='flex h-screen justify-center items-center'>
            
            <div className='flex-1 hidden h-full md:flex justify-center items-center'>
                <img className='w-full h-full object-cover' src={loginImg} alt="login image" />
            </div>
            
           
            <div className='flex-1 h-full flex justify-center items-center'>
                <LoginForm />
            </div>
        </div>
    )
} 

export default Login