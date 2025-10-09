'use client';

import { motion } from 'framer-motion';
import StoreSidebar from '@/components/StoreSidebar';
import StoreHeader from '@/components/StoreHeader';
import Image from 'next/image';
import { AlertTriangle, Crown, Shield, Star, Users } from 'lucide-react';

interface SubscriptionPackage {
  id: string;
  title: string;
  price: string;
  icon: React.ReactNode;
  backgroundImage: string;
  popular?: boolean;
}

const subscriptionPackages: SubscriptionPackage[] = [
  {
    id: 'vip',
    title: 'VIP - Early Access',
    price: '£5.00',
    icon: <Crown className="h-8 w-8" />,
    backgroundImage: '/vip.png',
    popular: false    
  },
  {
    id: 'civ-club',
    title: 'Civ Club',
    price: '£10.00',
    icon: <Users className="h-8 w-8" />,
    backgroundImage: '/store/civ-club.png'    
  },
  {
    id: 'blue-line-pass',
    title: 'Blue Line Pass',
    price: '£15.00',
    icon: <Shield className="h-8 w-8" />,
    backgroundImage: '/store/blue-line-pass.png'
  },
  {
    id: 'civ-elite',
    title: 'Civ Elite',
    price: '£25.00',
    icon: <Star className="h-8 w-8" />,
    backgroundImage: '/store/civ-elite.png'
  }
];

export default function SubscriptionsPage() {
  return (
    <div className="min-h-screen bg-slate-900">
      {/* Header with Background */}
      <StoreHeader currentPage="subscriptions" />

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 lg:gap-8">
          {/* Left Sidebar */}
          <div className="lg:col-span-1 order-2 lg:order-1">
            <StoreSidebar />
          </div>

          {/* Main Content Area */}
          <div className="lg:col-span-3 order-1 lg:order-2">
            {/* Page Title */}
            <div className="mb-8">
              <h1 className="text-2xl sm:text-3xl font-bold text-white mb-4 sm:mb-6">
                Unlock Exclusive Perks
              </h1>
              <p className="text-gray-300 text-base sm:text-lg leading-relaxed mb-4 sm:mb-6">
                Support The Firm and elevate your roleplay experience with our character-based subscription packages. 
                As a subscriber, you&apos;ll unlock a range of premium, character-specific benefits designed to enhance 
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
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {subscriptionPackages.map((pkg, index) => (
                <motion.div
                  key={pkg.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="group relative bg-slate-800 rounded-xl overflow-hidden border border-slate-700 hover:border-blue-500/50 transition-all duration-300 flex flex-col h-full"
                >
                  {pkg.popular && (
                    <div className="absolute top-4 right-4 z-10">
                      <span className="bg-gradient-to-r from-yellow-500 to-orange-500 text-white text-xs font-bold px-3 py-1 rounded-full">
                        POPULAR
                      </span>
                    </div>
                  )}
                  
                  {/* Background Image */}
                  <div className="flex-shrink-0">
                    <Image src={pkg.backgroundImage} alt={pkg.title} width={300} height={200} />
                  </div>
                  
                  {/* Content */}
                  <div className="relative z-10 p-6 flex flex-col flex-grow">
                    {/* Title and Price */}
                    <div className="text-center mb-4 flex-grow">
                      <h3 className="text-lg font-bold text-white mb-2 group-hover:text-blue-300 transition-colors">
                        {pkg.title}
                      </h3>
                      <p className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400 mb-2">
                        {pkg.price}
                      </p>
                    </div>
                    
                    {/* Subscribe Button */}
                    <button className="w-full bg-orange-500 hover:bg-orange-600 text-white font-semibold py-2 px-4 rounded-lg transition-colors transform hover:scale-105 mt-auto">
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
