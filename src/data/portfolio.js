import { FaGithub, FaLinkedin } from 'react-icons/fa';
import profileImg from '../assets/profile_picture.jpg';
import gamifyImg1 from '../assets/Gamify_screenshot1.jpg';
import gamifyImg2 from '../assets/Gamify_screenshot2.jpg';
import gamifyImg3 from '../assets/Gamify_screenshot3.jpg';
import ecommerceImg1 from '../assets/ecommerce_screenshot1.jpg';
import ecommerceImg2 from '../assets/ecommerce_screenshot2.jpg';
import ecommerceImg3 from '../assets/ecommerce_screenshot3.jpg';
import ci1 from '../assets/PDF/CI1.pdf';
import ci2 from '../assets/PDF/CI2.pdf';

export const heroData = {
  name: "Mehdi Khouja",
  title: "IT Student & Full Stack Developer",
  description: "Dedicated IT student and Full Stack Developer with a passion for building efficient, scalable applications. Specializing in React and Flutter, I combine strong algorithmic problem-solving skills with a drive for continuous learning to deliver high-quality digital solutions.",
  image: profileImg,
  socialLinks: [
    { icon: FaGithub, url: "https://github.com/mehdikhouja-coder", label: "GitHub" },
    { icon: FaLinkedin, url: "https://www.linkedin.com/m/in/mehdi-khouja-405813394/", label: "LinkedIn" },
  ]
};

export const aboutData = {
  bio: "Currently pursuing a degree in Information Technology at ISET Nabeul, I have built a strong foundation in software development and algorithmic logic. My technical expertise spans web and mobile development, with a focus on creating robust and user-centric applications. I am a quick learner who thrives in challenging environments, leveraging my multilingual abilities in Arabic, French, English, and German to collaborate effectively in diverse teams.",
  skills: [
    "Python", "JavaScript", "C/C++", "Dart", "React", "Flutter", "Git", "SQL", "Arduino", "Django"
  ]
};

export const experienceData = [
  {
    id: 1,
    role: "Robotics Competition Participant",
    company: "INSAT Tunisie (Tunirobots)",
    period: "August 2019",
    description: "Collaborated in a team to create a robot assisting visually impaired individuals. Secured 2nd place by demonstrating creativity, effective teamwork, and practical problem-solving skills."
  },
  {
    id: 2,
    role: "Arduino Trainer",
    company: "ISET Nabeul",
    period: "July 2018",
    description: "Conducted a 2-day training session for 10 schoolchildren, introducing them to the world of programming and electronics with Arduino in a fun and practical way."
  }
];

export const projectsData = [
  {
    id: 1,
    title: "Gamify",
    description: "A gamification platform that engages users through interactive challenges and rewards.",
    techStack: ["React", "Node.js", "MongoDB"],
    repoUrl: "https://github.com",
    demoUrl: "https://demo.com",
    images: [gamifyImg1, gamifyImg2, gamifyImg3]
  },
  {
    id: 2,
    title: "E-commerce App",
    description: "A full-featured e-commerce application allowing users to browse products, manage carts, and process secure payments.",
    techStack: ["React", "Tailwind", "Chart.js"],
    repoUrl: "https://github.com",
    demoUrl: "https://demo.com",
    images: [ecommerceImg1, ecommerceImg2, ecommerceImg3]
  }
];

export const certificationsData = [
  {
    id: 1,
    title: "Flutter & Dart - The Complete Guide [2025 Edition]",
    issuer: "Udemy",
    date: "Nov 26, 2025",
    file: ci1,
    description: "A comprehensive course covering Flutter and Dart, taught by Maximilian Schwarzmüller. Length: 30 total hours."
  },
  {
    id: 2,
    title: "React - The Complete Guide 2025 (incl. Next.js, Redux)",
    issuer: "Udemy",
    date: "Nov 28, 2025",
    file: ci2,
    description: "Instructors: Academind by Maximilian Schwarzmüller. Length: 71.5 total hours."
  }
];
