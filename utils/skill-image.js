// Only import skills that are actually used
import cplusplus from '/public/svg/skills/cplusplus.svg';
import css from '/public/svg/skills/css.svg';
import firebase from '/public/svg/skills/firebase.svg';
import git from '/public/svg/skills/git.svg';
import html from '/public/svg/skills/html.svg';
import java from '/public/svg/skills/java.svg';
import javascript from '/public/svg/skills/javascript.svg';
import mongoDB from '/public/svg/skills/mongoDB.svg';
import mysql from '/public/svg/skills/mysql.svg';
import nextJS from '/public/svg/skills/nextJS.svg';
import postgresql from '/public/svg/skills/postgresql.svg';
import react from '/public/svg/skills/react.svg';
import tailwind from '/public/svg/skills/tailwind.svg';
import typescript from '/public/svg/skills/typescript.svg';


export const skillsImage = (skill) => {
  const skillID = skill.toLowerCase();
  switch (skillID) {
    case 'c++':
      return cplusplus;
    case 'java':
      return java;
    case 'javascript':
      return javascript;
    case 'typescript':
      return typescript;
    case 'react':
      return react;
    case 'next js':
      return nextJS;
    case 'node js':
      return javascript;
    case 'tailwind':
      return tailwind;
    case 'postgresql':
      return postgresql;
    case 'mongodb':
      return mongoDB;
    case 'mysql':
      return mysql;
    case 'firebase':
      return firebase;
    case 'html':
      return html;
    case 'css':
      return css;
    case 'git':
      return git;
    case 'prisma':
      return postgresql; // Using PostgreSQL icon as fallback for Prisma
    default:
      break;
  }
}
