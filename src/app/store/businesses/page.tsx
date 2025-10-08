'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import StoreSidebar from '@/components/StoreSidebar';
import StoreHeader from '@/components/StoreHeader';
import BusinessPackageCard from '@/components/BusinessPackageCard';
import { 
  Crown, 
  Users, 
  Shield, 
  Star,
  AlertTriangle,
  Building2,
  Car,
  Wrench,
  Briefcase,
  DollarSign
} from 'lucide-react';

interface BusinessPackage {
  id: string;
  title: string;
  price: string;
  description: string;
  imageName: string;
}

const businessPackages: BusinessPackage[] = [
  {
    id: 'redline-complete',
    title: 'Redline Complete',
    price: '£60.00',
    description: 'Complete automotive business package',
    imageName: 'Redline Complete.png'
  },
  {
    id: 'redline-dealership',
    title: 'Redline Dealership',
    price: '£35.00',
    description: 'Premium vehicle dealership',
    imageName: 'Redline Dealership.png'
  },
  {
    id: 'ls-customs-complete',
    title: 'LS Customs Complete',
    price: '£60.00',
    description: 'Complete customization business',
    imageName: 'LS Customs Complete.png'
  },
  {
    id: 'redline-mechanics',
    title: 'Redline Mechanics',
    price: '£45.00',
    description: 'Professional automotive repair',
    imageName: 'Redline Mechanics.png'
  },
  {
    id: 'premium-dealership',
    title: 'Premium Deluxe Dealership',
    price: '£40.00',
    description: 'Luxury vehicle dealership',
    imageName: 'Premium Duluxe Dealership.png'
  },
  {
    id: 'route-68-mechanics',
    title: 'Route 68 Mechanics',
    price: '£25.00',
    description: 'Complete service & repair',
    imageName: 'Route 68 Mechanics.png'
  }
];

export default function BusinessesPage() {

  return (
    <div className="min-h-screen bg-slate-900">
      {/* Header with Background */}
      <StoreHeader currentPage="businesses" />

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
                Premium Business Subscriptions
              </h1>
              <p className="text-gray-300 text-lg leading-relaxed mb-6">
                Many businesses within The Firm can be purchased using in-game currency (GPB). However, certain premium 
                businesses are available exclusively through monthly subscription packages. These subscription-based 
                businesses provide a more unique, hands-on management experience and typically generate greater in-game revenue.
              </p>
              
              {/* Key Benefits */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.1 }}
                  className="bg-slate-800 rounded-xl p-6 border border-slate-700 hover:border-blue-500/50 transition-all duration-300 group"
                >
                  <div className="flex items-start space-x-3 mb-4">
                    {/* <Building2 className="h-6 w-6 text-blue-400 mt-1 flex-shrink-0" /> */}
                    <div>
                      <h3 className="text-lg font-bold text-white group-hover:text-blue-300 transition-colors">
                        Elevate Your Empire:
                      </h3>
                      <h4 className="text-lg font-bold text-white group-hover:text-blue-300 transition-colors">
                        Premium Business Access
                      </h4>
                    </div>
                  </div>
                  <p className="text-gray-300 text-sm leading-relaxed">
                    Unlock exclusive business opportunities with enhanced management capabilities.
                  </p>
                </motion.div>
                
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  className="bg-slate-800 rounded-xl p-6 border border-slate-700 hover:border-green-500/50 transition-all duration-300 group"
                >
                  <div className="flex items-start space-x-3 mb-4">
                    {/* <Briefcase className="h-6 w-6 text-green-400 mt-1 flex-shrink-0" /> */}
                    <div>
                      <h3 className="text-lg font-bold text-white group-hover:text-green-300 transition-colors">
                        The Firm's Elite Business Network
                      </h3>
                    </div>
                  </div>
                  <p className="text-gray-300 text-sm leading-relaxed">
                    Join the most prestigious business community in the city.
                  </p>
                </motion.div>
                
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                  className="bg-slate-800 rounded-xl p-6 border border-slate-700 hover:border-yellow-500/50 transition-all duration-300 group"
                >
                  <div className="flex items-start space-x-3 mb-4">
                    {/* <DollarSign className="h-6 w-6 text-yellow-400 mt-1 flex-shrink-0" /> */}
                    <div>
                      <h3 className="text-lg font-bold text-white group-hover:text-yellow-300 transition-colors">
                        Exclusive Business
                      </h3>
                      <h4 className="text-lg font-bold text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-400 group-hover:from-yellow-300 group-hover:to-orange-300 transition-all">
                        $Subscriptions: Run the City
                      </h4>
                    </div>
                  </div>
                  <p className="text-gray-300 text-sm leading-relaxed">
                    Control premium businesses and maximize your revenue potential.
                  </p>
                </motion.div>
              </div>
              
              {/* Important Notice */}
              <div className="bg-slate-800 rounded-xl p-6 border border-slate-700 mb-8">
                <div className="flex items-start space-x-3">
                  <AlertTriangle className="h-5 w-5 text-yellow-500 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="text-lg font-bold text-white mb-3">Please note:</h3>
                    <ul className="text-gray-300 space-y-2">
                      <li>• We reserve the right to terminate a business subscription if the business remains closed for an extended period, fails to adhere to server moderation policies, or is poorly managed (e.g., lacking active employees or showing signs of ongoing inactivity).</li>
                      <li>• All business subscriptions are non-transferable.</li>
                      <li>• Limited availability: Please open a ticket before purchasing to confirm availability.</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            {/* Business Packages Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {businessPackages.map((pkg, index) => (
                <BusinessPackageCard 
                  key={pkg.id}
                  pkg={pkg} 
                  index={index}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
