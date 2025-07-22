
import React, { useState, useEffect } from 'react';
import Section from '../components/Section';
import ExperienceItem from '../components/ExperienceItem';
import LoadingSpinner from '../components/LoadingSpinner';
import { Experience } from '../types';
import { getExperiences } from '../services/contentService';

const ExperiencePage: React.FC = () => {
  const [experiences, setExperiences] = useState<Experience[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchExperiences = async () => {
      try {
        setLoading(true);
        const data = await getExperiences();
        setExperiences(data);
      } catch (error) {
        console.error("Failed to fetch experiences:", error);
        // Optionally, set an error state here
      } finally {
        setLoading(false);
      }
    };

    fetchExperiences();
  }, []);

  if (loading) {
    return <LoadingSpinner />;
  }

  return (
    <Section title="Work Experience">
      <div className="max-w-3xl mx-auto">
        {experiences.length === 0 && !loading ? (
          <p className="text-center text-gray-400">No experience data available at the moment.</p>
        ) : (
          <div className="space-y-8">
            {experiences.map((exp) => (
              <ExperienceItem key={exp.id} experience={exp} />
            ))}
          </div>
        )}
      </div>
    </Section>
  );
};

export default ExperiencePage;
    