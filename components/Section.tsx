
import React from 'react';

interface SectionProps {
  title: string;
  children: React.ReactNode;
  className?: string;
  titleClassName?: string;
}

const Section: React.FC<SectionProps> = ({ title, children, className = '', titleClassName = '' }) => {
  return (
    <section className={`py-12 md:py-16 animate-fade-in-up ${className}`}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className={`text-3xl sm:text-4xl font-bold text-center mb-8 md:mb-12 text-highlight ${titleClassName}`}>
          {title}
        </h2>
        {children}
      </div>
    </section>
  );
};

export default Section;
    