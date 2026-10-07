import React from 'react'
import RegisterForm from '../components/RegisterForm'
import loginBg from '../assets/login.png' 

const Register = () => {
    return (
        <div className="h-screen w-full flex flex-col md:flex-row overflow-hidden bg-white">
            
            {/* Left Side: 3D Image / Banner Section (Hidden on Mobile, Visible on Desktop) */}
            <div className="hidden md:flex md:w-1/2 h-full relative items-center justify-center bg-linear-to-tr from-purple-100 via-pink-100 to-blue-50">
                {/* Background Image overlay */}
                <div 
                    className="absolute inset-0"
                    style={{
                        backgroundImage: `url(${loginBg})`,
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                    }}
                />
                
                {/* Subtle overlay color to match your theme */}
                <div className="absolute inset-0 bg-slate-900/5 mix-blend-multiply" />
            </div>

            {/* Right Side: Signup Form Section */}
            <div className="w-full md:w-1/2 h-full flex items-center justify-center bg-white p-6 md:p-12 overflow-y-auto">
                <RegisterForm />
            </div>

        </div>
    )
}

export default Register