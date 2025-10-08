'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import StoreSidebar from '@/components/StoreSidebar';
import { 
  Crown, 
  Users, 
  Shield, 
  Star,
  Copy, 
  Check,
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
  const [copied, setCopied] = useState(false);

  const handleCopyServer = async () => {
    try {
      await navigator.clipboard.writeText('play.thefirm.club');
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy: ', err);
    }
  };

  return (
    <div className="min-h-screen bg-slate-900">
      {/* Header with Background */}
      <div className="relative h-96 bg-gradient-to-br from-slate-800 via-slate-900 to-slate-800 overflow-hidden">
        {/* Background Image */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-30"
          style={{
            backgroundImage: `url('/dark-city.jpg')`
          }}
        />
        
        {/* TF Logo */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-8xl font-bold text-slate-600/50 select-none">
            TF
          </div>
        </div>

        {/* Top Bar */}
        <div className="relative z-10 flex items-center justify-between p-6">
          <div className="text-slate-400 text-sm">
            store.thefirm.club/category/businesses
          </div>
          
          <div className="flex items-center space-x-6">
            <button
              onClick={handleCopyServer}
              className="flex items-center space-x-2 text-white hover:text-blue-400 transition-colors"
            >
              <Users className="h-4 w-4" />
              <span>connect</span>
              <div className="text-center">
                <div className="text-sm font-medium">play.thefirm.club</div>
                <div className="text-xs text-blue-400">Click to Copy</div>
              </div>
              {copied ? <Check className="h-4 w-4 text-green-400" /> : <Copy className="h-4 w-4" />}
            </button>
            
            <button className="flex items-center space-x-2 text-white hover:text-blue-400 transition-colors">
              <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028c.462-.63.874-1.295 1.226-1.994a.076.076 0 0 0-.041-.106 13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.892.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.157 2.418z"/>
              </svg>
              <span>Join our Discord</span>
              <div className="text-xs text-blue-400">Click to Join</div>
            </button>
          </div>
        </div>

        {/* Navigation */}
        <div className="absolute bottom-0 left-0 right-0">
          <nav className="flex items-center justify-center space-x-6 py-4 bg-slate-800/90 backdrop-blur-sm border-t border-slate-700/50">
            <Link 
              href="/store" 
              className="relative text-gray-300 hover:text-white transition-all duration-300 px-4 py-2 rounded-lg hover:bg-slate-700/50 group"
            >
              <span className="relative z-10">Home</span>
              <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-0 h-0.5 bg-white transition-all duration-300 group-hover:w-full"></div>
            </Link>
            <Link 
              href="/store/subscriptions" 
              className="relative text-gray-300 hover:text-white transition-all duration-300 px-4 py-2 rounded-lg hover:bg-slate-700/50 group"
            >
              <span className="relative z-10">Subscriptions</span>
              <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-0 h-0.5 bg-white transition-all duration-300 group-hover:w-full"></div>
            </Link>
            <Link 
              href="/store/gang-packages" 
              className="relative text-gray-300 hover:text-white transition-all duration-300 px-4 py-2 rounded-lg hover:bg-slate-700/50 group"
            >
              <span className="relative z-10">Gang Packages</span>
              <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-0 h-0.5 bg-white transition-all duration-300 group-hover:w-full"></div>
            </Link>
            <Link 
              href="/store/businesses" 
              className="relative text-gray-300 hover:text-white transition-all duration-300 px-4 py-2 rounded-lg hover:bg-slate-700/50 group"
            >
              <span className="relative z-10">Businesses</span>
              <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-full h-0.5 bg-white"></div>
            </Link>
            <Link 
              href="/store/buy-once" 
              className="relative text-gray-300 hover:text-white transition-all duration-300 px-4 py-2 rounded-lg hover:bg-slate-700/50 group"
            >
              <span className="relative z-10">Buy It Once</span>
              <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-0 h-0.5 bg-white transition-all duration-300 group-hover:w-full"></div>
            </Link>
            <Link 
              href="/store/vcoins" 
              className="relative text-gray-300 hover:text-white transition-all duration-300 px-4 py-2 rounded-lg hover:bg-slate-700/50 group"
            >
              <span className="relative z-10">vCoins Store</span>
              <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-0 h-0.5 bg-white transition-all duration-300 group-hover:w-full"></div>
            </Link>
          </nav>
        </div>
      </div>

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
