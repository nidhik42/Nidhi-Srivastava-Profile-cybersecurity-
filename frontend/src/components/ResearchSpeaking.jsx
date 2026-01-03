import React from 'react';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from './ui/card';
import { Badge } from './ui/badge';
import { Presentation, FileText } from 'lucide-react';
import { research } from '../data/mock';

const ResearchSpeaking = () => {
  const iconMap = {
    'Speaking Engagement': Presentation,
    'Research Publication': FileText
  };

  return (
    <div className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-slate-900 mb-4">Research & Speaking</h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Thought leadership in quantum security, AI/ML applications, and cybersecurity innovation
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {research.map((item) => {
            const Icon = iconMap[item.type];
            return (
              <Card key={item.id} className="border-slate-200 hover:shadow-xl transition-all duration-300 hover:border-blue-500/50">
                <CardHeader>
                  <div className="flex items-center gap-3 mb-3">
                    <div className="p-3 bg-blue-50 rounded-lg">
                      {Icon && <Icon className="w-6 h-6 text-blue-600" />}
                    </div>
                    <Badge className="bg-blue-50 text-blue-700 border-blue-200">
                      {item.type}
                    </Badge>
                  </div>
                  <CardTitle className="text-xl text-slate-900 mb-2">{item.title}</CardTitle>
                  <p className="text-sm font-semibold text-slate-600 mb-3">{item.venue}</p>
                  <CardDescription className="text-slate-600 leading-relaxed">
                    {item.description}
                  </CardDescription>
                </CardHeader>
                
                <CardContent>
                  <div>
                    <h4 className="font-semibold text-slate-900 text-xs mb-3 uppercase tracking-wide">Key Topics</h4>
                    <div className="flex flex-wrap gap-2">
                      {item.topics.map((topic, idx) => (
                        <Badge key={idx} variant="secondary" className="text-xs bg-slate-100 text-slate-700">
                          {topic}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Certifications & Education Section */}
        <div className="mt-20">
          <h3 className="text-3xl font-bold text-slate-900 mb-8 text-center">Certifications & Education</h3>
          
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {/* Certifications */}
            <Card className="border-slate-200">
              <CardHeader>
                <CardTitle className="text-xl text-slate-900">Professional Certifications</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-start justify-between pb-4 border-b border-slate-200">
                    <div>
                      <h4 className="font-semibold text-slate-900">CRISC</h4>
                      <p className="text-sm text-slate-600">Certified in Risk and Information Systems Control</p>
                      <p className="text-xs text-slate-500 mt-1">ISACA</p>
                    </div>
                    <Badge className="bg-green-50 text-green-700 border-green-200">Active</Badge>
                  </div>
                  <div className="pb-4 border-b border-slate-200">
                    <h4 className="font-semibold text-slate-900">CISA</h4>
                    <p className="text-sm text-slate-600">Certified Information Systems Auditor</p>
                    <p className="text-xs text-slate-500 mt-1">ISACA • Previously Certified</p>
                  </div>
                  <div className="pb-4 border-b border-slate-200">
                    <h4 className="font-semibold text-slate-900">CISM</h4>
                    <p className="text-sm text-slate-600">Certified Information Security Manager</p>
                    <p className="text-xs text-slate-500 mt-1">ISACA • Previously Certified</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-slate-900">PMP</h4>
                    <p className="text-sm text-slate-600">Project Management Professional</p>
                    <p className="text-xs text-slate-500 mt-1">PMI • Previously Certified</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Education */}
            <Card className="border-slate-200">
              <CardHeader>
                <CardTitle className="text-xl text-slate-900">Education</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  <div>
                    <h4 className="font-semibold text-slate-900 mb-1">Master of Science in IT Management</h4>
                    <p className="text-sm text-blue-600 font-medium mb-1">Major: Cybersecurity & Analytics</p>
                    <p className="text-sm text-slate-600">Oakland University, Michigan</p>
                    <p className="text-xs text-slate-500 mt-1">GPA: 3.90/4.00 • Expected Nov 2025</p>
                  </div>
                  <div className="pt-4 border-t border-slate-200">
                    <h4 className="font-semibold text-slate-900 mb-1">Master of Business Administration</h4>
                    <p className="text-sm text-slate-600">Mumbai University</p>
                    <p className="text-xs text-slate-500 mt-1">2016</p>
                  </div>
                  <div className="pt-4 border-t border-slate-200">
                    <h4 className="font-semibold text-slate-900 mb-1">Bachelor of Engineering</h4>
                    <p className="text-sm text-blue-600 font-medium mb-1">Electronics & Telecommunications</p>
                    <p className="text-sm text-slate-600">Pune University</p>
                    <p className="text-xs text-slate-500 mt-1">GPA: 3.10/4.00 • 2006</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResearchSpeaking;