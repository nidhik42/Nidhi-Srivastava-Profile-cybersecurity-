import React from 'react';
import { Shield, Zap, TrendingUp, Lock } from 'lucide-react';
import { profileData, keyMetrics } from '../data/mock';
import { Badge } from './ui/badge';
import { Button } from './ui/button';

const Hero = () => {
  const iconMap = {
    'shield-check': Shield,
    'zap': Zap,
    'trending-up': TrendingUp,
    'lock': Lock
  };

  return (
    <div className="relative bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white py-24 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-96 h-96 bg-blue-500 rounded-full filter blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-600 rounded-full filter blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Main Content */}
        <div className="text-center mb-16">
          <Badge className="mb-6 bg-blue-600/20 text-blue-300 border-blue-500/30">
            {profileData.yearsExperience} Years of Executive Leadership
          </Badge>
          <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
            {profileData.name}
          </h1>
          <p className="text-2xl md:text-3xl text-slate-300 mb-4 font-light">
            {profileData.title}
          </p>
          <p className="text-lg text-slate-400 mb-8">
            {profileData.subtitle}
          </p>
          <p className="text-slate-300 max-w-3xl mx-auto mb-10 leading-relaxed">
            {profileData.summary}
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
              View Projects
            </Button>
            <Button size="lg" variant="outline" className="border-slate-600 text-white hover:bg-slate-800">
              Download Resume
            </Button>
          </div>
        </div>

        {/* Key Metrics */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {keyMetrics.map((metric, index) => {
            const Icon = iconMap[metric.icon];
            return (
              <div key={index} className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-slate-700/50 hover:border-blue-500/50 transition-all duration-300">
                <div className="flex items-center justify-center mb-3">
                  <div className="p-3 bg-blue-600/20 rounded-lg">
                    {Icon && <Icon className="w-6 h-6 text-blue-400" />}
                  </div>
                </div>
                <div className="text-3xl font-bold text-white mb-1">{metric.value}</div>
                <div className="text-sm text-slate-400">{metric.label}</div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Hero;