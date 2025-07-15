import React, { useState } from 'react';

// Star component for rating
const Star = ({ filled, onClick }) => {
  return (
    <svg
      className={`w-8 h-8 cursor-pointer ${filled ? 'text-yellow-400' : 'text-gray-400'}`}
      fill="currentColor"
      viewBox="0 0 20 20"
      xmlns="http://www.w3.org/2000/svg"
      onClick={onClick}
    >
      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
    </svg>
  );
};

const Footer = () => {
  // Rating state
  const [showRating, setShowRating] = useState(false);
  const [rating, setRating] = useState(0);
  const [ratingSubmitted, setRatingSubmitted] = useState(false);

  // Feedback state
  const [showFeedback, setShowFeedback] = useState(false);
  const [feedback, setFeedback] = useState('');
  const [feedbackSubmitted, setFeedbackSubmitted] = useState(false);


  const handleRatingSubmit = () => {
    if (rating > 0) {
      setRatingSubmitted(true);
      setTimeout(() => {
        setShowRating(false);
        setRatingSubmitted(false);
      }, 2000);
    }
  };

  const handleFeedbackSubmit = (e) => {
    e.preventDefault();
    if (feedback.trim()) {
      setFeedbackSubmitted(true);
      setTimeout(() => {
        setShowFeedback(false);
        setFeedbackSubmitted(false);
        setFeedback('');
      }, 2000);
    }
  };
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center">
          <div className="flex flex-col md:flex-row gap-8 mb-8">
            <div className="mb-4 md:mb-0">
              <h3 className="text-xl font-bold mb-2">Ratings</h3>
              <p className="text-gray-400">Rate your experience with us</p>

              {!showRating ? (
                <button
                  onClick={() => setShowRating(true)}
                  className="mt-2 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded transition duration-300"
                >
                  Rate Now
                </button>
              ) : ratingSubmitted ? (
                <div className="mt-3 text-green-400">Thank you for your rating!</div>
              ) : (
                <div className="mt-3">
                  <div className="flex space-x-1 mb-2">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <Star 
                        key={star} 
                        filled={star <= rating} 
                        onClick={() => setRating(star)} 
                      />
                    ))}
                  </div>
                  <button
                    onClick={handleRatingSubmit}
                    disabled={rating === 0}
                    className={`mt-2 px-4 py-1 rounded text-white ${
                      rating > 0 
                        ? 'bg-blue-600 hover:bg-blue-700' 
                        : 'bg-gray-500 cursor-not-allowed'
                    }`}
                  >
                    Submit
                  </button>
                  <button
                    onClick={() => setShowRating(false)}
                    className="mt-2 ml-2 px-4 py-1 bg-gray-600 hover:bg-gray-700 text-white rounded"
                  >
                    Cancel
                  </button>
                </div>
              )}
            </div>

            <div className="mb-4 md:mb-0">
              <h3 className="text-xl font-bold mb-2">Feedback</h3>
              <p className="text-gray-400">Help us improve our service</p>

              {!showFeedback ? (
                <button
                  onClick={() => setShowFeedback(true)}
                  className="mt-2 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded transition duration-300"
                >
                  Send Feedback
                </button>
              ) : feedbackSubmitted ? (
                <div className="mt-3 text-green-400">Thank you for your feedback!</div>
              ) : (
                <form onSubmit={handleFeedbackSubmit} className="mt-3">
                  <textarea
                    value={feedback}
                    onChange={(e) => setFeedback(e.target.value)}
                    placeholder="Tell us what you think..."
                    className="w-full p-2 text-gray-800 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    rows="3"
                    required
                  ></textarea>
                  <div className="mt-2">
                    <button
                      type="submit"
                      className="px-4 py-1 bg-blue-600 hover:bg-blue-700 text-white rounded"
                    >
                      Submit
                    </button>
                    <button
                      type="button"
                      onClick={() => setShowFeedback(false)}
                      className="ml-2 px-4 py-1 bg-gray-600 hover:bg-gray-700 text-white rounded"
                    >
                      Cancel
                    </button>
                  </div>
                </form>
              )}
            </div>

            <div className="mb-4 md:mb-0">
              <h3 className="text-xl font-bold mb-2">Contact Us</h3>
              <p className="text-gray-400 mb-3">+91 8181818181</p>
              <div className="flex space-x-6">
                {/* Instagram Icon */}
                <a href="#" className="text-white hover:text-blue-400 transition duration-300">
                  <svg className="w-7 h-7" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd" />
                  </svg>
                </a>
                {/* Facebook Icon */}
                <a href="#" className="text-white hover:text-blue-400 transition duration-300">
                  <svg className="w-7 h-7" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
                  </svg>
                </a>
                {/* Email Icon */}
                <a href="mailto:contact@example.com" className="text-white hover:text-blue-400 transition duration-300">
                  <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-8 pt-4 border-t border-gray-700">
          <div className="text-center">
            <p className="text-gray-400">&copy; {new Date().getFullYear()} All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
