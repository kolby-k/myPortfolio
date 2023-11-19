import { code, businessLink } from "../assets/images";
import {
    car,
    contact,
    css,
    estate,
    express,
    git,
    github,
    html,
    javascript,
    linkedin,
    mongodb,
    motion,
    mui,
    nextjs,
    nodejs,
    pricewise,
    react,
    redux,
    sass,
    snapgram,
    summiz,
    tailwindcss,
    threads,
    python,
    sql
} from "../assets/icons";

export const skills = [
    {
        imageUrl: html,
        name: "HTML",
        type: "Frontend",
    },
    {
        imageUrl: css,
        name: "CSS",
        type: "Frontend",
    },
    {
        imageUrl: javascript,
        name: "JavaScript",
        type: "Frontend, Backend",
    },
    {
        imageUrl: python,
        name: "Python",
        type: "Backend",
    },
    {
        imageUrl: git,
        name: "Git",
        type: "Version Control",
    },
    {
        imageUrl: github,
        name: "GitHub",
        type: "Version Control",
    },
    {
        imageUrl: nodejs,
        name: "Node.js",
        type: "Backend",
    },
    {
        imageUrl: nextjs,
        name: "Next.js",
        type: "Frontend",
    },
    {
        imageUrl: react,
        name: "React",
        type: "Frontend",
    },
    {
        imageUrl: redux,
        name: "Redux",
        type: "State Management",
    },
    {
        imageUrl: tailwindcss,
        name: "Tailwind CSS",
        type: "Frontend",
    },
    {
        imageUrl: mui,
        name: "Material-UI",
        type: "Frontend",
    },
    {
        imageUrl: express,
        name: "Express",
        type: "Backend",
    },
    {
        imageUrl: mongodb,
        name: "MongoDB",
        type: "Database",
    },
    {
        imageUrl: sql,
        name: "SQL",
        type: "Database",
    },
];

export const experiences = [
    {
        title: "Data Analyst",
        company_name: "Business Link",
        icon: businessLink,
        iconBg: "#a2d2ff",
        date: "May 2021 - Present",
        points: [
            "Oversee our CRM and handle data sources, including integration with various third-party APIs such as Zoom, Eventbrite, MailChimp, Zoho, and RingCentral.",
            "Write backend scripts to handle incoming data, applying business logic and preprocessing of data before storing records in the CRM.",    
            "Manage our RDBMS relying on SQL to streamline data cleaning and enhance business KPI reporting.",           
            "Developed several interactive business dashboards for various departments, using tools like Tableau and Zoho Analytics."
        ],
    },
    {
        title: "Web Developer",
        company_name: "Kolby Klassen",
        icon: code,
        iconBg: "#b7e4c7",
        date: "Jan 2023 - Present",
        points: [
            "Completed the Full Stack Developer career path on Codecademy.",
            "Coded a personal portfolio website, kolby.fun, using skills such as html, css, JavaScript, tailwind, three.js, node.js, and react.",
            "Developing a workout tracker application, a personal side project."
        ],
    },
];

export const socialLinks = [
    {
        name: 'Contact',
        iconUrl: contact,
        link: '/contact',
    },
    {
        name: 'GitHub',
        iconUrl: github,
        link: 'https://github.com/YourGitHubUsername',
    },
    {
        name: 'LinkedIn',
        iconUrl: linkedin,
        link: 'https://www.linkedin.com/in/YourLinkedInUsername',
    }
];

export const projects = [
    {
        iconUrl: estate,
        theme: 'btn-back-red',
        name: 'Exercise Database',
        description: "Developed a web application for searching and navigating a 1,300+ exercise database, featuring instructions, muscle group details, equipment needs, and instructional GIFs. Inspired by a YouTube video, this project focused on integrating APIs in a React application.",
        link: 'https://evolution-fitness-app.netlify.app/',
    },
    {
        iconUrl: snapgram,
        theme: 'btn-back-pink',
        name: 'Animal Adoption website',
        description: "This project was part of the Full Stack career path, with a focus on utilizing React's routing to enhance the client experience. It aimed at enabling client-side rendering for faster loading times.",
        link: 'https://adoption-pet-project-oct2023.netlify.app/',
    }
];