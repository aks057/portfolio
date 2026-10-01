export const skillGroups = [
  { label: 'Languages', items: ['C++', 'Java', 'Javascript', 'Typescript'] },
  { label: 'Backend', items: ['Spring Boot', 'Apache Kafka', 'Node JS', 'Express', 'Stripe'] },
  { label: 'Frontend', items: ['React', 'Next JS', 'Tailwind', 'HTML', 'CSS'] },
  { label: 'Data', items: ['PostgreSQL', 'Supabase', 'MongoDB', 'Firebase'] },
  { label: 'Tools', items: ['Git', 'Linux', 'Vercel'] },
]

export const skillsData = skillGroups.flatMap((g) => g.items)
