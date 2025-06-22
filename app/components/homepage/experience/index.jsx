// @flow strict

import { experiences } from "@/utils/data/experience";
import Image from "next/image";
import { BsPersonWorkspace } from "react-icons/bs";
import AnimationLottie from "../../helper/animation-lottie";
import GlowCard from "../../helper/glow-card";
import experience from '/public/lottie/code.json';

function Experience() {
  return (
    <section id="experience" className="py-12 lg:py-20 relative overflow-hidden">
      {/* Enhanced Background Elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/4 right-0 w-72 h-72 bg-cyan-500/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-cyan-500/10 to-blue-500/10 border border-cyan-500/20 backdrop-blur-sm mb-4">
            <span className="text-sm font-medium text-cyan-400">💼 Professional Journey</span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            Work <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">Experience</span>
          </h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            Building innovative solutions and gaining valuable experience in the tech industry
          </p>
        </div>

        {/* Centered Experience Cards */}
        <div className="max-w-4xl mx-auto">
          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <div
                key={exp.id}
                className="glass-card p-6 lg:p-8 rounded-2xl hover:border-cyan-500/30 transition-all duration-500 group"
              >
                {/* Duration Badge */}
                <div className="flex justify-between items-start mb-6">
                  <div className="inline-flex items-center px-3 py-1 rounded-full bg-gradient-to-r from-cyan-500/20 to-blue-500/20 border border-cyan-500/30">
                    <span className="text-sm font-medium text-cyan-400">{exp.duration}</span>
                  </div>
                  <div className="text-cyan-400 group-hover:scale-110 transition-transform duration-300">
                    <BsPersonWorkspace size={24} />
                  </div>
                </div>

                {/* Job Details */}
                <div className="space-y-4">
                  <div>
                    <h3 className="text-xl lg:text-2xl font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors duration-300">
                      {exp.title}
                    </h3>
                    <p className="text-lg font-semibold text-slate-300 mb-1">
                      {exp.company}
                    </p>
                    {exp.location && (
                      <p className="text-sm text-slate-400 flex items-center gap-1">
                        <span>📍</span> {exp.location}
                      </p>
                    )}
                  </div>

                  {exp.description && (
                    <p className="text-slate-300 leading-relaxed">
                      {exp.description}
                    </p>
                  )}

                  {/* Tech Stack */}
                  {exp.techStack && (
                    <div className="space-y-3">
                      <h4 className="text-sm font-semibold text-slate-400 uppercase tracking-wider">
                        Technologies Used
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {exp.techStack.map((tech, techIndex) => (
                          <span 
                            key={techIndex} 
                            className="px-3 py-1 bg-gradient-to-r from-slate-800 to-slate-700 border border-slate-600 rounded-full text-sm font-medium text-slate-300 hover:border-cyan-500/50 hover:text-cyan-400 transition-all duration-300"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
