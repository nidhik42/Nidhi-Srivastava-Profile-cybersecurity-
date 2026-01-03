import React from 'react';
import { Card } from './ui/card';
import { profileData } from '../data/mock';

const About = () => {
  return (
    <div className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-slate-900 mb-6 text-center">Executive Profile</h2>
          <Card className="p-8 border-slate-200">
            <div className="prose prose-lg max-w-none">
              <p className="text-slate-700 leading-relaxed mb-6">
                Senior Governance, Risk & Compliance (GRC) Architect with <strong>18+ years</strong> of experience leading 
                advisory, pre-sales, and enterprise delivery engagements across regulated industries including financial 
                services, healthcare, and technology.
              </p>
              <p className="text-slate-700 leading-relaxed mb-6">
                Recognized as a <strong>Global Leader in Cybersecurity Excellence</strong>, I have driven multimillion-dollar 
                cloud, IAM, and compliance initiatives that achieved <strong>95% compliance improvement</strong> and protected 
                over <strong>$100M in annual revenue</strong>.
              </p>
              <p className="text-slate-700 leading-relaxed mb-6">
                My expertise spans <strong>AI governance</strong> (NIST AI RMF implementation), <strong>audit automation</strong> 
                (70% efficiency gains), <strong>multi-cloud security</strong> (AWS, Azure, GCP), and <strong>enterprise risk 
                management</strong> across Fortune 500 organizations.
              </p>
              <div className="grid md:grid-cols-2 gap-6 mt-8">
                <div>
                  <h3 className="font-semibold text-slate-900 mb-3">Target Roles</h3>
                  <ul className="space-y-2 text-slate-700">
                    <li>• Chief Information Security Officer (CISO)</li>
                    <li>• GRC Architect / Director of Risk</li>
                    <li>• Internal Audit Manager / CAE</li>
                    <li>• AI Governance Lead</li>
                    <li>• Cloud Security Architect</li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-semibold text-slate-900 mb-3">Key Strengths</h3>
                  <ul className="space-y-2 text-slate-700">
                    <li>• Enterprise-scale program leadership</li>
                    <li>• Board-level risk communication</li>
                    <li>• Compliance automation & efficiency</li>
                    <li>• Multi-cloud security architecture</li>
                    <li>• Measurable business impact delivery</li>
                  </ul>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default About;