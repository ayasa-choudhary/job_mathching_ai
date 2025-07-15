import { useState } from 'react';

const Hero = () => {
    const [file, setFile] = useState(null);
    const [fileName, setFileName] = useState('');
    const [fileError, setFileError] = useState('');
    const [uploadSuccess, setUploadSuccess] = useState(false);

    const handleFileChange = (e) => {
        const selectedFile = e.target.files[0];

        if (selectedFile) {
            // Check file type
            const fileType = selectedFile.type;
            const validTypes = ['application/pdf', 'application/msword', 'application/vnd.openxmlformats-officedocument.wordprocessingml.document'];

            if (validTypes.includes(fileType)) {
                setFile(selectedFile);
                setFileName(selectedFile.name);
                setFileError('');
                setUploadSuccess(true);

                // Reset success message after 3 seconds
                setTimeout(() => {
                    setUploadSuccess(false);
                }, 3000);
            } else {
                setFile(null);
                setFileName('');
                setFileError('Please upload a PDF or Word document');

                // Clear error after 3 seconds
                setTimeout(() => {
                    setFileError('');
                }, 3000);
            }
        }
    };

    return (
      <section className="bg-blue-600 text-white py-20 px-4 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          Find the Perfect Job Match
        </h1>
        <p className="text-lg max-w-xl mx-auto mb-6">
          Let AI recommend jobs based on your skills, experience, and preferences.
        </p>

        <div className="flex justify-center space-x-8 mb-8">
          <div className="flex flex-col items-center">
            <div className="text-3xl font-bold mb-2">⚡</div>
            <h3 className="text-xl font-semibold mb-1">It's Quick</h3>
            <p className="text-sm opacity-80">Get matched with jobs in seconds</p>
          </div>
          <div className="flex flex-col items-center">
            <div className="text-3xl font-bold mb-2">🎯</div>
            <h3 className="text-xl font-semibold mb-1">It's Targeted</h3>
            <p className="text-sm opacity-80">Matches based on your exact skills</p>
          </div>
          <div className="flex flex-col items-center">
            <div className="text-3xl font-bold mb-2">⏱️</div>
            <h3 className="text-xl font-semibold mb-1">Results in Real-time</h3>
            <p className="text-sm opacity-80">See new matches as they appear</p>
          </div>
        </div>

        <div className="flex justify-center space-x-4">
          <a
            href="/signup"
            className="inline-block bg-white text-blue-600 px-6 py-2 rounded font-semibold hover:bg-gray-200"
          >
            Get Started
          </a>
          <div className="relative">
            <input
              type="file"
              id="cv-upload"
              accept=".pdf,.doc,.docx"
              onChange={handleFileChange}
              className="hidden"
            />
            <label
              htmlFor="cv-upload"
              className="inline-block bg-blue-700 text-white border border-white px-6 py-2 rounded font-semibold hover:bg-blue-800 cursor-pointer"
            >
              Upload Your CV
            </label>
            {fileError && (
              <div className="absolute mt-2 left-0 right-0 text-red-300 bg-red-900 bg-opacity-75 p-2 rounded">
                {fileError}
              </div>
            )}
            {uploadSuccess && (
              <div className="absolute mt-2 left-0 right-0 text-green-300 bg-green-900 bg-opacity-75 p-2 rounded">
                {fileName} uploaded successfully!
              </div>
            )}
          </div>
        </div>
      </section>
    );
  };

  export default Hero;
