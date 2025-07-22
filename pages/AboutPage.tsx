
import React from 'react';
import Section from '../components/Section';

const skills = [
  { name: 'React', level: 95 },
  { name: 'TypeScript', level: 90 },
  { name: 'JavaScript (ES6+)', level: 95 },
  { name: 'Tailwind CSS', level: 85 },
  { name: 'Next.js', level: 80 },
  { name: 'Node.js', level: 70 },
  { name: 'HTML5 & CSS3', level: 90 },
  { name: 'Git & GitHub', level: 85 },
  { name: 'UI/UX Design Principles', level: 75 },
  { name: 'Agile Methodologies', level: 80 },
];

const AboutPage: React.FC = () => {
  return (
    <Section title="About Me">
      <div className="max-w-3xl mx-auto text-center md:text-left">
        <div className="md:flex md:items-center md:space-x-8">
          <img 
            src="https://picsum.photos/seed/aboutprofile/200/200" 
            alt="Your Name - About" 
            className="w-40 h-40 md:w-48 md:h-48 rounded-full mx-auto md:mx-0 mb-6 md:mb-0 border-4 border-secondary shadow-lg"
          />
          <div>
            <p className="text-lg text-gray-300 mb-4 leading-relaxed">
              Hi there! I'm a dedicated and results-oriented Senior Frontend Engineer with a strong background in building modern, scalable, and performant web applications. My expertise lies in the React ecosystem, TypeScript, and crafting intuitive user interfaces with a keen eye for design and accessibility.
            </p>
            <p className="text-lg text-gray-300 mb-4 leading-relaxed">
              I thrive in collaborative environments and enjoy tackling complex challenges to deliver high-quality software solutions. Continuous learning is a core part of my philosophy, and I'm always eager to explore new technologies and methodologies to enhance my skill set.
            </p>
             <p className="text-lg text-gray-300 leading-relaxed">
              When I'm not coding, you can find me exploring new hiking trails, experimenting with new recipes, or diving into a good book on technology or science fiction.
            </p>
          </div>
        </div>

        <div className="mt-12">
          <h3 className="text-2xl font-semibold text-text-light mb-6 text-center">My Skills</h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
            {skills.map(skill => (
              <div key={skill.name} className="bg-secondary p-4 rounded-lg shadow-md text-center">
                <p className="font-medium text-text-light">{skill.name}</p>
                <div className="w-full bg-gray-700 rounded-full h-2.5 mt-2">
                  <div className="bg-accent h-2.5 rounded-full" style={{ width: `${skill.level}%` }}></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
};

export default AboutPage;
    