'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import { 
  Users, 
  Copy, 
  Check
} from 'lucide-react';

interface StoreHeaderProps {
  currentPage?: string;
  className?: string;
}

export default function StoreHeader({ currentPage = '', className = "" }: StoreHeaderProps) {
  const [copied, setCopied] = useState(false);

  const handleCopyServer = async () => {
    try {
      await navigator.clipboard.writeText('play.thefirm.club');
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy: ', err);
    }
  };

  const handleDiscordClick = () => {
    window.open('https://discord.com/invite/3kXK2vSg', '_blank', 'noopener,noreferrer');
  };

  const getPageUrl = () => {
    if (currentPage === 'home') return 'store.thefirm.club';
    return `store.thefirm.club/category/${currentPage}`;
  };

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
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="text-8xl font-bold text-slate-600/50 select-none">
          <Image src="/logo.png" alt="The Firm" width={300} height={300} />
        </div>
      </div>

      {/* Top Bar */}
      <div className="relative z-10 flex items-center justify-between p-6">
        <div className="text-slate-400 text-sm">
          {getPageUrl()}
        </div>
        
        <div className="flex items-center space-x-6">
          <button
            onClick={handleCopyServer}
            className="flex items-center space-x-2 text-white hover:text-blue-400 transition-colors"
          >
            <Users className="h-4 w-4" />
            <span>connect</span>
            <div className="text-center">
              <div className="text-sm font-medium">play.thefirm.club</div>
              <div className="text-xs text-blue-400">Click to Copy</div>
            </div>
            {copied ? <Check className="h-4 w-4 text-green-400" /> : <Copy className="h-4 w-4" />}
          </button>
          
          <button 
            onClick={handleDiscordClick}
            className="flex items-center space-x-2 text-white hover:text-blue-400 transition-colors"
          >
            <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
              <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028c.462-.63.874-1.295 1.226-1.994a.076.076 0 0 0-.041-.106 13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.892.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.157 2.418z"/>
            </svg>
            <span>Join our Discord</span>
            <div className="text-xs text-blue-400">Click to Join</div>
          </button>
        </div>
      </div>

      {/* Navigation */}
      <div className="absolute bottom-0 left-0 right-0">
        <nav className="flex items-center justify-center space-x-6 py-4 bg-slate-800/90 backdrop-blur-sm border-t border-slate-700/50">
          <Link 
            href="/store" 
            className={`relative transition-all duration-300 px-4 py-2 rounded-lg hover:bg-slate-700/50 group ${
              isActivePage('') ? 'text-white' : 'text-gray-300 hover:text-white'
            }`}
          >
            <span className="relative z-10">Home</span>
            <div className={`absolute bottom-0 left-1/2 transform -translate-x-1/2 h-0.5 bg-white transition-all duration-300 ${
              isActivePage('') ? 'w-full' : 'w-0 group-hover:w-full'
            }`}></div>
          </Link>
          <Link 
            href="/store/subscriptions" 
            className={`relative transition-all duration-300 px-4 py-2 rounded-lg hover:bg-slate-700/50 group ${
              isActivePage('subscriptions') ? 'text-white' : 'text-gray-300 hover:text-white'
            }`}
          >
            <span className="relative z-10">Subscriptions</span>
            <div className={`absolute bottom-0 left-1/2 transform -translate-x-1/2 h-0.5 bg-white transition-all duration-300 ${
              isActivePage('subscriptions') ? 'w-full' : 'w-0 group-hover:w-full'
            }`}></div>
          </Link>
          <Link 
            href="/store/gang-packages" 
            className={`relative transition-all duration-300 px-4 py-2 rounded-lg hover:bg-slate-700/50 group ${
              isActivePage('gang-packages') ? 'text-white' : 'text-gray-300 hover:text-white'
            }`}
          >
            <span className="relative z-10">Gang Packages</span>
            <div className={`absolute bottom-0 left-1/2 transform -translate-x-1/2 h-0.5 bg-white transition-all duration-300 ${
              isActivePage('gang-packages') ? 'w-full' : 'w-0 group-hover:w-full'
            }`}></div>
          </Link>
          <Link 
            href="/store/businesses" 
            className={`relative transition-all duration-300 px-4 py-2 rounded-lg hover:bg-slate-700/50 group ${
              isActivePage('businesses') ? 'text-white' : 'text-gray-300 hover:text-white'
            }`}
          >
            <span className="relative z-10">Businesses</span>
            <div className={`absolute bottom-0 left-1/2 transform -translate-x-1/2 h-0.5 bg-white transition-all duration-300 ${
              isActivePage('businesses') ? 'w-full' : 'w-0 group-hover:w-full'
            }`}></div>
          </Link>
          <Link 
            href="/store/buy-once" 
            className={`relative transition-all duration-300 px-4 py-2 rounded-lg hover:bg-slate-700/50 group ${
              isActivePage('buy-once') ? 'text-white' : 'text-gray-300 hover:text-white'
            }`}
          >
            <span className="relative z-10">Buy It Once</span>
            <div className={`absolute bottom-0 left-1/2 transform -translate-x-1/2 h-0.5 bg-white transition-all duration-300 ${
              isActivePage('buy-once') ? 'w-full' : 'w-0 group-hover:w-full'
            }`}></div>
          </Link>
          <Link 
            href="/store/vcoins" 
            className={`relative transition-all duration-300 px-4 py-2 rounded-lg hover:bg-slate-700/50 group ${
              isActivePage('vcoins') ? 'text-white' : 'text-gray-300 hover:text-white'
            }`}
          >
            <span className="relative z-10">vCoins Store</span>
            <div className={`absolute bottom-0 left-1/2 transform -translate-x-1/2 h-0.5 bg-white transition-all duration-300 ${
              isActivePage('vcoins') ? 'w-full' : 'w-0 group-hover:w-full'
            }`}></div>
          </Link>
        </nav>
      </div>
    </div>
  );
}
