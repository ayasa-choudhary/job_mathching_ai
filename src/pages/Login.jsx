import React, { useState } from 'react'
import { Link } from 'react-router-dom'

export default function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [rememberMe, setRememberMe] = useState(false);
    const [errors, setErrors] = useState({});
    const [isLoading, setIsLoading] = useState(false);

    const validateForm = () => {
        const newErrors = {};

        if (!email) {
            newErrors.email = 'Email is required';
        } else if (!/\S+@\S+\.\S+/.test(email)) {
            newErrors.email = 'Email is invalid';
        }

        if (!password) {
            newErrors.password = 'Password is required';
        } else if (password.length < 6) {
            newErrors.password = 'Password must be at least 6 characters';
        }

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        if (validateForm()) {
            setIsLoading(true);

            // Simulate API call
            setTimeout(() => {
                console.log('Login attempt with:', { email, password, rememberMe });
                setIsLoading(false);
                // Redirect would happen here in a real app
                alert('Login successful! Redirecting...');
            }, 1500);
        }
    };

    const handleSocialLogin = (provider) => {
        alert(`Login with ${provider} will be implemented soon!`);
    };

  return (
    <div className='min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-600 to-blue-800 py-12 px-4 sm:px-6 lg:px-8'>
        <div className='bg-white p-8 rounded-lg shadow-xl w-full max-w-md'>
            <div className='text-center mb-8'>
                <h2 className='text-3xl font-bold text-gray-800 mb-2'>Welcome Back</h2>
                <p className='text-gray-600'>Sign in to access your account</p>
            </div>

            <form onSubmit={handleSubmit} className='space-y-6'>
                <div>
                    <label htmlFor='email' className='block text-sm font-medium text-gray-700 mb-1'>
                        Email Address
                    </label>
                    <div className='relative'>
                        <div className='absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none'>
                            <svg className='h-5 w-5 text-gray-400' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 20 20' fill='currentColor' aria-hidden='true'>
                                <path d='M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z' />
                                <path d='M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z' />
                            </svg>
                        </div>
                        <input 
                            id='email'
                            name='email'
                            type='email' 
                            placeholder='you@example.com'
                            className={`w-full pl-10 pr-3 py-2 border ${errors.email ? 'border-red-500' : 'border-gray-300'} rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500`}
                            value={email} 
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </div>
                    {errors.email && <p className='mt-1 text-sm text-red-600'>{errors.email}</p>}
                </div>

                <div>
                    <div className='flex items-center justify-between'>
                        <label htmlFor='password' className='block text-sm font-medium text-gray-700 mb-1'>
                            Password
                        </label>
                        <a href='#' className='text-sm text-blue-600 hover:text-blue-800' onClick={() => alert('Password reset functionality will be implemented soon!')}>
                            Forgot password?
                        </a>
                    </div>
                    <div className='relative'>
                        <div className='absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none'>
                            <svg className='h-5 w-5 text-gray-400' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 20 20' fill='currentColor' aria-hidden='true'>
                                <path fillRule='evenodd' d='M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z' clipRule='evenodd' />
                            </svg>
                        </div>
                        <input 
                            id='password'
                            name='password'
                            type='password' 
                            placeholder='••••••••'
                            className={`w-full pl-10 pr-3 py-2 border ${errors.password ? 'border-red-500' : 'border-gray-300'} rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500`}
                            value={password} 
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </div>
                    {errors.password && <p className='mt-1 text-sm text-red-600'>{errors.password}</p>}
                </div>

                <div className='flex items-center'>
                    <input
                        id='remember-me'
                        name='remember-me'
                        type='checkbox'
                        className='h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded'
                        checked={rememberMe}
                        onChange={(e) => setRememberMe(e.target.checked)}
                    />
                    <label htmlFor='remember-me' className='ml-2 block text-sm text-gray-700'>
                        Remember me
                    </label>
                </div>

                <div>
                    <button 
                        type='submit'
                        className='w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition duration-150'
                        disabled={isLoading}
                    >
                        {isLoading ? (
                            <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                            </svg>
                        ) : 'Sign in'}
                    </button>
                </div>
            </form>

            <div className='mt-6'>
                <div className='relative'>
                    <div className='absolute inset-0 flex items-center'>
                        <div className='w-full border-t border-gray-300'></div>
                    </div>
                    <div className='relative flex justify-center text-sm'>
                        <span className='px-2 bg-white text-gray-500'>Or continue with</span>
                    </div>
                </div>

                <div className='mt-6 grid grid-cols-3 gap-3'>
                    <button
                        onClick={() => handleSocialLogin('Google')}
                        className='w-full inline-flex justify-center py-2 px-4 border border-gray-300 rounded-md shadow-sm bg-white text-sm font-medium text-gray-500 hover:bg-gray-50'
                    >
                        <svg className='h-5 w-5' viewBox='0 0 24 24' fill='currentColor'>
                            <path d='M12.545 10.239v3.821h5.445c-0.712 2.315-2.647 3.972-5.445 3.972-3.332 0-6.033-2.701-6.033-6.032s2.701-6.032 6.033-6.032c1.498 0 2.866 0.549 3.921 1.453l2.814-2.814c-1.798-1.677-4.203-2.701-6.735-2.701-5.539 0-10.032 4.493-10.032 10.032s4.493 10.032 10.032 10.032c8.445 0 10.283-7.919 9.442-11.731h-9.442z'/>
                        </svg>
                    </button>

                    <button
                        onClick={() => handleSocialLogin('Facebook')}
                        className='w-full inline-flex justify-center py-2 px-4 border border-gray-300 rounded-md shadow-sm bg-white text-sm font-medium text-gray-500 hover:bg-gray-50'
                    >
                        <svg className='h-5 w-5 text-blue-600' fill='currentColor' viewBox='0 0 24 24'>
                            <path d='M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385h-3.047v-3.47h3.047v-2.642c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953h-1.514c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385c5.737-.9 10.125-5.864 10.125-11.854z'/>
                        </svg>
                    </button>

                    <button
                        onClick={() => handleSocialLogin('LinkedIn')}
                        className='w-full inline-flex justify-center py-2 px-4 border border-gray-300 rounded-md shadow-sm bg-white text-sm font-medium text-gray-500 hover:bg-gray-50'
                    >
                        <svg className='h-5 w-5 text-blue-700' fill='currentColor' viewBox='0 0 24 24'>
                            <path d='M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z'/>
                        </svg>
                    </button>
                </div>
            </div>

            <div className='mt-6 text-center'>
                <p className='text-sm text-gray-600'>
                    Don't have an account?{' '}
                    <Link to='/signup' className='font-medium text-blue-600 hover:text-blue-500'>
                        Sign up
                    </Link>
                </p>
            </div>

            <div className='mt-8 pt-6 border-t border-gray-200'>
                <div className='text-center text-xs text-gray-500'>
                    <p>By signing in, you agree to our <a href='#' className='underline'>Terms of Service</a> and <a href='#' className='underline'>Privacy Policy</a>.</p>
                    <p className='mt-1'>Need help? <a href='#' className='text-blue-600 hover:text-blue-500'>Contact Support</a></p>
                </div>
            </div>
        </div>
    </div>
  )
}
