export const projectsData = [
  {
    id: 1,
    name: 'Bud-Wiser',
    summary: 'Secure budget-tracking platform with a zero-trust data layer and an analytics dashboard.',
    points: [
      'Next.js 14 with Supabase row-level security policies and atomic PostgreSQL functions for zero-trust data access.',
      'Type-safe Server Actions with Zod validation and OAuth authentication.',
      'Analytics dashboard with React Query caching and Recharts: category breakdowns, historical trends, and a TanStack Table with sorting, filtering and CSV export.',
    ],
    tools: ['Next.js', 'TypeScript', 'Supabase', 'PostgreSQL', 'React Query', 'Zod', 'Recharts', 'Tailwind'],
    role: 'Full Stack',
    code: 'https://github.com/aks057/budget',
    demo: '',
  },
  {
    id: 2,
    name: 'PricePal',
    summary: 'Amazon product tracker that alerts on price drops and restocks.',
    points: [
      'Scrapes and tracks Amazon products for stock availability, price drops and significant discounts.',
      'Sends timely email notifications so users buy at the right moment.',
    ],
    tools: ['Next.js', 'TypeScript', 'Node.js', 'MongoDB'],
    role: 'Full Stack',
    code: 'https://github.com/aks057/price-pal',
    demo: 'https://price-pal-one.vercel.app/',
  },
];
