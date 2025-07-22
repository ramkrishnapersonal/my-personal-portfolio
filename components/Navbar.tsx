
import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { NavLinkItem } from '../types';
import { ROUTES, APP_NAME } from '../constants';
import { HomeIcon, UserIcon, BriefcaseIcon, CodeBracketIcon, BookOpenIcon, EnvelopeIcon, Bars3Icon, XMarkIcon } from './IconComponents';

const navLinks: NavLinkItem[] = [
  { label: 'Home', path: ROUTES.HOME, icon: (props) => <HomeIcon {...props} /> },
  { label: 'About', path: ROUTES.ABOUT, icon: (props) => <UserIcon {...props} /> },
  { label: 'Experience', path: ROUTES.EXPERIENCE, icon: (props) => <BriefcaseIcon {...props} /> },
  { label: 'Projects', path: ROUTES.PROJECTS, icon: (props) => <CodeBracketIcon {...props} /> },
  { label: 'Writings', path: ROUTES.WRITINGS, icon: (props) => <BookOpenIcon {...props} /> },
  { label: 'Contact', path: ROUTES.CONTACT, icon: (props) => <EnvelopeIcon {...props} /> },
];

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const NavItem: React.FC<{ item: NavLinkItem, onClick?: () => void }> = ({ item, onClick }) => {
    const isActive = location.pathname === item.path || (location.pathname.startsWith(item.path) && item.path !== ROUTES.HOME) || (location.pathname === ROUTES.HOME && item.path === ROUTES.HOME && location.hash === '');


    return (
      <Link
        to={item.path}
        onClick={onClick}
        className={`flex items-center px-3 py-2 rounded-md text-sm font-medium transition-colors duration-150 ease-in-out
                    ${isActive ? 'bg-accent text-white' : 'text-text-light hover:bg-secondary hover:text-white'}`}
      >
        {item.icon && <item.icon className="w-5 h-5 mr-2" />}
        {item.label}
      </Link>
    );
  };
  
  return (
    <nav className="bg-primary shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Link to={ROUTES.HOME} className="flex-shrink-0 text-white text-xl font-bold hover:text-accent transition-colors">
              {APP_NAME}
            </Link>
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              {navLinks.map((item) => (
                <NavItem key={item.label} item={item} />
              ))}
            </div>
          </div>
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              type="button"
              className="bg-secondary inline-flex items-center justify-center p-2 rounded-md text-text-light hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-primary focus:ring-white"
              aria-controls="mobile-menu"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              {!isOpen ? (
                <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
              ) : (
                <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden" id="mobile-menu">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navLinks.map((item) => (
              <NavItem key={item.label} item={item} onClick={() => setIsOpen(false)} />
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
    