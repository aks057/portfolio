export const projectsData = [
  {
    id: 1,
    name: 'Bud-Wiser',
    summary: 'Type-safe personal finance platform with real-time transaction analytics.',
    points: [
      'Zero-trust full-stack app on Next.js 14 with TypeScript Server Actions and Clerk authentication.',
      'Prisma ORM on SQLite and Vercel PostgreSQL for transaction processing, category analytics and historical aggregation.',
      'Responsive UI with TailwindCSS and shadcn/ui, plus interactive transaction visualizations.',
    ],
    tools: ['Next.js', 'TypeScript', 'React Query', 'Prisma', 'PostgreSQL', 'Clerk', 'Tailwind'],
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
