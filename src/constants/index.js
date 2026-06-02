import { assetPath } from '../utils/assetPath.js';

export const navLinks = [
  {
    id: 1,
    name: 'About',
    href: '#about',
  },
  {
    id: 2,
    name: 'Work',
    href: '#projects',
  },
];

const techTags = {
  angular: { id: 'angular', name: 'Angular', label: 'Angular' },
  css: { id: 'css', name: 'CSS', label: 'CSS' },
  html: { id: 'html', name: 'HTML', label: 'HTML' },
  javascript: { id: 'javascript', name: 'JavaScript', label: 'JS' },
  kommo: { id: 'kommo', name: 'Kommo', label: 'Kommo' },
  mongodb: { id: 'mongodb', name: 'MongoDB', label: 'MongoDB' },
  mysql: { id: 'mysql', name: 'MySQL', label: 'MySQL' },
  python: { id: 'python', name: 'Python', label: 'Python' },
  react: { id: 'react', name: 'React.js', label: 'React' },
  redis: { id: 'redis', name: 'Redis', label: 'Redis' },
  supabase: { id: 'supabase', name: 'Supabase', label: 'Supabase' },
  tailwind: { id: 'tailwind', name: 'TailwindCSS', label: 'Tailwind' },
  venom: { id: 'venom', name: 'Venom', label: 'Venom' },
  whatsapp: { id: 'whatsapp', name: 'WhatsApp API', label: 'WA' },
};

export const myProjects = [
  {
    title: 'Kommo Campaign Automation',
    desc:
      'Message sending through Kommo with bot setup, campaign maintenance, and delivery tracking for different clients.',
    subdesc:
      'I also created database tables to register campaigns across a base of more than 100,000 contacts, organizing data for control and analysis.',
    href: '',
    texture: assetPath('assets/kommo.png'),
    spotlight: assetPath('assets/spotlight1.png'),
    tags: [techTags.kommo, techTags.javascript, techTags.mysql],
  },
  {
    title: 'CRM MVP with WhatsApp and AI',
    desc:
      'Built a CRM MVP with the official WhatsApp API, an AI-powered bot, a JavaScript API, and a frontend built with React.',
    subdesc:
      'The project combined MySQL, MongoDB, and Redis to separate relational data, flexible records, and high-speed information.',
    href: '',
    texture: assetPath('assets/uaibots.png'),
    spotlight: assetPath('assets/spotlight2.png'),
    tags: [techTags.javascript, techTags.whatsapp, techTags.mongodb, techTags.redis, techTags.mysql],
  },
  {
    title: 'Hair Salon Schedule Manager',
    desc:
      'Scheduling management system with WhatsApp integration through Venom and an AI bot to support customer service and appointment flows.',
    subdesc:
      'The solution was developed in JavaScript with SQL Server as the database, focused on daily operations and schedule organization.',
    href: '',
    texture: assetPath('assets/hair.png'),
    spotlight: assetPath('assets/spotlight3.png'),
    tags: [techTags.javascript, techTags.venom, techTags.whatsapp, techTags.mysql],
  },
  {
    title: 'Academic Event Management',
    desc:
      'Team-based organization and development of a website to manage academic events for Computer Engineering.',
    subdesc:
      'The project used Supabase and React, while I also contributed to event planning and management.',
    href: '',
    texture: assetPath('assets/jornada.jpeg'),
    spotlight: assetPath('assets/spotlight4.png'),
    tags: [techTags.supabase, techTags.react, techTags.tailwind],
  },
  {
    title: 'Minas Textil Customizer',
    desc:
      'API and frontend for an AI-powered customizer for T-shirts and acrylic lamps, integrated with the Minas Textil e-commerce platform.',
    subdesc:
      'The API was developed in Python, the frontend in Angular, and the database in MySQL, connecting product customization to the sales flow.',
    href: '',
    texture: assetPath('assets/minastextil.png'),
    spotlight: assetPath('assets/spotlight5.png'),
    tags: [techTags.python, techTags.angular, techTags.mysql],
  },
  {
    title: 'NASA Space Apps 2025',
    desc:
      'Participation in the NASA Space Apps 2025 hackathon, building an API for temperature, humidity, and rainfall prediction analysis.',
    subdesc:
      'The solution used decades of collected data and probability calculations, with a Python API and a frontend built with a Lovable-style stack.',
    href: '',
    texture: assetPath('assets/nasa.jpeg'),
    spotlight: assetPath('assets/spotlight1.png'),
    tags: [techTags.python, techTags.react],
  },
  {
    title: 'Programming Competitions',
    desc:
      'Participation in programming competitions, including SBC 2025 in Uberlandia and IFTM Coxinhas++ 2025.',
    subdesc:
      'The competitions involved problem solving, algorithmic reasoning, and Java development under time constraints.',
    href: '',
    texture: assetPath('assets/coxinha.jpeg'),
    spotlight: assetPath('assets/spotlight2.png'),
    tags: [{ id: 'java', name: 'Java', label: 'JAVA' }],
  },
  {
    title: 'Technology Events',
    desc:
      'Participation in events such as DevFest 2025 and Collab Inovacao 2026, both held in Uberlandia.',
    subdesc:
      'Experiences focused on community, networking, technical talks, and following trends in the software development ecosystem.',
    href: '',
    texture: assetPath('assets/devfest.jpg'),
    spotlight: assetPath('assets/spotlight3.png'),
    tags: [],
  },
  {
    title: 'Photographer Website',
    desc:
      'Study website for a photographer, built with plain HTML, CSS, and JavaScript.',
    subdesc:
      'The project focused on page structure, visual organization, responsiveness, and simple frontend interactions.',
    href: '',
    texture: assetPath('assets/fotografa.PNG'),
    spotlight: assetPath('assets/spotlight4.png'),
    tags: [techTags.html, techTags.css, techTags.javascript],
  },
];

export const calculateSizes = (isSmall, isMobile, isTablet) => {
  return {
    deskScale: isSmall ? 0.05 : isMobile ? 0.06 : 0.065,
    deskPosition: isMobile ? [0.5, -4.5, 0] : [0.25, -5.5, 0],
    cube1Position: isSmall ? [-5, 7, 0] : isMobile ? [-10, 10, 0] : isTablet ? [-12, 10, 0] : [-16, 3.5, -30],
    cube2Position: isSmall ? [3, 4, 0] : isMobile ? [5, 4, 0] : isTablet ? [5, 4, 0] : [11, 1, -6],
    cube3Position: isSmall ? [-5, -10, -10] : isMobile ? [-9, -10, -10] : isTablet ? [-11, -7, -10] : [-15, -8, -15],
    cube4Position: isSmall ? [4, -5, 0] : isMobile ? [5, -5, 0] : isTablet ? [5, -5, 0] : [7, -3.5, 4],
  };
};
