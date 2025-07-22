
import React from 'react';
import { Link } from 'react-router-dom';
import { ROUTES, SOCIAL_LINKS } from '../constants';
import { GithubIcon, LinkedinIcon, EnvelopeIcon } from '../components/IconComponents';

const HomePage: React.FC = () => {
  return (
    <div className="min-h-[calc(100vh-8rem)] flex items-center justify-center animate-fade-in-up">
      <div className="text-center p-6 md:p-12">
        <img 
          src="https://picsum.photos/seed/profilepic/150/150" 
          alt="Your Name" 
          className="w-32 h-32 md:w-40 md:h-40 rounded-full mx-auto mb-6 border-4 border-accent shadow-lg"
        />
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-text-light mb-4">
          Hello, I'm <span className="text-accent">Your Name</span>
        </h1>
        <p className="text-lg sm:text-xl md:text-2xl text-gray-300 mb-8 max-w-2xl mx-auto">
          A passionate Senior Frontend Engineer specializing in React, TypeScript, and creating delightful user experiences.
        </p>
        <div className="space-x-0 space-y-4 sm:space-y-0 sm:space-x-4">
          <Link
            to={ROUTES.PROJECTS}
            className="inline-block bg-accent text-white font-semibold py-3 px-8 rounded-lg shadow-md hover:bg-blue-700 transition-colors duration-300 text-lg"
          >
            View My Work
          </Link>
          <Link
            to={ROUTES.CONTACT}
            className="inline-block bg-secondary text-text-light font-semibold py-3 px-8 rounded-lg shadow-md hover:bg-gray-600 transition-colors duration-300 text-lg"
          >
            Get In Touch
          </Link>
        </div>
        <div className="mt-12 flex justify-center space-x-6">
            <a href={SOCIAL_LINKS.GITHUB} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-accent transition-colors">
              <GithubIcon className="h-8 w-8" />
            </a>
            <a href={SOCIAL_LINKS.LINKEDIN} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-accent transition-colors">
              <LinkedinIcon className="h-8 w-8" />
            </a>
            <a href={SOCIAL_LINKS.EMAIL} className="text-gray-400 hover:text-accent transition-colors">
              <EnvelopeIcon className="h-8 w-8" />
            </a>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
    