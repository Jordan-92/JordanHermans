import aividens from "../assets/logo/aividens.jpeg";
import colruyt from "../assets/logo/colruyt.png";
import ecam from "../assets/logo/ECAM.webp";
import projectPortfolioWeb from "../assets/projects/portfolioWeb.png";
import projectLangchain from "../assets/projects/LangChain.png";
import projectMobile from "../assets/projects/musicApp.png";
import projectKubernetes from "../assets/projects/Kubernetes.png";
import projectRobot from "../assets/projects/robot.png";
import projectDatabase from "../assets/projects/database.webp";
import projectMachineLearning from "../assets/projects/machineLearning.jpeg";
import projectObjectOrientedGame from "../assets/projects/JurassicWorld.png";
import hobbyTravel from "../assets/hobbies/plane.png";
import hobbyPiano from "../assets/hobbies/piano.png";
import hobbykarate from "../assets/hobbies/karate.png";

export const NAV_LINKS = [
  { href: '#aboutme', key: 'aboutme', label: 'About Me' },
  { href: '#aboutme', key: 'aboutme', label: 'Skills' },
  { href: '#experience', key: 'experience', label: 'Experience' },
  { href: '#education', key: 'education', label: 'Education' },
  { href: '#projects', key: 'projects', label: 'Projects' },
];

export const ABOUT_ME = 
  `
    As a Belgian second-year master’s student in Industrial Engineering with a specialization in Computer Science, I am passionate about automation, logic, and science.
    Over the past two years, I have become increasingly interested in artificial intelligence, a field that I find both fascinating and challenging.
    Beyond technology, I highly value human connections and enjoy meeting new people, especially through traveling, one of my greatest passions.
    In addition to exploring new places, I have a deep love for music and sports.
  `;

export const HOBBIES = [
  {
    title: "Traveling",
    image: hobbyTravel.src,
    description: "Language stays",
    skills: ["Sociability", "Quick adaptation"],
  },
  {
    title: "Piano",
    image: hobbyPiano.src,
    description: "13 years at the academy",
    skills: ["Creativity", "Good stress management"],
  },
  {
    title: "Karate",
    image: hobbykarate.src,
    description: "Black belt",
    skills: ["Discipline", "Perseverance"],
  },
];

export const LANGUAGES = [
  {
    title: "French",
    level: "Native",
    languageStays: {},
  },
  {
    title: "English",
    level: "Advanced (C1- level)",
    languageStays: {"England": "1 month", "California": "2 months"}
 
  },
  {
    title: "Spanish",
    level: "Upper-Intermediate (B2- level)",
    languageStays: {},
  },
];

export const SKILLS = [
  {
    title: "Languages",
    skills: { "Python (OOP)": "★★★★★", "JavaScript, TypeScript": "★★★☆☆" },
  },
  {
    title: "Data Science",
    skills: { "Pandas, JupyterLab": "★★★★☆", "SQL & NoSQL": "★★★★☆" },
  },
  {
    title: "AI Frameworks",
    skills: { 
      "Scikit-Learn, TensorFlow, PyTorch": "★★★★☆", 
      "NeuralProphet, LangChain": "★★★☆☆" 
    },
  },
  {
    title: "DevOps",
    skills: { "Git & GitLab, YAML": "★★★★★", "Docker": "★★★☆☆" },
  },
  {
    title: "Testing",
    skills: { "PyTest": "★★★★★" },
  },
  {
    title: "Web Development",
    skills: { "React (Next.js), HTML5, CSS3": "★★★★☆" },
  },
  {
    title: "Productivity",
    skills: { "Microsoft Office": "★★★★☆" },
  },
];

export const EXPERIENCES = [
  {
    title:"Software & Automation Engineer Intern",
    image: aividens,
    year: "Oct. 2023 - To date (1 year 6 months+)",
    company: '<a href="https://aividens.com" target="_blank" rel="noopener noreferrer" class="hover:text-sky-300 hover:underline">AiVidens</a>',
    description:
      `
        Worked <span class="font-bold text-white/80">autonomously</span> on multiple projects,
        including automating client <span class="font-bold text-white/80">file cleaning</span>,
        restructuring <span class="font-bold text-white/80">database communications</span>, and
        automating old <span class="font-bold text-white/80">file transfers</span> from Amazon S3 Standard to Glacier.
        Also cleaned <span class="font-bold text-white/80">AI code</span>
        and implemented <span class="font-bold text-white/80">unit tests</span>.
      `,
    technologies: {
      GitLab: "https://about.gitlab.com/",
      PostgreSQL: "https://www.postgresql.org/",
      Docker: "https://www.docker.com/",
      Pandas: "https://pandas.pydata.org/",
      PyTorch: "https://pytorch.org/",
      NeuralProphet: "https://neuralprophet.com/",
      Pytest: "https://pytest.com/",
      OOP: "https://en.wikipedia.org/wiki/Object-oriented_programming",
    },
  },
  {
    title: "Data Science & Machine Learning Intern",
    image: aividens,
    year: "Apr. 2023 - May 2023 (2 months)",
    company: '<a href="https://aividens.com" target="_blank" rel="noopener noreferrer" class="hover:text-sky-300 hover:underline">AiVidens</a>',
    description:
      `
        Analyzed a new client's <span class="font-bold text-white/80">data</span>
        by <span class="font-bold text-white/80">cleaning</span> it,
        <span class="font-bold text-white/80">selecting key features</span>
        and applying <span class="font-bold text-white/80">machine learning</span>
        (scikit-learn and TensorFlow).
        Compiled the findings into a <span class="font-bold text-white/80">Jupyter Notebook</span>
        report with  tables and plots.
      `,
      technologies: {
        GitLab: "https://about.gitlab.com/",
        Pandas: "https://pandas.pydata.org/",
        "Scikit-learn": "https://scikit-learn.org/",
        TensorFlow: "https://www.tensorflow.org/",
        JupyterLab: "https://pytest.com/",
      },
  },
  {
    title: "Student Worker",
    image: colruyt,
    year: "Aug. 2019 - Dec. 2022 (3 years 5 months)",
    company: `<a href="https://colruytgroup.com" target="_blank" rel="noopener noreferrer" class="hover:underline hover:text-sky-300">Colruyt Group</a>`,
    description: 
    `
      Learned to <span class="font-bold text-white/80">adapt to all types of personalities</span>,
      both among my colleagues and with customers.
      Also gained experience <span class="font-bold text-white/80">working under pressure</span>.
    `,
    technologies: {},
  },
];

export const EDUCATION = [
  {
    company: "ECAM",
    image: ecam,
    year: "2019 - To date",
    description: `Industrial Engineering Institute`,
    certifications:
    [
      "Master’s degree (2 years): industrial engineering in computer science",
      "Bachelor’s degree (3 years): electrical engineering"
    ],
    technologies: [],
  },
];

export const PROJECTS = [
  {
    title: "AI Assistant",
    github:"https://github.com/Jordan-92/langchain_project",
    image: projectLangchain,
    description:
      "This project, built with LangChain, predicts pollution levels using historical pollution data and both past and future weather conditions. It also integrates OpenAI’s API to provide users with personalized environmental advice.",    
    technologies: ["Langchain", "Scikit-learn", "OpenAI", "Flask", "HTML"],
  },
  {
    title: "Movie Revenue Prediction Using Machine Learning",
    github:"https://github.com/Jordan-92/Movie-Revenue-Prediction",
    image: projectMachineLearning,
    description:
      "Developed a machine learning model to predict movie revenue based on various features like budget, runtime, genre, and director.",
    technologies: ["Python", "Scikit-learn", "TensorFlow", "Data Analysis"],
  },
  {
    title: "Object-Oriented Game Development",
    github:"https://github.com/Jordan-92/OOP-project",
    image: projectObjectOrientedGame,
    description:
      "Developed a video game using Python, following object-oriented programming principles. Implemented game mechanics and character interactions.",
    technologies: ["Python"],
  },
  {
    title: "Profile Website",
    github:"https://github.com/Jordan-92/Portfolio-Website",
    image: projectPortfolioWeb,
    description:
      "This web site! My personal portfolio created with Next.js and hosted on github",
    technologies: ["React", "Next.js", "Tailwind CSS"],
  },
  {
    title: "Music Website and Mobile Application",
    github:"https://github.com/Jordan-92/Music",
    image: projectMobile,
    description:
      "I developed an online music application, similar to Spotify but without streaming. It includes a web and mobile app, both sharing a common API and database. Users can register, create, modify, and delete their music library.",
    technologies: ["Flutter", "React", "Next.js", "Supabase"],
  },
  {
    title: "Distributed Traffic Management System",
    github:"https://github.com/Jordan-92/Distributed-Systems",
    image: projectKubernetes,
    description:
      "A real-time distributed system with three microservices: one for mapping, one for traffic data from cameras, and one for calculating the optimal route based on data from the other two services.",
    technologies: ["Docker", "Kubernetes"],
  },
  {
    title: "Database Management Experience",
    image: projectDatabase,
    description:
      "Gained experience interacting with both SQL and NoSQL databases through command-line operations. Performed tasks such as querying, updating, and managing data.",
    technologies: ["SQL", "NoSQL"],
  },
  {
    title: "Construction of a Robot",
    image: projectRobot,
    description:
      "Developed a robot from scratch for the national EUROBOT competition. This project included 3D design, mechanical construction, electronics and programming.",
    technologies: ["C++", "Arduino", "Fusion 360", "3D Printing"],
  },
];

export const CONTACT = {
  email: "195016@ecam.be",
};
