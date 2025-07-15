import React from 'react'
import { Link } from 'react-router-dom'

export default function Navbar() {
  return (
    <nav className="bg-white shadow-md py-4 px-6 flex justify-between items-center">
        <h1 className='text-xl font-bold text-blue-600' >JobMatchAI</h1>
        <ul className='flex gap-4 text-gray-700'>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/jobs">Jobs</Link></li>
            <li><Link to="profile">Profile</Link></li>
            <li><Link to="login">Login</Link></li>
            <li><Link to="signup">Sign Up</Link></li>
        </ul>
    </nav>
  )
}