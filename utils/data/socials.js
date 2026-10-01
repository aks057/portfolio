import { FiGithub, FiLinkedin } from "react-icons/fi";
import { SiCodechef, SiCodeforces, SiLeetcode } from "react-icons/si";
import { personalData } from "./personal-data";

export const socials = [
  { label: "GitHub", href: personalData.github, icon: FiGithub },
  { label: "LinkedIn", href: personalData.linkedIn, icon: FiLinkedin },
  { label: "LeetCode", href: personalData.leetcode, icon: SiLeetcode },
  { label: "Codeforces", href: personalData.codeforces, icon: SiCodeforces },
  { label: "CodeChef", href: personalData.codechef, icon: SiCodechef },
];

export const navSections = [
  { id: "about", label: "About" },
  { id: "experience", label: "Experience" },
  { id: "projects", label: "Projects" },
  { id: "skills", label: "Skills" },
  { id: "achievements", label: "CP" },
  { id: "contact", label: "Contact" },
];
