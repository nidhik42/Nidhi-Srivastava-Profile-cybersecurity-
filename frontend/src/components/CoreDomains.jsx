import React from 'react';
import { ClipboardCheck, Brain, Cloud, Server, FileCheck, Briefcase } from 'lucide-react';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from './ui/card';
import { Badge } from './ui/badge';
import { coreDomains } from '../data/mock';

const CoreDomains = () => {
  const iconMap = {
    'clipboard-check': ClipboardCheck,
    'brain': Brain,
    'cloud': Cloud,
    'server': Server,
    'file-check': FileCheck,
    'briefcase': Briefcase
  };

  return (
    <div className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-slate-900 mb-4">Core Expertise</h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Enterprise-scale domains where I deliver measurable security, compliance, and business outcomes
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {coreDomains.map((domain) => {
            const Icon = iconMap[domain.icon];
            return (
              <Card key={domain.id} className="border-slate-200 hover:shadow-xl transition-all duration-300 hover:border-blue-500/50">
                <CardHeader>
                  <div className="flex items-start justify-between mb-3">
                    <div className="p-3 bg-blue-50 rounded-lg">
                      {Icon && <Icon className="w-6 h-6 text-blue-600" />}
                    </div>
                  </div>
                  <CardTitle className="text-xl text-slate-900">{domain.title}</CardTitle>
                  <CardDescription className="text-slate-600 leading-relaxed">
                    {domain.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {domain.frameworks.map((framework, idx) => (
                      <Badge key={idx} variant="secondary" className="text-xs bg-slate-100 text-slate-700">
                        {framework}
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

export default CoreDomains;