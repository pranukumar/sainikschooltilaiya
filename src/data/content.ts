export const SCHOOL = {
  name: 'Sainik School Tilaiya',
  nameHindi: 'सैनिक स्कूल तिलैया',
  tagline: 'Forward Ever',
  established: '16 September 1963',
  principal: 'Col S Mohanrao R',
  address: 'P.O. Tilaiya Dam, District Koderma – 825413, Jharkhand',
  phone: '+91 6534 235048',
  phoneMobile: '+91 9470962052',
  email: 'sainikschooltilaiya@gmail.com',
  website: 'sainikschooltilaiya.org',
  affiliation: 'CBSE',
  managedBy: 'Sainik Schools Society, Ministry of Defence, Government of India',
  cadets: '841+',
  houses: 12,
  acres: 250,
  ndaSelections: '1800+',
  seatsClassVI: 118,
  seatsClassIX: 20,
  girlsAdmittedSince: '2021–22',
};

export const HOUSES = [
  { name: 'Magadh', colour: '#1a237e', light: '#e8eaf6' },
  { name: 'Gautam', colour: '#1b5e20', light: '#e8f5e9' },
  { name: 'Aryabhatta', colour: '#b71c1c', light: '#ffebee' },
  { name: 'Vikram', colour: '#e65100', light: '#fff3e0' },
  { name: 'Patliputra', colour: '#4a148c', light: '#f3e5f5' },
  { name: 'Vaishali', colour: '#006064', light: '#e0f7fa' },
  { name: 'Kunwar Singh', colour: '#37474f', light: '#eceff1' },
  { name: 'Mithila', colour: '#880e4f', light: '#fce4ec' },
  { name: 'Maurya', colour: '#33691e', light: '#f1f8e9' },
  { name: 'Ashoka', colour: '#bf360c', light: '#fbe9e7' },
  { name: 'Nalanda', colour: '#1565c0', light: '#e3f2fd' },
  { name: 'Rajgir', colour: '#6a1b9a', light: '#f3e5f5' },
];

export const SPORTS = [
  'Athletics', 'Football', 'Hockey', 'Cricket', 'Basketball',
  'Volleyball', 'Horse Riding', 'Lawn Tennis', 'Badminton',
  'Boxing', 'Cross-Country', 'Canoeing', 'Mountaineering', 'Obstacle Course',
];

export const NAV_LINKS = [
  { label: 'Home', href: '/' },
  {
    label: 'About',
    href: '/about',
    children: [
      { label: 'History', href: '/about/history' },
      { label: 'Vision & Mission', href: '/about/vision-mission' },
      { label: "Principal's Message", href: '/about/principal-message' },
      { label: 'Administration', href: '/about/administration' },
      { label: 'Campus', href: '/about/campus' },
    ],
  },
  {
    label: 'Academics',
    href: '/academics',
    children: [
      { label: 'Curriculum', href: '/academics/curriculum' },
      { label: 'Departments', href: '/academics/departments' },
      { label: 'Examination', href: '/academics/examination' },
      { label: 'e-Library', href: '/academics/e-library' },
      { label: 'Results', href: '/academics/results' },
    ],
  },
  {
    label: 'Admissions',
    href: '/admissions',
    children: [
      { label: 'Process', href: '/admissions/process' },
      { label: 'Eligibility', href: '/admissions/eligibility' },
      { label: 'AISSEE', href: '/admissions/aissee' },
      { label: 'Fee Structure', href: '/admissions/fee-structure' },
      { label: 'Scholarships', href: '/admissions/scholarships' },
      { label: 'Apply Now', href: '/admissions/apply-now' },
    ],
  },
  {
    label: 'Student Life',
    href: '/student-life',
    children: [
      { label: 'Houses', href: '/student-life/houses' },
      { label: 'Sports', href: '/student-life/sports' },
      { label: 'NCC', href: '/student-life/ncc' },
      { label: 'Activities', href: '/student-life/activities' },
      { label: 'Infrastructure', href: '/student-life/infrastructure' },
    ],
  },
  { label: 'NDA & Defence', href: '/nda' },
  {
    label: 'Alumni',
    href: '/alumni',
    children: [
      { label: 'Notable Alumni', href: '/alumni/notable-alumni' },
      { label: 'Register', href: '/alumni/register' },
      { label: 'Events', href: '/alumni/events' },
      { label: 'Contributions', href: '/alumni/contributions' },
    ],
  },
  { label: 'Gallery', href: '/gallery' },
  { label: 'News', href: '/news' },
  { label: 'Notices', href: '/notices' },
  { label: 'Contact', href: '/contact' },
];

export const STATS = [
  { label: 'Est. Year', value: '1963', suffix: '' },
  { label: 'NDA Selections', value: '1800', suffix: '+' },
  { label: 'Total Cadets', value: '841', suffix: '+' },
  { label: 'Houses', value: '12', suffix: '' },
  { label: 'Acres Campus', value: '250', suffix: '+' },
];

export const ACHIEVEMENTS = [
  {
    title: 'Republic Day Parade 2026',
    description: 'Cdt Vaishnavi Anand became the first girl cadet from SST to march at the Republic Day Parade.',
    date: '26 Jan 2026',
    icon: 'flag',
    badge: 'Historic',
  },
  {
    title: '63rd Founder\'s Day',
    description: 'Grand celebrations marking 63 years of excellence, discipline, and service to the nation.',
    date: '16 Sep 2025',
    icon: 'star',
    badge: 'Milestone',
  },
  {
    title: 'Air Marshal Visit',
    description: 'Air Marshal AK Bharti, DCSAS — a distinguished alumnus — visited the school in 2025.',
    date: '2025',
    icon: 'medal',
    badge: 'Alumni',
  },
  {
    title: 'English Language Lab',
    description: 'Inauguration of the English Language Lab, funded by Govt. of Jharkhand and school alumni.',
    date: '2025',
    icon: 'graduation',
    badge: 'Infrastructure',
  },
];

export const NEWS_TICKER_ITEMS = [
  'AISSEE 2026 Exam: 18 January 2026 | Apply via NTA Portal',
  'Admissions Open: Class VI (118 seats) & Class IX (20 seats) for Session 2026–27',
  'Cdt Vaishnavi Anand — First SST girl cadet at Republic Day Parade 2026',
  '63rd Founder\'s Day celebrated on 16 September 2025',
  '85th LBA Meeting held in December 2025',
  'English Language Lab inaugurated — funded by Alumni Batch 1974–75 to 1982',
  'Air Marshal AK Bharti (Alumnus) visits SST in 2025',
  'Girls admitted at SST since Academic Session 2021–22',
];

export const NOTABLE_ALUMNI = [
  {
    name: 'Air Marshal AK Bharti',
    designation: 'DCSAS, Indian Air Force',
    sector: 'Defence',
  },
  {
    name: 'Shri CK Anil',
    designation: 'IAS, Principal Secretary, Bihar',
    sector: 'Civil Services',
  },
];

export const EXTERNAL_LINKS = {
  ntaAissee: 'https://exams.nta.nic.in/sainik-school-society',
  sainikSchoolsSociety: 'https://sainikschool.ncog.gov.in',
  nationalScholarshipPortal: 'https://scholarships.gov.in',
  cbse: 'https://www.cbse.gov.in',
  ndaOfficial: 'https://www.nda.nic.in',
};

export const PLEDGE = `As a Tilaiyan, I will be truthful, trustworthy, honest and forthright under all circumstances. I will not lie, cheat, mislead, or deceive anyone. When I commit a mistake I shall honestly own up of my own free will.`;
