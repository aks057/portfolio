// @flow strict

import * as React from 'react';
import { BsCodeSlash } from "react-icons/bs";

function ProjectCard({ project }) {

  return (
    <div className="p-6 lg:p-8 group">
      {/* Project Badge */}
      <div className="flex justify-between items-start mb-6">
        <div className="inline-flex items-center px-3 py-1 rounded-full bg-gradient-to-r from-orange-500/20 to-red-500/20 border border-orange-500/30">
          <span className="text-sm font-medium text-orange-400">{project.role}</span>
        </div>
        <div className="text-orange-400 group-hover:scale-110 transition-transform duration-300">
          <BsCodeSlash size={24} />
        </div>
      </div>

      {/* Project Details */}
      <div className="space-y-4">
        <div>
          <h3 className="text-xl lg:text-2xl font-bold text-white mb-2 group-hover:text-orange-400 transition-colors duration-300">
            {project.name}
          </h3>
          <p className="text-slate-300 leading-relaxed">
            {project.description}
          </p>
        </div>

        {/* Tech Stack */}
        {project.tools && (
          <div className="space-y-3">
            <h4 className="text-sm font-semibold text-slate-400 uppercase tracking-wider">
              Technologies Used
            </h4>
            <div className="flex flex-wrap gap-2">
              {project.tools.map((tool, toolIndex) => (
                <span 
                  key={toolIndex} 
                  className="px-3 py-1 bg-gradient-to-r from-slate-800 to-slate-700 border border-slate-600 rounded-full text-sm font-medium text-slate-300 hover:border-orange-500/50 hover:text-orange-400 transition-all duration-300"
                >
                  {tool}
                </span>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProjectCard;
