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
  Zap,
  ShoppingCart
} from 'lucide-react';
import Image from 'next/image';

interface GangPackage {
  id: string;
  title: string;
  price: string;
  description: string;
  icon: React.ReactNode;
  backgroundImage: string;
  free?: boolean;
}

const gangPackages: GangPackage[] = [
  {
    id: 'street-tier',
    title: 'STREET TIER',
    price: '',
    description: 'Basic entry-level package for new groups forming their identity',
    
    icon: <MapPin className="h-8 w-8" />,
    backgroundImage: '/store/street-tier.png',
    free: true
  },
  {
    id: 'syndicate-tier',
    title: 'SYNDICATE TIER',
    price: '£30.00',
    description: 'For crews with a presence looking to scale up operations',

    icon: <Target className="h-8 w-8" />,
    backgroundImage: '/store/syndicate-tier.png'
  },
  {
    id: 'empire-tier',
    title: 'EMPIRE TIER',
    price: '£55.00',
    description: 'Fully equipped and recognised — for organisations ready to control turf',

    icon: <Crown className="h-8 w-8" />,
    backgroundImage: '/store/empire-tier.png'
  }
];

export default function GangPackagesPage() {
  return (
    <div className="min-h-screen bg-slate-900">
      {/* Header with Background */}
      <StoreHeader currentPage="gang-packages" />

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
                Gang Packages - Claim Your Territory
              </h1>
              <p className="text-gray-300 text-base sm:text-lg leading-relaxed mb-4 sm:mb-6">
                At The Firm, gangs shape the streets. Whether you&apos;re just getting started or looking to dominate the map, 
                we offer three gang tiers to suit your ambitions:
              </p>
              
              
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
                  className="group relative bg-slate-800 rounded-xl overflow-hidden border border-slate-700 hover:border-blue-500/50 transition-all duration-300 flex flex-col h-full"
                >
                  {/* Background Image */}
                  <div className="flex-shrink-0 relative">
                    <Image src={pkg.backgroundImage} alt={pkg.title} width={300} height={200} />
                    {pkg.free && (
                      <div className="absolute top-4 right-4 z-10">
                        <div className="bg-green-500 text-white text-sm font-bold px-3 py-1 rounded-full">
                          FREE
                        </div>
                      </div>
                    )}
                  </div>
                  
                  {/* Content */}
                  <div className="relative z-10 p-8 flex flex-col flex-grow">
                    {/* Title and Price */}
                    <div className="text-center mb-6 flex-grow">
                      <h3 className="text-xl font-bold text-white mb-2 group-hover:text-blue-300 transition-colors">
                        {pkg.title}
                      </h3>
                      <p className="text-2xl font-bold mb-2 text-blue-400">
                        {pkg.price}
                      </p>
                      <p className="text-gray-400 group-hover:text-gray-300 transition-colors text-sm">
                        {pkg.description}
                      </p>
                    </div>
                    
                    {/* Action Button */}
                    <button className={`w-full font-semibold py-3 px-6 rounded-lg transition-colors transform hover:scale-105 mt-auto flex items-center justify-center space-x-2 ${
                      pkg.free 
                        ? 'bg-orange-500 hover:bg-orange-600 text-white' 
                        : 'bg-orange-500 hover:bg-orange-600 text-white'
                    }`}>
                      {pkg.free ? (
                        <>
                          <ShoppingCart className="h-5 w-5" />
                          <span>Add to Basket</span>
                        </>
                      ) : (
                        <span>Subscribe</span>
                      )}
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
