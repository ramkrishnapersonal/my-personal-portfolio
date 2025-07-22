
import React from 'react';
import { Experience } from '../types';

interface ExperienceItemProps {
  experience: Experience;
}

const ExperienceItem: React.FC<ExperienceItemProps> = ({ experience }) => {
  return (
    <div className="bg-secondary p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
      <div className="flex items-start space-x-4">
        {experience.logoUrl && (
          <img src={experience.logoUrl} alt={`${experience.company} logo`} className="w-12 h-12 rounded-full object-contain bg-white p-1"/>
        )}
        <div className="flex-1">
            <h3 className="text-xl font-semibold text-text-light">{experience.role}</h3>
            <p className="text-md text-accent">{experience.company}</p>
            <p className="text-sm text-gray-400 mb-3">{experience.period}</p>
        </div>
      </div>
      <ul className="list-disc list-inside text-gray-300 space-y-1 text-sm">
        {experience.description.map((point, index) => (
          <li key={index}>{point}</li>
        ))}
      </ul>
    </div>
  );
};

export default ExperienceItem;
    