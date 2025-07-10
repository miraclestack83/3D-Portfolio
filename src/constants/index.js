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
  vegas
} from '../assets'

export const navLinks = [
  {
    id: 'about',
    title: 'About'
  },
  {
    id: 'work',
    title: 'Work'
  },
  {
    id: 'contact',
    title: 'Contact'
  }
]

const services = [
  {
    title: 'Web Developer',
    icon: web
  },
  {
    title: 'Mobile Developer',
    icon: mobile
  },
  {
    title: 'Blockchain Developer',
    icon: backend
  },
  {
    title: 'Application Developer',
    icon: creator
  }
]

const technologies = [
  {
    name: 'HTML 5',
    icon: html
  },
  {
    name: 'CSS 3',
    icon: css
  },
  {
    name: 'JavaScript',
    icon: javascript
  },
  {
    name: 'TypeScript',
    icon: typescript
  },
  {
    name: 'React JS',
    icon: reactjs
  },
  {
    name: 'Redux Toolkit',
    icon: redux
  },
  {
    name: 'Tailwind CSS',
    icon: tailwind
  },
  {
    name: 'Node JS',
    icon: nodejs
  },
  {
    name: 'MongoDB',
    icon: mongodb
  },
  {
    name: 'Three JS',
    icon: threejs
  },
  {
    name: 'git',
    icon: git
  },
  {
    name: 'figma',
    icon: figma
  },
  {
    name: 'docker',
    icon: docker
  }
]

const experiences = [
  {
    title: 'Mobile App Developer (Flutter, PHP/Laravel)',
    company_name: 'Appalope LLC,Peachtree City, GA',
    icon: starbucks,
    iconBg: '#383E56',
    date: 'August 2015 - November 2016',
    points: [
      'Built user interfaces and designing the methodology, structure and architecture for the projects complex data visualization requirements.',
      'Built and deployed hybrid apps using Flutter & Spring Boot',
      'Worked with data modelling for variable Ecommerce products in the medical field',
      'Implemented RESTful API services for creating, retrieving, updating, and deleting data in JSON.'
    ]
  },
  {
    title: 'Backend Developer (Django)',
    company_name: 'Appalope LLC,Peachtree City, GA',
    icon: starbucks,
    iconBg: '#383E56',
    date: 'January 2017 - March 2018',
    points: [
      'Led the end-to-end development process of multiple software applications and websites.',
      'Created Healthcare web applications to connect customers with the most trusted sources of generic and brand medicine suppliers in the world.',
      'Designed, implemented, documented, and successfully deployed warehouse integration code using Django, PostgreSQL.',
      'Structured several affiliate systems which used a centralized database.'
    ]
  },
  {
    title: 'Front End Developer',
    company_name: 'Appalope LLC,Peachtree City, GA',
    icon: starbucks,
    iconBg: '#383E56',
    date: 'April 2018 - December 2018',
    points: [
      'Created a merchant application for a multi-vendor platform with 200+ business customers to create, manage, and monitor deliveries using Angular / React',
      'Expanded features, refined code, and improved processes, producing smoother operations and enhancing user engagement',
      'Contributed to the in-house UI library to create reusable React / Angular components that saved countless hours of development time per month',
      'Published on AWS EC2 and configured Nginx, distributing user requests to several servers using a load balancer.'
    ]
  },

  {
    title: 'Full Stack Engineer (MERN, Flutter, React Native)',
    company_name: 'Virtus Ventures LLC, Wilmington, Delaware',
    icon: virtus,
    iconBg: '#383E56',
    date: 'December 2018 – October 2019',
    points: [
      'Designed, developed and deployed 5 full-stack web applications and mobile apps, generating revenue in excess of $2M annually',
      'Worked directly with stakeholders in Virtus Ventures to stay on budget and time manage while meeting client needs.',
      'Acted as the main point of contact responsible for React, Next.js, Node.js, React Native and Flutter with various clients.',
      'Improved SEO on several existing MERN stack products by improving the page speed.',
      'Gained experience with GCM and AWS Amplify while implementing a Real time chat feature and database.'
    ]
  },

  {
    title: 'Full Stack Engineer (MEAN, Django, React Native)',
    company_name: 'Envy Theme Middletown, Delaware',
    icon: envytheme,
    iconBg: '#383E56',
    date: 'November 2019 – December 2021',
    points: [
      'Developed, tested and deployed high-quality code for Envy Theme’s products using Angular & Node.js, developed mobile apps using React Native and Python/Django, and deployed to google & app store.',
      'Troubleshoot, debugged and optimized the code to improve performance and scalability, created and maintained technical documentation.',
      'Contributed to 400% increase in theme sales while simultaneously decreasing support requests thanks to bug free code and thorough documentation, resulting in a considerable increase in annual revenue'
    ]
  },
  {
    title: 'Senior Software Engineer (MERN STACK, React.js & Node.js)',
    company_name: 'kickstarter',
    icon: kickstarter,
    iconBg: '#383E56',
    date: 'December 2021 - Present',
    points: [
      'Developing and maintaining web applications using React.js and other related technologies.',
      'Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.',
      'Implementing responsive design and ensuring cross-browser compatibility.',
      'Participating in code reviews and providing constructive feedback to other developers.'
    ]
  }
]

const testimonials = [
  {
    testimonial:
      'I thought it was impossible to make a website as beautiful as our product, but he proved me wrong.',
    name: 'Sara Lee',
    designation: 'CFO',
    company: 'Appalope LLC',
    image: 'https://randomuser.me/api/portraits/women/4.jpg'
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like he does.",
    name: 'Chris Brown',
    designation: 'COO',
    company: 'DEF Corp',
    image: 'https://randomuser.me/api/portraits/men/5.jpg'
  },
  {
    testimonial:
      "After he optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: 'Lisa Wang',
    designation: 'CTO',
    company: '456 Enterprises',
    image: 'https://randomuser.me/api/portraits/women/6.jpg'
  }
]

const projects = [
  {
    name: 'Verity',
    description: 'Drone Service Website using Three.js & WebGL.',
    tags: [
      {
        name: 'React',
        color: 'blue-text-gradient'
      },
      {
        name: 'Mongodb',
        color: 'green-text-gradient'
      },
      {
        name: 'WebGL',
        color: 'pink-text-gradient'
      }
    ],
    image: verity,
    source_code_link: 'https://github.com/softwinner813',
    url: 'https://veritystudios.com/'
  },
  {
    name: 'SoFlow Ecommerce',
    description: 'Entdecke deine neue Mobilität mit SoFlow.',
    tags: [
      {
        name: 'Vue.js',
        color: 'blue-text-gradient'
      },
      {
        name: 'Wordpress',
        color: 'green-text-gradient'
      },
      {
        name: 'MySQL',
        color: 'pink-text-gradient'
      }
    ],
    image: soflow,
    source_code_link: 'https://github.com/',
    url: 'https://www.soflow.com/'
  },
  {
    name: 'Natural World eCommerce',
    description: 'Ecommerce Website based on Laravel',
    tags: [
      {
        name: 'PHP',
        color: 'blue-text-gradient'
      },
      {
        name: 'Laravel',
        color: 'green-text-gradient'
      },
      {
        name: 'eCommerce',
        color: 'pink-text-gradient'
      }
    ],
    image: naturalworld,
    source_code_link: 'https://github.com/softwinner813',
    url: 'http://naturalworld.sg/'
  },
  {
    name: 'World Wide Steel Building',
    description: 'Steel building Website using Three.js & WebGL.',
    tags: [
      {
        name: 'Three.js',
        color: 'blue-text-gradient'
      },
      {
        name: 'WebGL',
        color: 'green-text-gradient'
      },
      {
        name: 'CMS',
        color: 'pink-text-gradient'
      }
    ],
    image: worldwide,
    source_code_link: 'https://github.com/softwinner813',
    url: 'https://www.worldwidesteelbuildings.com/3d-building-designer/'
  },
  {
    name: 'Loop Exchange on Blockchain',
    description:
      'Crypto currency Trading & Exchange website based on Blockchain & Crypto',
    tags: [
      {
        name: 'React',
        color: 'blue-text-gradient'
      },
      {
        name: 'Blockchain',
        color: 'green-text-gradient'
      },
      {
        name: 'Cryptocurrency',
        color: 'pink-text-gradient'
      }
    ],
    image: loopexchange,
    source_code_link: 'https://github.com/softwinner813',
    url: 'https://loopexchange.art/'
  },
  {
    name: 'KODE SPORTS CLUB NEW CAIRO',
    description:
      '3D multi-disciplinary sports club, making its debut at Swan Lake Residences based on Metaverse & 3D & VR,',
    tags: [
      {
        name: 'Unity3D',
        color: 'blue-text-gradient'
      },
      {
        name: 'Blockchain',
        color: 'green-text-gradient'
      },
      {
        name: 'Metaverse',
        color: 'pink-text-gradient'
      }
    ],
    image: kodeclub,
    source_code_link: 'https://github.com/softwinner813',
    url: 'https://kodeclubs.com/'
  },
  {
    name: 'AR Measure App',
    description:
      'AR measure - Automatic augmented reality measuring app based on ARCore & Android native java',
    tags: [
      {
        name: 'Java',
        color: 'blue-text-gradient'
      },
      {
        name: 'ARCore',
        color: 'green-text-gradient'
      },
      {
        name: 'Android',
        color: 'pink-text-gradient'
      }
    ],
    image: arcore,
    source_code_link: 'https://github.com/softwinner813',
    url: 'https://play.google.com/store/apps/details?id=ml.kari.armeasure'
  },
  {
    name: 'Delivery App',
    description: 'Food Delivery App using React Native & Python/Django',
    tags: [
      {
        name: 'React Native',
        color: 'blue-text-gradient'
      },
      {
        name: 'Python',
        color: 'green-text-gradient'
      },
      {
        name: 'Django',
        color: 'pink-text-gradient'
      }
    ],
    image: delivery,
    source_code_link: 'https://github.com/softwinner813',
    url: 'https://play.google.com/store/apps/details?id=com.neemo.restaurante'
  },
  {
    name: 'Image Live Wallpaper',
    description: 'Live Wallpaper Image app with circle on Java',
    tags: [
      {
        name: 'java',
        color: 'blue-text-gradient'
      },
      {
        name: 'Android',
        color: 'green-text-gradient'
      },
      {
        name: 'AI',
        color: 'pink-text-gradient'
      }
    ],
    image: wallpaper,
    source_code_link: 'https://github.com/softwinner813',
    url: 'https://play.google.com/store/apps/details?id=com.approids.myimagewallpaper'
  },
  {
    name: 'All Star Seating Navigation',
    description:
      'All Star Seating Navigation is an all in one stadium and event ticketing platform that integrates seating navigation and social media all in one. We strive to make your next event experience, a premium one.',
    tags: [
      {
        name: 'Flutter',
        color: 'blue-text-gradient'
      },
      {
        name: 'Firebase',
        color: 'green-text-gradient'
      },
      {
        name: 'Stripe',
        color: 'pink-text-gradient'
      }
    ],
    image: assn,
    source_code_link: 'https://github.com/softwinner813',
    url: 'https://play.google.com/store/apps/details?id=com.assn.seat.app'
  },
  {
    name: 'Lidya: Gold Cryptocurrency',
    description: 'Cryptocurrency Wallet App',
    tags: [
      {
        name: 'Flutter',
        color: 'blue-text-gradient'
      },
      {
        name: 'Blockchain',
        color: 'green-text-gradient'
      },
      {
        name: 'Crypto Wallet',
        color: 'pink-text-gradient'
      }
    ],
    image: lidya,
    source_code_link: 'https://github.com/softwinner813',
    url: 'https://play.google.com/store/apps/details?id=com.lidya.cryptogold.app/'
  },
  {
    name: 'Vegas Slot',
    description:
      'Vegas slots is an application that combines the functions of an LTC cryptocurrency wallet and varius.cc website support',
    tags: [
      {
        name: 'Flutter',
        color: 'blue-text-gradient'
      },
      {
        name: 'Blockchain',
        color: 'green-text-gradient'
      },
      {
        name: 'Casino',
        color: 'pink-text-gradient'
      }
    ],
    image: vegas,
    source_code_link: 'https://github.com/softwinner813',
    url: 'https://play.google.com/store/apps/details?id=com.vegas.slots.app'
  }
]

export { services, technologies, experiences, testimonials, projects }
