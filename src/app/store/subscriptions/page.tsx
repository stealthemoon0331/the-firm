'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import StoreSidebar from '@/components/StoreSidebar';
import StoreHeader from '@/components/StoreHeader';
import { 
  Crown, 
  Users, 
  Shield, 
  Star,
  AlertTriangle
} from 'lucide-react';

interface SubscriptionPackage {
  id: string;
  title: string;
  price: string;
  description: string;
  features: string[];
  icon: React.ReactNode;
  backgroundImage: string;
  popular?: boolean;
}

const subscriptionPackages: SubscriptionPackage[] = [
  {
    id: 'vip',
    title: 'VIP - Early Access',
    price: '£5.00',
    description: 'Get early access to new features and exclusive content',
    features: [
      'Early access to new updates',
      'Exclusive VIP channels',
      'Priority support',
      'Special VIP badge'
    ],
    icon: <Crown className="h-8 w-8" />,
    backgroundImage: '/api/placeholder/300/200',
    popular: true
  },
  {
    id: 'civ-club',
    title: 'Civ Club',
    price: '£10.00',
    description: 'Enhanced civilian experience with premium perks',
    features: [
      'Monthly vCoins included',
      'Exclusive civilian vehicles',
      'Premium housing options',
      'Enhanced roleplay tools'
    ],
    icon: <Users className="h-8 w-8" />,
    backgroundImage: '/api/placeholder/300/200'
  },
  {
    id: 'blue-line-pass',
    title: 'Blue Line Pass',
    price: '£15.00',
    description: 'Complete law enforcement experience package',
    features: [
      'Exclusive police vehicles',
      'Advanced police equipment',
      'Special training programs',
      'Law enforcement perks'
    ],
    icon: <Shield className="h-8 w-8" />,
    backgroundImage: '/api/placeholder/300/200'
  },
  {
    id: 'civ-elite',
    title: 'Civ Elite',
    price: '£25.00',
    description: 'Ultimate civilian package with maximum benefits',
    features: [
      'Premium monthly vCoins',
      'Exclusive elite vehicles',
      'VIP housing locations',
      'Priority customer support',
      'Exclusive events access'
    ],
    icon: <Star className="h-8 w-8" />,
    backgroundImage: '/api/placeholder/300/200'
  }
];

export default function SubscriptionsPage() {
  return (
    <div className="min-h-screen bg-slate-900">
      {/* Header with Background */}
      <StoreHeader currentPage="subscriptions" />

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
                Unlock Exclusive Perks
              </h1>
              <p className="text-gray-300 text-lg leading-relaxed mb-6">
                Support The Firm and elevate your roleplay experience with our character-based subscription packages. 
                As a subscriber, you'll unlock a range of premium, character-specific benefits designed to enhance 
                your in-game life while directly contributing to the ongoing maintenance and development of the server.
              </p>
              
              {/* Important Note */}
              <div className="bg-slate-800 rounded-xl p-6 border border-slate-700 mb-8">
                <div className="flex items-start space-x-3">
                  <AlertTriangle className="h-5 w-5 text-yellow-500 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="text-lg font-bold text-white mb-2">Please Note:</h3>
                    <p className="text-gray-300">
                      All subscription perks are tied to the specific character they are purchased for and are non-transferable between characters.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Subscription Packages Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {subscriptionPackages.map((pkg, index) => (
                <motion.div
                  key={pkg.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="group relative bg-slate-800 rounded-xl overflow-hidden border border-slate-700 hover:border-blue-500/50 transition-all duration-300"
                >
                  {pkg.popular && (
                    <div className="absolute top-4 right-4 z-10">
                      <span className="bg-gradient-to-r from-yellow-500 to-orange-500 text-white text-xs font-bold px-3 py-1 rounded-full">
                        POPULAR
                      </span>
                    </div>
                  )}
                  
                  {/* Background Image */}
                  <div className="absolute inset-0 bg-gradient-to-br from-slate-700 to-slate-800 opacity-50 group-hover:opacity-30 transition-opacity duration-300" />
                  
                  {/* Content */}
                  <div className="relative z-10 p-8">
                    {/* Icon */}
                    <div className="flex items-center justify-center mb-6">
                      <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-purple-500 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                        {pkg.icon}
                      </div>
                    </div>
                    
                    {/* Title and Price */}
                    <div className="text-center mb-6">
                      <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-blue-300 transition-colors">
                        {pkg.title}
                      </h3>
                      <p className="text-3xl font-bold text-blue-400 mb-2">
                        {pkg.price}
                      </p>
                      <p className="text-gray-400 group-hover:text-gray-300 transition-colors">
                        {pkg.description}
                      </p>
                    </div>
                    
                    {/* Features */}
                    <div className="mb-6">
                      <h4 className="text-white font-semibold mb-3">Features:</h4>
                      <ul className="space-y-2">
                        {pkg.features.map((feature, idx) => (
                          <li key={idx} className="flex items-center space-x-2 text-gray-300">
                            <div className="w-2 h-2 bg-blue-500 rounded-full flex-shrink-0"></div>
                            <span className="text-sm">{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    {/* Subscribe Button */}
                    <button className="w-full bg-orange-500 hover:bg-orange-600 text-white font-semibold py-3 px-6 rounded-lg transition-colors transform hover:scale-105">
                      Subscribe
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
