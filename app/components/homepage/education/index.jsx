// @flow strict
import Image from "next/image";

import { educations } from "@/utils/data/educations";
import { BsBook } from "react-icons/bs";
import AnimationLottie from "../../helper/animation-lottie";
import lottieFile from '/public/lottie/study.json';

function Education() {
  return (
    <section id="education" className="py-12 lg:py-20 relative overflow-hidden">
      {/* Enhanced Background Elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-indigo-500/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-violet-500/5 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-xl md:text-2xl font-medium mb-3 text-slate-400 italic">
            My <span className="text-slate-500">Education</span> <span className="text-xs">(barely survived)</span>
          </h2>
        </div>

        {/* Centered Education Cards */}
        <div className="max-w-4xl mx-auto">
          <div className="space-y-8">
            {educations.map((education, index) => (
              <div
                key={education.id}
                className="glass-card p-6 lg:p-8 rounded-2xl hover:border-indigo-500/30 transition-all duration-500 group"
              >
                {/* Duration Badge */}
                <div className="flex justify-between items-start mb-6">
                  <div className="inline-flex items-center px-3 py-1 rounded-full bg-gradient-to-r from-indigo-500/20 to-violet-500/20 border border-indigo-500/30">
                    <span className="text-sm font-medium text-indigo-400">{education.duration}</span>
                  </div>
                  <div className="text-indigo-400 group-hover:scale-110 transition-transform duration-300">
                    <BsBook size={24} />
                  </div>
                </div>

                {/* Education Details */}
                <div className="space-y-4">
                  <div>
                    <h3 className="text-xl lg:text-2xl font-bold text-white mb-2 group-hover:text-indigo-400 transition-colors duration-300">
                      {education.title}
                    </h3>
                    <p className="text-lg font-semibold text-slate-300 mb-1">
                      {education.institution}
                    </p>
                    {education.location && (
                      <p className="text-sm text-slate-400 flex items-center gap-1">
                        <span>📍</span> {education.location}
                      </p>
                    )}
                  </div>

                  {education.description && (
                    <p className="text-slate-300 leading-relaxed">
                      {education.description}
                    </p>
                  )}

                  {/* Additional Info */}
                  {(education.grade || education.cgpa) && (
                    <div className="space-y-2">
                      <h4 className="text-sm font-semibold text-slate-400 uppercase tracking-wider">
                        Academic Performance
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {education.grade && (
                          <span className="px-3 py-1 bg-gradient-to-r from-slate-800 to-slate-700 border border-slate-600 rounded-full text-sm font-medium text-slate-300">
                            Grade: {education.grade}
                          </span>
                        )}
                        {education.cgpa && (
                          <span className="px-3 py-1 bg-gradient-to-r from-slate-800 to-slate-700 border border-slate-600 rounded-full text-sm font-medium text-slate-300">
                            CGPA: {education.cgpa}
                          </span>
                        )}
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

export default Education;
