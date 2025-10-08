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
  MapPin,
  Target,
  Zap
} from 'lucide-react';

interface GangPackage {
  id: string;
  title: string;
  price: string;
  description: string;
  features: string[];
  icon: React.ReactNode;
  backgroundImage: string;
  free?: boolean;
}

const gangPackages: GangPackage[] = [
  {
    id: 'street-tier',
    title: 'STREET TIER GANG',
    price: 'This item is free',
    description: 'Basic entry-level package for new groups forming their identity',
    features: [
      'Basic gang territory',
      'Standard gang vehicles',
      'Entry-level weapons',
      'Basic gang hideout'
    ],
    icon: <MapPin className="h-8 w-8" />,
    backgroundImage: '/api/placeholder/300/200',
    free: true
  },
  {
    id: 'syndicate-tier',
    title: 'SYNDICATE TIER GANG',
    price: '£30.00',
    description: 'For crews with a presence looking to scale up operations',
    features: [
      'Expanded territory control',
      'Premium gang vehicles',
      'Advanced weapons arsenal',
      'Secure gang headquarters',
      'Enhanced gang reputation'
    ],
    icon: <Target className="h-8 w-8" />,
    backgroundImage: '/api/placeholder/300/200'
  },
  {
    id: 'empire-tier',
    title: 'EMPIRE TIER GANG',
    price: '£55.00',
    description: 'Fully equipped and recognised — for organisations ready to control turf',
    features: [
      'Maximum territory control',
      'Elite gang vehicles',
      'Military-grade weapons',
      'Fortified gang compound',
      'Maximum gang reputation',
      'Exclusive gang events',
      'Priority support'
    ],
    icon: <Crown className="h-8 w-8" />,
    backgroundImage: '/api/placeholder/300/200'
  }
];

export default function GangPackagesPage() {
  return (
    <div className="min-h-screen bg-slate-900">
      {/* Header with Background */}
      <StoreHeader currentPage="gang-packages" />

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
                Gang Packages - Claim Your Territory
              </h1>
              <p className="text-gray-300 text-lg leading-relaxed mb-6">
                At The Firm, gangs shape the streets. Whether you're just getting started or looking to dominate the map, 
                we offer three gang tiers to suit your ambitions:
              </p>
              
              {/* Tier Overview */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                <div className="bg-slate-800 rounded-xl p-6 border border-slate-700">
                  <div className="flex items-center space-x-3 mb-4">
                    <MapPin className="h-6 w-6 text-green-400" />
                    <h3 className="text-lg font-bold text-white">Street Tier - Corner Gang</h3>
                  </div>
                  <p className="text-gray-300 text-sm">
                    Basic entry-level package for new groups forming their identity.
                  </p>
                </div>
                
                <div className="bg-slate-800 rounded-xl p-6 border border-slate-700">
                  <div className="flex items-center space-x-3 mb-4">
                    <Target className="h-6 w-6 text-blue-400" />
                    <h3 className="text-lg font-bold text-white">Syndicate Tier - Mob Gang</h3>
                  </div>
                  <p className="text-gray-300 text-sm">
                    For crews with a presence looking to scale up operations.
                  </p>
                </div>
                
                <div className="bg-slate-800 rounded-xl p-6 border border-slate-700">
                  <div className="flex items-center space-x-3 mb-4">
                    <Crown className="h-6 w-6 text-purple-400" />
                    <h3 className="text-lg font-bold text-white">Empire Tier - Kingpin Gang</h3>
                  </div>
                  <p className="text-gray-300 text-sm">
                    Fully equipped and recognised — for organisations ready to control turf.
                  </p>
                </div>
              </div>
              
              {/* Important Notice */}
              <div className="bg-slate-800 rounded-xl p-6 border border-slate-700 mb-8">
                <div className="flex items-start space-x-3">
                  <AlertTriangle className="h-5 w-5 text-yellow-500 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="text-lg font-bold text-white mb-3">Important Notice</h3>
                    <ul className="text-gray-300 space-y-2">
                      <li>• Before purchasing any gang package, including Street Tier, you must open a Gang Start-Up ticket via Discord.</li>
                      <li>• This is where you will meet with the Director of Civil Affairs to discuss your concept.</li>
                      <li>• Approval is not guaranteed.</li>
                      <li>• Any payments made prior to approval are non-refundable.</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            {/* Gang Packages Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {gangPackages.map((pkg, index) => (
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
                  <div className="relative z-10 p-8">
                    {/* Icon */}
                    <div className="flex items-center justify-center mb-6">
                      <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-purple-500 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                        {pkg.icon}
                      </div>
                    </div>
                    
                    {/* Title and Price */}
                    <div className="text-center mb-6">
                      <h3 className="text-xl font-bold text-white mb-2 group-hover:text-blue-300 transition-colors">
                        {pkg.title}
                      </h3>
                      <p className={`text-2xl font-bold mb-2 ${pkg.free ? 'text-green-400' : 'text-blue-400'}`}>
                        {pkg.price}
                      </p>
                      <p className="text-gray-400 group-hover:text-gray-300 transition-colors text-sm">
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
                    
                    {/* Action Button */}
                    <button className={`w-full font-semibold py-3 px-6 rounded-lg transition-colors transform hover:scale-105 ${
                      pkg.free 
                        ? 'bg-orange-500 hover:bg-orange-600 text-white' 
                        : 'bg-orange-500 hover:bg-orange-600 text-white'
                    }`}>
                      {pkg.free ? 'Add to Basket' : 'Subscribe'}
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
