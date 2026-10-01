export const skillGroups = [
  { label: 'Languages', items: ['C++', 'Java', 'Javascript', 'Typescript'] },
  { label: 'Frontend', items: ['React', 'Next JS', 'Tailwind', 'HTML', 'CSS'] },
  { label: 'Backend', items: ['Node JS', 'Express', 'PostgREST', 'Stripe'] },
  { label: 'Data', items: ['PostgreSQL', 'MySQL', 'MongoDB', 'Firebase', 'SQLite'] },
  { label: 'Tools', items: ['Git', 'Linux', 'Vercel'] },
]

export const skillsData = skillGroups.flatMap((g) => g.items)
