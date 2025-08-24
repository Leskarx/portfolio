import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { FaTrophy } from "react-icons/fa";
// import { LuGraduationCap } from "react-icons/lu";
import easyrent from "@/public/easyRent.png";
import youtubeS from "@/public/youtubeS.png";
import projectBhasha from "@/public/projectBhasha.png";
import ByteClean from "@/public/ByteClean.png";
// import wordanalyticsImg from "@/public/wordanalytics.png";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  // {
  //   title: "",
  //   location: "Dhemaji",
  //   description:
  //     "bhai ki likhu najanu",
  //   icon: React.createElement(LuGraduationCap),
  //   date: "2019",
  // },
  {
    title: "Hackathon Finalist",
    location: "IBM National Hackathon, Bangalore",
    description:
      "Participated as a finalist in the IBM National Hackathon, held from 6 August to 8 August 2025 in Bangalore. Collaborated with a team to develop an innovative solution, showcasing problem-solving, coding, and teamwork skills under a tight deadline.",
    icon: React.createElement(FaTrophy),
    date: "Aug 2025",
  },
  
  {
    title: "Software Development Intern",
    location: "DeeGee Techlytics Solutions Pvt. Ltd. (Online, India)",
    description:
      "I worked as a software development intern at DeeGee Techlytics Solutions Pvt. Ltd., contributing to requirement analysis, coordination, and quality assurance. I worked on CRM software and the WhatsApp Cloud integration module, performing feature enhancements, end-to-end testing, and bug reporting in an Agile environment.",
    icon: React.createElement(CgWorkAlt),
    date: "Jun 2025 - Aug 2025",
  },
  
  {
    title: "Full-Stack Developer Intern",
    location: "Subspace",
    description:
      "Completed a full-stack development internship at Subspace, a startup providing a collaboration platform for remote teams. Contributed to the frontend with React, Next.js, and Tailwind, and supported backend development using Prisma and MongoDB.",
    icon: React.createElement(CgWorkAlt),
    date: "2024-2025",
  }
  
  
  
] as const;

export const projectsData = [
  {
    title: "Easy Rent",
    github:"https://github.com/Leskarx/Easyrent",
    live:"https://easyrentt.vercel.app/",
    description:
      "Easy Rent is a comprehensive platform for finding and managing rental properties, including PG accommodations and rooms.",
    tags: [ "Next.js", "MongoDB", "Tailwind", "Prisma"],
    imageUrl: easyrent,
  },

  {
    title: "ByteClean",
    github: "https://github.com/Leskarx/ByteClean-Backend",  // Add your GitHub repo link
    live: "https://github.com/Leskarx/ByteClean-Backend",    // Add a live demo link if applicable
    description: 
      "ByteClean - Smart file organizer that finds duplicates, auto-categorizes files, and cleans up storage using SHA-256 hashing and customizable rules.",
    tags: [ 
      "Java", 
      "Spring Boot",  
      "Drools",
      "SHA-256",
      "File System API"
    ],
    imageUrl: ByteClean,  // Add your project image path
},
  {
    title: "Youtube Summarizer",
    github:"https://github.com/Leskarx/YouTube-Video-Summarizer",
    live:"https://youtube-summarizer-leskar.vercel.app/",
    description:
      "An AI-powered website summarizes YouTube videos from links, allowing users to log in, generate summaries, and view history.",
    tags: ["N8N", "React.js", "Node.js", "Tailwind", "Node.js"],
    imageUrl: youtubeS,
  },
  {
    title: "Project Bhasha",
    github:"https://github.com/Leskarx/projectBhasha",
    live:"https://github.com/Leskarx/projectBhasha",
    description:
      "An AI-powered website extracts text from images and PDFs, translating it into regional languages for accessibility.",
    tags: ["NLP", "Python", "openCV", "Node.js", "Express"],
    imageUrl: projectBhasha,
  },
 
] as const;

export const skillsData = [
  "java",
  "Spring-Boot",
  "JavaScript",
  "React.js",
  "Node.js",
  "Next.js",
  // "Git",
  "Tailwind",
  "Prisma",
  "MongoDB",
  "Redux",
  "c++",
  // "python",
  "Express.js",
  "c",
  "Framer Motion",
] as const;
