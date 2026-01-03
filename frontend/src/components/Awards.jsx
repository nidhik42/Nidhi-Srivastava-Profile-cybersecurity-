import React, { useState } from 'react';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from './ui/card';
import { Badge } from './ui/badge';
import { Button } from './ui/button';
import { Trophy, Award, Users, TrendingUp, HeartPulse, Mic, Lightbulb, Star, Handshake } from 'lucide-react';
import { awards } from '../data/mock';

const Awards = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');

  const iconMap = {
    'trophy': Trophy,
    'award': Award,
    'users': Users,
    'trending-up': TrendingUp,
    'heart-pulse': HeartPulse,
    'mic': Mic,
    'lightbulb': Lightbulb,
    'star': Star,
    'handshake': Handshake
  };

  const categories = ['All', ...new Set(awards.map(a => a.category))];
  
  const filteredAwards = selectedCategory === 'All' 
    ? awards 
    : awards.filter(a => a.category === selectedCategory);

  const categoryColors = {
    'Leadership': 'bg-blue-50 text-blue-700 border-blue-200',
    'Academic Excellence': 'bg-purple-50 text-purple-700 border-purple-200',
    'Community Impact': 'bg-green-50 text-green-700 border-green-200',
    'Business Impact': 'bg-orange-50 text-orange-700 border-orange-200',
    'Innovation': 'bg-indigo-50 text-indigo-700 border-indigo-200',
    'Performance': 'bg-yellow-50 text-yellow-700 border-yellow-200',
    'Team Excellence': 'bg-teal-50 text-teal-700 border-teal-200',
    'Client Excellence': 'bg-rose-50 text-rose-700 border-rose-200'
  };

  return (
    <div className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-slate-900 mb-4">Awards & Recognition</h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Celebrating excellence in cybersecurity leadership, innovation, and business impact
          </p>
        </div>

        {/* Featured Award - Global Leader */}
        <div className="mb-12">
          <Card className="border-2 border-blue-500 bg-gradient-to-br from-blue-50 to-white shadow-xl">
            <CardHeader>
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center gap-4">
                  <div className="p-4 bg-blue-600 rounded-xl">
                    <Trophy className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <Badge className="bg-blue-600 text-white mb-2">Featured Recognition</Badge>
                    <CardTitle className="text-3xl text-slate-900 mb-2">
                      Global Leader in Cybersecurity Excellence
                    </CardTitle>
                    <p className="text-sm font-semibold text-blue-600">July 2025</p>
                  </div>
                </div>
              </div>
              <CardDescription className="text-slate-700 leading-relaxed text-base">
                {awards[0].description}
              </CardDescription>
            </CardHeader>
          </Card>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((category) => (
            <Button
              key={category}
              onClick={() => setSelectedCategory(category)}
              variant={selectedCategory === category ? 'default' : 'outline'}
              size="sm"
              className={selectedCategory === category ? 'bg-blue-600 hover:bg-blue-700' : 'border-slate-300 hover:border-blue-500'}
            >
              {category}
            </Button>
          ))}
        </div>

        {/* Awards Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredAwards.slice(1).map((award) => {
            const Icon = iconMap[award.icon];
            const categoryColor = categoryColors[award.category] || 'bg-slate-50 text-slate-700 border-slate-200';
            
            return (
              <Card key={award.id} className="border-slate-200 hover:shadow-xl transition-all duration-300 hover:border-blue-500/50">
                <CardHeader>
                  <div className="flex items-start justify-between mb-3">
                    <div className="p-3 bg-slate-100 rounded-lg">
                      {Icon && <Icon className="w-6 h-6 text-slate-700" />}
                    </div>
                    <Badge className={categoryColor}>
                      {award.category}
                    </Badge>
                  </div>
                  <CardTitle className="text-lg text-slate-900 mb-2 leading-tight">{award.title}</CardTitle>
                  <p className="text-sm font-semibold text-slate-600 mb-1">{award.issuer}</p>
                  <p className="text-xs text-slate-500 mb-3">{award.date}</p>
                  <CardDescription className="text-slate-600 leading-relaxed text-sm">
                    {award.description}
                  </CardDescription>
                </CardHeader>
              </Card>
            );
          })}
        </div>

        {/* Awards Summary */}
        <div className="mt-16 bg-gradient-to-br from-slate-900 to-slate-800 rounded-2xl p-12 text-center">
          <h3 className="text-3xl font-bold text-white mb-4">Recognition Across Career Excellence</h3>
          <div className="grid md:grid-cols-4 gap-6 max-w-4xl mx-auto">
            <div className="bg-slate-800/50 rounded-xl p-6 backdrop-blur-sm">
              <div className="text-4xl font-bold text-blue-400 mb-2">{awards.length}</div>
              <div className="text-slate-300 text-sm">Total Awards</div>
            </div>
            <div className="bg-slate-800/50 rounded-xl p-6 backdrop-blur-sm">
              <div className="text-4xl font-bold text-green-400 mb-2">15+</div>
              <div className="text-slate-300 text-sm">Years Recognized</div>
            </div>
            <div className="bg-slate-800/50 rounded-xl p-6 backdrop-blur-sm">
              <div className="text-4xl font-bold text-purple-400 mb-2">5</div>
              <div className="text-slate-300 text-sm">Innovation Awards</div>
            </div>
            <div className="bg-slate-800/50 rounded-xl p-6 backdrop-blur-sm">
              <div className="text-4xl font-bold text-orange-400 mb-2">3</div>
              <div className="text-slate-300 text-sm">Client Recognitions</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Awards;
