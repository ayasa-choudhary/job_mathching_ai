# JobMatchAI - Job Matching Platform

JobMatchAI is a modern web application designed to connect job seekers with their ideal employment opportunities using AI-powered matching algorithms. The platform allows users to create profiles, browse job listings, and receive personalized job recommendations based on their skills and preferences.

## Table of Contents

- [Overview](#overview)
- [Installation](#installation)
- [Project Structure](#project-structure)
- [Components](#components)
  - [App Component](#app-component)
  - [Page Components](#page-components)
  - [UI Components](#ui-components)
- [Technologies Used](#technologies-used)
- [Future Enhancements](#future-enhancements)

## Overview

JobMatchAI streamlines the job search process by providing a user-friendly interface for job seekers to find relevant opportunities. The application features user authentication, profile management, job listings, and AI-powered job recommendations.

## Installation

To run this project locally, follow these steps:

```bash
# Clone the repository
git clone <https://github.com/ayasa-choudhary/job_mathching_ai>

# Navigate to the project directory
cd job-matching_ai

# Install dependencies
npm install

# Start the development server
npm run dev
```

The application will be available at `http://localhost:5173/` by default.

## Project Structure

The project follows a component-based architecture using React. The main structure includes:

- `src/`: Source code directory
  - `components/`: Reusable UI components
  - `pages/`: Page components for different routes
  - `App.jsx`: Main application component with routing

## Components

### App Component

The App component (`App.jsx`) serves as the main container for the application. It sets up the routing using React Router and defines the overall layout structure.

**Key Features:**
- React Router setup with routes for all main pages
- Consistent layout with Navbar and Footer on all pages
- Responsive design with a flex column layout

### Page Components

#### Hero (Home Page)

The Hero component serves as the landing page for the application.

**Key Features:**
- Eye-catching headline and description
- Feature highlights with icons (Quick, Targeted, Real-time)
- Call-to-action buttons (Get Started, Upload Your CV)
- CV upload functionality with file type validation and feedback

#### Login

The Login component provides user authentication functionality.

**Key Features:**
- Email and password input fields with validation
- "Remember me" checkbox
- Forgot password link
- Social login options (Google, Facebook, LinkedIn)
- Form validation with error messages
- Loading state with spinner animation
- Link to signup page for new users

#### SignUp

The SignUp component allows new users to create an account.

**Key Features:**
- Comprehensive registration form with multiple fields
- Password strength indicator
- Password confirmation
- Role selection (Job Seeker, Employer, Recruiter)
- Terms and conditions checkbox
- Social signup options
- Form validation with error messages
- Loading state with spinner animation

#### Profile

The Profile component allows users to create and manage their professional profile.

**Key Features:**
- Profile image upload
- Comprehensive personal information section
- Education details
- Work experience with ability to add multiple entries
- Skills selection with toggle functionality
- Job preferences (remote, onsite, hybrid)
- Salary expectations and availability
- Portfolio and social media links

#### Jobs

The Jobs component displays available job listings with search functionality.

**Key Features:**
- Job search with filtering by title, company, location, or skills
- Responsive grid layout for job cards
- Detailed job information including:
  - Job title, company, and location
  - Responsibilities
  - Required skills
  - Apply button
- "No results" message with option to clear search

#### Dashboard

The Dashboard component is a placeholder for future development.

**Key Features:**
- Basic structure in place for future implementation

#### Recommendations

The Recommendations component (RecommendationCard) displays personalized job matches.

**Key Features:**
- "Find My Matches" button to trigger the matching process
- Simulated API call with loading state
- Grid display of recommended job cards
- Job details including title, company, location, and skills

### UI Components

#### Navbar

The Navbar component provides navigation throughout the application.

**Key Features:**
- Application branding (JobMatchAI)
- Navigation links to main pages
- Responsive design with Tailwind CSS

#### Footer

The Footer component appears at the bottom of every page.

**Key Features:**
- Ratings section with star rating functionality
- Feedback section with form submission
- Contact information with social media links
- Copyright information

## Technologies Used

- **React**: Frontend library for building user interfaces
- **React Router**: For navigation and routing
- **Tailwind CSS**: For styling and responsive design
- **Vite**: Build tool and development server

## Future Enhancements

Potential future enhancements for the application include:

1. Backend integration with real API endpoints
2. User authentication with JWT
3. Advanced job matching algorithms
4. Employer dashboard for posting jobs
5. Messaging system between employers and job seekers
6. Advanced search filters
7. Job application tracking
8. Email notifications
9. Mobile application
10. Analytics dashboard for users to track their job search progress
