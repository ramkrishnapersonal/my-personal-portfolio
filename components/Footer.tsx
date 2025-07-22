
import React from 'react';
import { SOCIAL_LINKS } from '../constants';
import { GithubIcon, LinkedinIcon, EnvelopeIcon } from './IconComponents';

const Footer: React.FC = () => {
  return (
    <footer className="bg-secondary text-text-light py-8 mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="flex justify-center space-x-6 mb-4">
          <a href={SOCIAL_LINKS.GITHUB} target="_blank" rel="noopener noreferrer" className="text-text-light hover:text-accent transition-colors">
            <GithubIcon className="h-6 w-6" />
            <span className="sr-only">GitHub</span>
          </a>
          <a href={SOCIAL_LINKS.LINKEDIN} target="_blank" rel="noopener noreferrer" className="text-text-light hover:text-accent transition-colors">
            <LinkedinIcon className="h-6 w-6" />
            <span className="sr-only">LinkedIn</span>
          </a>
          <a href={SOCIAL_LINKS.EMAIL} className="text-text-light hover:text-accent transition-colors">
            <EnvelopeIcon className="h-6 w-6" />
            <span className="sr-only">Email</span>
          </a>
        </div>
        <p className="text-sm">
          &copy; {new Date().getFullYear()} Your Name. All rights reserved.
        </p>
        <p className="text-xs mt-1">
          Built with React, TypeScript, and Tailwind CSS.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
    