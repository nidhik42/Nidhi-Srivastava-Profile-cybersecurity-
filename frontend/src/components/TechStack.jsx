import React from 'react';
import { Card, CardHeader, CardTitle, CardContent } from './ui/card';
import { Badge } from './ui/badge';
import { techStack } from '../data/mock';
import { Cloud, Shield, Code, Key, Lock, Brain } from 'lucide-react';

const TechStack = () => {
  const stackCategories = [
    { key: 'cloudSecurity', title: 'Cloud Security', icon: Cloud, color: 'blue' },
    { key: 'governance', title: 'Governance & Compliance', icon: Shield, color: 'green' },
    { key: 'automation', title: 'Automation & Tools', icon: Code, color: 'purple' },
    { key: 'iam', title: 'Identity & Access Management', icon: Key, color: 'orange' },
    { key: 'security', title: 'Security Operations', icon: Lock, color: 'red' },
    { key: 'aiGovernance', title: 'AI Governance', icon: Brain, color: 'indigo' }
  ];

  const colorClasses = {
    blue: { bg: 'bg-blue-50', text: 'text-blue-600', badge: 'bg-blue-100 text-blue-700' },
    green: { bg: 'bg-green-50', text: 'text-green-600', badge: 'bg-green-100 text-green-700' },
    purple: { bg: 'bg-purple-50', text: 'text-purple-600', badge: 'bg-purple-100 text-purple-700' },
    orange: { bg: 'bg-orange-50', text: 'text-orange-600', badge: 'bg-orange-100 text-orange-700' },
    red: { bg: 'bg-red-50', text: 'text-red-600', badge: 'bg-red-100 text-red-700' },
    indigo: { bg: 'bg-indigo-50', text: 'text-indigo-600', badge: 'bg-indigo-100 text-indigo-700' }
  };

  return (
    <div className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-slate-900 mb-4">Technology Stack</h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Enterprise-grade tools, frameworks, and platforms I leverage to deliver security excellence
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {stackCategories.map((category) => {
            const Icon = category.icon;
            const colors = colorClasses[category.color];
            return (
              <Card key={category.key} className="border-slate-200 hover:shadow-xl transition-all duration-300">
                <CardHeader>
                  <div className="flex items-center gap-3 mb-2">
                    <div className={`p-2 ${colors.bg} rounded-lg`}>
                      <Icon className={`w-5 h-5 ${colors.text}`} />
                    </div>
                    <CardTitle className="text-lg text-slate-900">{category.title}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {techStack[category.key].map((tech, idx) => (
                      <Badge key={idx} className={`text-xs ${colors.badge} border-0`}>
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default TechStack;