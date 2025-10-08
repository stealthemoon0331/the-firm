'use client';

import { motion } from 'framer-motion';
import { 
  MessageCircle, 
  Users, 
  TrendingUp, 
  Clock, 
  User, 
  Heart, 
  Reply, 
  Pin, 
  Lock, 
  Star,
  Search,
  Filter,
  Plus,
  Eye,
  ThumbsUp,
  Bookmark,
  Share2,
  MoreHorizontal
} from 'lucide-react';
import { useState } from 'react';

export default function Forum() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');

  const categories = [
    { id: 'all', name: 'All Discussions', count: 1247, icon: MessageCircle },
    { id: 'general', name: 'General Discussion', count: 456, icon: Users },
    { id: 'roleplay', name: 'Roleplay Stories', count: 234, icon: Star },
    { id: 'help', name: 'Help & Support', count: 189, icon: TrendingUp },
    { id: 'events', name: 'Community Events', count: 156, icon: Clock },
    { id: 'feedback', name: 'Feedback & Suggestions', count: 123, icon: Heart },
    { id: 'announcements', name: 'Announcements', count: 89, icon: Pin },
  ];

  const discussions = [
    {
      id: 1,
      title: 'Welcome to the New Community Forum!',
      category: 'announcements',
      author: 'Senior Management',
      authorAvatar: '/api/placeholder/40/40',
      replies: 45,
      views: 1234,
      likes: 89,
      lastActivity: '2 hours ago',
      lastAuthor: 'Community Manager',
      isPinned: true,
      isLocked: false,
      tags: ['Welcome', 'Community', 'New Features'],
      excerpt: 'We\'re excited to launch our new community forum! This platform will serve as the central hub for all community discussions, roleplay stories, and support.',
    },
    {
      id: 2,
      title: 'Best Roleplay Moments of 2024',
      category: 'roleplay',
      author: 'StoryMaster',
      authorAvatar: '/api/placeholder/40/40',
      replies: 127,
      views: 2156,
      likes: 234,
      lastActivity: '4 hours ago',
      lastAuthor: 'RoleplayEnthusiast',
      isPinned: false,
      isLocked: false,
      tags: ['Roleplay', '2024', 'Highlights'],
      excerpt: 'Share your most memorable roleplay moments from this year! From epic battles to heartwarming character interactions, let\'s celebrate the stories we\'ve created together.',
    },
    {
      id: 3,
      title: 'Server Performance Issues - Update',
      category: 'announcements',
      author: 'Head Developer',
      authorAvatar: '/api/placeholder/40/40',
      replies: 23,
      views: 987,
      likes: 12,
      lastActivity: '6 hours ago',
      lastAuthor: 'TechSupport',
      isPinned: true,
      isLocked: false,
      tags: ['Technical', 'Update', 'Performance'],
      excerpt: 'We\'ve identified and resolved the server performance issues that were affecting gameplay. The servers are now running smoothly with improved stability.',
    },
    {
      id: 4,
      title: 'How to Start Your First Business',
      category: 'help',
      author: 'BusinessGuru',
      authorAvatar: '/api/placeholder/40/40',
      replies: 67,
      views: 1456,
      likes: 78,
      lastActivity: '8 hours ago',
      lastAuthor: 'NewPlayer123',
      isPinned: false,
      isLocked: false,
      tags: ['Business', 'Guide', 'New Players'],
      excerpt: 'A comprehensive guide for new players looking to start their first business venture in our economic system. Tips, strategies, and common pitfalls to avoid.',
    },
    {
      id: 5,
      title: 'Community Event: Winter Festival 2024',
      category: 'events',
      author: 'Event Coordinator',
      authorAvatar: '/api/placeholder/40/40',
      replies: 89,
      views: 1876,
      likes: 156,
      lastActivity: '12 hours ago',
      lastAuthor: 'FestivalFan',
      isPinned: false,
      isLocked: false,
      tags: ['Event', 'Winter', 'Festival', '2024'],
      excerpt: 'Join us for the annual Winter Festival! Special events, exclusive rewards, and community activities throughout December. Don\'t miss out on the festivities!',
    },
    {
      id: 6,
      title: 'Character Development Tips',
      category: 'roleplay',
      author: 'RoleplayMentor',
      authorAvatar: '/api/placeholder/40/40',
      replies: 34,
      views: 892,
      likes: 45,
      lastActivity: '1 day ago',
      lastAuthor: 'CharacterBuilder',
      isPinned: false,
      isLocked: false,
      tags: ['Character', 'Development', 'Tips'],
      excerpt: 'Learn how to create compelling, well-rounded characters that enhance your roleplay experience. From backstory creation to character growth over time.',
    },
    {
      id: 7,
      title: 'Bug Report: Inventory System',
      category: 'help',
      author: 'BugHunter',
      authorAvatar: '/api/placeholder/40/40',
      replies: 12,
      views: 456,
      likes: 8,
      lastActivity: '1 day ago',
      lastAuthor: 'TechSupport',
      isPinned: false,
      isLocked: true,
      tags: ['Bug', 'Inventory', 'Technical'],
      excerpt: 'Reporting a bug where items sometimes disappear from inventory after server restart. Has anyone else experienced this issue?',
    },
    {
      id: 8,
      title: 'Community Guidelines Reminder',
      category: 'announcements',
      author: 'Head Moderator',
      authorAvatar: '/api/placeholder/40/40',
      replies: 56,
      views: 1234,
      likes: 67,
      lastActivity: '2 days ago',
      lastAuthor: 'ModeratorTeam',
      isPinned: true,
      isLocked: false,
      tags: ['Guidelines', 'Community', 'Reminder'],
      excerpt: 'A friendly reminder about our community guidelines. Let\'s work together to maintain a positive, welcoming environment for all players.',
    },
  ];

  const filteredDiscussions = discussions.filter(discussion => {
    const matchesSearch = discussion.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         discussion.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         discussion.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
    const matchesCategory = selectedCategory === 'all' || discussion.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'announcements': return 'from-red-500 to-pink-500';
      case 'general': return 'from-blue-500 to-cyan-500';
      case 'roleplay': return 'from-purple-500 to-violet-500';
      case 'help': return 'from-green-500 to-emerald-500';
      case 'events': return 'from-orange-500 to-yellow-500';
      case 'feedback': return 'from-pink-500 to-rose-500';
      default: return 'from-gray-500 to-gray-600';
    }
  };

  const formatNumber = (num: number) => {
    if (num >= 1000) {
      return (num / 1000).toFixed(1) + 'k';
    }
    return num.toString();
  };

  return (
    <div className="min-h-screen pt-16 md:pt-20">
      {/* Hero Section */}
      <section className="relative py-12 md:py-20 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(139,92,246,0.1),transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(0,212,255,0.1),transparent_50%)]" />
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="font-heading font-bold text-3xl md:text-5xl lg:text-6xl mb-4 md:mb-6">
              <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                Forum
              </span>
            </h1>
            <p className="text-lg md:text-xl lg:text-2xl text-gray-300 mb-4 md:mb-6 max-w-4xl mx-auto leading-relaxed px-4">
              Join discussions, share ideas, and connect with players from around the world 
              in our vibrant community forum.
            </p>
            <p className="text-base md:text-lg text-gray-400 max-w-3xl mx-auto px-4">
              Share your roleplay stories, get help with gameplay, discuss community events, 
              and be part of the conversation that shapes our gaming community.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Search and Filter Section */}
      <section className="py-8 md:py-12 bg-gradient-to-b from-slate-800 to-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-4 md:gap-6 items-center justify-between mb-6 md:mb-8">
            {/* Search Bar */}
            <div className="relative flex-1 max-w-md w-full">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 md:h-5 md:w-5 text-gray-400" />
              <input
                type="text"
                placeholder="Search discussions..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-3 bg-slate-800/50 border border-slate-700/50 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-blue-500/50 focus:ring-2 focus:ring-blue-500/20 transition-all duration-300 text-sm md:text-base"
              />
            </div>

            {/* Create Post Button */}
            <button className="w-full lg:w-auto px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl font-medium hover:shadow-lg hover:shadow-blue-500/25 transition-all duration-300 transform hover:scale-105 flex items-center justify-center space-x-2 text-sm md:text-base">
              <Plus className="h-4 w-4 md:h-5 md:w-5" />
              <span>Create Post</span>
            </button>
          </div>

          {/* Category Filter */}
          <div className="flex flex-wrap gap-2 md:gap-3">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`px-3 py-2 md:px-4 md:py-2 rounded-lg font-medium transition-all duration-300 flex items-center space-x-2 text-sm md:text-base ${
                  selectedCategory === category.id
                    ? 'bg-blue-600 text-white'
                    : 'bg-slate-800/50 text-gray-300 hover:bg-slate-700/50 hover:text-white'
                }`}
              >
                <category.icon className="h-4 w-4" />
                <span className="hidden sm:inline">{category.name}</span>
                <span className="sm:hidden">{category.name.split(' ')[0]}</span>
                <span className="text-xs opacity-75">({category.count})</span>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Discussions List */}
      <section className="py-12 md:py-20 bg-gradient-to-b from-slate-900 to-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-4 md:space-y-6">
            {filteredDiscussions.map((discussion, index) => (
              <motion.div
                key={discussion.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.05 }}
                viewport={{ once: true }}
                className="group"
              >
                <div className="bg-slate-800/50 p-4 md:p-6 rounded-xl border border-slate-700/50 hover:border-blue-500/50 transition-all duration-300 transform group-hover:scale-[1.01]">
                  <div className="flex items-start space-x-3 md:space-x-4">
                    {/* Category Icon */}
                    <div className={`w-10 h-10 md:w-12 md:h-12 bg-gradient-to-r ${getCategoryColor(discussion.category)} rounded-lg flex items-center justify-center flex-shrink-0`}>
                      <MessageCircle className="h-5 w-5 md:h-6 md:w-6 text-white" />
                    </div>

                    {/* Content */}
                    <div className="flex-1 min-w-0">
                      {/* Header */}
                      <div className="flex items-start justify-between mb-2 md:mb-3">
                        <div className="flex-1">
                          <div className="flex items-center space-x-2 mb-1 md:mb-2">
                            {discussion.isPinned && (
                              <Pin className="h-3 w-3 md:h-4 md:w-4 text-blue-400" />
                            )}
                            {discussion.isLocked && (
                              <Lock className="h-3 w-3 md:h-4 md:w-4 text-gray-400" />
                            )}
                            <h3 className="font-heading font-semibold text-base md:text-lg text-white group-hover:text-blue-400 transition-colors duration-300">
                              {discussion.title}
                            </h3>
                          </div>
                          <p className="text-gray-400 group-hover:text-gray-300 transition-colors duration-300 mb-2 md:mb-3 text-sm md:text-base">
                            {discussion.excerpt}
                          </p>
                        </div>
                      </div>

                      {/* Tags */}
                      <div className="flex flex-wrap gap-1 md:gap-2 mb-3 md:mb-4">
                        {discussion.tags.map((tag) => (
                          <span
                            key={tag}
                            className="px-2 py-1 bg-slate-700/50 text-gray-400 text-xs rounded-md"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>

                      {/* Meta Info */}
                      <div className="flex flex-col sm:flex-row sm:items-center justify-between text-xs md:text-sm text-gray-500 space-y-2 sm:space-y-0">
                        <div className="flex flex-wrap items-center gap-3 md:gap-4">
                          <div className="flex items-center space-x-1">
                            <User className="h-3 w-3 md:h-4 md:w-4" />
                            <span>{discussion.author}</span>
                          </div>
                          <div className="flex items-center space-x-1">
                            <Reply className="h-3 w-3 md:h-4 md:w-4" />
                            <span>{discussion.replies}</span>
                          </div>
                          <div className="flex items-center space-x-1">
                            <Eye className="h-3 w-3 md:h-4 md:w-4" />
                            <span>{formatNumber(discussion.views)}</span>
                          </div>
                          <div className="flex items-center space-x-1">
                            <ThumbsUp className="h-3 w-3 md:h-4 md:w-4" />
                            <span>{discussion.likes}</span>
                          </div>
                        </div>
                        <div className="text-gray-400 text-xs md:text-sm">
                          Last activity: {discussion.lastActivity}
                        </div>
                      </div>
                    </div>

                    {/* Actions */}
                    <div className="flex items-center space-x-1 md:space-x-2 flex-shrink-0">
                      <button className="p-1 md:p-2 text-gray-400 hover:text-blue-400 transition-colors duration-300">
                        <Bookmark className="h-3 w-3 md:h-4 md:w-4" />
                      </button>
                      <button className="p-1 md:p-2 text-gray-400 hover:text-blue-400 transition-colors duration-300">
                        <Share2 className="h-3 w-3 md:h-4 md:w-4" />
                      </button>
                      <button className="p-1 md:p-2 text-gray-400 hover:text-blue-400 transition-colors duration-300">
                        <MoreHorizontal className="h-3 w-3 md:h-4 md:w-4" />
                      </button>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* No Results */}
          {filteredDiscussions.length === 0 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-12"
            >
              <MessageCircle className="h-16 w-16 text-gray-400 mx-auto mb-4" />
              <h3 className="text-xl font-heading text-white mb-2">No discussions found</h3>
              <p className="text-gray-400">Try adjusting your search terms or category filter.</p>
            </motion.div>
          )}
        </div>
      </section>

      {/* Popular Topics Section */}
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
              <span className="gradient-text">Popular Topics</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Discover the most discussed topics and trending conversations in our community.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: 'Roleplay Stories',
                description: 'Share and discover amazing roleplay narratives',
                posts: 234,
                participants: 89,
                icon: Star,
                color: 'from-purple-500 to-violet-500',
              },
              {
                title: 'Gameplay Help',
                description: 'Get assistance with game mechanics and strategies',
                posts: 189,
                participants: 156,
                icon: TrendingUp,
                color: 'from-green-500 to-emerald-500',
              },
              {
                title: 'Community Events',
                description: 'Stay updated on upcoming events and activities',
                posts: 156,
                participants: 234,
                icon: Clock,
                color: 'from-orange-500 to-yellow-500',
              },
              {
                title: 'Technical Support',
                description: 'Report bugs and get technical assistance',
                posts: 123,
                participants: 67,
                icon: Users,
                color: 'from-blue-500 to-cyan-500',
              },
              {
                title: 'Feedback & Suggestions',
                description: 'Share your ideas for improving the game',
                posts: 89,
                participants: 45,
                icon: Heart,
                color: 'from-pink-500 to-rose-500',
              },
              {
                title: 'General Discussion',
                description: 'Chat about anything related to our community',
                posts: 456,
                participants: 312,
                icon: MessageCircle,
                color: 'from-gray-500 to-gray-600',
              },
            ].map((topic, index) => (
              <motion.div
                key={topic.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group"
              >
                <div className="bg-dark-card p-6 rounded-xl border border-dark-border hover:border-neon-blue/50 transition-all duration-300 transform group-hover:scale-105">
                  <div className={`w-16 h-16 bg-gradient-to-r ${topic.color} rounded-lg flex items-center justify-center mb-4 group-hover:animate-glow transition-all duration-300`}>
                    <topic.icon className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="font-heading font-semibold text-xl text-white mb-2 group-hover:text-neon-blue transition-colors duration-300">
                    {topic.title}
                  </h3>
                  <p className="text-gray-400 group-hover:text-gray-300 transition-colors duration-300 mb-4">
                    {topic.description}
                  </p>
                  <div className="flex items-center justify-between text-sm text-gray-500">
                    <span>{topic.posts} posts</span>
                    <span>{topic.participants} participants</span>
                  </div>
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
              <span className="gradient-text">Join the Conversation</span>
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Ready to share your thoughts, ask questions, or connect with fellow players? 
              Start a new discussion or join an existing conversation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <motion.button
                className="px-8 py-4 bg-gradient-to-r from-neon-blue to-neon-violet text-white rounded-lg font-medium text-lg hover:shadow-lg hover:shadow-neon-blue/25 transition-all duration-300 transform hover:scale-105"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Start New Discussion
              </motion.button>
              <motion.button
                className="px-8 py-4 border border-neon-blue text-neon-blue rounded-lg font-medium text-lg hover:bg-neon-blue hover:text-white transition-all duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Browse Popular Topics
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
