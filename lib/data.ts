import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import easyrent from "@/public/easyRent.png";
import corpcommentImg from "@/public/corpcomment.png";
import rmtdevImg from "@/public/rmtdev.png";
import wordanalyticsImg from "@/public/wordanalytics.png";

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
  {
    title: "High school",
    location: "Dhemaji",
    description:
      "bhai ki likhu najanu",
    icon: React.createElement(LuGraduationCap),
    date: "2019",
  },
  {
    title: "Front-End Developer",
    location: "USA",
    description:
      "I worked as a front-end developer -sapna hai",
    icon: React.createElement(CgWorkAlt),
    date: "2026-2027",
  },
  {
    title: "Full-Stack Developer",
    location: "INdia",
    description:
      "I'm now a full-stack developer working as a freelancer. My stack includes React, Next.js, TypeScript, Tailwind, Prisma and MongoDB. I'm open to full-time opportunities.",
    icon: React.createElement(FaReact),
    date: "2027 - present",
  },
] as const;

export const projectsData = [
  {
    title: "Easy Rent",
    github:"https://github.com/Leskarx/Easyrent",
    live:"https://www.theease.rent/",
    description:
      "Easy Rent is a comprehensive platform for finding and managing rental properties, including PG accommodations and rooms.",
    tags: [ "Next.js", "MongoDB", "Tailwind", "Prisma"],
    imageUrl: easyrent,
  },
  {
    title: "rmtDev",
    github:"https://github.com/Leskarx/Easyrent",
    live:"https://www.theease.rent/",
    description:
      "Job board for remote developer jobs. I was the front-end developer. It has features like filtering, sorting and pagination.",
    tags: ["React", "TypeScript", "Next.js", "Tailwind", "Redux"],
    imageUrl: rmtdevImg,
  },
  {
    title: "Word Analytics",
    github:"https://github.com/Leskarx/Easyrent",
    live:"https://www.theease.rent/",
    description:
      "A public web app for quick analytics on text. It shows word count, character count and social media post limits.",
    tags: ["React", "Next.js", "SQL", "Tailwind", "Framer"],
    imageUrl: wordanalyticsImg,
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
