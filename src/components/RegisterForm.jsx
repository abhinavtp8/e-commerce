import React, { useState } from 'react'
import { Link } from 'react-router-dom' // Routing ഉണ്ടെങ്കിൽ മാത്രം ഉപയോഗിക്കുക, അല്ലെങ്കിൽ സാധാരണ <a> ടാഗ് നൽകാം

const RegisterForm = () => {
    // 1. Form State
    const [formData, setFormData] = useState({
        email: "",
        password: "",
        confirmPassword: ""
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
            console.log("Signup Successful!");
            console.log(formData);
        }
    }

    // 5. Basic Validation
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

        if (!values.confirmPassword) {
            errors.confirmPassword = "Confirm password cannot be empty!"
        } else if (values.confirmPassword !== values.password) {
            errors.confirmPassword = "Passwords do not match!"
        }

        return errors;
    }

    return (
        <div className='w-full max-w-md p-10 bg-white rounded-2xl shadow-lg border border-gray-100'>
            <form onSubmit={handleSubmit} className='w-full flex flex-col gap-5'>
                
                <h1 className='text-4xl font-semibold text-gray-950 text-center mb-4'>Signup</h1>

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
                        placeholder="Create a password" 
                        value={formData.password}
                        onChange={handleChange}
                    />
                    {formErrors.password && (
                        <p className='text-xs text-red-500 mt-1 px-1 font-medium'>{formErrors.password}</p>
                    )}
                </div>

                {/* Confirm Password Input */}
                <div className='w-full'>
                    <input
                        className={`w-full px-5 py-4 border rounded-lg outline-none text-sm transition-all ${
                            formErrors.confirmPassword 
                                ? 'border-red-400 bg-red-50/20' 
                                : 'border-gray-200 bg-white focus:border-teal-500'
                        }`}
                        type="password" 
                        name="confirmPassword" 
                        placeholder="Confirm your password" 
                        value={formData.confirmPassword}
                        onChange={handleChange}
                    />
                    {formErrors.confirmPassword && (
                        <p className='text-xs text-red-500 mt-1 px-1 font-medium'>{formErrors.confirmPassword}</p>
                    )}
                </div>

                {/* Submit Button */}
                <button 
                    type="submit" 
                    className='w-full bg-[#009688] hover:bg-[#00796b] text-white py-4 rounded-lg font-bold text-base mt-2 transition-all cursor-pointer shadow-sm active:scale-[0.99]'
                >
                    Signup
                </button>

                {/* Bottom Redirection Link */}
                <p className='text-sm text-gray-600 text-center mt-3'>
                    Already have an account?{' '}
                    <Link to="/login" className='text-[#009688] font-bold hover:underline'>
                        Login
                    </Link>
                </p>
            </form>
        </div>
    )
}

export default RegisterForm