import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
// import { LuGraduationCap } from "react-icons/lu";
import easyrent from "@/public/easyRent.png";
import youtubeS from "@/public/youtubeS.png";
import projectBhasha from "@/public/projectBhasha.png";
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
    title: "Full-Stack Developer",
    location: "Subspace",
    description:
      "I worked as a full-stack developer at Subspace, a startup that provides a platform for remote teams to collaborate and communicate. I worked on the frontend using React, Next.js, and Tailwind, and on the backend using Prisma and MongoDB.",
    icon: React.createElement(CgWorkAlt),
    date: "2024-2025",
  },
  // {
  //   title: "Full-Stack Developer",
  //   location: "INdia",
  //   description:
  //     "I'm now a full-stack developer working as a freelancer. My stack includes React, Next.js, TypeScript, Tailwind, Prisma and MongoDB. I'm open to full-time opportunities.",
  //   icon: React.createElement(FaReact),
  //   date: "2027 - present",
  // },
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
    title: "Project Bhasha",
    github:"https://github.com/Leskarx/projectBhasha",
    live:"https://github.com/Leskarx/projectBhasha",
    description:
      "An AI-powered website extracts text from images and PDFs, translating it into regional languages for accessibility.",
    tags: ["NLP", "Python", "openCV", "Node.js", "Express"],
    imageUrl: projectBhasha,
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
] as const;

export const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "Git",
  "Tailwind",
  "Prisma",
  "MongoDB",
  "Redux",
  "c++",
  "python",
  "Express",
  "java",
  "c",
  "Framer Motion",
] as const;
