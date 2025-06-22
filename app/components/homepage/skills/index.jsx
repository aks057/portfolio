// @flow strict

import { skillsData } from "@/utils/data/skills";
import { skillsImage } from "@/utils/skill-image";
import Image from "next/image";
import Marquee from "react-fast-marquee";

function Skills() {
  return (
    <section id="skills" className="py-12 lg:py-20 relative overflow-hidden">
      {/* Enhanced Background Elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-green-500/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-emerald-500/5 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-xl md:text-2xl font-medium mb-3 text-slate-400 italic">
            My <span className="text-slate-500">Skills</span> <span className="text-xs">(allegedly)</span>
          </h2>
        </div>

        {/* Enhanced Skills Display */}
        <div className="relative">
          {/* Gradient Overlays */}
          <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-slate-900 to-transparent z-10 pointer-events-none"></div>
          <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-slate-900 to-transparent z-10 pointer-events-none"></div>
          
          <Marquee
            gradient={false}
            speed={60}
            pauseOnHover={true}
            pauseOnClick={true}
            delay={0}
            play={true}
            direction="left"
          >
            {skillsData.map((skill, id) => (
              <div 
                className="mx-4 group cursor-pointer"
                key={id}
              >
                <div className="glass-card p-6 rounded-2xl min-w-[140px] hover:border-green-500/30 transition-all duration-500 group-hover:scale-105">
                  <div className="flex flex-col items-center gap-4">
                    <div className="relative">
                      <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-gradient-to-br from-slate-800 to-slate-700 group-hover:from-green-500/20 group-hover:to-emerald-500/20 transition-all duration-300">
                        <Image
                          src={skillsImage(skill)?.src}
                          alt={skill}
                          width={32}
                          height={32}
                          className="w-8 h-8 object-contain group-hover:scale-110 transition-transform duration-300"
                        />
                      </div>
                      {/* Skill Level Indicator */}
                      <div className="absolute -top-1 -right-1 w-3 h-3 bg-green-500 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    </div>
                    <p className="text-slate-300 text-sm font-medium text-center group-hover:text-green-400 transition-colors duration-300">
                      {skill}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </Marquee>
        </div>
      </div>
    </section>
  );
};

export default Skills;
