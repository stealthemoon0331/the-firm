'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import Image from 'next/image';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Legislations', href: '/legislations' },
    { name: 'Forum', href: '/forum' },
    { name: 'Policies', href: '/policies' },
    { name: 'Store', href: '/store' },
  ];

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled 
          ? 'bg-slate-900/95 backdrop-blur-xl border-b border-slate-700/50 shadow-2xl shadow-blue-500/10' 
          : 'bg-slate-900/80 backdrop-blur-sm'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Enhanced Logo */}
          <Link href="/" className="flex items-center space-x-3 md:space-x-4 group">
            <div className="relative">
              {/* <div className="w-12 h-12 md:w-14 md:h-14 bg-gradient-to-r from-blue-500 to-purple-500 rounded-xl md:rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg shadow-blue-500/25"> */}
                <Image src="/logo.png" alt="The Firm" width={50} height={50} />
              {/* </div> */}
              <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-purple-400 rounded-xl md:rounded-2xl blur-md opacity-0 group-hover:opacity-40 transition-opacity duration-300" />
            </div>
            <div className="flex flex-col">
              {/* <span className="font-heading font-bold text-xl md:text-2xl lg:text-3xl bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                The Firm
              </span> */}
              {/* <span className="text-xs md:text-sm text-gray-400 font-medium hidden sm:block">Premium Gaming Community</span> */}
            </div>
          </Link>

          {/* Enhanced Desktop Navigation */}
          <nav className="hidden lg:flex items-center lg:gap-4 space-x-1">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="relative px-4 py-3 text-gray-300 hover:text-white transition-all duration-300 group rounded-xl hover:bg-slate-800/50 text-sm font-medium"
              >
                <span className="relative z-10">{item.name}</span>
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-0 h-0.5 bg-gradient-to-r from-blue-400 to-purple-400 group-hover:w-4/5 transition-all duration-300" />
              </Link>
            ))}
          </nav>

          {/* Enhanced CTA Buttons */}
          <div className="hidden lg:flex items-center lg:gap-4 space-x-4">
            <Link
              href="https://discord.gg/3kXK2vSg"
              className="px-4 py-2 text-gray-300 hover:text-white transition-all duration-300 flex items-center space-x-2 group rounded-lg hover:bg-slate-800/50"
              target="_blank"
              rel="noopener noreferrer"
            >
              <svg className="h-6 w-6 group-hover:text-blue-400 transition-colors duration-300" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028c.462-.63.874-1.295 1.226-1.994a.076.076 0 0 0-.041-.106 13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.892.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.157 2.418z"/>
              </svg>
            </Link>
            {/* <Link
              href="/store"
              className="group relative px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl font-semibold hover:shadow-xl hover:shadow-blue-500/30 transition-all duration-300 transform hover:scale-105 flex items-center space-x-2 overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="relative flex items-center space-x-2">
                <Star className="h-4 w-4" />
                <span className="text-sm font-semibold">Join Premium</span>
              </div>
            </Link> */}
          </div>

          {/* Enhanced Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden p-3 text-gray-300 hover:text-white transition-all duration-300 rounded-xl hover:bg-slate-800/50 hover:shadow-lg"
            aria-label="Toggle menu"
          >
            <motion.div
              animate={{ rotate: isMenuOpen ? 180 : 0 }}
              transition={{ duration: 0.3 }}
            >
              {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </motion.div>
          </button>
        </div>

        {/* Enhanced Mobile Navigation */}
        <motion.div
          initial={false}
          animate={{
            height: isMenuOpen ? 'auto' : 0,
            opacity: isMenuOpen ? 1 : 0,
          }}
          transition={{ duration: 0.3, ease: 'easeInOut' }}
          className="lg:hidden overflow-hidden"
        >
          <div className="py-6 space-y-3 border-t border-slate-700/50">
            {navItems.map((item, index) => (
              <motion.div
                key={item.name}
                initial={{ x: -20, opacity: 0 }}
                animate={{ 
                  x: isMenuOpen ? 0 : -20, 
                  opacity: isMenuOpen ? 1 : 0 
                }}
                transition={{ delay: index * 0.1 }}
              >
                <Link
                  href={item.href}
                  className="block px-6 py-4 text-gray-300 hover:text-white hover:bg-slate-800/50 transition-all duration-300 rounded-xl font-medium text-base"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </Link>
              </motion.div>
            ))}
            <motion.div
              initial={{ x: -20, opacity: 0 }}
              animate={{ 
                x: isMenuOpen ? 0 : -20, 
                opacity: isMenuOpen ? 1 : 0 
              }}
              transition={{ delay: navItems.length * 0.1 }}
              className="pt-4 border-t border-slate-700/50"
            >
              {/* <Link
                href="/store"
                className="w-full px-6 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl font-semibold text-center hover:shadow-xl hover:shadow-blue-500/30 transition-all duration-300 flex items-center justify-center space-x-2 text-base transform hover:scale-105"
                onClick={() => setIsMenuOpen(false)}
              >
                <Star className="h-5 w-5" />
                <span>Join Premium</span>
              </Link> */}
            </motion.div>
          </div>
        </motion.div>
      </div>
    </motion.header>
  );
};

export default Header;

