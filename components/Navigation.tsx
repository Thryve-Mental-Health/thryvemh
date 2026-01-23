'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';
import ThryveLogo from './ThryveLogo';

export default function Navigation() {
  const pathname = usePathname();
  const isHomePage = pathname === '/';
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="flex items-center">
            <ThryveLogo />
          </Link>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <>
              <Link href={isHomePage ? "#features" : "/#features"} className="text-gray-700 hover:text-gray-900 text-sm font-medium">
                Features
              </Link>
              <Link href={isHomePage ? "#how-it-works" : "/#how-it-works"} className="text-gray-700 hover:text-gray-900 text-sm font-medium">
                How it works
              </Link>
            </>
            <Link href="/about" className={`text-sm font-medium ${pathname === '/about' ? 'text-gray-900 font-semibold' : 'text-gray-700 hover:text-gray-900'}`}>
              About
            </Link>
          </nav>
          
          {/* Desktop CTA */}
          <div className="hidden md:flex items-center space-x-4">
            <Link 
              href="/#get-started" 
              className="inline-flex items-center justify-center px-4 py-2 text-sm font-medium text-white rounded hover:opacity-90"
              style={{ backgroundColor: 'rgb(11, 102, 61)' }}
            >
              Join waitlist
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            type="button"
            className="md:hidden inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-gray-900 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-green-500"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-expanded="false"
          >
            <span className="sr-only">Open main menu</span>
            {mobileMenuOpen ? (
              <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>

        {/* Mobile menu */}
        {mobileMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 border-t border-gray-200">
              <>
                <Link
                  href={isHomePage ? "#features" : "/#features"}
                  className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50 rounded-md"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Features
                </Link>
                <Link
                  href={isHomePage ? "#how-it-works" : "/#how-it-works"}
                  className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50 rounded-md"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  How it works
                </Link>
              </>
              <Link
                href="/about"
                className={`block px-3 py-2 text-base font-medium rounded-md ${pathname === '/about' ? 'text-gray-900 bg-gray-50 font-semibold' : 'text-gray-700 hover:text-gray-900 hover:bg-gray-50'}`}
                onClick={() => setMobileMenuOpen(false)}
              >
                About
              </Link>
              <Link
                href="/#get-started"
                className="inline-flex items-center justify-center w-full px-3 py-2 text-base font-medium text-white rounded-md hover:opacity-90"
                style={{ backgroundColor: 'rgb(11, 102, 61)' }}
                onClick={() => setMobileMenuOpen(false)}
              >
                Join waitlist
              </Link>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
