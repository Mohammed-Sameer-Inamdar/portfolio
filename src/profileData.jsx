import {
    FaReact, FaNodeJs, FaJava,
    FaGitAlt, FaLinux, FaDatabase,
    FaAws,
    FaFeatherAlt
} from "react-icons/fa";
import {
    SiTailwindcss, SiJavascript, SiHtml5, SiCss3,
    SiMongodb, SiMysql, SiPostgresql, SiPhp, SiCodeigniter,
    SiBootstrap,
    SiJsfiddle,
    SiExpress,
    SiAndroidstudio,
    SiGradle,
    SiSpringboot,
    SiTypescript,
    SiLaravel,
    SiFirebase
} from "react-icons/si";
import { TbApi } from "react-icons/tb";
import { DiGoogleCloudPlatform, DiNetbeans, DiVisualstudio } from "react-icons/di";
import bestPerformer from "./assets/certificates/best_performer_award_IDS2025.pdf";
import invictus from "./assets/certificates/invictus-blde221019.pdf";
import ganitoodeepini from "./assets/certificates/ganitodipeeni-blde221019.pdf";

import hrSoftware from "./assets/certificates/hacker-rank-software_engineer250524.pdf";
import hrNode from "./assets/certificates/hacker-rank_nodejs_basic250528.pdf";
import udemyJSAdv from "./assets/certificates/javascrip-advance-udemy-230607.pdf";
import udemyJSFund from "./assets/certificates/javascript-fundamentals-udemy-230607.pdf";
import soloJava from "./assets/certificates/java-solo-learn-200813.pdf";
import soloSQL from "./assets/certificates/sql-solo-learn-200808.pdf";
import roomanJSD from "./assets/certificates/jsd-rooman-010820.pdf";


/* ===================
   Portfolio Data
   =================== */
const PortfolioData = {
    name: "Mohammed Sameer Inamdar",
    titles: ["Full Stack Developer", "React.js Developer", "Node.js Developer", "Java Developer", "Spring Boot Developer"],
    objective:
        "Full-Stack Developer with 5+ years of experience building scalable web applications and enterprise solutions using Java, Spring Boot, ReactJS, NodeJS, and modern web technologies. Passionate about solving complex problems, optimizing performance, and creating seamless user experiences. Recognized as Best Performer of the Year 2025 for delivering high-impact solutions and driving technical excellence.",
    resume: "https://drive.google.com/uc?export=download&id=1tg3Vv0QWtrt0gu_E3MkuTFzDDQBkvwYt",
    github: "https://github.com/Mohammed-Sameer-Inamdar",
    linkedin: "http://linkedin.com/in/mohammed-sameer-inamdar-031121174",
    portfolio: "https://mohammed-sameer-inamdar.github.io/portfolio/",
    contact: {
        email: "mohammedsameerinamdar@gmail.com",
        phone: "+91 81474 17110"
    },
    default: {
        title: "React / Node.js Full Stack Developer",
        primarySkills: [
            "React",
            "Node.js",
            "Express.js",
            "MySQL"
        ]
    },

    react: {
        title: "React / Node.js Full Stack Developer",
        primarySkills: [
            "React",
            "Node.js",
            "Express.js",
            "MySQL"
        ]
    },

    java: {
        title: "Java Full Stack Developer",
        primarySkills: [
            "Java",
            "Spring Boot",
            "React",
            "MySQL"
        ]
    },
    coreSkills: [
        { name: "Java", proficiency: 95, icon: <FaJava className="text-red-500" /> },
        { name: "React", proficiency: 90, icon: <FaReact className="text-cyan-400" /> },
        { name: "Spring Boot", proficiency: 90, icon: <SiSpringboot className="text-green-500" /> },
        { name: "JavaScript", proficiency: 90, icon: <SiJavascript className="text-yellow-400" /> },
        { name: "Node.js", proficiency: 90, icon: <FaNodeJs className="text-green-500" /> },
        { name: "Tailwind CSS", proficiency: 75, icon: <SiTailwindcss className="text-sky-400" /> },
        { name: "TypeScript", proficiency: 75, icon: <SiTypescript className="text-blue-500" /> },
    ],
    skills: [
        {
            title: "Languages",
            items: [
                { icon: <FaJava className="text-red-500" />, name: "Java" },
                { icon: <SiJavascript className="text-yellow-400" />, name: "JavaScript" },
                { icon: <SiTypescript className="text-blue-500" />, name: "TypeScript" },
                { icon: <SiHtml5 className="text-orange-500" />, name: "HTML" },
                { icon: <SiCss3 className="text-blue-500" />, name: "CSS" },
                { icon: <SiMysql className="text-purple-400" />, name: "SQL" },
                { icon: <SiPhp className="text-indigo-400" />, name: "PHP" },
            ]
        },
        {
            title: "Frameworks & Libraries",
            items: [
                { icon: <SiSpringboot className="text-green-500" />, name: "Spring Boot" },
                { icon: <SiJsfiddle className="text-green-500" />, name: "JSF" },
                { icon: <FaNodeJs className="text-green-500" />, name: "NodeJS" },
                { icon: <SiExpress className="text-green-500" />, name: "ExpressJS" },
                { icon: <FaReact className="text-cyan-400" />, name: "React" },
                { icon: <FaReact className="text-cyan-400" />, name: "React Redux" },
                { icon: <SiTailwindcss className="text-sky-400" />, name: "Tailwind CSS" },
                { icon: <SiBootstrap className="text-purple-400" />, name: "Bootstrap" },
                { icon: <TbApi className="text-green-500" />, name: "API Integration" },
                { icon: <FaReact className="text-cyan-400" />, name: "React Native" },
                { icon: <SiCodeigniter className="text-red-400" />, name: "CodeIgniter" },
                { icon: <SiLaravel className="text-red-400" />, name: "Laravel" }
            ]
        },
        {
            title: "Databases",
            items: [
                { icon: <SiMongodb className="text-green-500" />, name: "MongoDB" },
                { icon: <SiMysql className="text-blue-500" />, name: "MySQL" },
            ]
        },
        {
            title: "Tools",
            items: [
                { icon: <DiVisualstudio className="text-orange-500" />, name: "VSCode" },
                { icon: <SiAndroidstudio className="text-green-500" />, name: "Android Studio" },
                { icon: <DiNetbeans className="text-blue-500" />, name: "NetBeans" },
                { icon: <FaGitAlt className="text-orange-500" />, name: "Git" },
                { icon: <FaLinux className="text-yellow-500" />, name: "Linux" },
                { icon: <SiGradle className="text-yellow-500" />, name: "Gradle" },
                { icon: <FaFeatherAlt className="text-yellow-500" />, name: "Maven" }
            ]
        },
        {
            title: "Cloud Services",
            items: [
                { icon: <FaAws className="text-cyan-400" />, name: "AWS" },
                { icon: <DiGoogleCloudPlatform className="text-green-400" />, name: "Google Cloud Platform" },
                { icon: <SiFirebase className="text-red-500" />, name: "Firebase" }
            ]
        },
    ],
    certifications: [
        // 🔥 FEATURED
        {
            title: "Best Performer of the Year – 2025",
            issuer: "Indea Design Systems Pvt. Ltd Mangaluru",
            date: "2025",
            type: "award",
            featured: true,
            description: "Recognized for consistent performance, ownership, and impactful contributions as part of the engineering team.",
            pdf: bestPerformer
        },
        {
            title: "Invictus (Coding & Debugging)",
            issuer: "BLDEA College of Engineering and Technology Vijayapura",
            date: "April-2017",
            type: "award",
            description: "Awarded for strong debugging skills, logical thinking, and fast problem-solving.",
            pdf: invictus
        },
        {
            title: "Ganitoodeepi (Mathematics Event)",
            issuer: "BLDEA College of Engineering and Technology Vijayapura",
            date: "Feb 2016",
            type: "award",
            description: "Recognized for analytical thinking and mathematical problem-solving excellence.",
            pdf: ganitoodeepini
        },

        // 🎓 CERTIFICATIONS
        {
            title: "Software Engineer",
            issuer: "HackerRank",
            date: "May 2025",
            type: "certification",
            pdf: hrSoftware
        },
        {
            title: "Node.js (Basic)",
            issuer: "HackerRank",
            date: "May 2025",
            type: "certification",
            pdf: hrNode
        },
        {
            title: "Mighty JavaScript (Advanced)",
            issuer: "Udemy",
            date: "June 2023",
            type: "certification",
            pdf: udemyJSAdv
        },
        {
            title: "JavaScript Fundamentals",
            issuer: "Udemy",
            date: "June 2023",
            type: "certification",
            pdf: udemyJSFund
        },
        {
            title: "Java",
            issuer: "SoloLearn",
            date: "August 2020",
            type: "certification",
            pdf: soloJava
        },
        {
            title: "SQL",
            issuer: "SoloLearn",
            date: "August 2020",
            type: "certification",
            pdf: soloSQL
        },

        {
            title: "Junior Software Developer",
            issuer: "Rooman Technologies Bangalore",
            date: "August 2021",
            type: "training",
            description: "Completed hands-on training in Java, OOP concepts, and software development fundamentals.",
            pdf: roomanJSD
        }
    ],
    projects: [
        {
            title: "Repfabric CRM Integration",
            description: "I contributed to the development of the Repfabric project, a comprehensive customer relationship management (CRM) system. The primary objective of this project was to streamline sales processes, enhance customer interaction, and improve overall sales management efficiency.",
            github: null,
            demo: "https://repfabric.com",
            featured: true,
            type: "enterprise",
            techStack: ["React", "Node.js", "Express.js", "MongoDB", "AWS"],
            // metrics: { users: "500+", features: "150+", uptime: "99.9%" }
        },
        {
            title: "Hospitality Management System",
            description: "A comprehensive hospitality management system built using React, Node.js, Express.js, and MongoDB. Features user authentication, reservation management, billing, and analytics.",
            github: "https://github.com/Mohammed-Sameer-Inamdar/hospitality",
            demo: null,
            type: "fullstack",
            techStack: ["React", "Node.js", "Express.js", "MongoDB", "JWT"],
            // metrics: { rooms: "100+", bookings: "1000+" }
        },
        {
            title: "Dynamic Form Builder",
            description: "React-based drag-and-drop form creation tool allowing custom field types, sections, and real-time preview. Integrated with APIs for saving and retrieving form layouts.",
            github: "https://github.com/Mohammed-Sameer-Inamdar/dynamicForms",
            demo: null,
            type: "frontend",
            techStack: ["React", "Tailwind CSS", "Redux", "Drag-Drop API"],
            // metrics: { fields: "50+", templates: "20+" }
        },
        {
            title: "Social Media Platform",
            description: "A social media platform built using React, Node.js, Express.js, and MongoDB. Features user authentication, profile creation, real-time chat, and post sharing functionality.",
            github: "https://github.com/Mohammed-Sameer-Inamdar/social-medai",
            demo: null,
            type: "fullstack",
            techStack: ["React", "Node.js", "Express.js", "MongoDB", "Socket.io"],
            // metrics: { users: "100+", messages: "10k+" }
        },
        {
            title: "Task Management App",
            description: "React + RTK Query powered app for managing tasks with filters, sorting, authentication, and optimized performance using memoization techniques.",
            github: "https://github.com/Mohammed-Sameer-Inamdar/taskManager",
            demo: null,
            type: "frontend",
            techStack: ["React", "Redux Toolkit", "RTK Query", "Tailwind CSS"],
            // metrics: { tasks: "unlimited", performance: "Optimized" }
        },
        {
            title: "Portfolio Website",
            description: "Modern personal portfolio with responsive design, animations, and interactive UI built using React, Tailwind CSS, and Vite. Features multi-theme support.",
            github: "https://github.com/Mohammed-Sameer-Inamdar/portfolio",
            demo: "https://mohammed-sameer-inamdar.github.io/portfolio/",
            type: "frontend",
            techStack: ["React", "Tailwind CSS", "Vite", "React Icons"],
            // metrics: { lighthouse: "95+", accessibility: "A11y" }
        },
        {
            title: "Know Your Rights",
            description: "CodeIgniter powered app for understanding and complying with legal documents, ensuring compliance with laws and regulations. Providing references to relevant laws.",
            github: "https://github.com/Mohammed-Sameer-Inamdar/know_your_rights",
            demo: null,
            type: "backend",
            techStack: ["CodeIgniter", "PHP", "MySQL", "Bootstrap"],
            // metrics: { laws: "500+", documents: "1000+" }
        }
    ],
    journey: [
        // EXPERIENCE
        {
            type: "experience",
            title: "Senior Software Developer",
            company: "Indea Design Systems Pvt. Ltd Mangalore",
            period: "May 2021 – May 2026",
            description:
                "Collaborated on RepfabricCRM, Hospitality Management System and Project Management Systems projects using Java, Spring Boot, JSF, Kafka, React, and NodeJS. Focused on performance optimization, API integration, and scalable solutions."
        },
        {
            type: "experience",
            title: "Junior Software Developer (Trainee)",
            company: "Rooman Technologies",
            period: "Feb 2020 – Apr 2020",
            description:
                "Completed comprehensive Java training focusing on OOP, Data Structures, and software development best practices."
        },

        // EDUCATION
        {
            type: "education",
            title: "B.E. (ECE)",
            company: "B.L.D.E.A.’s V.P. Dr. P.G. Halakatti College of Engineering and Technology, VTU University",
            period: "2015 – 2019",
            description: "Graduated with 7.65 CGPA"
        },
        {
            type: "education",
            title: "PUC (Science)",
            company: "Secab P.U. College for Boys Vijayapur",
            period: "2013 – 2015",
            description: "Scored 87.33% (Distinction)"
        },
        {
            type: "education",
            title: "SSLC (10th)",
            company: "Iqra Urdu High School Vijayapur",
            period: "2012 – 2013",
            description: "Scored 78.88%"
        }
    ]
};

export default PortfolioData;
