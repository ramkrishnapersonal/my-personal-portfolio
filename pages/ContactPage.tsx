
import React, { useState, useEffect } from 'react';
import Section from '../components/Section';
import LoadingSpinner from '../components/LoadingSpinner';
import { ContactInfo } from '../types';
import { getContactInfo } from '../services/contentService';
import { EnvelopeIcon, LinkedinIcon, GithubIcon, CodeBracketIcon } from '../components/IconComponents'; // Assuming TwitterIcon exists or can be added

const ContactPage: React.FC = () => {
  const [contactInfo, setContactInfo] = useState<ContactInfo | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchContactInfo = async () => {
      try {
        setLoading(true);
        const data = await getContactInfo();
        setContactInfo(data);
      } catch (error) {
        console.error("Failed to fetch contact info:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchContactInfo();
  }, []);

  if (loading) {
    return <LoadingSpinner />;
  }

  if (!contactInfo) {
    return (
      <Section title="Contact Me">
        <p className="text-center text-gray-400">Contact information is currently unavailable.</p>
      </Section>
    );
  }

  const socialLinks = [
    { name: 'Email', href: `mailto:${contactInfo.email}`, icon: EnvelopeIcon, value: contactInfo.email },
    { name: 'LinkedIn', href: contactInfo.linkedin, icon: LinkedinIcon, value: 'Connect on LinkedIn' },
    { name: 'GitHub', href: contactInfo.github, icon: GithubIcon, value: 'View my GitHub' },
  ];

  if (contactInfo.twitter) {
    socialLinks.push({ name: 'Twitter', href: contactInfo.twitter, icon: CodeBracketIcon /* Placeholder, replace with TwitterIcon */, value: 'Follow on Twitter' });
  }


  return (
    <Section title="Get In Touch">
      <div className="max-w-xl mx-auto text-center">
        <p className="text-lg text-gray-300 mb-8">
          I'm always open to discussing new projects, creative ideas, or opportunities to be part of something amazing. Feel free to reach out!
        </p>
        
        <div className="space-y-6">
          {socialLinks.map(link => (
            <a
              key={link.name}
              href={link.href}
              target={link.name !== 'Email' ? '_blank' : '_self'}
              rel={link.name !== 'Email' ? 'noopener noreferrer' : undefined}
              className="flex items-center justify-center p-4 bg-secondary rounded-lg shadow-md hover:bg-gray-700 transition-colors duration-200 group"
            >
              <link.icon className="w-8 h-8 text-accent mr-4 group-hover:scale-110 transition-transform" />
              <span className="text-lg text-text-light group-hover:text-white">{link.value}</span>
            </a>
          ))}
        </div>

        <p className="mt-12 text-gray-400 text-sm">
          I look forward to hearing from you!
        </p>
      </div>
    </Section>
  );
};

export default ContactPage;
    