import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  html,
  css,
  reactjs,
  git,
  titan,
  prodigy,
  psg,
  vir,
  editor,
  phoenix,
  threejs,
  c,
  cpp,
  python,
  java,
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
    title: "React Native Developer",
    icon: mobile,
  },
  {
    title: "AI/ML enthusiast",
    icon: backend,
  },
  {
    title: "Poster Designer",
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
    name: "React JS",
    icon: reactjs,
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
    name: "c",
    icon: c,
  },
  {
    name: "cpp",
    icon: cpp,
  },
  {
    name: "Python",
    icon: python,
  },
  {
    name: "java",
    icon: java,
  },

];

const experiences = [
  {
    title: "Full Stack Developer",
    company_name: "Titan",
    icon: titan,
    iconBg: "#383E56",
    date: "May 2023 - June 2023",
    points: [
      "Skills: Node.js · Cascading Style Sheets (CSS) · HTML · Java · React.js",  
    ],
  },
  {
    title: "Web Developer",
    company_name: "Prodigy Infotech",
    icon: prodigy,
    iconBg: "#E6DEDD",
    date: "Dec 2023 - Dec 2023",
    points: [
      "Skills: JavaScript · Application Programming Interfaces (API) · Cascading Style Sheets (CSS) · HTML",
    ],
  },
  {
    title: "Placement Representative",
    company_name: "PSG College Of Technology",
    icon: psg,
    iconBg: "#383E56",
    date: "May 2022 - Present",
    points: [
    ],
  },
  
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "Virtual Memory Simulator",
    description:
      "this is simple virtual memory simulator built using python with tkinter to understand the concepts of virtual memory and memory allocation.",
    tags: [
      {
        name: "python",
        color: "blue-text-gradient",
      },
      {
        name: "UI",
        color: "green-text-gradient",
      },
      {
        name: "tkinter",
        color: "pink-text-gradient",
      },
    ],
    image: vir,
    source_code_link: "https://github.com/Manish210103/Virtual-Memory-Sim",
  },
  {
    name: "Phoenix",
    description:
      "Developed a web application called 'Phoenix' where users can connect with each other, share their thoughts, and interact with messages known as 'tweets'.",
    tags: [
      {
        name: "js",
        color: "blue-text-gradient",
      },
      {
        name: "php",
        color: "green-text-gradient",
      },
      {
        name: "sql",
        color: "pink-text-gradient",
      },
      {
        name: "css",
        color: "blue-text-gradient",
      },
    ],
    image: phoenix,
    source_code_link: "https://github.com/Manish210103/Phoenix",
  },
  {
    name: "SnapEdit",
    description:
      "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
    tags: [
      {
        name: "java",
        color: "blue-text-gradient",
      },
      {
        name: "fxml",
        color: "green-text-gradient",
      },
    ],
    image: editor,
    source_code_link: "https://github.com/",
  },
];

export { services, technologies, experiences, testimonials, projects };
