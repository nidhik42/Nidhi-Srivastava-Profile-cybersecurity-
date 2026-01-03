import React, { useState } from 'react';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from './ui/card';
import { Badge } from './ui/badge';
import { Button } from './ui/button';
import { ChevronRight, Target, CheckCircle2, Code } from 'lucide-react';
import { projects } from '../data/mock';

const ProjectsShowcase = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [expandedProject, setExpandedProject] = useState(null);

  const categories = ['All', ...new Set(projects.map(p => p.category))];
  
  const filteredProjects = selectedCategory === 'All' 
    ? projects 
    : projects.filter(p => p.category === selectedCategory);

  return (
    <div className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-slate-900 mb-4">Featured Projects</h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Enterprise-scale programs delivering measurable security, compliance, and business impact
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((category) => (
            <Button
              key={category}
              onClick={() => setSelectedCategory(category)}
              variant={selectedCategory === category ? 'default' : 'outline'}
              className={selectedCategory === category ? 'bg-blue-600 hover:bg-blue-700' : 'border-slate-300 hover:border-blue-500'}
            >
              {category}
            </Button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {filteredProjects.map((project) => (
            <Card 
              key={project.id} 
              className="border-slate-200 hover:shadow-xl transition-all duration-300 hover:border-blue-500/50"
            >
              <CardHeader>
                <div className="flex items-start justify-between mb-2">
                  <Badge className="bg-blue-50 text-blue-700 border-blue-200">
                    {project.category}
                  </Badge>
                  <span className="text-sm text-slate-500">{project.duration}</span>
                </div>
                <CardTitle className="text-2xl text-slate-900 mb-2">{project.title}</CardTitle>
                <p className="text-sm text-slate-600 mb-2">{project.company}</p>
                <CardDescription className="text-slate-600 leading-relaxed">
                  {project.description}
                </CardDescription>
              </CardHeader>
              
              <CardContent>
                {/* Business Problem */}
                <div className="mb-4">
                  <div className="flex items-center gap-2 mb-2">
                    <Target className="w-4 h-4 text-slate-600" />
                    <h4 className="font-semibold text-slate-900 text-sm">Business Challenge</h4>
                  </div>
                  <p className="text-sm text-slate-600 leading-relaxed">{project.businessProblem}</p>
                </div>

                {/* Key Outcomes */}
                <div className="mb-4">
                  <div className="flex items-center gap-2 mb-3">
                    <CheckCircle2 className="w-4 h-4 text-green-600" />
                    <h4 className="font-semibold text-slate-900 text-sm">Key Outcomes</h4>
                  </div>
                  <ul className="space-y-2">
                    {project.outcomes.slice(0, expandedProject === project.id ? undefined : 3).map((outcome, idx) => (
                      <li key={idx} className="text-sm text-slate-600 flex items-start gap-2">
                        <ChevronRight className="w-4 h-4 text-blue-600 flex-shrink-0 mt-0.5" />
                        <span>{outcome}</span>
                      </li>
                    ))}
                  </ul>
                  {project.outcomes.length > 3 && (
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => setExpandedProject(expandedProject === project.id ? null : project.id)}
                      className="mt-2 text-blue-600 hover:text-blue-700"
                    >
                      {expandedProject === project.id ? 'Show Less' : `Show ${project.outcomes.length - 3} More`}
                    </Button>
                  )}
                </div>

                {/* Business Impact */}
                <div className="bg-green-50 rounded-lg p-4 mb-4">
                  <p className="text-sm font-semibold text-green-900">
                    Business Impact: <span className="text-green-700">{project.impact}</span>
                  </p>
                </div>

                {/* Frameworks */}
                <div className="mb-4">
                  <h4 className="font-semibold text-slate-900 text-xs mb-2 uppercase tracking-wide">Frameworks</h4>
                  <div className="flex flex-wrap gap-2">
                    {project.frameworks.map((framework, idx) => (
                      <Badge key={idx} variant="outline" className="text-xs border-slate-300 text-slate-700">
                        {framework}
                      </Badge>
                    ))}
                  </div>
                </div>

                {/* Technologies */}
                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <Code className="w-4 h-4 text-slate-600" />
                    <h4 className="font-semibold text-slate-900 text-xs uppercase tracking-wide">Technologies</h4>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, idx) => (
                      <Badge key={idx} variant="secondary" className="text-xs bg-slate-100 text-slate-700">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectsShowcase;