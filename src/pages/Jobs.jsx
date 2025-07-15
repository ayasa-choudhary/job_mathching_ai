import React, { useState } from 'react'

const jobs = [
    {
      id: 1,
      title: 'Frontend Developer',
      company: 'TechNova',
      location: 'Bangalore, India',
      skills: ['React', 'Tailwind CSS', 'JavaScript'],
      responsibilities: [
        'Develop responsive user interfaces using React',
        'Implement UI designs using Tailwind CSS',
        'Optimize application performance',
        'Collaborate with backend developers for API integration'
      ]
    },
    {
      id: 2,
      title: 'Backend Developer',
      company: 'CodeWorks',
      location: 'Remote',
      skills: ['Node.js', 'MongoDB', 'Express'],
      responsibilities: [
        'Design and implement RESTful APIs using Node.js and Express',
        'Develop and maintain database schemas in MongoDB',
        'Ensure application security and data integrity',
        'Optimize backend performance and scalability'
      ]
    },
    {
      id: 3,
      title: 'Full Stack Engineer',
      company: 'DevX',
      location: 'Pune, India',
      skills: ['React', 'Node.js', 'AWS'],
      responsibilities: [
        'Develop both frontend and backend components of web applications',
        'Deploy and manage applications on AWS infrastructure',
        'Implement CI/CD pipelines for automated deployment',
        'Troubleshoot and debug issues across the entire stack'
      ]
    },
    {
      id: 4,
      title: 'UI/UX Designer',
      company: 'DesignHub',
      location: 'Mumbai, India',
      skills: ['Figma', 'Adobe XD', 'User Research'],
      responsibilities: [
        'Create wireframes, prototypes, and user flows using Figma and Adobe XD',
        'Conduct user research and usability testing',
        'Collaborate with developers to implement designs',
        'Create and maintain design systems'
      ]
    },
    {
      id: 5,
      title: 'DevOps Engineer',
      company: 'CloudTech',
      location: 'Hyderabad, India',
      skills: ['Docker', 'Kubernetes', 'CI/CD'],
      responsibilities: [
        'Set up and maintain containerized environments using Docker and Kubernetes',
        'Implement and manage CI/CD pipelines',
        'Monitor system performance and troubleshoot issues',
        'Automate infrastructure provisioning and configuration'
      ]
    },
    {
      id: 6,
      title: 'Data Scientist',
      company: 'DataMinds',
      location: 'Delhi, India',
      skills: ['Python', 'Machine Learning', 'SQL'],
      responsibilities: [
        'Develop machine learning models to solve business problems',
        'Extract and analyze data using SQL and Python',
        'Create data visualizations and reports',
        'Collaborate with stakeholders to understand data requirements'
      ]
    },
    {
      id: 7,
      title: 'Mobile App Developer',
      company: 'AppWorks',
      location: 'Chennai, India',
      skills: ['React Native', 'Flutter', 'Swift'],
      responsibilities: [
        'Develop cross-platform mobile applications using React Native and Flutter',
        'Create native iOS applications using Swift',
        'Implement responsive UI designs for mobile devices',
        'Optimize app performance and ensure compatibility across different devices'
      ]
    },
    {
      id: 8,
      title: 'QA Engineer',
      company: 'QualityFirst',
      location: 'Remote',
      skills: ['Selenium', 'Jest', 'Manual Testing'],
      responsibilities: [
        'Develop and execute automated test scripts using Selenium and Jest',
        'Perform manual testing to ensure software quality',
        'Create and maintain test documentation',
        'Identify and report bugs and issues'
      ]
    },
    {
      id: 9,
      title: 'Product Manager',
      company: 'ProductGenius',
      location: 'Bangalore, India',
      skills: ['Product Strategy', 'Agile', 'User Stories'],
      responsibilities: [
        'Define product vision and strategy',
        'Create and prioritize product backlog',
        'Write detailed user stories and acceptance criteria',
        'Collaborate with development teams to deliver features'
      ]
    },
    {
      id: 10,
      title: 'Cybersecurity Analyst',
      company: 'SecureNet',
      location: 'Delhi, India',
      skills: ['Network Security', 'Penetration Testing', 'Security Audits'],
      responsibilities: [
        'Monitor networks for security breaches and investigate violations',
        'Conduct penetration testing to identify vulnerabilities',
        'Perform security audits and risk assessments',
        'Develop security protocols and disaster recovery plans'
      ]
    },
    {
      id: 11,
      title: 'Cloud Architect',
      company: 'CloudSolutions',
      location: 'Remote',
      skills: ['AWS', 'Azure', 'Google Cloud'],
      responsibilities: [
        'Design and implement cloud infrastructure on AWS, Azure, and Google Cloud',
        'Develop cloud migration strategies',
        'Optimize cloud resources for cost and performance',
        'Ensure security and compliance in cloud environments'
      ]
    },
    {
      id: 12,
      title: 'Blockchain Developer',
      company: 'ChainTech',
      location: 'Pune, India',
      skills: ['Solidity', 'Smart Contracts', 'Ethereum'],
      responsibilities: [
        'Develop and deploy smart contracts using Solidity',
        'Build decentralized applications on Ethereum',
        'Implement security best practices for blockchain applications',
        'Stay updated with the latest blockchain technologies and trends'
      ]
    },
    {
      id: 13,
      title: 'AI Research Scientist',
      company: 'AILabs',
      location: 'Hyderabad, India',
      skills: ['Machine Learning', 'Deep Learning', 'Python'],
      responsibilities: [
        'Conduct research in machine learning and deep learning',
        'Develop and implement AI algorithms and models',
        'Publish research findings in academic journals and conferences',
        'Collaborate with engineering teams to implement AI solutions'
      ]
    },
    {
      id: 14,
      title: 'Technical Writer',
      company: 'DocuTech',
      location: 'Remote',
      skills: ['Documentation', 'Markdown', 'API Documentation'],
      responsibilities: [
        'Create clear and comprehensive technical documentation',
        'Write API documentation for developers',
        'Develop user guides and tutorials',
        'Collaborate with engineers to understand technical concepts'
      ]
    },
    {
      id: 15,
      title: 'Game Developer',
      company: 'GameStudio',
      location: 'Mumbai, India',
      skills: ['Unity', 'C#', 'Game Design'],
      responsibilities: [
        'Develop games using Unity engine and C#',
        'Implement game mechanics and features',
        'Optimize game performance for different platforms',
        'Collaborate with artists and designers to create engaging gameplay'
      ]
    },
    {
      id: 16,
      title: 'Database Administrator',
      company: 'DataCore',
      location: 'Chennai, India',
      skills: ['SQL', 'PostgreSQL', 'Database Optimization'],
      responsibilities: [
        'Design, implement, and maintain database systems',
        'Optimize database performance and troubleshoot issues',
        'Implement backup and recovery procedures',
        'Ensure data security and integrity'
      ]
    },
    {
      id: 17,
      title: 'AR/VR Developer',
      company: 'RealityLabs',
      location: 'Bangalore, India',
      skills: ['Unity', 'ARKit', 'VR Development'],
      responsibilities: [
        'Develop augmented and virtual reality applications using Unity',
        'Implement AR features using ARKit and other frameworks',
        'Create immersive 3D experiences',
        'Optimize performance for AR/VR hardware'
      ]
    },
    {
      id: 18,
      title: 'Network Engineer',
      company: 'NetConnect',
      location: 'Delhi, India',
      skills: ['Cisco', 'Network Architecture', 'Troubleshooting'],
      responsibilities: [
        'Design and implement network infrastructure using Cisco technologies',
        'Monitor network performance and troubleshoot issues',
        'Implement security measures to protect network infrastructure',
        'Document network configurations and maintain network diagrams'
      ]
    },
    {
      id: 19,
      title: 'Embedded Systems Engineer',
      company: 'EmbedTech',
      location: 'Pune, India',
      skills: ['C/C++', 'Microcontrollers', 'IoT'],
      responsibilities: [
        'Develop firmware for embedded systems using C/C++',
        'Design and implement IoT solutions',
        'Debug hardware and software issues',
        'Optimize code for resource-constrained environments'
      ]
    },
    {
      id: 20,
      title: 'SEO Specialist',
      company: 'SearchMasters',
      location: 'Remote',
      skills: ['SEO', 'Content Strategy', 'Analytics'],
      responsibilities: [
        'Develop and implement SEO strategies',
        'Conduct keyword research and optimize website content',
        'Analyze website traffic and search performance metrics',
        'Stay updated with search engine algorithm changes'
      ]
    },
    {
      id: 21,
      title: 'Salesforce Developer',
      company: 'CloudForce',
      location: 'Hyderabad, India',
      skills: ['Apex', 'Visualforce', 'Lightning Components'],
      responsibilities: [
        'Develop custom applications on Salesforce platform using Apex',
        'Create responsive user interfaces with Visualforce and Lightning Components',
        'Integrate Salesforce with external systems and APIs',
        'Troubleshoot and debug Salesforce applications'
      ]
    },
    {
      id: 22,
      title: 'Business Analyst',
      company: 'BizInsights',
      location: 'Mumbai, India',
      skills: ['Requirements Gathering', 'Data Analysis', 'Process Modeling'],
      responsibilities: [
        'Gather and document business requirements from stakeholders',
        'Analyze business processes and identify areas for improvement',
        'Create process models and workflow diagrams',
        'Translate business requirements into functional specifications'
      ]
    },
    {
      id: 23,
      title: 'iOS Developer',
      company: 'AppleTech',
      location: 'Bangalore, India',
      skills: ['Swift', 'Objective-C', 'XCode'],
      responsibilities: [
        'Develop iOS applications using Swift and Objective-C',
        'Design and implement user interfaces following Apple design guidelines',
        'Integrate with RESTful APIs and third-party services',
        'Optimize app performance and ensure compatibility with different iOS versions'
      ]
    },
    {
      id: 24,
      title: 'Android Developer',
      company: 'DroidWorks',
      location: 'Chennai, India',
      skills: ['Kotlin', 'Java', 'Android SDK'],
      responsibilities: [
        'Develop Android applications using Kotlin and Java',
        'Design and implement user interfaces following Material Design guidelines',
        'Integrate with RESTful APIs and third-party services',
        'Optimize app performance and ensure compatibility with different Android versions'
      ]
    },
    {
      id: 25,
      title: 'Project Manager',
      company: 'ProjectPro',
      location: 'Delhi, India',
      skills: ['Project Planning', 'Team Management', 'Risk Assessment'],
      responsibilities: [
        'Lead project planning and execution from initiation to completion',
        'Manage project scope, schedule, and budget',
        'Coordinate team activities and allocate resources effectively',
        'Identify and mitigate project risks and issues'
      ]
    },
    {
      id: 26,
      title: 'System Administrator',
      company: 'SysCore',
      location: 'Pune, India',
      skills: ['Linux', 'Windows Server', 'Networking'],
      responsibilities: [
        'Install, configure, and maintain Linux and Windows servers',
        'Monitor system performance and troubleshoot issues',
        'Implement security measures and perform regular updates',
        'Manage user accounts and access permissions'
      ]
    },
    {
      id: 27,
      title: 'Content Writer',
      company: 'ContentCraft',
      location: 'Remote',
      skills: ['Copywriting', 'SEO Writing', 'Content Strategy'],
      responsibilities: [
        'Create engaging and informative content for websites and blogs',
        'Write SEO-optimized content to improve search rankings',
        'Develop content strategies aligned with marketing goals',
        'Edit and proofread content for grammar, spelling, and clarity'
      ]
    },
    {
      id: 28,
      title: 'Graphic Designer',
      company: 'DesignCraft',
      location: 'Mumbai, India',
      skills: ['Adobe Photoshop', 'Illustrator', 'UI Design'],
      responsibilities: [
        'Create visual concepts and designs for digital and print media',
        'Develop UI elements and graphics for websites and applications',
        'Create illustrations, logos, and branding materials',
        'Collaborate with marketing and product teams to meet design requirements'
      ]
    }
];

export default function Jobs() {
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const filteredJobs = jobs.filter(job => {
    const query = searchQuery.toLowerCase();
    return (
      job.title.toLowerCase().includes(query) ||
      job.company.toLowerCase().includes(query) ||
      job.location.toLowerCase().includes(query) ||
      job.skills.some(skill => skill.toLowerCase().includes(query))
    );
  });

  return (
    <div className='min-h-screen bg-gray-100 p-6'>
        <h2 className='text-3xl font-bold text-blue-600 mb-6 text-center'>Job Listings</h2>

        <div className='max-w-md mx-auto mb-8'>
          <div className='relative'>
            <input
              type='text'
              placeholder='Search for jobs by title, company, location, or skills...'
              className='w-full p-3 pl-10 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500'
              value={searchQuery}
              onChange={handleSearchChange}
            />
            <svg 
              className='absolute left-3 top-3.5 h-5 w-5 text-gray-400'
              xmlns="http://www.w3.org/2000/svg" 
              viewBox="0 0 20 20" 
              fill="currentColor"
            >
              <path 
                fillRule="evenodd" 
                d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" 
                clipRule="evenodd" 
              />
            </svg>
          </div>
        </div>

        {filteredJobs.length === 0 ? (
          <div className='text-center py-8'>
            <p className='text-gray-600 text-lg'>No jobs found matching your search criteria.</p>
            <button 
              className='mt-4 text-blue-600 hover:text-blue-800 font-medium'
              onClick={() => setSearchQuery('')}
            >
              Clear search
            </button>
          </div>
        ) : (
          <div className='grid gap-6 md:grid-cols-2 lg:grid-cols-3'>
            {filteredJobs.map((job)=>(
                <div key={job.id} className='bg-white p-6 rounded shadow-md'>
                    <h3 className='text-xl font-semibold text-gray-800'>{job.title}</h3>
                    <p className='mb-2 text-gray-600'>{job.company}</p>
                    <p className='text-sm text-gray-500 mb-4'>{job.location}</p>

                    <div className='mb-4'>
                        <h4 className='font-medium text-gray-800 mb-2'>Responsibilities:</h4>
                        <ul className='list-disc pl-5 text-sm text-gray-600 space-y-1'>
                            {job.responsibilities.map((responsibility, index) => (
                                <li key={index}>{responsibility}</li>
                            ))}
                        </ul>
                    </div>

                    <div className='flex flex-wrap gap-2 mb-4'>
                        <h4 className='w-full font-medium text-gray-800 mb-1'>Skills:</h4>
                        {job.skills.map((skill, index)=>(
                            <span 
                            key={index}
                            className='text-sm bg-blue-100 text-blue-600 px-2 py-1 rounded'
                            >{skill}</span>
                        ))}
                    </div>

                    <button 
                        className='w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded transition duration-300'
                        onClick={() => alert(`Applied to ${job.title} at ${job.company}`)}
                    >
                        Apply
                    </button>
                </div>
            ))}
          </div>
        )}
    </div>
  )
}
