import { personalData } from './personal-data';

export const ratings = [
  { platform: 'Codeforces', value: 1495, label: 'Specialist · max rating', href: personalData.codeforces },
  { platform: 'CodeChef', value: 1644, label: '3★ · max rating', href: personalData.codechef },
  { platform: 'Problems', value: 500, suffix: '+', label: 'solved across platforms', href: personalData.leetcode },
]

export const contests = [
  { name: 'CodeChef Starters 139 (Div. 3)', rank: '247', note: 'global rank' },
  { name: 'Codeforces Global Round 25', rank: '2530', note: 'global rank' },
  { name: 'Codeforces Round 880 (Div. 2)', rank: '2820', note: 'global rank' },
  { name: 'LeetCode Weekly Contest 356', rank: '3649', note: 'of 20,000+' },
  { name: 'FOSS Weekend 2022, IIITL', rank: 'Top 24', note: 'of 200+' },
  { name: 'Inter-IIIT Football 2024', rank: 'Winner', note: 'IIIT Lucknow team' },
]
