'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';

interface StoreHeaderProps {
  currentPage?: string;
  className?: string;
}

export default function StoreHeader({ currentPage = '', className = "" }: StoreHeaderProps) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const isActivePage = (page: string) => {
    if (page === 'home' && currentPage === '') return true;
    return currentPage === page;
  };

  return (
    <div className={`relative h-96 bg-gradient-to-br from-slate-800 via-slate-900 to-slate-800 overflow-hidden ${className}`}>
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-30"
        style={{
          backgroundImage: `url('/dark-city.jpg')`
        }}
      />
      
      {/* TF Logo */}
      <div className=" flex items-center justify-center">
        <div className="text-8xl font-bold text-slate-600/50 select-none p-8">
          {mounted && (
            <Image src="/logo.png" alt="The Firm" width={300} height={300} />
          )}
        </div>
      </div>
    
      {/* Navigation */}
      <div className="absolute bottom-0 left-0 right-0">
        <nav className="flex items-center justify-center space-x-2 sm:space-x-4 lg:space-x-6 py-4 sm:py-6 px-4 sm:px-8 bg-slate-800/90 backdrop-blur-sm border-t border-slate-700/50 overflow-x-auto">
          <Link 
            href="/store" 
            className={`relative transition-all duration-300 px-2 sm:px-4 py-2 rounded-lg hover:bg-slate-700/50 group whitespace-nowrap ${
              isActivePage('') ? 'text-white' : 'text-gray-300 hover:text-white'
            }`}
          >
            <span className="relative z-10 text-sm sm:text-base">Home</span>
            <div className={`absolute bottom-0 left-1/2 transform -translate-x-1/2 h-0.5 bg-white transition-all duration-300 ${
              isActivePage('') ? 'w-full' : 'w-0 group-hover:w-full'
            }`}></div>
          </Link>
          <Link 
            href="/store/subscriptions" 
            className={`relative transition-all duration-300 px-2 sm:px-4 py-2 rounded-lg hover:bg-slate-700/50 group whitespace-nowrap ${
              isActivePage('subscriptions') ? 'text-white' : 'text-gray-300 hover:text-white'
            }`}
          >
            <span className="relative z-10 text-sm sm:text-base">Subscriptions</span>
            <div className={`absolute bottom-0 left-1/2 transform -translate-x-1/2 h-0.5 bg-white transition-all duration-300 ${
              isActivePage('subscriptions') ? 'w-full' : 'w-0 group-hover:w-full'
            }`}></div>
          </Link>
          <Link 
            href="/store/gang-packages" 
            className={`relative transition-all duration-300 px-2 sm:px-4 py-2 rounded-lg hover:bg-slate-700/50 group whitespace-nowrap ${
              isActivePage('gang-packages') ? 'text-white' : 'text-gray-300 hover:text-white'
            }`}
          >
            <span className="relative z-10 text-sm sm:text-base">Gang Packages</span>
            <div className={`absolute bottom-0 left-1/2 transform -translate-x-1/2 h-0.5 bg-white transition-all duration-300 ${
              isActivePage('gang-packages') ? 'w-full' : 'w-0 group-hover:w-full'
            }`}></div>
          </Link>
          <Link 
            href="/store/businesses" 
            className={`relative transition-all duration-300 px-2 sm:px-4 py-2 rounded-lg hover:bg-slate-700/50 group whitespace-nowrap ${
              isActivePage('businesses') ? 'text-white' : 'text-gray-300 hover:text-white'
            }`}
          >
            <span className="relative z-10 text-sm sm:text-base">Businesses</span>
            <div className={`absolute bottom-0 left-1/2 transform -translate-x-1/2 h-0.5 bg-white transition-all duration-300 ${
              isActivePage('businesses') ? 'w-full' : 'w-0 group-hover:w-full'
            }`}></div>
          </Link>
          <Link 
            href="/store/buy-once" 
            className={`relative transition-all duration-300 px-2 sm:px-4 py-2 rounded-lg hover:bg-slate-700/50 group whitespace-nowrap ${
              isActivePage('buy-once') ? 'text-white' : 'text-gray-300 hover:text-white'
            }`}
          >
            <span className="relative z-10 text-sm sm:text-base">Buy It Once</span>
            <div className={`absolute bottom-0 left-1/2 transform -translate-x-1/2 h-0.5 bg-white transition-all duration-300 ${
              isActivePage('buy-once') ? 'w-full' : 'w-0 group-hover:w-full'
            }`}></div>
          </Link>
          <Link 
            href="/store/vcoins" 
            className={`relative transition-all duration-300 px-2 sm:px-4 py-2 rounded-lg hover:bg-slate-700/50 group whitespace-nowrap ${
              isActivePage('vcoins') ? 'text-white' : 'text-gray-300 hover:text-white'
            }`}
          >
            <span className="relative z-10 text-sm sm:text-base">vCoins Store</span>
            <div className={`absolute bottom-0 left-1/2 transform -translate-x-1/2 h-0.5 bg-white transition-all duration-300 ${
              isActivePage('vcoins') ? 'w-full' : 'w-0 group-hover:w-full'
            }`}></div>
          </Link>
        </nav>
      </div>
    </div>
  );
}
