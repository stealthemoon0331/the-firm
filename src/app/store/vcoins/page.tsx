'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import StoreSidebar from '@/components/StoreSidebar';
import { 
  Crown, 
  Users, 
  Shield, 
  Star,
  Copy, 
  Check,
  AlertTriangle,
  Coins,
  Lightbulb,
  ShoppingCart
} from 'lucide-react';

interface VCoinPackage {
  id: string;
  amount: string;
  price: string;
  displayAmount: string;
  backgroundImage: string;
}

const vCoinPackages: VCoinPackage[] = [
  {
    id: '500-vcoins',
    amount: '500',
    price: '£3.49',
    displayAmount: '500 VCOINS',
    backgroundImage: '/api/placeholder/300/200'
  },
  {
    id: '1000-vcoins',
    amount: '1,000',
    price: '£5.99',
    displayAmount: '1,000 VCOINS',
    backgroundImage: '/api/placeholder/300/200'
  },
  {
    id: '2000-vcoins',
    amount: '2,000',
    price: '£10.99',
    displayAmount: '2,000 VCOINS',
    backgroundImage: '/api/placeholder/300/200'
  },
  {
    id: '5000-vcoins',
    amount: '5,000',
    price: '£24.99',
    displayAmount: '5,000 VCOINS',
    backgroundImage: '/api/placeholder/300/200'
  },
  {
    id: '10000-vcoins',
    amount: '10,000',
    price: '£44.99',
    displayAmount: '10,000 VCOINS',
    backgroundImage: '/api/placeholder/300/200'
  }
];

export default function VCoinsPage() {
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

  return (
    <div className="min-h-screen bg-slate-900">
      {/* Header with Background */}
      <div className="relative h-96 bg-gradient-to-br from-slate-800 via-slate-900 to-slate-800 overflow-hidden">
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
            TF
          </div>
        </div>

        {/* Top Bar */}
        <div className="relative z-10 flex items-center justify-between p-6">
          <div className="text-slate-400 text-sm">
            store.thefirm.club/category/vcoins-store
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
            
            <button className="flex items-center space-x-2 text-white hover:text-blue-400 transition-colors">
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
              className="relative text-gray-300 hover:text-white transition-all duration-300 px-4 py-2 rounded-lg hover:bg-slate-700/50 group"
            >
              <span className="relative z-10">Home</span>
              <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-0 h-0.5 bg-white transition-all duration-300 group-hover:w-full"></div>
            </Link>
            <Link 
              href="/store/subscriptions" 
              className="relative text-gray-300 hover:text-white transition-all duration-300 px-4 py-2 rounded-lg hover:bg-slate-700/50 group"
            >
              <span className="relative z-10">Subscriptions</span>
              <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-0 h-0.5 bg-white transition-all duration-300 group-hover:w-full"></div>
            </Link>
            <Link 
              href="/store/gang-packages" 
              className="relative text-gray-300 hover:text-white transition-all duration-300 px-4 py-2 rounded-lg hover:bg-slate-700/50 group"
            >
              <span className="relative z-10">Gang Packages</span>
              <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-0 h-0.5 bg-white transition-all duration-300 group-hover:w-full"></div>
            </Link>
            <Link 
              href="/store/businesses" 
              className="relative text-gray-300 hover:text-white transition-all duration-300 px-4 py-2 rounded-lg hover:bg-slate-700/50 group"
            >
              <span className="relative z-10">Businesses</span>
              <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-0 h-0.5 bg-white transition-all duration-300 group-hover:w-full"></div>
            </Link>
            <Link 
              href="/store/buy-once" 
              className="relative text-gray-300 hover:text-white transition-all duration-300 px-4 py-2 rounded-lg hover:bg-slate-700/50 group"
            >
              <span className="relative z-10">Buy It Once</span>
              <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-0 h-0.5 bg-white transition-all duration-300 group-hover:w-full"></div>
            </Link>
            <Link 
              href="/store/vcoins" 
              className="relative text-gray-300 hover:text-white transition-all duration-300 px-4 py-2 rounded-lg hover:bg-slate-700/50 group"
            >
              <span className="relative z-10">vCoins Store</span>
              <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-full h-0.5 bg-white"></div>
            </Link>
          </nav>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Left Sidebar */}
          <div className="lg:col-span-1">
            <StoreSidebar />
          </div>

          {/* Main Content Area */}
          <div className="lg:col-span-3">
            {/* Page Title */}
            <div className="mb-8">
              <h1 className="text-3xl font-bold text-white mb-6">
                vCoin Store
              </h1>
              <p className="text-gray-300 text-lg leading-relaxed mb-6">
                vCoins can be spent in the exclusive ingame vCoin Store - perfect for grabbing exclusive items, 
                vehicles, weapons, upgrades, and more. Whether you're a casual civilian or a grind-heavy elite, 
                vCoins give you the freedom to play your way. Buy once or stack up. Your wallet, your rules.
              </p>
              
              {/* Bonus Tip */}
              <div className="bg-slate-800 rounded-xl p-6 border border-slate-700 mb-8">
                <div className="flex items-start space-x-3">
                  <Lightbulb className="h-5 w-5 text-yellow-500 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="text-lg font-bold text-white mb-2">Bonus Tip</h3>
                    <p className="text-gray-300">
                      Subscribing to Civ Club or Civ Elite gives you monthly vCoins automatically, plus perks. 
                      Want more power, more often? Stack vCoins on top.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* vCoin Packages Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {vCoinPackages.map((pkg, index) => (
                <motion.div
                  key={pkg.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="group relative bg-slate-800 rounded-xl overflow-hidden border border-slate-700 hover:border-blue-500/50 transition-all duration-300"
                >
                  {/* Background Image */}
                  <div className="absolute inset-0 bg-gradient-to-br from-yellow-500/20 to-orange-500/20 opacity-50 group-hover:opacity-30 transition-opacity duration-300" />
                  
                  {/* Content */}
                  <div className="relative z-10 p-6">
                    {/* vCoin Amount Overlay */}
                    <div className="bg-purple-600/80 backdrop-blur-sm rounded-lg p-4 mb-4 text-center">
                      <h3 className="text-2xl font-bold text-white">
                        {pkg.displayAmount}
                      </h3>
                    </div>
                    
                    {/* Amount and Price */}
                    <div className="text-center mb-4">
                      <p className="text-lg font-semibold text-white mb-2">
                        {pkg.amount} vCoins
                      </p>
                      <p className="text-xl font-bold text-blue-400 mb-2">
                        {pkg.price}
                      </p>
                    </div>
                    
                    {/* Add to Basket Button */}
                    <button className="w-full bg-orange-500 hover:bg-orange-600 text-white font-semibold py-2 px-4 rounded-lg transition-colors transform hover:scale-105 flex items-center justify-center space-x-2">
                      <ShoppingCart className="h-4 w-4" />
                      <span>Add to Basket</span>
                    </button>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
