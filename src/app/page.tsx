'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import { useState, useEffect } from 'react';
import { 
  Shield, 
  MessageCircle, 
  FileText, 
  ShoppingCart, 
  Users, 
  Gamepad2, 
  Star,
  ArrowRight,
  Zap,
  TrendingUp,
  Globe,
  Heart,
  Award,
  Play
} from 'lucide-react';

// Counter animation component
const Counter = ({ end, duration = 2, suffix = '' }: { end: number; duration?: number; suffix?: string }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let startTime: number;
    let animationFrame: number;

    const animate = (currentTime: number) => {
      if (!startTime) startTime = currentTime;
      const progress = Math.min((currentTime - startTime) / (duration * 1000), 1);
      
      setCount(Math.floor(progress * end));
      
      if (progress < 1) {
        animationFrame = requestAnimationFrame(animate);
      }
    };

    animationFrame = requestAnimationFrame(animate);
    
    return () => {
      if (animationFrame) {
        cancelAnimationFrame(animationFrame);
      }
    };
  }, [end, duration]);

  return <span>{count.toLocaleString()}{suffix}</span>;
};

export default function Home() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const contentBoxes = [
    {
      title: 'Legislations',
      description: 'Comprehensive policy hub with clear rules and regulations',
      icon: Shield,
      href: '/legislations',
      color: 'from-blue-500 via-blue-600 to-cyan-500',
      bgColor: 'bg-gradient-to-br from-blue-500/20 to-cyan-500/10',
      borderColor: 'border-blue-500/30',
      hoverColor: 'hover:border-blue-400/60',
      stats: '24+ Policies',
      badge: 'Updated',
    },
    {
      title: 'Forum',
      description: 'Join discussions, share ideas, and connect with players',
      icon: MessageCircle,
      href: '/forum',
      color: 'from-purple-500 via-purple-600 to-pink-500',
      bgColor: 'bg-gradient-to-br from-purple-500/20 to-pink-500/10',
      borderColor: 'border-purple-500/30',
      hoverColor: 'hover:border-purple-400/60',
      stats: '1.2K+ Posts',
      badge: 'Active',
    },
    {
      title: 'Server Policies',
      description: 'Detailed guidelines for fair play and community standards',
      icon: FileText,
      href: '/policies',
      color: 'from-green-500 via-green-600 to-emerald-500',
      bgColor: 'bg-gradient-to-br from-green-500/20 to-emerald-500/10',
      borderColor: 'border-green-500/30',
      hoverColor: 'hover:border-green-400/60',
      stats: '18+ Guidelines',
      badge: 'Comprehensive',
    },
    {
      title: 'Store',
      description: 'Exclusive items, subscriptions, and premium experiences',
      icon: ShoppingCart,
      href: '/store',
      color: 'from-orange-500 via-orange-600 to-red-500',
      bgColor: 'bg-gradient-to-br from-orange-500/20 to-red-500/10',
      borderColor: 'border-orange-500/30',
      hoverColor: 'hover:border-orange-400/60',
      stats: '150+ Items',
      badge: 'Exclusive',
    },
  ];

  const features = [
    {
      icon: Users,
      title: 'Active Community',
      description: 'Join thousands of players in immersive roleplay experiences',
      stat: '10,000+',
      statLabel: 'Active Players',
      color: 'from-blue-500 to-cyan-500',
    },
    {
      icon: Gamepad2,
      title: 'Dynamic Economy',
      description: 'Player-driven economy with real business opportunities',
      stat: '$2.5M+',
      statLabel: 'Economy Value',
      color: 'from-green-500 to-emerald-500',
    },
    {
      icon: Star,
      title: 'Premium Content',
      description: 'Exclusive features and content for dedicated players',
      stat: '500+',
      statLabel: 'Premium Items',
      color: 'from-purple-500 to-violet-500',
    },
    {
      icon: Zap,
      title: 'Real-time Events',
      description: 'Live events and dynamic storylines that evolve daily',
      stat: '50+',
      statLabel: 'Events/Month',
      color: 'from-orange-500 to-red-500',
    },
  ];

  const testimonials = [
    {
      name: 'Alex Chen',
      role: 'Community Manager',
      content: 'The Firm has revolutionized how I experience roleplay. The community is incredible and the features are top-notch.',
      avatar: '/api/placeholder/60/60',
      rating: 5,
    },
    {
      name: 'Sarah Johnson',
      role: 'Premium Member',
      content: 'The premium content and exclusive features make this platform worth every penny. Best gaming investment I\'ve made.',
      avatar: '/api/placeholder/60/60',
      rating: 5,
    },
    {
      name: 'Mike Rodriguez',
      role: 'Business Owner',
      content: 'The dynamic economy system allowed me to build a successful virtual business. The possibilities are endless.',
      avatar: '/api/placeholder/60/60',
      rating: 5,
    },
  ];

  return (
    <div className="min-h-screen py-16">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Night City Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900" />
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url('/dark-city.jpg')`
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900/80 via-slate-800/70 to-slate-900/80" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(59,130,246,0.15),transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_80%,rgba(168,85,247,0.15),transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_40%_60%,rgba(34,197,94,0.1),transparent_50%)]" />
        
        {/* Animated Background Elements */}
        {/* <div className="absolute inset-0">
          {[...Array(30)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 bg-blue-400/40 rounded-full"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                y: [0, -30, 0],
                opacity: [0.2, 0.8, 0.2],
                scale: [1, 1.5, 1],
              }}
              transition={{
                duration: 4 + Math.random() * 3,
                repeat: Infinity,
                delay: Math.random() * 3,
              }}
            />
          ))}
        </div> */}

        {/* Floating Elements */}
        {/* <div className="absolute inset-0">
          <motion.div
            className="absolute top-20 left-10 w-20 h-20 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-full blur-xl"
            animate={{
              y: [0, -20, 0],
              x: [0, 10, 0],
            }}
            transition={{
              duration: 6,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
          <motion.div
            className="absolute top-40 right-20 w-32 h-32 bg-gradient-to-r from-green-500/20 to-blue-500/20 rounded-full blur-xl"
            animate={{
              y: [0, 30, 0],
              x: [0, -15, 0],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
          <motion.div
            className="absolute bottom-40 left-1/4 w-24 h-24 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-full blur-xl"
            animate={{
              y: [0, -25, 0],
              x: [0, 20, 0],
            }}
            transition={{
              duration: 7,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        </div> */}

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center py-32">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
          >
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="inline-flex items-center space-x-2 bg-gradient-to-r from-blue-500/20 to-purple-500/20 border border-blue-500/30 rounded-full px-6 mb-8"
            >
              <Zap className="h-5 w-5 text-blue-400" />
              <span className="text-blue-300 font-medium">Join 10,000+ Players Worldwide</span>
            </motion.div>

            <div className="flex justify-center items-center">
                <Image src="/logo.png" alt="The Firm" width={400} height={400} />
            </div>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="text-2xl md:text-3xl text-gray-200 mb-6 max-w-4xl mx-auto leading-relaxed font-light"
            >
              Building the Future of Gaming Communities
            </motion.p>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.7 }}
              className="text-lg md:text-xl text-gray-400 mb-12 max-w-3xl mx-auto leading-relaxed"
            >
              Experience immersive roleplay, dynamic economy, and premium gaming experiences 
              in our thriving community of players, businesses, and storytellers.
            </motion.p>
          </motion.div>

          {/* <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.9 }}
            className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16"
          >
            <Link
              href="/store"
              className="group relative px-10 py-5 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-2xl font-semibold text-lg hover:shadow-2xl hover:shadow-blue-500/25 transition-all duration-500 transform hover:scale-105 flex items-center space-x-3 overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="relative flex items-center space-x-3">
                <Star className="h-6 w-6" />
                <span>Join Premium</span>
                <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
              </div>
            </Link>
            
            <Link
              href="/about"
              className="group px-10 py-5 border-2 border-blue-500/50 text-blue-300 rounded-2xl font-semibold text-lg hover:bg-blue-500/10 hover:border-blue-400 transition-all duration-500 flex items-center space-x-3"
            >
              <Play className="h-5 w-5" />
              <span>Watch Demo</span>
              <ArrowRight className="h-4 w-4" />
            </Link>
          </motion.div> */}

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.1 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto"
          >
            {[
              { label: 'Active Players', value: 10000, suffix: '+' },
              { label: 'Countries', value: 50, suffix: '+' },
              { label: 'Events/Month', value: 50, suffix: '+' },
              { label: 'Satisfaction', value: 98, suffix: '%' },
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 1.2 + index * 0.1 }}
                className="text-center"
              >
                <div className="text-3xl md:text-4xl font-bold text-white mb-2">
                  <Counter end={stat.value} duration={2.5} suffix={stat.suffix} />
                </div>
                <div className="text-gray-400 text-sm font-medium">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

      </section>

      {/* Content Boxes Section */}
      <section className="py-16 md:py-24 bg-gradient-to-b from-slate-900 to-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12 md:mb-16"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="inline-flex items-center space-x-2 bg-gradient-to-r from-blue-500/20 to-purple-500/20 border border-blue-500/30 rounded-full px-4 py-2 md:px-6 md:py-3 mb-6 md:mb-8"
            >
              <Zap className="h-4 w-4 md:h-5 md:w-5 text-blue-400" />
              <span className="text-blue-300 font-medium text-sm md:text-base">Platform Features</span>
            </motion.div>
            
            <h2 className="font-heading font-bold text-3xl md:text-5xl lg:text-6xl mb-6 md:mb-8">
              <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                Explore Our Platform
              </span>
            </h2>
            <p className="text-lg md:text-xl lg:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed px-4">
              Discover all the features and resources that make The Firm the ultimate 
              destination for immersive roleplay and community building.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {contentBoxes.map((box, index) => (
              <motion.div
                key={box.title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Link href={box.href} className="group block h-full">
                  <div className={`relative h-full ${box.bgColor} p-6 md:p-8 rounded-2xl md:rounded-3xl border-2 ${box.borderColor} ${box.hoverColor} transition-all duration-500 transform group-hover:scale-105 group-hover:shadow-2xl group-hover:shadow-blue-500/20 overflow-hidden`}>
                    {/* Background Pattern */}
                    <div className="absolute inset-0 opacity-10">
                      <div className="absolute top-0 right-0 w-24 h-24 md:w-32 md:h-32 bg-gradient-to-br from-white/20 to-transparent rounded-full blur-2xl" />
                      <div className="absolute bottom-0 left-0 w-20 h-20 md:w-24 md:h-24 bg-gradient-to-tr from-white/20 to-transparent rounded-full blur-2xl" />
                    </div>
                    
                    {/* Content */}
                    <div className="relative z-10 flex flex-col h-full">
                      {/* Icon and Badge */}
                      <div className="flex items-start justify-between mb-4 md:mb-6">
                        <div className={`w-12 h-12 md:w-16 md:h-16 bg-gradient-to-r ${box.color} rounded-xl md:rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg flex-shrink-0`}>
                          <box.icon className="h-6 w-6 md:h-8 md:w-8 text-white" />
                        </div>
                        <div className="flex flex-col items-end space-y-1 md:space-y-2 ml-3">
                          <span className="text-xs font-semibold text-gray-400 uppercase tracking-wider text-right">
                            {box.stats}
                          </span>
                          <span className="px-2 py-1 md:px-3 md:py-1 bg-gradient-to-r from-blue-500/20 to-purple-500/20 border border-blue-500/30 rounded-full text-xs font-medium text-blue-300">
                            {box.badge}
                          </span>
                        </div>
                      </div>
                      
                      {/* Title and Description */}
                      <div className="flex-grow">
                        <h3 className="font-heading font-bold text-xl md:text-2xl text-white mb-3 md:mb-4 group-hover:text-blue-300 transition-colors duration-300">
                          {box.title}
                        </h3>
                        <p className="text-gray-400 group-hover:text-gray-300 transition-colors duration-300 leading-relaxed text-sm md:text-base mb-4 md:mb-6">
                          {box.description}
                        </p>
                      </div>
                      
                      {/* Arrow */}
                      <div className="flex items-center text-blue-400 group-hover:text-blue-300 transition-colors duration-300 mt-auto">
                        <span className="text-sm font-medium mr-2">Explore</span>
                        <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform duration-300" />
                      </div>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 md:py-24 bg-gradient-to-b from-slate-800 to-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12 md:mb-16"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="inline-flex items-center space-x-2 bg-gradient-to-r from-green-500/20 to-blue-500/20 border border-green-500/30 rounded-full px-4 py-2 md:px-6 md:py-3 mb-6 md:mb-8"
            >
              <TrendingUp className="h-4 w-4 md:h-5 md:w-5 text-green-400" />
              <span className="text-green-300 font-medium text-sm md:text-base">Why Choose Us</span>
            </motion.div>
            
            <h2 className="font-heading font-bold text-3xl md:text-5xl lg:text-6xl mb-6 md:mb-8">
              <span className="bg-gradient-to-r from-green-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">
                Why Choose The Firm?
              </span>
            </h2>
            <p className="text-lg md:text-xl lg:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed px-4">
              We're not just another gaming server. We're a community-driven platform 
              that puts players at the center of everything we do.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group"
              >
                <div className="relative bg-gradient-to-br from-slate-800/50 to-slate-900/50 p-6 md:p-8 rounded-2xl md:rounded-3xl border border-slate-700/50 hover:border-blue-500/50 transition-all duration-500 transform group-hover:scale-105 group-hover:shadow-2xl group-hover:shadow-blue-500/20 h-full">
                  {/* Background Pattern */}
                  <div className="absolute inset-0 opacity-5">
                    <div className="absolute top-0 right-0 w-32 h-32 md:w-40 md:h-40 bg-gradient-to-br from-blue-500 to-purple-500 rounded-full blur-3xl" />
                  </div>
                  
                  <div className="relative z-10 text-center flex flex-col h-full">
                    {/* Icon */}
                    <div className={`w-16 h-16 md:w-20 md:h-20 bg-gradient-to-r ${feature.color} rounded-xl md:rounded-2xl flex items-center justify-center mx-auto mb-4 md:mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg flex-shrink-0`}>
                      <feature.icon className="h-8 w-8 md:h-10 md:w-10 text-white" />
                    </div>
                    
                    {/* Stats */}
                    <div className="mb-4 md:mb-6">
                      <div className="text-3xl md:text-4xl font-bold text-white mb-1 md:mb-2 group-hover:text-blue-300 transition-colors duration-300">
                        {feature.stat}
                      </div>
                      <div className="text-xs md:text-sm text-gray-400 font-medium">
                        {feature.statLabel}
                      </div>
                    </div>
                    
                    {/* Title and Description */}
                    <div className="flex-grow">
                      <h3 className="font-heading font-bold text-lg md:text-xl text-white mb-3 md:mb-4 group-hover:text-blue-300 transition-colors duration-300">
                        {feature.title}
                      </h3>
                      <p className="text-gray-400 group-hover:text-gray-300 transition-colors duration-300 leading-relaxed text-sm md:text-base">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 md:py-24 bg-gradient-to-b from-slate-900 to-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12 md:mb-16"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="inline-flex items-center space-x-2 bg-gradient-to-r from-purple-500/20 to-pink-500/20 border border-purple-500/30 rounded-full px-4 py-2 md:px-6 md:py-3 mb-6 md:mb-8"
            >
              <Heart className="h-4 w-4 md:h-5 md:w-5 text-purple-400" />
              <span className="text-purple-300 font-medium text-sm md:text-base">Community Love</span>
            </motion.div>
            
            <h2 className="font-heading font-bold text-3xl md:text-5xl lg:text-6xl mb-6 md:mb-8">
              <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-red-400 bg-clip-text text-transparent">
                What Players Say
              </span>
            </h2>
            <p className="text-lg md:text-xl lg:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed px-4">
              Don't just take our word for it. Here's what our community members have to say about their experience.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.name}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group"
              >
                <div className="relative bg-gradient-to-br from-slate-800/50 to-slate-900/50 p-6 md:p-8 rounded-2xl md:rounded-3xl border border-slate-700/50 hover:border-purple-500/50 transition-all duration-500 transform group-hover:scale-105 group-hover:shadow-2xl group-hover:shadow-purple-500/20 h-full">
                  {/* Background Pattern */}
                  <div className="absolute inset-0 opacity-5">
                    <div className="absolute top-0 right-0 w-24 h-24 md:w-32 md:h-32 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full blur-2xl" />
                  </div>
                  
                  <div className="relative z-10 flex flex-col h-full">
                    {/* Rating */}
                    <div className="flex items-center space-x-1 mb-4 md:mb-6">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="h-4 w-4 md:h-5 md:w-5 text-yellow-400 fill-current" />
                      ))}
                    </div>
                    
                    {/* Content */}
                    <div className="flex-grow">
                      <p className="text-gray-300 group-hover:text-gray-200 transition-colors duration-300 leading-relaxed mb-4 md:mb-6 text-base md:text-lg">
                        "{testimonial.content}"
                      </p>
                    </div>
                    
                    {/* Author */}
                    <div className="flex items-center space-x-3 md:space-x-4 mt-auto">
                      <div className="w-10 h-10 md:w-12 md:h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center flex-shrink-0">
                        <span className="text-white font-bold text-sm md:text-lg">
                          {testimonial.name.split(' ').map(n => n[0]).join('')}
                        </span>
                      </div>
                      <div>
                        <div className="font-semibold text-white group-hover:text-purple-300 transition-colors duration-300 text-sm md:text-base">
                          {testimonial.name}
                        </div>
                        <div className="text-xs md:text-sm text-gray-400">
                          {testimonial.role}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-blue-600 via-purple-600 to-pink-600 relative overflow-hidden">
        {/* Background Effects */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(255,255,255,0.1),transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(255,255,255,0.1),transparent_50%)]" />
        
        {/* Floating Elements */}
        <div className="absolute inset-0">
          {mounted && [...Array(20)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-2 h-2 bg-white/20 rounded-full"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                y: [0, -20, 0],
                opacity: [0.2, 0.8, 0.2],
              }}
              transition={{
                duration: 3 + Math.random() * 2,
                repeat: Infinity,
                delay: Math.random() * 2,
              }}
            />
          ))}
        </div>

        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="inline-flex items-center space-x-2 bg-white/20 border border-white/30 rounded-full px-4 py-2 md:px-6 md:py-3 mb-6 md:mb-8"
            >
              <Award className="h-4 w-4 md:h-5 md:w-5 text-white" />
              <span className="text-white font-medium text-sm md:text-base">Ready to Join?</span>
            </motion.div>
            
            <h2 className="font-heading font-bold text-3xl md:text-5xl lg:text-6xl mb-6 md:mb-8 text-white">
              Start Your Journey Today
            </h2>
            <p className="text-lg md:text-xl lg:text-2xl text-white/90 mb-8 md:mb-12 max-w-3xl mx-auto leading-relaxed px-4">
              Join thousands of players in the most immersive gaming community. 
              Create your character, build your empire, and write your story.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 md:gap-6 justify-center items-center">
              <Link
                href="/store"
                className="group relative px-6 py-4 md:px-10 md:py-5 bg-white text-blue-600 rounded-xl md:rounded-2xl font-semibold text-base md:text-lg hover:shadow-2xl hover:shadow-white/25 transition-all duration-500 transform hover:scale-105 flex items-center space-x-2 md:space-x-3"
              >
                <Star className="h-5 w-5 md:h-6 md:w-6" />
                <span>Get Started Now</span>
                <ArrowRight className="h-4 w-4 md:h-5 md:w-5 group-hover:translate-x-1 transition-transform duration-300" />
              </Link>
              
              <Link
                href="/forum"
                className="group px-6 py-4 md:px-10 md:py-5 border-2 border-white/50 text-white rounded-xl md:rounded-2xl font-semibold text-base md:text-lg hover:bg-white/10 hover:border-white transition-all duration-500 flex items-center space-x-2 md:space-x-3"
              >
                <MessageCircle className="h-5 w-5" />
                <span>Join Discord</span>
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
