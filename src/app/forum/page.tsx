'use client';

import { MessageCircle, ExternalLink } from 'lucide-react';

export default function Forum() {
  return (
    <div className="min-h-screen bg-slate-900">
      {/* Header */}
      <div className="bg-slate-800 border-b border-slate-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex items-center justify-center">
            <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-xl flex items-center justify-center mr-4">
              <MessageCircle className="h-6 w-6 text-white" />
            </div>
            <h1 className="text-3xl md:text-4xl font-bold text-white">
              Community Forum
            </h1>
          </div>
        </div>
      </div>

      {/* Content Area */}
      <div className="h-[calc(100vh-120px)] flex items-center justify-center">
        <div className="text-center p-8 max-w-lg">
          <div className="w-20 h-20 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center mx-auto mb-8">
            <MessageCircle className="h-10 w-10 text-white" />
          </div>
          <h2 className="text-2xl font-bold text-white mb-4">Community Forum</h2>
          <p className="text-gray-400 mb-8 text-lg">
            Join discussions, share ideas, and connect with players from around the world 
            in our vibrant community forum. Share roleplay stories, get help with gameplay, 
            and be part of the conversation that shapes our gaming community.
          </p>
          <a 
            href="https://forum.thefirm.club/" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl font-semibold text-lg hover:shadow-xl hover:shadow-blue-500/25 transition-all duration-300 transform hover:scale-105"
          >
            <ExternalLink className="h-6 w-6 mr-3" />
            Open Community Forum
          </a>
        </div>
      </div>
    </div>
  );
}
