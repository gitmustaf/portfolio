'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';

const Sidebar = () => {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  const handleLinkClick = () => {
    setIsOpen(false);
  };

  return (
    <div className="md:relative">
      <div className="md:hidden absolute top-0 left-0 z-20">
        <button onClick={() => setIsOpen(!isOpen)} className="text-black p-4">
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="black"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            {isOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16m-7 6h7"
              />
            )}
          </svg>
        </button>
      </div>
      <nav
        className={`w-64 h-screen bg-gray-800 text-white flex-col z-10 ${
          isOpen ? 'flex' : 'hidden'
        } md:flex`}
      >
        <div className="p-4">
          <h1 className="text-2xl font-bold">Navigation</h1>
        </div>
        <ul>
          <li>
            <Link
              href="/"
              className={`block p-4 hover:bg-gray-700 ${
                pathname === '/' ? 'bg-gray-900' : ''
              }`}
              onClick={handleLinkClick}
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              href="/about"
              className={`block p-4 hover:bg-gray-700 ${
                pathname === '/about' ? 'bg-gray-900' : ''
              }`}
              onClick={handleLinkClick}
            >
              About
            </Link>
          </li>
          <li>
            <Link
              href="/services"
              className={`block p-4 hover:bg-gray-700 ${
                pathname === '/services' ? 'bg-gray-900' : ''
              }`}
              onClick={handleLinkClick}
            >
              Services
            </Link>
          </li>
          <li>
            <Link
              href="/portfolio"
              className={`block p-4 hover:bg-gray-700 ${
                pathname === '/portfolio' ? 'bg-gray-900' : ''
              }`}
              onClick={handleLinkClick}
            >
              Portfolio
            </Link>
          </li>
          <li>
            <Link
              href="/contact"
              className={`block p-4 hover:bg-gray-700 ${
                pathname === '/contact' ? 'bg-gray-900' : ''
              }`}
              onClick={handleLinkClick}
            >
              Contact
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Sidebar;
  