import React, { useState } from 'react';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from './ui/card';
import { Badge } from './ui/badge';
import { Button } from './ui/button';
import { ChevronDown, ChevronUp } from 'lucide-react';
import { hiringManagerSummary } from '../data/mock';

const HiringManagerSummary = () => {
  const [expandedRole, setExpandedRole] = useState(null);

  return (
    <div className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-slate-900 mb-4">Why Hire Me?</h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Role-specific value propositions for hiring managers and executive leadership
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 max-w-6xl mx-auto">
          {hiringManagerSummary.map((item, index) => (
            <Card key={index} className="border-slate-200 hover:shadow-xl transition-all duration-300">
              <CardHeader>
                <div className="flex items-start justify-between mb-2">
                  <CardTitle className="text-xl text-slate-900">{item.role}</CardTitle>
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => setExpandedRole(expandedRole === index ? null : index)}
                    className="text-blue-600 hover:text-blue-700"
                  >
                    {expandedRole === index ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
                  </Button>
                </div>
                <CardDescription className="text-slate-700 leading-relaxed">
                  {item.value}
                </CardDescription>
              </CardHeader>
              
              {expandedRole === index && (
                <CardContent>
                  <div className="bg-blue-50 rounded-lg p-4">
                    <h4 className="font-semibold text-slate-900 mb-3">First 90 Days Action Plan</h4>
                    <ul className="space-y-2">
                      {item.first90Days.map((action, idx) => (
                        <li key={idx} className="flex items-start gap-2 text-sm text-slate-700">
                          <Badge className="bg-blue-600 text-white text-xs px-2 py-0.5">{idx + 1}</Badge>
                          <span className="leading-relaxed">{action}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </CardContent>
              )}
            </Card>
          ))}
        </div>

        {/* Call-to-Action */}
        <div className="mt-16 text-center">
          <div className="bg-gradient-to-br from-slate-900 to-slate-800 rounded-2xl p-12 max-w-4xl mx-auto">
            <h3 className="text-3xl font-bold text-white mb-4">Ready to Transform Your Security Posture?</h3>
            <p className="text-slate-300 text-lg mb-8 max-w-2xl mx-auto">
              Let's discuss how I can bring enterprise-scale GRC leadership, audit automation, and measurable business impact to your organization.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
                Schedule a Consultation
              </Button>
              <Button size="lg" variant="outline" className="border-slate-600 text-white hover:bg-slate-800">
                View Full Resume
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HiringManagerSummary;