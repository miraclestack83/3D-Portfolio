import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  starbucks,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
  threejs,
  kickstarter,
  virtus,
  envytheme,
  verity,
  soflow,
  naturalworld,
  worldwide,
  loopexchange,
  kodeclub,
  arcore,
  delivery,
  wallpaper,
  assn,
  lidya,
  vegas,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "Mobile Developer",
    icon: mobile,
  },
  {
    title: "Blockchain Developer",
    icon: backend,
  },
  {
    title: "Application Developer",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "Senior Software Engineer",
    company_name: "Rimini Street",
    icon: backend, // generic backend icon
    iconBg: "#383E56",
    date: "Feb 2023 – Apr 2025",
    points: [
      "Architected scalable backend systems using Python/Django, improving SaaS platform response times by 40% and achieving 99.9% uptime during 3x user growth.",
      "Implemented CI/CD pipelines and cloud infrastructure with Docker, GitHub Actions, and AWS (EC2, RDS, Lambda), reducing MTTR by 50%.",
      "Integrated AI automation tools into enterprise support workflows, cutting resolution time by 35% and reducing operational costs by 40%.",
      "Collaborated with React.js and Flutter teams to enhance frontend/backend integration, increasing engagement by 28%.",
      "Mentored 5+ junior developers, reducing onboarding time by 25% and improving team productivity.",
      "Authored API documentation and operational runbooks, accelerating engineer onboarding by 30%.",
      "Standardized backend service templates and CI/CD rules, cutting post-deployment errors by 20%.",
      "Presented quarterly internal tech talks and process improvement workshops, enhancing team collaboration and knowledge sharing.",
    ],
  },
  {
    title: "Senior Full-Stack Developer",
    company_name: "Codingscape",
    icon: web, // generic web icon
    iconBg: "#383E56",
    date: "May 2018 – Dec 2022",
    points: [
      "Led backend development for enterprise SaaS systems with Python/Django, maintaining 99.9% uptime and cutting feature release time by 40%.",
      "Migrated eCommerce mobile app from React Native to Flutter, improving load times by 20% and reducing crash rates by 35%.",
      "Built admin dashboards (React.js) for logistics operations, boosting data access and cutting manual reporting time by 50%.",
      "Added AI/ML features for recommendations and automation, increasing engagement by 2.5x and improving retention by 15%.",
      "Championed Agile delivery with clean code practices, reducing bugs by 25% per release.",
      "Maintained project documentation, API specs, and onboarding guides, reducing new hire ramp-up time by 40%.",
      "Led monthly dev training on testing, DevOps, and system architecture.",
    ],
  },
  {
    title: "Back-End Developer",
    company_name: "IBM",
    icon: jobit, // generic job icon
    iconBg: "#383E56",
    date: "Mar 2014 – Sep 2017",
    points: [
      "Developed RESTful APIs and backend services using Java/Spring Boot and Django on IBM Bluemix.",
      "Integrated IBM Watson AI (Discovery, NLC), improving automation and reducing manual effort by 30%.",
      "Optimized data models in PostgreSQL/MySQL, cutting query latency by ~40%.",
      "Promoted modular design and CI/CD adoption, improving release stability and reducing errors by 35%.",
    ],
  },
  {
    title: "Full-Stack Developer",
    company_name: "Pact-One Solutions, LLC",
    icon: creator, // generic creator icon
    iconBg: "#383E56",
    date: "Feb 2009 – Dec 2013",
    points: [
      "Developed dental management platforms using ASP.NET/C# and React.js for scheduling, records, and billing.",
      "Redesigned UI/UX, resulting in a 22% increase in user engagement and 10% faster task completion.",
      "Led legacy refactoring efforts, improving stability and reducing maintenance effort by 25%.",
      "Delivered HIPAA-compliant features, aligning technical delivery with client workflows.",
    ],
  },
  {
    title: "Junior Web Developer",
    company_name: "NetEffect",
    icon: mobile, // generic mobile icon
    iconBg: "#383E56",
    date: "Aug 2007 – Nov 2008",
    points: [
      "Built real estate client portal with MERN stack, boosting performance and engagement by 20%.",
      "Designed optimized REST APIs, improving data retrieval speeds by 15%.",
      "Supported release stability through debugging, code reviews, and collaboration.",
    ],
  },
];

const projects = [
  {
    name: "Verity",
    description: "Drone Service Website using Three.js & WebGL.",
    tags: [
      {
        name: "React",
        color: "blue-text-gradient",
      },
      {
        name: "Mongodb",
        color: "green-text-gradient",
      },
      {
        name: "WebGL",
        color: "pink-text-gradient",
      },
    ],
    image: verity,
    source_code_link: "https://github.com/miraclestack83",
    url: "https://veritystudios.com/",
  },
  {
    name: "SoFlow Ecommerce",
    description: "Entdecke deine neue Mobilität mit SoFlow.",
    tags: [
      {
        name: "Vue.js",
        color: "blue-text-gradient",
      },
      {
        name: "Wordpress",
        color: "green-text-gradient",
      },
      {
        name: "MySQL",
        color: "pink-text-gradient",
      },
    ],
    image: soflow,
    source_code_link: "https://github.com/",
    url: "https://www.soflow.com/",
  },
  {
    name: "Natural World eCommerce",
    description: "Ecommerce Website based on Laravel",
    tags: [
      {
        name: "PHP",
        color: "blue-text-gradient",
      },
      {
        name: "Laravel",
        color: "green-text-gradient",
      },
      {
        name: "eCommerce",
        color: "pink-text-gradient",
      },
    ],
    image: naturalworld,
    source_code_link: "https://github.com/miraclestack83",
    url: "http://naturalworld.sg/",
  },
  {
    name: "World Wide Steel Building",
    description: "Steel building Website using Three.js & WebGL.",
    tags: [
      {
        name: "Three.js",
        color: "blue-text-gradient",
      },
      {
        name: "WebGL",
        color: "green-text-gradient",
      },
      {
        name: "CMS",
        color: "pink-text-gradient",
      },
    ],
    image: worldwide,
    source_code_link: "https://github.com/miraclestack83",
    url: "https://www.worldwidesteelbuildings.com/3d-building-designer/",
  },
  {
    name: "Loop Exchange on Blockchain",
    description:
      "Crypto currency Trading & Exchange website based on Blockchain & Crypto",
    tags: [
      {
        name: "React",
        color: "blue-text-gradient",
      },
      {
        name: "Blockchain",
        color: "green-text-gradient",
      },
      {
        name: "Cryptocurrency",
        color: "pink-text-gradient",
      },
    ],
    image: loopexchange,
    source_code_link: "https://github.com/miraclestack83",
    url: "https://loopexchange.art/",
  },
  {
    name: "KODE SPORTS CLUB NEW CAIRO",
    description:
      "3D multi-disciplinary sports club, making its debut at Swan Lake Residences based on Metaverse & 3D & VR,",
    tags: [
      {
        name: "Unity3D",
        color: "blue-text-gradient",
      },
      {
        name: "Blockchain",
        color: "green-text-gradient",
      },
      {
        name: "Metaverse",
        color: "pink-text-gradient",
      },
    ],
    image: kodeclub,
    source_code_link: "https://github.com/miraclestack83",
    url: "https://kodeclubs.com/",
  },
  {
    name: "AR Measure App",
    description:
      "AR measure - Automatic augmented reality measuring app based on ARCore & Android native java",
    tags: [
      {
        name: "Java",
        color: "blue-text-gradient",
      },
      {
        name: "ARCore",
        color: "green-text-gradient",
      },
      {
        name: "Android",
        color: "pink-text-gradient",
      },
    ],
    image: arcore,
    source_code_link: "https://github.com/miraclestack83",
    url: "https://play.google.com/store/apps/details?id=ml.kari.armeasure",
  },
  {
    name: "Delivery App",
    description: "Food Delivery App using React Native & Python/Django",
    tags: [
      {
        name: "React Native",
        color: "blue-text-gradient",
      },
      {
        name: "Python",
        color: "green-text-gradient",
      },
      {
        name: "Django",
        color: "pink-text-gradient",
      },
    ],
    image: delivery,
    source_code_link: "https://github.com/miraclestack83",
    url: "https://play.google.com/store/apps/details?id=com.neemo.restaurante",
  },
  {
    name: "Image Live Wallpaper",
    description: "Live Wallpaper Image app with circle on Java",
    tags: [
      {
        name: "java",
        color: "blue-text-gradient",
      },
      {
        name: "Android",
        color: "green-text-gradient",
      },
      {
        name: "AI",
        color: "pink-text-gradient",
      },
    ],
    image: wallpaper,
    source_code_link: "https://github.com/miraclestack83",
    url: "https://play.google.com/store/apps/details?id=com.approids.myimagewallpaper",
  },
  {
    name: "All Star Seating Navigation",
    description:
      "All Star Seating Navigation is an all in one stadium and event ticketing platform that integrates seating navigation and social media all in one. We strive to make your next event experience, a premium one.",
    tags: [
      {
        name: "Flutter",
        color: "blue-text-gradient",
      },
      {
        name: "Firebase",
        color: "green-text-gradient",
      },
      {
        name: "Stripe",
        color: "pink-text-gradient",
      },
    ],
    image: assn,
    source_code_link: "https://github.com/miraclestack83",
    url: "https://play.google.com/store/apps/details?id=com.assn.seat.app",
  },
  {
    name: "Lidya: Gold Cryptocurrency",
    description: "Cryptocurrency Wallet App",
    tags: [
      {
        name: "Flutter",
        color: "blue-text-gradient",
      },
      {
        name: "Blockchain",
        color: "green-text-gradient",
      },
      {
        name: "Crypto Wallet",
        color: "pink-text-gradient",
      },
    ],
    image: lidya,
    source_code_link: "https://github.com/miraclestack83",
    url: "https://play.google.com/store/apps/details?id=com.lidya.cryptogold.app/",
  },
  {
    name: "Vegas Slot",
    description:
      "Vegas slots is an application that combines the functions of an LTC cryptocurrency wallet and varius.cc website support",
    tags: [
      {
        name: "Flutter",
        color: "blue-text-gradient",
      },
      {
        name: "Blockchain",
        color: "green-text-gradient",
      },
      {
        name: "Casino",
        color: "pink-text-gradient",
      },
    ],
    image: vegas,
    source_code_link: "https://github.com/miraclestack83",
    url: "https://play.google.com/store/apps/details?id=com.vegas.slots.app",
  },
];

const education = [
  {
    degree: "Bachelor of Computer Science",
    school: "Nevada State University | Henderson, NV",
    icon: web, // Use a generic icon
    iconBg: "#383E56",
    date: "2010 – 2014",
    points: [
      "Focused on software engineering, algorithms, and web development.",
      "Graduated with Honors.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but he proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Appalope LLC",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like he does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After he optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

export {
  services,
  technologies,
  experiences,
  testimonials,
  projects,
  education,
};
