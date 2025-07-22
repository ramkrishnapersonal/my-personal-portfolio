
import React, { Suspense, lazy } from 'react';
import { HashRouter, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import LoadingSpinner from './components/LoadingSpinner';
import { ROUTES } from './constants';

// Lazy load pages for better initial load performance
const HomePage = lazy(() => import('./pages/HomePage.tsx'));
const AboutPage = lazy(() => import('./pages/AboutPage.tsx'));
const ExperiencePage = lazy(() => import('./pages/ExperiencePage.tsx'));
const ProjectsPage = lazy(() => import('./pages/ProjectsPage.tsx'));
const BlogListPage = lazy(() => import('./pages/BlogListPage.tsx'));
const BlogPostPage = lazy(() => import('./pages/BlogPostPage.tsx'));
const ContactPage = lazy(() => import('./pages/ContactPage.tsx'));

const ScrollToTop: React.FC = () => {
  const { pathname } = useLocation();

  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};


const App: React.FC = () => {
  return (
    <HashRouter>
      <ScrollToTop />
      <div className="flex flex-col min-h-screen bg-primary text-text-light">
        <Navbar />
        <main className="flex-grow container mx-auto px-0 sm:px-0 lg:px-0 py-0"> {/* Adjusted padding/margin if Section adds its own */}
          <Suspense fallback={<LoadingSpinner />}>
            <Routes>
              <Route path={ROUTES.HOME} element={<HomePage />} />
              <Route path={ROUTES.ABOUT} element={<AboutPage />} />
              <Route path={ROUTES.EXPERIENCE} element={<ExperiencePage />} />
              <Route path={ROUTES.PROJECTS} element={<ProjectsPage />} />
              <Route path={ROUTES.WRITINGS} element={<BlogListPage />} />
              <Route path={`${ROUTES.WRITINGS}/:slug`} element={<BlogPostPage />} />
              <Route path={ROUTES.CONTACT} element={<ContactPage />} />
              {/* Add a 404 page if desired */}
              <Route path="*" element={<HomePage />} /> {/* Fallback to HomePage or a 404 component */}
            </Routes>
          </Suspense>
        </main>
        <Footer />
      </div>
    </HashRouter>
  );
};

export default App;
