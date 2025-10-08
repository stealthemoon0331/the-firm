'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import StoreSidebar from '@/components/StoreSidebar';
import { 
  Crown, 
  Users, 
  Building2, 
  ShoppingBag, 
  Coins, 
  Copy, 
  Check,
  Star,
  Shield,
  Car,
  Briefcase,
  Zap
} from 'lucide-react';

interface StoreCategory {
  id: string;
  title: string;
  subtitle: string;
  href: string;
  backgroundImage: string;
  icon: React.ReactNode;
}

const storeCategories: StoreCategory[] = [
  {
    id: 'subscriptions',
    title: 'SUBSCRIPTIONS',
    subtitle: 'Subscriptions',
    href: '/store/subscriptions',
    backgroundImage: '/api/placeholder/400/300',
    icon: <Crown className="h-8 w-8" />
  },
  {
    id: 'gang-packages',
    title: 'GANG PACKAGES',
    subtitle: 'Gang Packages',
    href: '/store/gang-packages',
    backgroundImage: '/api/placeholder/400/300',
    icon: <Users className="h-8 w-8" />
  },
  {
    id: 'businesses',
    title: 'BUSINESS SUBSCRIPTIONS',
    subtitle: 'Businesses',
    href: '/store/businesses',
    backgroundImage: '/api/placeholder/400/300',
    icon: <Building2 className="h-8 w-8" />
  },
  {
    id: 'buy-once',
    title: 'BUY IT ONCE',
    subtitle: 'Buy It Once',
    href: '/store/buy-once',
    backgroundImage: '/api/placeholder/400/300',
    icon: <ShoppingBag className="h-8 w-8" />
  },
  {
    id: 'vcoins',
    title: 'VCOIN STORE',
    subtitle: 'vCoins Store',
    href: '/store/vcoins',
    backgroundImage: '/api/placeholder/400/300',
    icon: <Coins className="h-8 w-8" />
  }
];

export default function StorePage() {
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
            <Image src="/logo.png" alt="The Firm" width={300} height={300} />
          </div>
        </div>

        {/* Top Bar */}
        <div className="relative z-10 flex items-center justify-between p-6">
          <div className="text-slate-400 text-sm">
            store.thefirm.club
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
              <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-0 h-0.5 bg-white transition-all duration-300 group-hover:w-full"></div>
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
            {/* Store Introduction */}
            <div className="mb-8">
              <h1 className="text-3xl font-bold text-white mb-6">
                Welcome to <span className="text-blue-400">The Firm</span>
              </h1>
              <div className="prose prose-invert max-w-none">
                <p className="text-gray-300 text-lg leading-relaxed mb-6">
                  Welcome to <strong>The Firm</strong>, the beating heart of business, crime, and enterprise within our city. 
                  The Firm is a community-driven server with immersive roleplay, dynamic economy, and player-led ventures, 
                  from high-profile mechanics to underground chop shops and nightclubs.
                </p>
                <p className="text-gray-300 text-lg leading-relaxed mb-6">
                  We offer tools and freedom to shape your story, where reputation, wealth, and power are earned through 
                  strategy and collaboration.
                </p>
              </div>
            </div>

            {/* Our Tebex Store */}
            <div className="mb-8">
              <h2 className="text-2xl font-bold text-white mb-4">
                Our <span className="text-blue-400">Tebex store</span>
              </h2>
              <p className="text-gray-300 text-lg leading-relaxed mb-4">
                Our <strong>Tebex store</strong> is your official gateway to premium business opportunities, 
                exclusive perks, and subscription-based enterprises within The Firm.
              </p>
              <ul className="list-disc list-inside text-gray-300 space-y-2 mb-6">
                <li>Purchase business subscriptions for hands-on management and higher GPB income</li>
                <li>Unlock exclusive add-ons and bundles (e.g., underground chop shops, elite dealerships)</li>
                <li>Support the ongoing development and growth of the server while enhancing your roleplay experience</li>
              </ul>
            </div>

            {/* Why Subscribe */}
            <div className="mb-8">
              <h2 className="text-2xl font-bold text-white mb-4">
                Why Subscribe?
              </h2>
              <p className="text-gray-300 text-lg leading-relaxed">
                Subscribers gain access to unique, <strong>RP-heavy businesses</strong> that offer more depth, 
                profitability, and creative control than standard in-game purchases.
              </p>
            </div>

            {/* Important Information */}
            <div className="bg-slate-800 rounded-xl p-6 border border-slate-700 mb-8">
              <div className="flex items-start space-x-3">
                <div className="text-yellow-500 mt-1">
                  <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-white mb-3">Important Information</h3>
                  <ul className="list-disc list-inside text-gray-300 space-y-2">
                    <li>All purchases are final and non-refundable.</li>
                    <li>We reserve the right to revoke subscriptions due to:</li>
                    <ul className="list-disc list-inside ml-4 mt-2 space-y-1">
                      <li>Prolonged inactivity (e.g., closed businesses)</li>
                      <li>Violations of server rules or moderation policy</li>
                      <li>Poor business management (e.g., no active staff or failure to operate)</li>
                    </ul>
                    <li>By purchasing through our Tebex store, you agree to these terms and help us maintain a vibrant and fair server economy.</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Category Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {storeCategories.map((category, index) => (
                <motion.div
                  key={category.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <Link href={category.href}>
                    <div className="group relative bg-slate-800 rounded-xl overflow-hidden border border-slate-700 hover:border-blue-500/50 transition-all duration-300 transform hover:scale-105 hover:shadow-xl hover:shadow-blue-500/20">
                      {/* Background Image */}
                      <div className="absolute inset-0 bg-gradient-to-br from-slate-700 to-slate-800 opacity-50 group-hover:opacity-30 transition-opacity duration-300" />
                      
                      {/* Content */}
                      <div className="relative z-10 p-8 h-48 flex flex-col justify-center items-center text-center">
                        <div className="text-blue-400 mb-4 group-hover:scale-110 transition-transform duration-300">
                          {category.icon}
                        </div>
                        <h3 className="text-xl font-bold text-white mb-2 group-hover:text-blue-300 transition-colors">
                          {category.title}
                        </h3>
                        <p className="text-gray-400 group-hover:text-gray-300 transition-colors">
                          {category.subtitle}
                        </p>
                      </div>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
