const ROLE_PROFILES = {
  default: {
    label: "Full Stack Developer",
    title: "Full Stack Developer",
    eyebrow: "FULL STACK DEVELOPER",
    primarySkills: ["Java", "React", "Node.js", "Express.js" ,"MySQL"],
    focus: ["React", "Node.js", "Java", "Express.js" ,"MySQL"],
  },
  react: {
    label: "React / Node.js Developer",
    title: "React / Node.js Full Stack Developer",
    eyebrow: "REACT + NODE.JS DEVELOPER",
    primarySkills: ["React", "Node.js", "Express.js", "MySQL"],
    focus: ["React", "JavaScript", "TypeScript", "Node.js", "NodeJS", "Express.js", "ExpressJS", "MySQL", "Redux", "React Redux", "Tailwind CSS", "API Integration", "JWT", "Socket.io"],
  },
  node: {
    label: "Node.js Developer",
    title: "Node.js / Express.js Full Stack Developer",
    eyebrow: "NODE.JS + EXPRESS DEVELOPER",
    primarySkills: ["Node.js", "Express.js", "React", "MySQL"],
    focus: ["Node.js", "NodeJS", "Express.js", "ExpressJS", "React", "JavaScript", "TypeScript", "MySQL", "MongoDB", "API Integration", "JWT", "Socket.io", "Redux", "React Redux", "Tailwind CSS"],
  },
  express: {
    label: "Express.js Developer",
    title: "React / Express.js Full Stack Developer",
    eyebrow: "EXPRESS.JS + REACT DEVELOPER",
    primarySkills: ["Express.js", "Node.js", "React", "MySQL"],
    focus: ["Express.js", "ExpressJS", "Node.js", "NodeJS", "React", "JavaScript", "TypeScript", "MySQL", "MongoDB", "API Integration", "JWT", "Socket.io", "Redux", "React Redux"],
  },
  java: {
    label: "Java Full Stack Developer",
    title: "Java Full Stack Developer",
    eyebrow: "JAVA + SPRING BOOT DEVELOPER",
    primarySkills: ["Java", "Spring Boot", "React", "MySQL"],
    focus: ["Java", "Spring Boot", "React", "JavaScript", "TypeScript", "MySQL", "SQL", "API Integration", "JSF", "Hibernate", "Maven", "Gradle", "AWS", "Google Cloud Platform"],
  },
  springboot: {
    label: "Spring Boot Developer",
    title: "Java / Spring Boot Full Stack Developer",
    eyebrow: "SPRING BOOT + JAVA DEVELOPER",
    primarySkills: ["Spring Boot", "Java", "React", "MySQL"],
    focus: ["Spring Boot", "Java", "React", "JavaScript", "TypeScript", "MySQL", "SQL", "API Integration", "JSF", "Maven", "Gradle", "AWS", "Google Cloud Platform"],
  },
};

export const getRoleProfile = (role) => {
  const normalized = String(role || "default").trim().toLowerCase();
  return ROLE_PROFILES[normalized] || ROLE_PROFILES.default;
};

export default ROLE_PROFILES;
