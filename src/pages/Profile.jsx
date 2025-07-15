import React, { useState } from 'react'

const skillsList = ['JavaScript', 'React', 'Node.js', 'Python', 'MongoDB', 'SQL', 'AWS', 'HTML', 'CSS', 'TypeScript', 'Docker', 'Kubernetes', 'DevOps', 'UI/UX', 'Data Analysis'];

const educationLevels = ['High School', 'Associate Degree', 'Bachelor\'s Degree', 'Master\'s Degree', 'PhD', 'Bootcamp', 'Self-taught', 'Other'];

export default function Profile() {
    const [profile, setProfile] = useState({
        name: '',
        email: '',
        phone: '',
        location: '',
        title: '',
        bio: '',
        experience: '',
        skills: [],
        jobtype: '',
        education: {
            level: '',
            institution: '',
            field: '',
            graduationYear: ''
        },
        workExperience: [
            {
                company: '',
                position: '',
                startDate: '',
                endDate: '',
                current: false,
                description: ''
            }
        ],
        portfolioUrl: '',
        linkedinUrl: '',
        githubUrl: '',
        salaryExpectation: '',
        availability: '',
        profileImage: null
    });

    const handleuser = (e) => {
        setProfile({...profile, [e.target.name]: e.target.value})
    };

    const handleEducationChange = (e) => {
        setProfile({
            ...profile, 
            education: {
                ...profile.education,
                [e.target.name]: e.target.value
            }
        });
    };

    const handleWorkExperienceChange = (index, e) => {
        const updatedWorkExperience = [...profile.workExperience];
        if (e.target.type === 'checkbox') {
            updatedWorkExperience[index][e.target.name] = e.target.checked;
        } else {
            updatedWorkExperience[index][e.target.name] = e.target.value;
        }
        setProfile({...profile, workExperience: updatedWorkExperience});
    };

    const addWorkExperience = () => {
        setProfile({
            ...profile,
            workExperience: [
                ...profile.workExperience,
                {
                    company: '',
                    position: '',
                    startDate: '',
                    endDate: '',
                    current: false,
                    description: ''
                }
            ]
        });
    };

    const removeWorkExperience = (index) => {
        const updatedWorkExperience = [...profile.workExperience];
        updatedWorkExperience.splice(index, 1);
        setProfile({...profile, workExperience: updatedWorkExperience});
    };

    const handleImageChange = (e) => {
        if (e.target.files && e.target.files[0]) {
            setProfile({...profile, profileImage: URL.createObjectURL(e.target.files[0])});
        }
    };

    const skilltoggle = (skill) => {
        const updatedSkills = profile.skills.includes(skill)
            ? profile.skills.filter(s => s !== skill)
            : [...profile.skills, skill];
        setProfile({...profile, skills: updatedSkills});
    };
  return (
    <div className='min-h-screen bg-gray-100 p-6'>
        <div className='bg-white p-8 rounded shadow-md w-full max-w-4xl mx-auto'>
            <h2 className='text-3xl font-bold mb-6 text-blue-600 text-center'>User Profile</h2>

            <form className='space-y-6'>
                {/* Profile Image Section */}
                <div className='flex flex-col items-center mb-6'>
                    <div className='w-32 h-32 rounded-full bg-gray-200 overflow-hidden mb-4 flex items-center justify-center'>
                        {profile.profileImage ? (
                            <img src={profile.profileImage} alt="Profile" className='w-full h-full object-cover' />
                        ) : (
                            <svg className='w-16 h-16 text-gray-400' fill='currentColor' viewBox='0 0 20 20'>
                                <path fillRule='evenodd' d='M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z' clipRule='evenodd' />
                            </svg>
                        )}
                    </div>
                    <label className='bg-blue-600 text-white px-4 py-2 rounded cursor-pointer hover:bg-blue-700 transition'>
                        Upload Photo
                        <input type='file' className='hidden' accept='image/*' onChange={handleImageChange} />
                    </label>
                </div>

                {/* Basic Information Section */}
                <div className='bg-gray-50 p-6 rounded-lg'>
                    <h3 className='text-xl font-semibold mb-4 text-gray-800'>Basic Information</h3>
                    <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
                        <div>
                            <label className='block text-sm font-medium text-gray-700 mb-1'>Full Name</label>
                            <input 
                                type='text' 
                                name='name'
                                placeholder='ayesha choudhary'
                                className='w-full p-2 border border-gray-300 rounded focus:ring-blue-500 focus:border-blue-500'
                                value={profile.name} 
                                onChange={handleuser}
                            />
                        </div>

                        <div>
                            <label className='block text-sm font-medium text-gray-700 mb-1'>Professional Title</label>
                            <input 
                                type='text' 
                                name='title'
                                placeholder='Frontend Developer'
                                className='w-full p-2 border border-gray-300 rounded focus:ring-blue-500 focus:border-blue-500'
                                value={profile.title} 
                                onChange={handleuser}
                            />
                        </div>

                        <div>
                            <label className='block text-sm font-medium text-gray-700 mb-1'>Email</label>
                            <input 
                                type='email' 
                                name='email'
                                placeholder='abc@example.com'
                                className='w-full p-2 border border-gray-300 rounded focus:ring-blue-500 focus:border-blue-500'
                                value={profile.email} 
                                onChange={handleuser}
                            />
                        </div>

                        <div>
                            <label className='block text-sm font-medium text-gray-700 mb-1'>Phone</label>
                            <input 
                                type='tel' 
                                name='phone'
                                placeholder='+91 8181818181'
                                className='w-full p-2 border border-gray-300 rounded focus:ring-blue-500 focus:border-blue-500'
                                value={profile.phone} 
                                onChange={handleuser}
                            />
                        </div>

                        <div>
                            <label className='block text-sm font-medium text-gray-700 mb-1'>Location</label>
                            <input 
                                type='text' 
                                name='location'
                                placeholder='Jaipur, India'
                                className='w-full p-2 border border-gray-300 rounded focus:ring-blue-500 focus:border-blue-500'
                                value={profile.location} 
                                onChange={handleuser}
                            />
                        </div>

                        <div>
                            <label className='block text-sm font-medium text-gray-700 mb-1'>Years of Experience</label>
                            <input 
                                type='number' 
                                name='experience'
                                placeholder='2'
                                className='w-full p-2 border border-gray-300 rounded focus:ring-blue-500 focus:border-blue-500'
                                value={profile.experience} 
                                onChange={handleuser}
                            />
                        </div>
                    </div>

                    <div className='mt-4'>
                        <label className='block text-sm font-medium text-gray-700 mb-1'>Bio</label>
                        <textarea 
                            name='bio'
                            placeholder='Tell us about yourself and your professional background...'
                            rows='4'
                            className='w-full p-2 border border-gray-300 rounded focus:ring-blue-500 focus:border-blue-500'
                            value={profile.bio} 
                            onChange={handleuser}
                        ></textarea>
                    </div>
                </div>

                {/* Education Section */}
                <div className='bg-gray-50 p-6 rounded-lg'>
                    <h3 className='text-xl font-semibold mb-4 text-gray-800'>Education</h3>
                    <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
                        <div>
                            <label className='block text-sm font-medium text-gray-700 mb-1'>Education Level</label>
                            <select 
                                name='level'
                                className='w-full p-2 border border-gray-300 rounded focus:ring-blue-500 focus:border-blue-500'
                                value={profile.education.level} 
                                onChange={handleEducationChange}
                            >
                                <option value=''>Select Education Level</option>
                                {educationLevels.map(level => (
                                    <option key={level} value={level}>{level}</option>
                                ))}
                            </select>
                        </div>

                        <div>
                            <label className='block text-sm font-medium text-gray-700 mb-1'>Field of Study</label>
                            <input 
                                type='text' 
                                name='field'
                                placeholder='Computer Science'
                                className='w-full p-2 border border-gray-300 rounded focus:ring-blue-500 focus:border-blue-500'
                                value={profile.education.field} 
                                onChange={handleEducationChange}
                            />
                        </div>

                        <div>
                            <label className='block text-sm font-medium text-gray-700 mb-1'>Institution</label>
                            <input 
                                type='text' 
                                name='institution'
                                placeholder='University of Example'
                                className='w-full p-2 border border-gray-300 rounded focus:ring-blue-500 focus:border-blue-500'
                                value={profile.education.institution} 
                                onChange={handleEducationChange}
                            />
                        </div>

                        <div>
                            <label className='block text-sm font-medium text-gray-700 mb-1'>Graduation Year</label>
                            <input 
                                type='number' 
                                name='graduationYear'
                                placeholder='2020'
                                className='w-full p-2 border border-gray-300 rounded focus:ring-blue-500 focus:border-blue-500'
                                value={profile.education.graduationYear} 
                                onChange={handleEducationChange}
                            />
                        </div>
                    </div>
                </div>

                {/* Work Experience Section */}
                <div className='bg-gray-50 p-6 rounded-lg'>
                    <h3 className='text-xl font-semibold mb-4 text-gray-800'>Work Experience</h3>

                    {profile.workExperience.map((experience, index) => (
                        <div key={index} className='mb-6 p-4 border border-gray-200 rounded-lg'>
                            <div className='flex justify-between items-center mb-4'>
                                <h4 className='text-lg font-medium'>Experience {index + 1}</h4>
                                {profile.workExperience.length > 1 && (
                                    <button 
                                        type='button'
                                        className='text-red-600 hover:text-red-800'
                                        onClick={() => removeWorkExperience(index)}
                                    >
                                        Remove
                                    </button>
                                )}
                            </div>

                            <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
                                <div>
                                    <label className='block text-sm font-medium text-gray-700 mb-1'>Company</label>
                                    <input 
                                        type='text' 
                                        name='company'
                                        placeholder='Example Corp'
                                        className='w-full p-2 border border-gray-300 rounded focus:ring-blue-500 focus:border-blue-500'
                                        value={experience.company} 
                                        onChange={(e) => handleWorkExperienceChange(index, e)}
                                    />
                                </div>

                                <div>
                                    <label className='block text-sm font-medium text-gray-700 mb-1'>Position</label>
                                    <input 
                                        type='text' 
                                        name='position'
                                        placeholder='Senior Developer'
                                        className='w-full p-2 border border-gray-300 rounded focus:ring-blue-500 focus:border-blue-500'
                                        value={experience.position} 
                                        onChange={(e) => handleWorkExperienceChange(index, e)}
                                    />
                                </div>

                                <div>
                                    <label className='block text-sm font-medium text-gray-700 mb-1'>Start Date</label>
                                    <input 
                                        type='date' 
                                        name='startDate'
                                        className='w-full p-2 border border-gray-300 rounded focus:ring-blue-500 focus:border-blue-500'
                                        value={experience.startDate} 
                                        onChange={(e) => handleWorkExperienceChange(index, e)}
                                    />
                                </div>

                                <div className={experience.current ? 'opacity-50' : ''}>
                                    <label className='block text-sm font-medium text-gray-700 mb-1'>End Date</label>
                                    <input 
                                        type='date' 
                                        name='endDate'
                                        className='w-full p-2 border border-gray-300 rounded focus:ring-blue-500 focus:border-blue-500'
                                        value={experience.endDate} 
                                        onChange={(e) => handleWorkExperienceChange(index, e)}
                                        disabled={experience.current}
                                    />
                                </div>

                                <div className='md:col-span-2'>
                                    <label className='flex items-center gap-2'>
                                        <input 
                                            type='checkbox' 
                                            name='current'
                                            checked={experience.current} 
                                            onChange={(e) => handleWorkExperienceChange(index, e)}
                                        />
                                        <span className='text-sm font-medium text-gray-700'>I currently work here</span>
                                    </label>
                                </div>
                            </div>

                            <div className='mt-4'>
                                <label className='block text-sm font-medium text-gray-700 mb-1'>Description</label>
                                <textarea 
                                    name='description'
                                    placeholder='Describe your responsibilities and achievements...'
                                    rows='3'
                                    className='w-full p-2 border border-gray-300 rounded focus:ring-blue-500 focus:border-blue-500'
                                    value={experience.description} 
                                    onChange={(e) => handleWorkExperienceChange(index, e)}
                                ></textarea>
                            </div>
                        </div>
                    ))}

                    <button 
                        type='button'
                        className='mt-2 flex items-center text-blue-600 hover:text-blue-800'
                        onClick={addWorkExperience}
                    >
                        <svg className='w-5 h-5 mr-1' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                            <path strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' d='M12 6v6m0 0v6m0-6h6m-6 0H6'></path>
                        </svg>
                        Add Another Experience
                    </button>
                </div>

                {/* Skills and Preferences Section */}
                <div className='bg-gray-50 p-6 rounded-lg'>
                    <h3 className='text-xl font-semibold mb-4 text-gray-800'>Skills and Preferences</h3>

                    <div className='mb-6'> 
                        <label className='block text-sm font-medium text-gray-700 mb-2'>Skills (select multiple)</label>
                        <div className='flex flex-wrap gap-2'>
                            {skillsList.map(skill => (
                                <button 
                                    key={skill} 
                                    type='button'
                                    className={`px-3 py-1 rounded border ${
                                        profile.skills.includes(skill)
                                        ? 'bg-blue-600 text-white'
                                        : 'bg-white text-gray-700 hover:bg-gray-100'
                                    }`} 
                                    onClick={() => skilltoggle(skill)}
                                >
                                    {skill}
                                </button>
                            ))}
                        </div>
                    </div>

                    <div className='mb-6'>
                        <label className='block text-sm font-medium text-gray-700 mb-2'>Preferred Job Type</label>
                        <div className='flex flex-wrap gap-4'>
                            {['Remote', 'Onsite', 'Hybrid', 'Any'].map(type => (
                                <label className='flex items-center gap-2' key={type}>
                                    <input 
                                        type='radio' 
                                        name='jobtype'
                                        value={type} 
                                        checked={profile.jobtype === type} 
                                        onChange={handleuser}
                                    />
                                    <span>{type}</span>
                                </label>
                            ))}
                        </div>
                    </div>

                    <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
                        <div>
                            <label className='block text-sm font-medium text-gray-700 mb-1'>Salary Expectation (Annual)</label>
                            <input 
                                type='text' 
                                name='salaryExpectation'
                                placeholder='$80,000 - $100,000'
                                className='w-full p-2 border border-gray-300 rounded focus:ring-blue-500 focus:border-blue-500'
                                value={profile.salaryExpectation} 
                                onChange={handleuser}
                            />
                        </div>

                        <div>
                            <label className='block text-sm font-medium text-gray-700 mb-1'>Availability / Notice Period</label>
                            <input 
                                type='text' 
                                name='availability'
                                placeholder='2 weeks notice'
                                className='w-full p-2 border border-gray-300 rounded focus:ring-blue-500 focus:border-blue-500'
                                value={profile.availability} 
                                onChange={handleuser}
                            />
                        </div>
                    </div>
                </div>

                {/* Portfolio and Social Links Section */}
                <div className='bg-gray-50 p-6 rounded-lg'>
                    <h3 className='text-xl font-semibold mb-4 text-gray-800'>Portfolio and Social Links</h3>

                    <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
                        <div>
                            <label className='block text-sm font-medium text-gray-700 mb-1'>Portfolio/Website URL</label>
                            <input 
                                type='url' 
                                name='portfolioUrl'
                                placeholder='https://yourportfolio.com'
                                className='w-full p-2 border border-gray-300 rounded focus:ring-blue-500 focus:border-blue-500'
                                value={profile.portfolioUrl} 
                                onChange={handleuser}
                            />
                        </div>

                        <div>
                            <label className='block text-sm font-medium text-gray-700 mb-1'>LinkedIn URL</label>
                            <input 
                                type='url' 
                                name='linkedinUrl'
                                placeholder='https://linkedin.com/in/username'
                                className='w-full p-2 border border-gray-300 rounded focus:ring-blue-500 focus:border-blue-500'
                                value={profile.linkedinUrl} 
                                onChange={handleuser}
                            />
                        </div>

                        <div className='md:col-span-2'>
                            <label className='block text-sm font-medium text-gray-700 mb-1'>GitHub URL</label>
                            <input 
                                type='url' 
                                name='githubUrl'
                                placeholder='https://github.com/username'
                                className='w-full p-2 border border-gray-300 rounded focus:ring-blue-500 focus:border-blue-500'
                                value={profile.githubUrl} 
                                onChange={handleuser}
                            />
                        </div>
                    </div>
                </div>

                {/* Submit Button */}
                <button 
                    type='submit'
                    className='w-full bg-blue-600 hover:bg-blue-700 text-white p-3 rounded-lg font-medium text-lg transition'
                >
                    Save Profile
                </button>
            </form>
        </div>
    </div>
  )
}
