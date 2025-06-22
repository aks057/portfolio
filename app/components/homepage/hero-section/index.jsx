// @flow strict

import { personalData } from "@/utils/data/personal-data";
import Image from "next/image";
import Link from "next/link";
import { BsGithub, BsLinkedin } from "react-icons/bs";
import { FaFacebook, FaTwitterSquare } from "react-icons/fa";
import { MdDownload } from "react-icons/md";
import { RiContactsFill } from "react-icons/ri";
import { SiLeetcode } from "react-icons/si";

function HeroSection() {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center py-8 lg:py-16 overflow-hidden pt-20">
      {/* Enhanced Background Elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid grid-cols-1 items-center lg:grid-cols-2 lg:gap-16 gap-y-12">
          {/* Enhanced Text Content */}
          <div className="order-2 lg:order-1 flex flex-col items-start justify-center space-y-8 animate-fade-in-up">
            <div className="space-y-6">
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-blue-500/10 to-cyan-500/10 border border-blue-500/20 backdrop-blur-sm">
                <span className="text-sm font-medium text-blue-400">👋 Welcome to my portfolio</span>
              </div>
              
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                Hi, I'm{' '}
                <span className="bg-gradient-to-r from-blue-400 via-purple-500 to-cyan-400 bg-clip-text text-transparent">
                  {personalData.name}
                </span>
              </h1>
              
              <div className="text-xl md:text-2xl lg:text-3xl font-semibold">
                <span className="text-slate-400">I'm a </span>
                <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
                  {personalData.designation}
                </span>
              </div>
              
              <p className="text-lg text-slate-400 leading-relaxed max-w-2xl">
                Passionate about building innovative solutions with modern technologies. 
                Currently working at Leucine - AI for Pharma, creating impactful applications 
                that make a difference.
              </p>
            </div>

            {/* Enhanced Social Links */}
            <div className="flex items-center gap-4">
              {[
                { href: personalData.github, icon: BsGithub, label: "GitHub" },
                { href: personalData.linkedIn, icon: BsLinkedin, label: "LinkedIn" },
                // { href: personalData.facebook, icon: FaFacebook, label: "Facebook" },
                { href: personalData.leetcode, icon: SiLeetcode, label: "LeetCode" },
                { href: personalData.twitter, icon: FaTwitterSquare, label: "Twitter" }
              ].map(({ href, icon: Icon, label }) => (
                <Link
                  key={label}
                  href={href}
                  target="_blank"
                  className="group relative p-3 rounded-xl bg-slate-800/50 border border-slate-700/50 hover:border-blue-500/50 transition-all duration-300 hover:scale-110 hover:bg-slate-800/80"
                  aria-label={label}
                >
                  <Icon size={24} className="text-slate-400 group-hover:text-blue-400 transition-colors duration-300" />
                  <div className="absolute -top-10 left-1/2 transform -translate-x-1/2 px-2 py-1 bg-slate-800 text-xs text-slate-300 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                    {label}
                  </div>
                </Link>
              ))}
            </div>

            {/* Enhanced Action Buttons */}
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
              <Link 
                href="#about" 
                className="btn-primary group flex items-center gap-2 px-8 py-4 text-base font-semibold"
              >
                <span>Learn More</span>
                <RiContactsFill size={18} className="group-hover:translate-x-1 transition-transform duration-300" />
              </Link>

              <Link 
                href={personalData.resume}
                target="_blank"
                className="group flex items-center gap-2 px-8 py-4 rounded-xl border-2 border-slate-600 text-slate-300 hover:border-blue-500 hover:text-blue-400 transition-all duration-300 font-semibold"
              >
                <span>Download Resume</span>
                <MdDownload size={18} className="group-hover:translate-y-1 transition-transform duration-300" />
              </Link>
            </div>
          </div>

          {/* Enhanced Code Terminal */}
          <div className="order-1 lg:order-2 animate-fade-in-scale">
            <div className="glass-card p-0 overflow-hidden">
              {/* Terminal Header */}
              <div className="flex items-center justify-between px-6 py-4 bg-slate-800/50 border-b border-slate-700/50">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-red-500"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                  <div className="w-3 h-3 rounded-full bg-green-500"></div>
                </div>
                <div className="text-sm text-slate-400 font-mono">developer.js</div>
                <div className="w-16"></div>
              </div>

              {/* Enhanced Code Content */}
              <div className="p-6 lg:p-8 bg-slate-900/50">
                <code className="font-mono text-sm lg:text-base leading-relaxed">
                  <div className="mb-2">
                    <span className="text-purple-400">const</span>
                    <span className="text-slate-300 ml-2">developer</span>
                    <span className="text-purple-400 ml-2">=</span>
                    <span className="text-slate-400 ml-2">{'{'}</span>
                  </div>
                  
                  <div className="ml-4 mb-1">
                    <span className="text-blue-400">name:</span>
                    <span className="text-slate-400 ml-2">'</span>
                    <span className="text-green-400">{personalData.name}</span>
                    <span className="text-slate-400">',</span>
                  </div>
                  
                  <div className="ml-4 mb-1">
                    <span className="text-blue-400">role:</span>
                    <span className="text-slate-400 ml-2">'</span>
                    <span className="text-green-400">SDE Intern at Leucine</span>
                    <span className="text-slate-400">',</span>
                  </div>
                  
                  <div className="ml-4 mb-1">
                    <span className="text-blue-400">skills:</span>
                    <span className="text-slate-400 ml-2">['</span>
                    <span className="text-green-400">React</span>
                    <span className="text-slate-400">', '</span>
                    <span className="text-green-400">TypeScript</span>
                    <span className="text-slate-400">', '</span>
                    <span className="text-green-400">Java</span>
                    <span className="text-slate-400">', '</span>
                    <span className="text-green-400">PostgreSQL</span>
                    <span className="text-slate-400">'],</span>
                  </div>
                  
                  <div className="ml-4 mb-1">
                    <span className="text-blue-400">passionate:</span>
                    <span className="text-orange-400 ml-2">true</span>
                    <span className="text-slate-400">,</span>
                  </div>
                  
                  <div className="ml-4 mb-1">
                    <span className="text-blue-400">problemSolver:</span>
                    <span className="text-orange-400 ml-2">true</span>
                    <span className="text-slate-400">,</span>
                  </div>
                  
                  <div className="ml-4 mb-2">
                    <span className="text-green-400">hireable:</span>
                    <span className="text-orange-400 ml-2">function</span>
                    <span className="text-slate-400">() {'{'}</span>
                  </div>
                  
                  <div className="ml-8 mb-1">
                    <span className="text-purple-400">return</span>
                    <span className="text-slate-400 ml-2">this.passionate &&</span>
                  </div>
                  
                  <div className="ml-12 mb-1">
                    <span className="text-slate-400">this.problemSolver &&</span>
                  </div>
                  
                  <div className="ml-12 mb-2">
                    <span className="text-slate-400">this.skills.length {'>'} 0;</span>
                  </div>
                  
                  <div className="ml-4 mb-1">
                    <span className="text-slate-400">{'}'}</span>
                  </div>
                  
                  <div>
                    <span className="text-slate-400">{'};'}</span>
                  </div>
                </code>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
