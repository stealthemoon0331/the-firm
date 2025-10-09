'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, X, Shield, Scale, AlertTriangle, BookOpen, FileText, Gavel } from 'lucide-react';

interface Legislation {
  id: string;
  title: string;
  category: 'Guide' | 'Act' | 'Caution';
  description: string;
  sections?: string[];
  punishments?: {
    offence: string;
    first: string;
    second: string;
    third: string;
  }[];
}

const legislations: Legislation[] = [
  {
    id: 'common-law',
    title: 'Common Law',
    category: 'Guide',
    description: 'Fundamental legal principles and precedents',
    sections: ['Basic Principles', 'Precedents', 'Case Law']
  },
  {
    id: 'criminal-damage-1971',
    title: 'Criminal Damage Act 1971',
    category: 'Act',
    description: 'Legislation covering property damage offences',
    sections: [
      'Section 1 - Destroying or Damaging Property',
      'Section 2 - Threats to Destroy or Damage Property',
      'Section 3 - Possessing Anything With Intent to Destroy or Damage Property',
      'Section 6 - Search For Things Intended For Use in Committing Offences of Criminal Damage',
      'Section 9 - Evidence in Connection With Offences Under This Act'
    ],
    punishments: [
      {
        offence: 'Criminal Damage',
        first: '£5,000 fine - 1st Offence',
        second: '£15,000 fine - 5 months in prison - 2nd Offence',
        third: '£25,000 fine - 10 months in prison - 3rd Offence'
      },
      {
        offence: 'Damage to Government Property',
        first: '£15,000 fine - 1st Offence',
        second: '£25,000 fine - 15 months in prison - 2nd Offence',
        third: '£40,000 fine - 20 months in prison - 3rd Offence'
      }
    ]
  },
  {
    id: 'firearms-1968',
    title: 'Firearms Act 1968',
    category: 'Act',
    description: 'Regulations for firearm possession and use',
    sections: [
      'Section 1 - Requirement of firearms certificate',
      'Section 5 - Weapons Subject to General Prohibition',
      'Section 10 - Slaughter of Animals',
      'Section 16 - Possession of Firearm With Intent to Injure'
    ]
  },
  {
    id: 'miscellaneous',
    title: 'Miscellaneous',
    category: 'Guide',
    description: 'Additional legal guidelines and procedures',
    sections: ['General Guidelines', 'Procedures', 'Best Practices']
  },
  {
    id: 'drugs-1971',
    title: 'Misuse of Drugs Act 1971',
    category: 'Act',
    description: 'Drug-related offences and penalties',
    sections: ['Controlled Substances', 'Possession Offences', 'Supply Offences']
  },
  {
    id: 'person-1861',
    title: 'Offences Against The Person Act 1861',
    category: 'Act',
    description: 'Violent offences against individuals',
    sections: ['Assault', 'Battery', 'Grievous Bodily Harm']
  },
  {
    id: 'police-1996',
    title: 'Police Act 1996',
    category: 'Act',
    description: 'Police powers and procedures',
    sections: ['Police Powers', 'Arrest Procedures', 'Investigation Rights']
  },
  {
    id: 'police-caution',
    title: 'Police Caution (Arrest / Interview)',
    category: 'Caution',
    description: 'Rights and procedures during police interaction',
    sections: ['Right to Silence', 'Legal Representation', 'Interview Procedures']
  },
  {
    id: 'pace-1984',
    title: 'Police and Criminal Evidence Act 1984 (PACE)',
    category: 'Act',
    description: 'Comprehensive police powers and suspect rights',
    sections: ['Arrest Powers', 'Search Powers', 'Detention Rights', 'Interview Procedures']
  },
  {
    id: 'public-order-1986',
    title: 'Public Order Act 1986',
    category: 'Act',
    description: 'Public disorder and assembly offences',
    sections: ['Riot', 'Violent Disorder', 'Affray', 'Public Assembly']
  },
  {
    id: 'road-traffic-1988',
    title: 'Road Traffic Act 1988',
    category: 'Act',
    description: 'Traffic offences and vehicle regulations',
    sections: ['Driving Offences', 'Vehicle Standards', 'Licensing Requirements']
  },
  {
    id: 'road-traffic-caution',
    title: 'Road Traffic Caution (TOR / NIP)',
    category: 'Caution',
    description: 'Traffic offence procedures and rights',
    sections: ['Traffic Offence Report', 'Notice of Intended Prosecution', 'Court Procedures']
  }
];

export default function LegislationsPage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedLegislation, setSelectedLegislation] = useState<Legislation | null>(null);
  const [activeTab, setActiveTab] = useState<'offences' | 'punishment' | 'act'>('act');

  const filteredLegislations = legislations.filter(legislation =>
    legislation.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    legislation.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
    legislation.category.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'Guide': return 'bg-blue-500';
      case 'Act': return 'bg-blue-600';
      case 'Caution': return 'bg-orange-500';
      default: return 'bg-gray-500';
    }
  };

  return (
    <div className="min-h-screen bg-slate-900 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center mb-6">
            <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-xl flex items-center justify-center mr-4">
              <Shield className="h-6 w-6 text-white" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-white">
              Legislation Quick Reference Handbook
            </h1>
          </div>
          <p className="text-gray-400 text-lg">
            Click cards to view details • Use search to filter
          </p>
        </div>

        {/* Search Bar */}
        <div className="flex items-center justify-center mb-12">
          <div className="relative w-full max-w-2xl">
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
            <input
              type="text"
              placeholder="Search legislation or content..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-12 pr-4 py-4 bg-slate-800 border border-slate-700 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20"
            />
            {searchTerm && (
              <button
                onClick={() => setSearchTerm('')}
                className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-white transition-colors"
              >
                <X className="h-5 w-5" />
              </button>
            )}
          </div>
          <button
            onClick={() => setSearchTerm('')}
            className="ml-4 px-6 py-4 bg-slate-800 border border-slate-700 rounded-xl text-white hover:bg-slate-700 transition-colors"
          >
            Reset
          </button>
        </div>

        {/* Legislation Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-12">
          <AnimatePresence>
            {filteredLegislations.map((legislation, index) => (
              <motion.div
                key={legislation.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
                onClick={() => setSelectedLegislation(legislation)}
                className="bg-slate-800 rounded-xl p-6 cursor-pointer hover:bg-slate-700 transition-all duration-300 transform hover:scale-105 hover:shadow-xl hover:shadow-blue-500/20 group"
              >
                <div className="flex items-start justify-between mb-4">
                  <span className={`px-3 py-1 rounded-full text-xs font-semibold text-white ${getCategoryColor(legislation.category)}`}>
                    {legislation.category}
                  </span>
                </div>
                
                <h3 className="text-white font-bold text-lg mb-3 group-hover:text-blue-300 transition-colors">
                  {legislation.title}
                </h3>
                
                <p className="text-gray-400 text-sm mb-4 leading-relaxed">
                  {legislation.description}
                </p>
                
                <div className="flex items-center text-gray-500 text-sm">
                  <span>Click to view</span>
                  <div className="w-2 h-2 bg-gray-500 rounded-full ml-2"></div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* Modal for Selected Legislation */}
        <AnimatePresence>
          {selectedLegislation && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4"
              onClick={() => setSelectedLegislation(null)}
            >
              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.9, opacity: 0 }}
                className="bg-slate-900 rounded-2xl w-full max-w-4xl max-h-[90vh] overflow-hidden"
                onClick={(e) => e.stopPropagation()}
              >
                {/* Modal Header */}
                <div className="bg-slate-800 px-8 py-6 border-b border-slate-700">
                  <div className="flex items-center justify-between">
                    <h2 className="text-2xl font-bold text-white">
                      {selectedLegislation.title}
                    </h2>
                    <button
                      onClick={() => setSelectedLegislation(null)}
                      className="text-gray-400 hover:text-white transition-colors"
                    >
                      <X className="h-6 w-6" />
                    </button>
                  </div>
                  
                  {/* Tabs */}
                  <div className="flex space-x-4 mt-6">
                    <button
                      onClick={() => setActiveTab('offences')}
                      className={`flex items-center space-x-2 px-4 py-2 rounded-lg transition-colors ${
                        activeTab === 'offences' 
                          ? 'bg-blue-600 text-white' 
                          : 'text-gray-400 hover:text-white'
                      }`}
                    >
                      <Shield className="h-4 w-4" />
                      <span>Offences</span>
                    </button>
                    <button
                      onClick={() => setActiveTab('punishment')}
                      className={`flex items-center space-x-2 px-4 py-2 rounded-lg transition-colors ${
                        activeTab === 'punishment' 
                          ? 'bg-blue-600 text-white' 
                          : 'text-gray-400 hover:text-white'
                      }`}
                    >
                      <Scale className="h-4 w-4" />
                      <span>Punishment</span>
                    </button>
                    <button
                      onClick={() => setActiveTab('act')}
                      className={`flex items-center space-x-2 px-4 py-2 rounded-lg transition-colors ${
                        activeTab === 'act' 
                          ? 'bg-blue-600 text-white' 
                          : 'text-gray-400 hover:text-white'
                      }`}
                    >
                      <span>Act</span>
                    </button>
                  </div>
                </div>

                {/* Modal Content */}
                <div className="p-8 max-h-96 overflow-y-auto">
                  {activeTab === 'act' && selectedLegislation.sections && (
                    <div>
                      <h3 className="text-xl font-bold text-white mb-6">
                        {selectedLegislation.title} - Sections
                      </h3>
                      <div className="space-y-4">
                        {selectedLegislation.sections.map((section, index) => (
                          <div key={index} className="flex items-start space-x-3">
                            <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                            <p className="text-gray-300">{section}</p>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {activeTab === 'punishment' && selectedLegislation.punishments && (
                    <div>
                      <h3 className="text-xl font-bold text-white mb-6 flex items-center">
                        <Scale className="h-5 w-5 mr-2" />
                        {selectedLegislation.title} - Punishment Guidelines
                      </h3>
                      <div className="space-y-6">
                        {selectedLegislation.punishments.map((punishment, index) => (
                          <div key={index} className="bg-slate-800 rounded-lg p-6 border-l-4 border-orange-500">
                            <h4 className="text-lg font-semibold text-white mb-4">
                              {punishment.offence}
                            </h4>
                            <div className="space-y-2">
                              <p className="text-gray-300">• {punishment.first}</p>
                              <p className="text-gray-300">• {punishment.second}</p>
                              <p className="text-gray-300">• {punishment.third}</p>
                            </div>
                            <p className="text-red-400 text-sm mt-4 font-semibold">
                              Reoffend after 3rd offence: Use 3rd offence option
                            </p>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {activeTab === 'offences' && (
                    <div>
                      <h3 className="text-xl font-bold text-white mb-6">
                        {selectedLegislation.title} - Offences
                      </h3>
                      <p className="text-gray-400">
                        Detailed offence information would be displayed here.
                      </p>
                    </div>
                  )}
                </div>

                {/* Footer */}
                <div className="bg-slate-800 px-8 py-4 border-t border-slate-700">
                  <div className="bg-yellow-500 text-black px-4 py-2 rounded-lg text-center font-semibold mb-2">
                    THIS TRAINING MODULE IS FAKE. DO NOT USE IT IN REAL LIFE.
                  </div>
                  <p className="text-gray-400 text-sm text-center">
                    © 2025 The Firm. Training materials for educational purposes only.
                  </p>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
