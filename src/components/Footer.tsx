'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { Gamepad2, MessageCircle, ShoppingCart, FileText, Users, Shield } from 'lucide-react';
import Image from 'next/image';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerSections = [
    {
      title: 'Community',
      links: [
        { name: 'Discord Server', href: '#', icon: MessageCircle },
        { name: 'Forum', href: '/forum', icon: Users },
        { name: 'Rules & Policies', href: '/policies', icon: Shield },
      ],
    },
    {
      title: 'Resources',
      links: [
        { name: 'Legislations', href: '/legislations', icon: FileText },
        { name: 'Store', href: '/store', icon: ShoppingCart },
        { name: 'About Us', href: '/about', icon: Gamepad2 },
      ],
    },
  ];

  const socialLinks = [
    { name: 'Discord', href: '#', color: 'hover:text-blue-400' },
    { name: 'Twitter', href: '#', color: 'hover:text-blue-400' },
    { name: 'YouTube', href: '#', color: 'hover:text-red-400' },
    { name: 'Twitch', href: '#', color: 'hover:text-purple-400' },
  ];

  return (
    <footer className="bg-dark-surface border-t border-dark-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="lg:col-span-1"
          >
            <Link href="/" className="flex items-center space-x-2 mb-4 group">
              <div className="relative">
                <Image src="/logo.png" alt="The Firm" width={50} height={50} />
              </div>
              <span className="font-heading font-bold text-xl gradient-text">
                The Firm
              </span>
            </Link>
            <p className="text-gray-400 text-sm leading-relaxed mb-6">
              Building the future of gaming communities through immersive roleplay, 
              dynamic economy, and premium experiences.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social) => (
                <Link
                  key={social.name}
                  href={social.href}
                  className={`text-gray-400 ${social.color} transition-colors duration-300`}
                  aria-label={social.name}
                >
                  <span className="sr-only">{social.name}</span>
                  <div className="w-6 h-6 bg-current rounded" />
                </Link>
              ))}
            </div>
          </motion.div>

          {/* Footer Sections */}
          {footerSections.map((section, sectionIndex) => (
            <motion.div
              key={section.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: sectionIndex * 0.1 }}
              viewport={{ once: true }}
            >
              <h3 className="font-heading font-semibold text-white mb-4">
                {section.title}
              </h3>
              <ul className="space-y-3">
                {section.links.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="flex items-center space-x-2 text-gray-400 hover:text-neon-blue transition-colors duration-300 group"
                    >
                      <link.icon className="h-4 w-4 group-hover:text-neon-blue transition-colors duration-300" />
                      <span>{link.name}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}

          {/* Newsletter Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <h3 className="font-heading font-semibold text-white mb-4">
              Stay Updated
            </h3>
            <p className="text-gray-400 text-sm mb-4">
              Get the latest updates and community news delivered to your inbox.
            </p>
            <div className="flex flex-col space-y-3">
              <input
                type="email"
                placeholder="Enter your email"
                className="px-4 py-2 bg-dark-card border border-dark-border rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-neon-blue transition-colors duration-300"
              />
              <button className="px-4 py-2 bg-gradient-to-r from-neon-blue to-neon-violet text-white rounded-lg font-medium hover:shadow-lg hover:shadow-neon-blue/25 transition-all duration-300 transform hover:scale-105">
                Subscribe
              </button>
            </div>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-12 pt-8 border-t border-dark-border"
        >
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-gray-400 text-sm">
              © {currentYear} The Firm. All rights reserved.
            </p>
            <div className="flex space-x-6 text-sm">
              <Link href="/privacy" className="text-gray-400 hover:text-neon-blue transition-colors duration-300">
                Privacy Policy
              </Link>
              <Link href="/terms" className="text-gray-400 hover:text-neon-blue transition-colors duration-300">
                Terms of Service
              </Link>
              <Link href="/contact" className="text-gray-400 hover:text-neon-blue transition-colors duration-300">
                Contact
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;

