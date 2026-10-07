import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const LoginForm = () => {
    // 1. Form State
    const [formData, setFormData] = useState({
        email: "",
        password: "",
    })

    // 2. Error State
    const [formErrors, setFormErrors] = useState({})

    // 3. Handle Input Change
    const handleChange = (e) => {
        const { name, value } = e.target
        setFormData({ ...formData, [name]: value })
    }

    // 4. Form Submit Handler
    const handleSubmit = (e) => {
        e.preventDefault()
        const errors = validate(formData)
        setFormErrors(errors)

        if (Object.keys(errors).length === 0) {
            console.log("Login Successful!");
            console.log(formData);
        }
    }

    // 5. Validation Logic
    const validate = (values) => {
        const errors = {};

        if (!values.email) {
            errors.email = "Email cannot be empty!"
        } else if (!/\S+@\S+\.\S+/.test(values.email)) {
            errors.email = "Invalid email address!"
        }

        if (!values.password) {
            errors.password = "Password cannot be empty!"
        } else if (values.password.length < 8) {
            errors.password = "Password must be at least 8 characters!"
        }

        return errors;
    }

    return (
        <div className='w-full max-w-md p-10 bg-white rounded-2xl shadow-lg border border-gray-100'>
            <form onSubmit={handleSubmit} className='w-full flex flex-col gap-5'>

                <h1 className='text-4xl font-semibold text-gray-950 text-center mb-4'>Login</h1>

                {/* Email Input */}
                <div className='w-full'>
                    <input
                        className={`w-full px-5 py-4 border rounded-lg outline-none text-sm transition-all ${
                            formErrors.email 
                                ? 'border-red-400 bg-red-50/20' 
                                : 'border-gray-200 bg-white focus:border-teal-500'
                        }`}
                        type="email" 
                        name="email" 
                        placeholder="Enter your email"
                        value={formData.email}
                        onChange={handleChange}
                    />
                    {formErrors.email && (
                        <p className='text-xs text-red-500 mt-1 px-1 font-medium'>{formErrors.email}</p>
                    )}
                </div>

                {/* Password Input */}
                <div className='w-full'>
                    <input
                        className={`w-full px-5 py-4 border rounded-lg outline-none text-sm transition-all ${
                            formErrors.password 
                                ? 'border-red-400 bg-red-50/20' 
                                : 'border-gray-200 bg-white focus:border-teal-500'
                        }`}
                        type="password" 
                        name="password" 
                        placeholder="Enter your password" 
                        value={formData.password}
                        onChange={handleChange}
                    />
                    {formErrors.password && (
                        <p className='text-xs text-red-500 mt-1 px-1 font-medium'>{formErrors.password}</p>
                    )}
                </div>

                {/* Submit Button */}
                <button 
                    type="submit" 
                    className='w-full bg-[#009688] hover:bg-[#00796b] text-white py-4 rounded-lg font-bold text-base mt-2 transition-all cursor-pointer shadow-sm active:scale-[0.99]'
                >
                    Login
                </button>

                {/* Bottom Redirection Link */}
                <p className='text-sm text-gray-600 text-center mt-3'>
                    Don't have an account?{' '}
                    <Link to="/register" className='text-[#009688] font-bold hover:underline'>
                        Signup
                    </Link>
                </p>
            </form>
        </div>
    )
}

export default LoginForm