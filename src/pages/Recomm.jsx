import React, { useState } from 'react'

const mockRecommendations = [
    {
      id: 101,
      title: 'React Developer',
      company: 'SmartHire',
      location: 'Remote',
      skills: ['React', 'JavaScript', 'Tailwind CSS'],
    },
    {
      id: 102,
      title: 'MERN Stack Engineer',
      company: 'CodeCrafters',
      location: 'Noida, India',
      skills: ['MongoDB', 'Express', 'React', 'Node.js'],
    },
    {
      id: 103,
      title: 'Frontend Engineer',
      company: 'WebGen',
      location: 'Hybrid - Gurgaon',
      skills: ['React', 'HTML', 'CSS', 'Git'],
    },
  ];

export default function RecommendationCard() {
    const [matches, setMatches]= useState([]);
    const handlematches = ()=>{
        setTimeout(()=>{
            setMatches(mockRecommendations);
        }, 1000);
    }
  return (
    <div className='min-h-screen p-6 bg-gray-100'>
        <h2 className='text-3xl font-bold text-center text-blue-600 mb-6'>Find Your Job Matches </h2>
        <div className='flex justify-center mb-6'>
            <button 
            className='bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700'
            onClick={handlematches}>Find My Matches</button>
        </div>
        <div className='grid gap-6 md:grid-cols-2 lg:grid-cols-3'>
            {matches.map((job)=>(
                <div key={job.id}
                className='bg-white p-6 rounded shadow-md'>
                    <h3 className='text-xl font-semibold text-gray-800'>{job.title}</h3>
                    <p className='text-gray-600'>{job.company}</p>
                    <p className='text-sm text-gray-500 mb-4'>{job.location}</p>
                    <div className='flex flex-wrap gap-2'>
                        {job.skills.map((skill, index)=>(
                            <span 
                            key={index}
                            className='text-sm bg-blue-100 text-blue-600 px-2 py-1 rounded'>{skill}</span>
                        ))}
                    </div>
                </div>
            ))}
        </div>
    </div>
  )
}

