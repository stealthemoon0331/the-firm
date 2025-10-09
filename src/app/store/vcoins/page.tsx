'use client';

import { motion } from 'framer-motion';
import StoreSidebar from '@/components/StoreSidebar';
import StoreHeader from '@/components/StoreHeader';
import { 
  AlertTriangle,
  Lightbulb
} from 'lucide-react';
import Image from 'next/image';

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
    backgroundImage: '/store/500vCoins.png'
  },
  {
    id: '1000-vcoins',
    amount: '1,000',
    price: '£5.99',
    displayAmount: '1,000 VCOINS',
    backgroundImage: '/store/1000vCoins.png'
  },
  {
    id: '2000-vcoins',
    amount: '2,000',
    price: '£10.99',
    displayAmount: '2,000 VCOINS',
    backgroundImage: '/store/2000vCoins.png'
  },
  {
    id: '5000-vcoins',
    amount: '5,000',
    price: '£24.99',
    displayAmount: '5,000 VCOINS',
    backgroundImage: '/store/5000vCoins.png'
  },
  {
    id: '10000-vcoins',
    amount: '10,000',
    price: '£44.99',
    displayAmount: '10,000 VCOINS',
    backgroundImage: '/store/10000vCoins.png'
  }
];

export default function VCoinsPage() {
  return (
    <div className="min-h-screen bg-slate-900">
      {/* Header with Background */}
      <StoreHeader currentPage="vcoins" />

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
                vCoin Store
              </h1>
              <p className="text-gray-300 text-base sm:text-lg leading-relaxed mb-4 sm:mb-6">
                vCoins can be spent in the exclusive ingame vCoin Store - perfect for grabbing exclusive items, 
                vehicles, weapons, upgrades, and more. Whether you&apos;re a casual civilian or a grind-heavy elite, 
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
                  <div>
                    <Image src={pkg.backgroundImage} alt="" width={300} height={200} />
                  </div>
                  
                  {/* Content */}
                  <div className="relative z-10 p-6">
                    
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
