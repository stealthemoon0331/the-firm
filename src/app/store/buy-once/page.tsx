'use client';

import { motion } from 'framer-motion';
import StoreSidebar from '@/components/StoreSidebar';
import StoreHeader from '@/components/StoreHeader';
import { 
  AlertTriangle,
  ShoppingCart,
  UserPlus
} from 'lucide-react';
import Image from 'next/image';

interface BuyOncePackage {
  id: string;
  title: string;
  price: string;
  description: string;
  icon: React.ReactNode;
  backgroundImage: string;
}

const buyOncePackages: BuyOncePackage[] = [
  {
    id: 'character-slot-plus',
    title: 'Character Slot+',
    price: '£9.99',
    description: 'Additional character slot for expanded roleplay opportunities',
   
    icon: <UserPlus className="h-8 w-8" />,
    backgroundImage: '/store/Extra Character Slot.png'
  },
  // {
  //   id: 'premium-vehicle',
  //   title: 'Premium Vehicle Package',
  //   price: '£15.99',
  //   description: 'Exclusive vehicle with custom modifications',
   
  //   icon: <ShoppingBag className="h-8 w-8" />,
  //   backgroundImage: '/api/placeholder/300/200'
  // },
  // {
  //   id: 'property-upgrade',
  //   title: 'Property Upgrade',
  //   price: '£12.99',
  //   description: 'Enhanced property with premium amenities',
 
  //   icon: <Gift className="h-8 w-8" />,
  //   backgroundImage: '/api/placeholder/300/200'
  // }
];

export default function BuyOncePage() {
  return (
    <div className="min-h-screen bg-slate-900">
      {/* Header with Background */}
      <StoreHeader currentPage="buy-once" />

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
                Welcome to the Buy It Once section - The place for permanent, one-time purchases.
              </h1>
              <p className="text-gray-300 text-base sm:text-lg leading-relaxed mb-4 sm:mb-6">
                Everything you&apos;ll find here is unlocked with a single payment, with no subscriptions, renewals, or hidden fees. 
                Once you&apos;ve bought it, it&apos;s yours to keep forever. Whether it&apos;s exclusive perks, special items, or unique upgrades, 
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
                  className="group relative bg-slate-800 rounded-xl overflow-hidden border border-slate-700 hover:border-orange-500/50 transition-all duration-300"
                >
                  {/* Background Image */}
                 <div>
                  <Image src={pkg.backgroundImage} alt={pkg.title} width={300} height={200} />
                 </div>
                  
                  {/* Content */}
                  <div className="relative z-10 p-6">
                    {/* Title and Price */}
                    <div className="text-center mb-4">
                      <h3 className="text-lg font-bold text-white mb-2 group-hover:text-orange-300 transition-colors">
                        {pkg.title}
                      </h3>
                      <p className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-red-400 mb-2">
                        {pkg.price}
                      </p>
                      {/* <p className="text-gray-300 text-sm mb-4">
                        {pkg.description}
                      </p> */}
                    </div>
                    
                 
                    
                      {/* Add to Basket Button */}
                      <button className="w-full bg-orange-500 hover:bg-orange-600 text-white font-semibold py-2 px-4 rounded-lg transition-colors transform hover:scale-105 flex items-center justify-center space-x-2">
                        <ShoppingCart className="h-5 w-5" />
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
