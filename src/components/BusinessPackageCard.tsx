'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

interface BusinessPackage {
  id: string;
  title: string;
  price: string;
  description: string;
  imageName: string;
}

interface BusinessPackageCardProps {
  pkg: BusinessPackage;
  index: number;
  className?: string;
}

export default function BusinessPackageCard({ pkg, index, className = "" }: BusinessPackageCardProps) {
  return (
    <motion.div
      key={pkg.id}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className={`group relative bg-slate-800 rounded-xl overflow-hidden border border-slate-700 hover:border-blue-500/50 transition-all duration-300 ${className}`}
    >
      {/* Background Image */}
      <div className="relative h-48 overflow-hidden">
        <Image
          src={`/store/${pkg.imageName}`}
          alt={pkg.title}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-300"
        />
        {/* Dark overlay for better text readability */}
        <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors duration-300" />
      </div>
      
      {/* Content */}
      <div className="relative z-10 p-6">
        {/* Title and Price */}
        <div className="text-center mb-4">
          <h3 className="text-lg font-bold text-white mb-2 group-hover:text-blue-300 transition-colors">
            {pkg.title}
          </h3>
          <p className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400 mb-2">
            {pkg.price}
          </p>
        </div>
        
        {/* Subscribe Button */}
        <button className="w-full bg-orange-500 hover:bg-orange-600 text-white font-semibold py-2 px-4 rounded-lg transition-colors transform hover:scale-105">
          Subscribe
        </button>
      </div>
    </motion.div>
  );
}
