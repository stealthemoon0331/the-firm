'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import StoreSidebar from '@/components/StoreSidebar';
import StoreHeader from '@/components/StoreHeader';
import { 
  Crown, 
  Users, 
  Building2, 
  ShoppingBag, 
  Coins, 
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
  return (
    <div className="min-h-screen bg-slate-900">
      {/* Header with Background */}
      <StoreHeader currentPage="" />

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
