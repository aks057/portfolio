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
import sqlite from '/public/svg/skills/sqlite.svg';
import tailwind from '/public/svg/skills/tailwind.svg';
import typescript from '/public/svg/skills/typescript.svg';

const icons = {
  'c++': cplusplus,
  java,
  javascript,
  typescript,
  react,
  'next js': nextJS,
  tailwind,
  postgresql,
  mongodb: mongoDB,
  mysql,
  firebase,
  sqlite,
  html,
  css,
  git,
};

// Returns undefined for skills without an icon; callers render a text fallback.
export const skillsImage = (skill) => icons[skill.toLowerCase()];
