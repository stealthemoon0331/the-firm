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
  AlertTriangle,
  UserPlus,
  ShoppingBag,
  Gift
} from 'lucide-react';

interface BuyOncePackage {
  id: string;
  title: string;
  price: string;
  description: string;
  features: string[];
  icon: React.ReactNode;
  backgroundImage: string;
}

const buyOncePackages: BuyOncePackage[] = [
  {
    id: 'character-slot-plus',
    title: 'Character Slot+',
    price: '£9.99',
    description: 'Additional character slot for expanded roleplay opportunities',
    features: [
      'Extra character slot',
      'Separate character progression',
      'Independent inventory',
      'Unique character identity'
    ],
    icon: <UserPlus className="h-8 w-8" />,
    backgroundImage: '/api/placeholder/300/200'
  },
  {
    id: 'premium-vehicle',
    title: 'Premium Vehicle Package',
    price: '£15.99',
    description: 'Exclusive vehicle with custom modifications',
    features: [
      'Exclusive vehicle model',
      'Custom paint job',
      'Performance upgrades',
      'Unique license plate'
    ],
    icon: <ShoppingBag className="h-8 w-8" />,
    backgroundImage: '/api/placeholder/300/200'
  },
  {
    id: 'property-upgrade',
    title: 'Property Upgrade',
    price: '£12.99',
    description: 'Enhanced property with premium amenities',
    features: [
      'Larger property space',
      'Premium interior design',
      'Security upgrades',
      'Custom furniture'
    ],
    icon: <Gift className="h-8 w-8" />,
    backgroundImage: '/api/placeholder/300/200'
  }
];

export default function BuyOncePage() {
  return (
    <div className="min-h-screen bg-slate-900">
      {/* Header with Background */}
      <StoreHeader currentPage="buy-once" />

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
                Welcome to the Buy It Once section - The place for permanent, one-time purchases.
              </h1>
              <p className="text-gray-300 text-lg leading-relaxed mb-6">
                Everything you'll find here is unlocked with a single payment, with no subscriptions, renewals, or hidden fees. 
                Once you've bought it, it's yours to keep forever. Whether it's exclusive perks, special items, or unique upgrades, 
                these are simple, straightforward purchases designed to give you lasting value without ongoing costs. 
                <strong>Buy it once, enjoy it always.</strong>
              </p>
            </div>

            {/* Buy Once Packages Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {buyOncePackages.map((pkg, index) => (
                <motion.div
                  key={pkg.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="group relative bg-slate-800 rounded-xl overflow-hidden border border-slate-700 hover:border-blue-500/50 transition-all duration-300"
                >
                  {/* Background Image */}
                  <div className="absolute inset-0 bg-gradient-to-br from-slate-700 to-slate-800 opacity-50 group-hover:opacity-30 transition-opacity duration-300" />
                  
                  {/* Content */}
                  <div className="relative z-10 p-6">
                    {/* Icon */}
                    <div className="flex items-center justify-center mb-4">
                      <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-500 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                        {pkg.icon}
                      </div>
                    </div>
                    
                    {/* Title and Price */}
                    <div className="text-center mb-4">
                      <h3 className="text-lg font-bold text-white mb-2 group-hover:text-blue-300 transition-colors">
                        {pkg.title}
                      </h3>
                      <p className="text-xl font-bold text-blue-400 mb-2">
                        {pkg.price}
                      </p>
                      <p className="text-gray-400 group-hover:text-gray-300 transition-colors text-sm">
                        {pkg.description}
                      </p>
                    </div>
                    
                    {/* Features */}
                    <div className="mb-4">
                      <h4 className="text-white font-semibold mb-2 text-sm">Features:</h4>
                      <ul className="space-y-1">
                        {pkg.features.map((feature, idx) => (
                          <li key={idx} className="flex items-center space-x-2 text-gray-300">
                            <div className="w-1.5 h-1.5 bg-blue-500 rounded-full flex-shrink-0"></div>
                            <span className="text-xs">{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    {/* Add to Basket Button */}
                    <button className="w-full bg-orange-500 hover:bg-orange-600 text-white font-semibold py-2 px-4 rounded-lg transition-colors transform hover:scale-105">
                      Add to Basket
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
