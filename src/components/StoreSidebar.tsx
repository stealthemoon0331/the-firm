'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';

interface StoreSidebarProps {
  className?: string;
}

export default function StoreSidebar({ className = "" }: StoreSidebarProps) {
  const [giftCardNumber, setGiftCardNumber] = useState('');
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const handleGiftCardCheck = () => {
    console.log('Checking gift card:', giftCardNumber);
  };

  return (
    <div className={`space-y-4 sm:space-y-6 ${className}`}>
      {/* Welcome Section */}
      <div className="bg-slate-800 rounded-xl p-4 sm:p-6 border border-slate-700">
        <h2 className="text-lg sm:text-xl font-bold text-white mb-3 sm:mb-4">
          Welcome to The Firm&apos;s Store
        </h2>
        <div className="bg-slate-700 rounded-lg p-3 sm:p-4 border border-slate-600">
          <p className="text-gray-300 text-xs sm:text-sm leading-relaxed">
            Support the community, unlock exclusive perks, and get ready for the streets of The Firm. 
            Need help? <a href="https://discord.com/invite/3kXK2vSg" target="_blank" rel="noopener noreferrer" className="text-blue-400 cursor-pointer hover:underline hover:text-blue-300 transition-colors">Join us on Discord</a>
          </p>
        </div>
      </div>

      {/* Featured Package */}
      <div className="bg-slate-800 rounded-xl p-4 sm:p-6 border border-slate-700">
        <h3 className="text-base sm:text-lg font-bold text-white mb-3 sm:mb-4">
          Featured Package
        </h3>
        <div className="bg-gradient-to-br from-yellow-500/20 to-orange-500/20 rounded-lg p-3 sm:p-4 border border-yellow-500/30">
          <div className="flex items-center justify-center mb-2 sm:mb-3">
            {mounted && (
              <Image src="/vip.png" alt="VIP" width={120} height={120} className='rounded-lg sm:w-[200px] sm:h-[200px]'/>
            )}
          </div>
          <h4 className="text-white font-semibold text-center mb-2 text-sm sm:text-base">VIP - Early Access</h4>
          <p className="text-white text-center mb-3 sm:mb-4 text-sm sm:text-base">£5.00</p>
          <button className="w-full bg-orange-500 hover:bg-orange-600 text-white font-semibold py-2 px-4 rounded-lg transition-colors text-sm sm:text-base">
            Subscribe
          </button>
        </div>
      </div>

      {/* Gift Card Balance */}
      <div className="bg-slate-800 rounded-xl p-4 sm:p-6 border border-slate-700">
        <h3 className="text-base sm:text-lg font-bold text-white mb-3 sm:mb-4">
          Giftcard Balance
        </h3>
        <div className="space-y-2 sm:space-y-3">
          <input
            type="text"
            placeholder="Enter gift card number"
            value={giftCardNumber}
            onChange={(e) => setGiftCardNumber(e.target.value)}
            className="w-full bg-slate-700 border border-slate-600 rounded-lg px-3 sm:px-4 py-2 text-white placeholder-gray-400 focus:outline-none focus:border-blue-500 text-sm sm:text-base"
          />
          <button
            onClick={handleGiftCardCheck}
            className="w-full bg-slate-700 hover:bg-slate-600 text-white font-semibold py-2 px-4 rounded-lg transition-colors text-sm sm:text-base"
          >
            Check
          </button>
        </div>
      </div>
    </div>
  );
}
