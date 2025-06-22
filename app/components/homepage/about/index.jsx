// @flow strict

import { personalData } from "@/utils/data/personal-data";
import Image from "next/image";


function AboutSection() {
  return (
    <section id="about" className="py-12 lg:py-20 relative overflow-hidden">
      {/* Enhanced Background Elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/2 left-0 w-72 h-72 bg-purple-500/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-xl md:text-2xl font-medium mb-3 text-slate-400 italic">
            About <span className="text-slate-500">Me</span> <span className="text-xs">(because you asked)</span>
          </h2>
          <p className="text-slate-500 text-sm max-w-xl mx-auto italic">
            Just another developer doing developer things, nothing to see here
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Enhanced Content */}
          <div className="order-2 lg:order-1 space-y-8">
            <div className="space-y-6">
              <div className="space-y-4">
                <h3 className="text-lg font-medium text-slate-400 italic">
                  Who am I? (as if you care...)
                </h3>
                <div className="w-16 h-0.5 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full"></div>
              </div>
              
              <div className="space-y-4 text-slate-300 leading-relaxed">
                <p className="text-lg">
                  {personalData.description}
                </p>
              </div>
            </div>

            {/* Enhanced Stats/Highlights */}
            {/* <div className="grid grid-cols-2 gap-6">
              <div className="glass-card p-6 text-center">
                <div className="text-2xl font-bold text-blue-400 mb-2">2+</div>
                <div className="text-sm text-slate-400">Years Experience</div>
              </div>
              <div className="glass-card p-6 text-center">
                <div className="text-2xl font-bold text-purple-400 mb-2">10+</div>
                <div className="text-sm text-slate-400">Projects Completed</div>
              </div>
            </div> */}

            {/* Enhanced Skills Highlight */}
            <div className="space-y-4">
              <h4 className="text-lg font-semibold text-white">Core Expertise</h4>
              <div className="flex flex-wrap gap-3">
                {['React', 'TypeScript', 'Java', 'PostgreSQL', 'Node.js'].map((skill) => (
                  <span 
                    key={skill}
                    className="px-4 py-2 bg-gradient-to-r from-slate-800 to-slate-700 border border-slate-600 rounded-full text-sm font-medium text-slate-300 hover:border-blue-500/50 transition-all duration-300"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Enhanced Image Section */}
          <div className="order-1 lg:order-2 flex justify-center">
            <div className="relative group">
              {/* Decorative Elements */}
              <div className="absolute -inset-4 bg-gradient-to-r from-purple-500/20 to-blue-500/20 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-500"></div>
              <div className="absolute -inset-2 bg-gradient-to-r from-purple-500/30 to-blue-500/30 rounded-xl blur-lg group-hover:blur-xl transition-all duration-500"></div>
              
              {/* Main Image Container */}
              <div className="relative glass-card p-2 rounded-2xl">
                <Image
                  src={personalData.profile}
                  width={320}
                  height={320}
                  alt="Abhinash Kumar"
                  className="rounded-xl"
                />
                
                {/* Floating Badge */}
                {/* <div className="absolute -bottom-4 -right-4 glass-card px-4 py-2 rounded-xl">
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                    <span className="text-sm font-medium text-slate-300">Available for work</span>
                  </div>
                </div> */}
              </div>
            </div>
          </div>
        </div>

        {/* Enhanced Quote/Mission */}
        {/* <div className="mt-20 text-center">
          <div className="glass-card p-8 md:p-12 max-w-4xl mx-auto">
            <blockquote className="text-xl md:text-2xl font-medium text-slate-300 italic leading-relaxed">
              "I believe in creating solutions that not only solve problems but also inspire and empower users to achieve more."
            </blockquote>
            <div className="mt-6 flex items-center justify-center gap-2">
              <div className="w-12 h-0.5 bg-gradient-to-r from-transparent to-purple-500"></div>
              <span className="text-purple-400 font-medium">Abhinash Kumar</span>
              <div className="w-12 h-0.5 bg-gradient-to-l from-transparent to-blue-500"></div>
            </div>
          </div>
        </div> */}
      </div>
    </section>
  );
};

export default AboutSection;
