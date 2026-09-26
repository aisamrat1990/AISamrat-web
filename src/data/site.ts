// Single source of truth for site copy and company facts.
// Facts come from assets/company_profile.md. Service page copy is drafted from
// the old site and infographic wording, and needs sign-off from AI Samrat before launch.

export type IconName = 'code' | 'cloud' | 'flow' | 'shield' | 'server';

export const company = {
  name: 'AI Samrat',
  legalName: 'AI Samrat Private Limited',
  tagline: 'Innovate. Transform. Grow.',
  subTagline: 'Technology for a smarter business future.',
  email: 'info@aisamrat.com',
  url: 'https://www.aisamrat.com',
  cin: 'U82990KA2024PTC187727',
  gst: '29AAFCF9036R1ZR',
  founded: 2024,
  address: {
    lines: [
      'Suite 5CE, 5th Floor, Neil Tower',
      'Neil Rao Towers, Plot 117, Road 3',
      'EPIP Phase 1, Whitefield',
      'Bengaluru 560066, Karnataka',
    ],
    street: 'Suite 5CE, 5th Floor, Neil Tower, Neil Rao Towers, Plot 117, Road 3, EPIP Phase 1, Whitefield',
    locality: 'Bengaluru',
    region: 'Karnataka',
    postalCode: '560066',
    country: 'IN',
    mapUrl:
      'https://www.google.com/maps/search/?api=1&query=Neil+Rao+Towers+EPIP+Phase+1+Whitefield+Bengaluru+560066',
  },
  // Profile URLs not collected yet. Leave empty to hide them in the footer.
  social: [] as { label: string; href: string }[],
};

export const nav = [
  { label: 'Services', href: '/services/' },
  { label: 'About', href: '/about/' },
  { label: 'Careers', href: '/careers/' },
];

export interface Service {
  slug: string;
  index: string;
  icon: IconName;
  title: string;
  titleTone: string;
  summary: string;
  intro: string;
  chips: string[];
  includes: { title: string; text: string }[];
}

export const services: Service[] = [
  {
    slug: 'software-development',
    index: '01',
    icon: 'code',
    title: 'Software Development',
    titleTone: 'Built around how you work.',
    summary: 'Reliable, scalable software built around how your business actually runs.',
    intro:
      'We deliver reliable and scalable software tailored to your business requirements, helping your organisation improve operations and reach its digital goals.',
    chips: ['Software Development', 'Enterprise Solutions'],
    includes: [
      { title: 'Custom applications', text: 'Web and business applications designed around your processes, not the other way round.' },
      { title: 'Enterprise solutions', text: 'Systems that support core operations across teams and departments.' },
      { title: 'Integrations', text: 'Connecting the tools you already use so information moves without manual re-entry.' },
      { title: 'Ongoing enhancement', text: 'Improvements, fixes and updates after launch, as your requirements change.' },
    ],
  },
  {
    slug: 'cloud-it-infrastructure',
    index: '02',
    icon: 'cloud',
    title: 'Cloud & IT Infrastructure',
    titleTone: 'Room to grow, built in.',
    summary: 'Cloud and infrastructure set up for performance, security and room to grow.',
    intro:
      'We provide cloud and IT infrastructure solutions designed to improve scalability, performance, security and operational efficiency.',
    chips: ['Cloud Solutions', 'IT Infrastructure'],
    includes: [
      { title: 'Cloud solutions', text: 'Planning, moving to and running cloud environments that fit your workload and budget.' },
      { title: 'IT infrastructure', text: 'Servers, storage and networks set up for reliability from day one.' },
      { title: 'Performance & scale', text: 'Capacity that grows with the business instead of holding it back.' },
      { title: 'Secure by default', text: 'Infrastructure configured with protection in place from the start.' },
    ],
  },
  {
    slug: 'digital-transformation-consulting',
    index: '03',
    icon: 'flow',
    title: 'Digital Transformation & Consulting',
    titleTone: 'The right technology, chosen with you.',
    summary: 'The right technology and leaner processes, chosen with you.',
    intro:
      'We help businesses adopt the right technology, optimise processes and drive sustainable digital transformation through practical, results-oriented solutions.',
    chips: ['IT Consulting', 'Process Optimisation'],
    includes: [
      { title: 'IT consulting', text: 'Clear advice on technology choices, aligned with your business goals.' },
      { title: 'Business process optimisation', text: 'Finding and removing manual steps, delays and duplication in how work gets done.' },
      { title: 'Transformation roadmaps', text: 'A phased plan from where you are today to where you want to be.' },
    ],
  },
  {
    slug: 'cybersecurity',
    index: '04',
    icon: 'shield',
    title: 'Cybersecurity',
    titleTone: 'Protect what the business runs on.',
    summary: 'Protection for the systems and data your business depends on.',
    intro:
      'We help organisations protect their business systems and information, and keep day-to-day operations secure, efficient and technology-driven.',
    chips: ['Cybersecurity Solutions'],
    includes: [
      { title: 'Security assessment', text: 'Understanding where your systems and data are exposed, and what to fix first.' },
      { title: 'Protection & hardening', text: 'Configuring systems, access and networks to reduce risk.' },
      { title: 'Secure operations', text: 'Security built into everyday IT, not added as an afterthought.' },
    ],
  },
  {
    slug: 'managed-it-support',
    index: '05',
    icon: 'server',
    title: 'Managed IT & Support',
    titleTone: 'Your IT, looked after.',
    summary: 'We run, monitor and secure your IT so your team can focus on the work.',
    intro:
      'We manage, monitor and secure your IT infrastructure to keep systems running smoothly, reduce downtime and support your business growth.',
    chips: ['Managed IT', 'Business Support'],
    includes: [
      { title: 'Managed IT services', text: 'Day-to-day running of your IT environment by a team that knows it.' },
      { title: 'Monitoring', text: 'Keeping watch on systems so issues are caught early.' },
      { title: 'Business support services', text: 'Dependable support for the technology your teams use every day.' },
    ],
  },
];

export const advantages = [
  { num: '01', title: 'Business-focused technology', text: 'Practical solutions that address real operational needs.' },
  { num: '02', title: 'Scalable by design', text: 'Built to support evolving requirements and long-term growth.' },
  { num: '03', title: 'Operational efficiency', text: 'Technology and process optimisation, together.' },
  { num: '04', title: 'Innovation that ships', text: 'New approaches, applied where they help you adapt and grow.' },
];

export const values = [
  'Innovation',
  'Integrity',
  'Customer focus',
  'Quality',
  'Professionalism',
  'Teamwork',
  'Continuous improvement',
  'Business excellence',
];

export const mission =
  'To deliver practical, scalable and technology-driven solutions that create measurable value for businesses and organisations.';
export const vision =
  'To be a trusted technology partner for businesses of all sizes, through innovative solutions, professional services and sustainable digital transformation.';

export const leader = {
  name: 'DVS Prathap Babu',
  role: 'Managing Director',
  quoteLead: '“The future belongs to organisations that combine innovation, technology and the right ideas',
  quoteTone: 'to create meaningful business impact.”',
  body:
    'At AI Samrat, our aim is to build technology that helps businesses evolve, operate smarter and grow sustainably, combining AI, product development, digital solutions and emerging technology to solve real business problems.',
};

// Add roles here as they open. An empty list shows the "send your CV" message.
export const openRoles: { title: string; type: string; location: string; summary: string }[] = [];
