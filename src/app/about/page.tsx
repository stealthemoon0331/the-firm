'use client';

import { motion } from 'framer-motion';
import { 
  Users, 
  Gamepad2, 
  Shield, 
  Star, 
  Target, 
  Heart,
  Award,
  Zap,
  Globe,
  Clock,
  TrendingUp,
  CheckCircle
} from 'lucide-react';

export default function About() {
  const timeline = [
    {
      year: '2020',
      title: 'Foundation',
      description: 'The Firm was founded with a vision to create immersive roleplay experiences that go beyond traditional gaming.',
      icon: Target,
    },
    {
      year: '2021',
      title: 'Community Growth',
      description: 'Our community grew to over 1,000 active players, establishing the foundation for our dynamic economy.',
      icon: Users,
    },
    {
      year: '2022',
      title: 'Premium Features',
      description: 'Launched premium subscriptions and exclusive content, revolutionizing the gaming experience.',
      icon: Star,
    },
    {
      year: '2023',
      title: 'Global Expansion',
      description: 'Expanded our reach globally, welcoming players from around the world to our community.',
      icon: Globe,
    },
    {
      year: '2024',
      title: 'Innovation Hub',
      description: 'Became a leading platform for innovative roleplay mechanics and community-driven storytelling.',
      icon: Zap,
    },
    {
      year: '2025',
      title: 'Future Vision',
      description: 'Continuing to push boundaries with cutting-edge technology and immersive experiences.',
      icon: TrendingUp,
    },
  ];

  const values = [
    {
      icon: Heart,
      title: 'Community First',
      description: 'We believe that the best gaming experiences come from strong, supportive communities where every player matters.',
      color: 'from-red-500 to-pink-500',
    },
    {
      icon: Shield,
      title: 'Fair Play',
      description: 'We maintain strict standards for fair play, ensuring that all players have equal opportunities to succeed.',
      color: 'from-blue-500 to-cyan-500',
    },
    {
      icon: Award,
      title: 'Excellence',
      description: 'We strive for excellence in everything we do, from game mechanics to customer support and community management.',
      color: 'from-yellow-500 to-orange-500',
    },
    {
      icon: Users,
      title: 'Inclusivity',
      description: 'We welcome players from all backgrounds and skill levels, creating an inclusive environment for everyone.',
      color: 'from-green-500 to-emerald-500',
    },
  ];

  const stats = [
    { label: 'Active Players', value: '10,000+', icon: Users },
    { label: 'Years of Experience', value: '5+', icon: Clock },
    { label: 'Countries Reached', value: '50+', icon: Globe },
    { label: 'Community Events', value: '500+', icon: Star },
  ];

  const teamRoles = [
    {
      category: 'Staff Roles',
      roles: [
        'Senior Management',
        'Head Moderator',
        'Head Developer',
        'Data Protection Officer',
        'Director of Creative Media',
        'Assistant Head Moderator',
        'Senior Moderator',
        'Lead Developer',
        'Content Coordinator',
        'Game Moderator',
        'Discord Moderator',
        'Developer',
        'Junior Developer',
        'Media Team',
        'Official Content Creator',
        'Community Content Creator',
      ],
    },
    {
      category: 'Operational Roles',
      roles: [
        'Police Commissioner (LA-1)',
        'Chief Medical Officer (MA-1)',
        'Director of Civil Affairs',
        'Medical Director (MD-1)',
        'Superintendent (LA-2)',
        'Chief Operations Officer (MO-1, MO-2)',
        'Chief Inspector (G1, G2, G3)',
        'Divisional Inspector (CI-1, OI-1, TI-1)',
        'Team Manager (MT-1+)',
        'Divisional Sergeants (CS-XX, OS-XX, TS-XX)',
        'Police Constable (CW-XX, OW-XX, TF-XX)',
        'Control Room Operation (Control-1+)',
        'Critical Response Medic (NS-X)',
        'Advanced Paramedic (NO-X)',
        'Paramedic (NL-X)',
        'Mayor of London',
        'Council Leader',
        'Public Advocate',
        'Gang Leaders/Members',
        'General Public/Civilians',
      ],
    },
  ];

  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-dark-bg via-dark-surface to-dark-bg overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(139,92,246,0.1),transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(0,212,255,0.1),transparent_50%)]" />
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="font-heading font-bold text-5xl md:text-6xl lg:text-7xl mb-6">
              <span className="gradient-text">About The Firm</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed">
              We're more than just a gaming company. We're architects of digital worlds, 
              builders of communities, and creators of unforgettable experiences.
            </p>
            <p className="text-lg text-gray-400 max-w-3xl mx-auto">
              Since our founding, we've been dedicated to pushing the boundaries of what's possible 
              in gaming communities, creating immersive roleplay experiences that bring players together 
              from around the globe.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-dark-surface">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center group"
              >
                <div className="w-16 h-16 bg-gradient-to-r from-neon-blue to-neon-violet rounded-full flex items-center justify-center mx-auto mb-4 group-hover:animate-glow transition-all duration-300">
                  <stat.icon className="h-8 w-8 text-white" />
                </div>
                <div className="text-3xl font-heading font-bold text-white mb-2 group-hover:text-neon-blue transition-colors duration-300">
                  {stat.value}
                </div>
                <div className="text-gray-400 group-hover:text-gray-300 transition-colors duration-300">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-dark-bg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="font-heading font-bold text-4xl md:text-5xl mb-6">
                <span className="gradient-text">Our Mission</span>
              </h2>
              <p className="text-xl text-gray-300 mb-6 leading-relaxed">
                To create the most immersive, engaging, and community-driven gaming experiences 
                that bring players together from around the world. We believe in the power of 
                storytelling, collaboration, and shared adventures.
              </p>
              <p className="text-lg text-gray-400 leading-relaxed">
                Our mission extends beyond entertainment – we're building digital communities 
                where friendships are forged, stories are created, and memories are made that 
                last a lifetime.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="bg-gradient-to-r from-neon-blue/20 to-neon-violet/20 p-8 rounded-xl border border-neon-blue/30">
                <h3 className="font-heading font-bold text-2xl text-white mb-4">
                  Our Vision
                </h3>
                <p className="text-gray-300 leading-relaxed">
                  To be the leading platform for immersive roleplay gaming, where technology 
                  meets creativity to create experiences that transcend traditional gaming boundaries. 
                  We envision a future where our community continues to grow, innovate, and inspire 
                  the next generation of gamers.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-dark-surface">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="font-heading font-bold text-4xl md:text-5xl mb-6">
              <span className="gradient-text">Our Values</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              These core values guide everything we do and shape the culture of our community.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group"
              >
                <div className="bg-dark-card p-8 rounded-xl border border-dark-border hover:border-neon-blue/50 transition-all duration-300 transform group-hover:scale-105">
                  <div className={`w-16 h-16 bg-gradient-to-r ${value.color} rounded-lg flex items-center justify-center mb-6 group-hover:animate-glow transition-all duration-300`}>
                    <value.icon className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="font-heading font-semibold text-xl text-white mb-3 group-hover:text-neon-blue transition-colors duration-300">
                    {value.title}
                  </h3>
                  <p className="text-gray-400 group-hover:text-gray-300 transition-colors duration-300">
                    {value.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-20 bg-dark-bg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="font-heading font-bold text-4xl md:text-5xl mb-6">
              <span className="gradient-text">Our Journey</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              From humble beginnings to becoming a global gaming community leader.
            </p>
          </motion.div>

          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-neon-blue to-neon-violet rounded-full" />
            
            <div className="space-y-12">
              {timeline.map((item, index) => (
                <motion.div
                  key={item.year}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className={`flex items-center ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}
                >
                  <div className={`w-1/2 ${index % 2 === 0 ? 'pr-8 text-right' : 'pl-8 text-left'}`}>
                    <div className="bg-dark-card p-6 rounded-xl border border-dark-border hover:border-neon-blue/50 transition-all duration-300">
                      <div className="flex items-center space-x-4 mb-4">
                        <div className="w-12 h-12 bg-gradient-to-r from-neon-blue to-neon-violet rounded-full flex items-center justify-center">
                          <item.icon className="h-6 w-6 text-white" />
                        </div>
                        <div>
                          <div className="text-2xl font-heading font-bold text-neon-blue">
                            {item.year}
                          </div>
                          <h3 className="font-heading font-semibold text-xl text-white">
                            {item.title}
                          </h3>
                        </div>
                      </div>
                      <p className="text-gray-400">
                        {item.description}
                      </p>
                    </div>
                  </div>
                  
                  {/* Timeline Dot */}
                  <div className="absolute left-1/2 transform -translate-x-1/2 w-6 h-6 bg-neon-blue rounded-full border-4 border-dark-bg z-10" />
                  
                  <div className="w-1/2" />
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Team Structure */}
      <section className="py-20 bg-dark-surface">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="font-heading font-bold text-4xl md:text-5xl mb-6">
              <span className="gradient-text">Our Structure</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              While each position within The Firm should be treated with equal respect, 
              here's a breakdown of our organizational structure.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {teamRoles.map((category, categoryIndex) => (
              <motion.div
                key={category.category}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: categoryIndex * 0.2 }}
                viewport={{ once: true }}
                className="bg-dark-card p-8 rounded-xl border border-dark-border"
              >
                <h3 className="font-heading font-semibold text-2xl text-white mb-6 text-center">
                  {category.category}
                </h3>
                <div className="grid grid-cols-1 gap-3">
                  {category.roles.map((role, roleIndex) => (
                    <motion.div
                      key={role}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.4, delay: roleIndex * 0.05 }}
                      viewport={{ once: true }}
                      className="flex items-center space-x-3 p-3 rounded-lg hover:bg-dark-surface transition-colors duration-300"
                    >
                      <CheckCircle className="h-5 w-5 text-neon-blue flex-shrink-0" />
                      <span className="text-gray-300 text-sm">{role}</span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-neon-blue/10 to-neon-violet/10">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="font-heading font-bold text-4xl md:text-5xl mb-6">
              <span className="gradient-text">Join Our Story</span>
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Be part of the next chapter in The Firm's journey. Your story starts here.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <motion.a
                href="/store"
                className="px-8 py-4 bg-gradient-to-r from-neon-blue to-neon-violet text-white rounded-lg font-medium text-lg hover:shadow-lg hover:shadow-neon-blue/25 transition-all duration-300 transform hover:scale-105"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Get Started Today
              </motion.a>
              <motion.a
                href="/forum"
                className="px-8 py-4 border border-neon-blue text-neon-blue rounded-lg font-medium text-lg hover:bg-neon-blue hover:text-white transition-all duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Join Our Community
              </motion.a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

