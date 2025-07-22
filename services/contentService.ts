
import { Experience, Project, BlogPost, ContactInfo } from '../types';

const MOCK_EXPERIENCES: Experience[] = [
  {
    id: 'exp1',
    role: 'Senior Frontend Engineer',
    company: 'Tech Solutions Inc.',
    period: 'Jan 2021 - Present',
    description: [
      'Led the development of a new client-facing dashboard using React, TypeScript, and Tailwind CSS, improving user engagement by 25%.',
      'Mentored junior developers and conducted code reviews to maintain high code quality.',
      'Collaborated with UX/UI designers to implement responsive and accessible web interfaces.',
      'Integrated with various backend APIs and third-party services.'
    ],
    logoUrl: 'https://picsum.photos/seed/techsolutions/100/100'
  },
  {
    id: 'exp2',
    role: 'Frontend Developer',
    company: 'Web Wizards LLC',
    period: 'June 2018 - Dec 2020',
    description: [
      'Developed and maintained features for e-commerce platforms using Angular and Vue.js.',
      'Worked in an Agile environment, participating in sprint planning and daily stand-ups.',
      'Contributed to a 15% improvement in page load times through performance optimization techniques.'
    ],
    logoUrl: 'https://picsum.photos/seed/webwizards/100/100'
  },
];

const MOCK_PROJECTS: Project[] = [
  {
    id: 'proj1',
    title: 'Interactive Data Visualization Tool',
    description: 'A web application for visualizing complex datasets using D3.js and React. Allows users to upload data, select chart types, and customize visualizations.',
    imageUrl: 'https://picsum.photos/seed/dataviz/600/400',
    tags: ['React', 'D3.js', 'TypeScript', 'Node.js'],
    liveUrl: '#',
    repoUrl: '#',
  },
  {
    id: 'proj2',
    title: 'E-commerce Platform Redesign',
    description: 'Led the frontend redesign of an existing e-commerce site, focusing on mobile-first design and improved user experience. Implemented with Next.js and Tailwind CSS.',
    imageUrl: 'https://picsum.photos/seed/ecom/600/400',
    tags: ['Next.js', 'React', 'Tailwind CSS', 'Stripe'],
    liveUrl: '#',
  },
  {
    id: 'proj3',
    title: 'AI-Powered Recipe Generator',
    description: 'A fun project that uses a generative AI model to create unique recipes based on user-provided ingredients. Built with Python (Flask) backend and a React frontend.',
    imageUrl: 'https://picsum.photos/seed/recipeai/600/400',
    tags: ['React', 'Python', 'Flask', 'AI/ML'],
    repoUrl: '#',
  },
];

const MOCK_BLOG_POSTS: BlogPost[] = [
  {
    slug: 'mastering-react-hooks',
    title: 'Mastering React Hooks: A Deep Dive',
    date: 'October 26, 2023',
    summary: 'Explore advanced patterns and best practices for using React Hooks to build efficient and maintainable components.',
    content: `
      <h2 class="text-2xl font-semibold mb-4 text-text-light">Introduction to React Hooks</h2>
      <p class="mb-4 text-gray-300">React Hooks, introduced in React 16.8, revolutionized how we write React components. They allow you to use state and other React features without writing a class. This post delves into some of the more nuanced aspects of hooks like useEffect, useCallback, and useMemo.</p>
      <h3 class="text-xl font-semibold mb-2 text-text-light">Understanding useEffect</h3>
      <p class="mb-4 text-gray-300">The useEffect hook lets you perform side effects in function components. It's a close replacement for componentDidMount, componentDidUpdate, and componentWillUnmount. We'll look at dependency arrays and cleanup functions.</p>
      <pre class="bg-gray-800 text-gray-200 p-4 rounded-md overflow-x-auto mb-4"><code class="language-javascript">
// Example of useEffect
useEffect(() => {
  // Side effect logic
  console.log('Component mounted or updated');
  return () => {
    // Cleanup logic
    console.log('Component will unmount or before re-run');
  };
}, [dependency]);
      </code></pre>
      <p class="mb-4 text-gray-300">Further sections will cover useCallback for memoizing functions and useMemo for memoizing values, crucial for performance optimization.</p>
    `,
    author: 'Your Name',
    tags: ['react', 'javascript', 'hooks', 'frontend'],
  },
  {
    slug: 'tailwind-css-for-rapid-ui',
    title: 'Tailwind CSS: The Key to Rapid UI Development',
    date: 'November 15, 2023',
    summary: 'Discover how Tailwind CSS can accelerate your UI development workflow with its utility-first approach.',
    content: `
      <h2 class="text-2xl font-semibold mb-4 text-text-light">Why Tailwind CSS?</h2>
      <p class="mb-4 text-gray-300">Tailwind CSS is a utility-first CSS framework packed with classes like <code class="bg-gray-700 px-1 rounded">flex</code>, <code class="bg-gray-700 px-1 rounded">pt-4</code>, <code class="bg-gray-700 px-1 rounded">text-center</code> and <code class="bg-gray-700 px-1 rounded">rotate-90</code> that can be composed to build any design, directly in your markup.</p>
      <h3 class="text-xl font-semibold mb-2 text-text-light">Core Concepts</h3>
      <ul class="list-disc list-inside mb-4 text-gray-300">
        <li>Utility-First: Style elements by applying pre-existing classes directly in your HTML.</li>
        <li>Responsive Design: Easily build responsive interfaces using Tailwind’s responsive modifiers.</li>
        <li>Customization: Highly customizable via the <code class="bg-gray-700 px-1 rounded">tailwind.config.js</code> file.</li>
      </ul>
      <p class="mb-4 text-gray-300">This article will walk you through setting up Tailwind CSS in a project and building a few common UI components to demonstrate its power and flexibility.</p>
    `,
    author: 'Your Name',
    tags: ['css', 'tailwindcss', 'frontend', 'ui-design'],
  },
];

const MOCK_CONTACT_INFO: ContactInfo = {
  email: 'your.email@example.com',
  linkedin: 'https://linkedin.com/in/yourusername',
  github: 'https://github.com/yourusername',
  twitter: 'https://twitter.com/yourusername',
};

// Simulate API calls
const simulateApiCall = <T,>(data: T): Promise<T> => {
  return new Promise(resolve => setTimeout(() => resolve(data), 500));
};

export const getExperiences = (): Promise<Experience[]> => {
  return simulateApiCall(MOCK_EXPERIENCES);
};

export const getProjects = (): Promise<Project[]> => {
  return simulateApiCall(MOCK_PROJECTS);
};

export const getBlogPosts = (): Promise<BlogPost[]> => {
  return simulateApiCall(MOCK_BLOG_POSTS);
};

export const getBlogPostBySlug = (slug: string): Promise<BlogPost | undefined> => {
  const post = MOCK_BLOG_POSTS.find(p => p.slug === slug);
  return simulateApiCall(post);
};

export const getContactInfo = (): Promise<ContactInfo> => {
  return simulateApiCall(MOCK_CONTACT_INFO);
};
    