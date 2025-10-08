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
  icon: React.ReactNode;
  backgroundImage: string;
}

const businessPackages: BusinessPackage[] = [
  {
    id: 'redline-complete',
    title: 'Redline Complete',
    price: '£60.00',
    description: 'Complete automotive business package',
    icon: <Car className="h-8 w-8" />,
    backgroundImage: '/api/placeholder/300/200'
  },
  {
    id: 'redline-dealership',
    title: 'Redline Dealership',
    price: '£35.00',
    description: 'Premium vehicle dealership',
    icon: <Car className="h-8 w-8" />,
    backgroundImage: '/api/placeholder/300/200'
  },
  {
    id: 'ls-customs-complete',
    title: 'LS Customs Complete',
    price: '£45.00',
    description: 'Complete automotive customization service',
    icon: <Wrench className="h-8 w-8" />,
    backgroundImage: '/api/placeholder/300/200'
  },
  {
    id: 'redline-mechanics',
    title: 'Redline Mechanics',
    price: '£25.00',
    description: 'Automotive repair and maintenance',
    icon: <Wrench className="h-8 w-8" />,
    backgroundImage: '/api/placeholder/300/200'
  },
  {
    id: 'premium-dealership',
    title: 'Premium Duluxe Dealership',
    price: '£50.00',
    description: 'Luxury vehicle dealership',
    icon: <Car className="h-8 w-8" />,
    backgroundImage: '/api/placeholder/300/200'
  },
  {
    id: 'route-68-mechanics',
    title: 'Route 68 Mechanics',
    price: '£30.00',
    description: 'Highway service station',
    icon: <Wrench className="h-8 w-8" />,
    backgroundImage: '/api/placeholder/300/200'
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
                <div className="bg-slate-800 rounded-xl p-6 border border-slate-700">
                  <div className="flex items-center space-x-3 mb-4">
                    <Building2 className="h-6 w-6 text-blue-400" />
                    <h3 className="text-lg font-bold text-white">Elevate Your Empire: Premium Business Access</h3>
                  </div>
                  <p className="text-gray-300 text-sm">
                    Unlock exclusive business opportunities with enhanced management capabilities.
                  </p>
                </div>
                
                <div className="bg-slate-800 rounded-xl p-6 border border-slate-700">
                  <div className="flex items-center space-x-3 mb-4">
                    <Briefcase className="h-6 w-6 text-green-400" />
                    <h3 className="text-lg font-bold text-white">The Firm's Elite Business Network</h3>
                  </div>
                  <p className="text-gray-300 text-sm">
                    Join the most prestigious business community in the city.
                  </p>
                </div>
                
                <div className="bg-slate-800 rounded-xl p-6 border border-slate-700">
                  <div className="flex items-center space-x-3 mb-4">
                    <DollarSign className="h-6 w-6 text-yellow-400" />
                    <h3 className="text-lg font-bold text-white">Exclusive Business Subscriptions: Run the City</h3>
                  </div>
                  <p className="text-gray-300 text-sm">
                    Control premium businesses and maximize your revenue potential.
                  </p>
                </div>
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
                    
                    {/* Subscribe Button */}
                    <button className="w-full bg-orange-500 hover:bg-orange-600 text-white font-semibold py-2 px-4 rounded-lg transition-colors transform hover:scale-105">
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
