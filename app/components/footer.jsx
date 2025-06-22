// @flow strict
import Link from 'next/link';
import { personalData } from '@/utils/data/personal-data';
import { BsGithub, BsLinkedin } from "react-icons/bs";
import { FaTwitterSquare } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";
import { IoMdHeart } from "react-icons/io";

function Footer() {
  return (
    <footer className="relative bg-slate-900/50 border-t border-slate-800/50 backdrop-blur-sm">
      {/* Enhanced Background Elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 left-1/4 w-72 h-72 bg-purple-500/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 lg:px-8 py-12">
        {/* Gradient Line */}
        <div className="flex justify-center mb-8">
          <div className="w-1/2 h-[1px] bg-gradient-to-r from-transparent via-purple-500 to-transparent"></div>
        </div>

        {/* Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
          {/* Brand Section */}
          <div className="text-center md:text-left">
            <Link
              href="/"
              className="text-transparent bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-xl font-bold hover:from-cyan-300 hover:to-blue-300 transition-all duration-300"
            >
              Abhinash Kumar
            </Link>
            <p className="text-slate-400 text-sm mt-2">
              Software Engineer & Problem Solver
            </p>
          </div>

          {/* Social Links */}
          <div className="flex justify-center items-center gap-4">
            {[
              { href: personalData.github, icon: BsGithub, label: "GitHub" },
              { href: personalData.linkedIn, icon: BsLinkedin, label: "LinkedIn" },
              { href: personalData.leetcode, icon: SiLeetcode, label: "LeetCode" },
              { href: personalData.twitter, icon: FaTwitterSquare, label: "Twitter" }
            ].map(({ href, icon: Icon, label }) => (
              <Link
                key={label}
                href={href}
                target="_blank"
                className="group p-2 rounded-lg bg-slate-800/50 border border-slate-700/50 hover:border-purple-500/50 transition-all duration-300 hover:scale-110"
                aria-label={label}
              >
                <Icon size={20} className="text-slate-400 group-hover:text-purple-400 transition-colors duration-300" />
              </Link>
            ))}
          </div>

          {/* Copyright */}
          <div className="text-center md:text-right">
            <p className="text-slate-400 text-sm flex items-center justify-center md:justify-end gap-1">
              Made with <IoMdHeart className="text-red-500 animate-pulse" size={16} /> by{' '}
              <Link 
                href={personalData.linkedIn} 
                target="_blank" 
                className="text-purple-400 hover:text-purple-300 transition-colors duration-300 font-medium"
              >
                Abhinash Kumar
              </Link>
            </p>
            <p className="text-slate-500 text-xs mt-1">
              © {new Date().getFullYear()} All rights reserved.
            </p>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-8 pt-6 border-t border-slate-800/50 text-center">
          <p className="text-slate-500 text-xs">
            Built with Next.js, Tailwind CSS, and lots of ☕
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
