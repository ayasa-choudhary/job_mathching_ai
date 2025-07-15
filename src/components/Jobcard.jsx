const JobCard = ({ job }) => {
    return (
      <div className="bg-white p-6 rounded shadow-md">
        <h3 className="text-xl font-semibold text-gray-800">{job.title}</h3>
        <p className="text-gray-600">{job.company}</p>
        <p className="text-sm text-gray-500 mb-4">{job.location}</p>
        <div className="flex flex-wrap gap-2">
          {job.skills.map((skill, index) => (
            <span
              key={index}
              className="text-sm bg-blue-100 text-blue-600 px-2 py-1 rounded"
            >
              {skill}
            </span>
          ))}
        </div>
      </div>
    );
  };
  
  export default JobCard;