import { code, businessLink } from "../assets/images";
import {
    car,
    contact,
    css,
    dog,
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
    summiz,
    tailwindcss,
    threads,
    python,
    sql,
    weight
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
        title: "Web Developer",
        company_name: "Kolby Klassen",
        icon: code,
        iconBg: "#b7e4c7",
        date: "Jan 2023 - Present",
        points: [
            "Completed the <a style='color: initial; font-weight: 600'; target='_blank' href='https://www.codecademy.com/learn/paths/full-stack-engineer-career-path'>Full Stack Developer</a> career path on Codecademy.",
            "Coded a personal portfolio website, kolby.fun, using HTML, CSS, JavaScript, React, Node.js, Tailwind, Three.js, and Git.",
            "Currently developing a workout tracker application, as personal side project."
        ],
    },
    {
        title: "Data Analyst",
        company_name: "Business Link",
        icon: businessLink,
        iconBg: "#a2d2ff",
        date: "May 2021 - Present",
        points: [
            "Administer and oversee the operation of our organization's CRM system (Zoho CRM), ensuring seamless integration with various data sources. This involves primarily utilizing third-party APIs for connectivity with applications such as Zoom, Eventbrite, MailChimp, Zoho, and RingCentral.",
            "Write backend scripts dedicated to processing incoming data, incorporating business logic, and executing pre-processing routines prior to the storage of records in the CRM.",
            "Efficiently manage our Relational Database Management System (RDBMS), utilizing SQL to optimize data cleaning processes and augment the reporting of key business performance indicators (KPIs).",
            "Successfully developed a series of interactive business dashboards for multiple departments, employing advanced tools like Tableau and Zoho Analytics to facilitate data visualization and decision-making.",
            "Completed a comprehensive six-month career path and earned a certificate in the <a style='color: initial; font-weight: 600'; target='_blank' href='https://www.codecademy.com/learn/paths/data-analyst'>Data Scientist: Analytics Specialist </a> course from Codecademy.",
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
        iconUrl: weight,
        theme: 'btn-back-red',
        name: 'Exercise Database',
        description: "Developed a web application for searching and navigating a 1,300+ exercise database, featuring instructions, muscle group details, equipment needs, and instructional GIFs. Inspired by a YouTube video, this project focused on integrating APIs in a React application.",
        link: 'https://evolution-fitness-app.netlify.app/',
    },
    {
        iconUrl: dog,
        theme: 'btn-back-pink',
        name: 'Animal Adoption website',
        description: "This project was part of the Full Stack career path, with a focus on utilizing React's routing to enhance the client experience. It aimed at enabling client-side rendering for faster loading times.",
        link: 'https://adoption-pet-project-oct2023.netlify.app/',
    }
];