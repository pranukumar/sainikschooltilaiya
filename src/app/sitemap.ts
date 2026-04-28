import { MetadataRoute } from 'next';

const BASE_URL = 'https://sainikschooltilaiya.org';

const routes = [
  { path: '/', priority: 1.0, changeFreq: 'weekly' as const },
  { path: '/about', priority: 0.9, changeFreq: 'monthly' as const },
  { path: '/about/history', priority: 0.7, changeFreq: 'yearly' as const },
  { path: '/about/vision-mission', priority: 0.7, changeFreq: 'yearly' as const },
  { path: '/about/principal-message', priority: 0.8, changeFreq: 'yearly' as const },
  { path: '/about/administration', priority: 0.6, changeFreq: 'monthly' as const },
  { path: '/about/campus', priority: 0.7, changeFreq: 'yearly' as const },
  { path: '/academics', priority: 0.8, changeFreq: 'monthly' as const },
  { path: '/academics/curriculum', priority: 0.7, changeFreq: 'yearly' as const },
  { path: '/academics/departments', priority: 0.6, changeFreq: 'yearly' as const },
  { path: '/academics/examination', priority: 0.7, changeFreq: 'monthly' as const },
  { path: '/academics/e-library', priority: 0.6, changeFreq: 'monthly' as const },
  { path: '/academics/results', priority: 0.8, changeFreq: 'monthly' as const },
  { path: '/admissions', priority: 1.0, changeFreq: 'weekly' as const },
  { path: '/admissions/process', priority: 0.9, changeFreq: 'monthly' as const },
  { path: '/admissions/eligibility', priority: 0.9, changeFreq: 'yearly' as const },
  { path: '/admissions/aissee', priority: 0.9, changeFreq: 'monthly' as const },
  { path: '/admissions/fee-structure', priority: 0.8, changeFreq: 'yearly' as const },
  { path: '/admissions/scholarships', priority: 0.8, changeFreq: 'monthly' as const },
  { path: '/admissions/apply-now', priority: 1.0, changeFreq: 'weekly' as const },
  { path: '/student-life', priority: 0.7, changeFreq: 'monthly' as const },
  { path: '/student-life/houses', priority: 0.7, changeFreq: 'yearly' as const },
  { path: '/student-life/sports', priority: 0.7, changeFreq: 'yearly' as const },
  { path: '/student-life/ncc', priority: 0.7, changeFreq: 'yearly' as const },
  { path: '/student-life/activities', priority: 0.6, changeFreq: 'yearly' as const },
  { path: '/student-life/infrastructure', priority: 0.6, changeFreq: 'yearly' as const },
  { path: '/nda', priority: 0.8, changeFreq: 'monthly' as const },
  { path: '/alumni', priority: 0.7, changeFreq: 'monthly' as const },
  { path: '/alumni/notable-alumni', priority: 0.7, changeFreq: 'monthly' as const },
  { path: '/alumni/register', priority: 0.6, changeFreq: 'yearly' as const },
  { path: '/alumni/events', priority: 0.7, changeFreq: 'monthly' as const },
  { path: '/alumni/contributions', priority: 0.6, changeFreq: 'monthly' as const },
  { path: '/gallery', priority: 0.8, changeFreq: 'weekly' as const },
  { path: '/news', priority: 0.9, changeFreq: 'daily' as const },
  { path: '/notices', priority: 0.9, changeFreq: 'weekly' as const },
  { path: '/contact', priority: 0.8, changeFreq: 'yearly' as const },
];

export default function sitemap(): MetadataRoute.Sitemap {
  return routes.map(({ path, priority, changeFreq }) => ({
    url: `${BASE_URL}${path}`,
    lastModified: new Date(),
    changeFrequency: changeFreq,
    priority,
  }));
}
