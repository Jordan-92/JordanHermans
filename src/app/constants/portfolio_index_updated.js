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
  { href: "#aboutme", key: "aboutme", label: "About Me" },
  { href: "#skills", key: "skills", label: "Skills" },
  { href: "#experience", key: "experience", label: "Experience" },
  { href: "#education", key: "education", label: "Education" },
  { href: "#projects", key: "projects", label: "Projects" },
];

export const ABOUT_ME = {
  paragraph: [
    `
      I am a Data Scientist based in Brussels, with a Master's degree in Industrial Engineering
      (Computer Science) from ECAM, where I graduated with Distinction in January 2026.
      At AiVidens, I gained hands-on experience with Python, SQL, data pipelines, and machine
      learning, while learning to translate business needs into clear, useful indicators.
    `,
    `
      For my master's thesis, I developed KPIs used by marketing and available to clients,
      and used PCA and K-Means to group approximately 1,700 customers into five behavioural
      profiles. More recently, I analysed motorcycle trade patterns, compared forecasting
      and anomaly detection methods, and built an LLM assistant to investigate flagged
      observations. I am currently open to Data Scientist opportunities.
    `,
  ],
};

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
    level: "C1",
    languageStays: { England: "1 month", California: "2 months" },
  },
  {
    title: "Spanish",
    level: "B2",
    languageStays: {},
  },
];

export const SKILLS = [
  {
    title: "Data & Analytics",
    skills: ["Python", "SQL", "PostgreSQL", "Pandas", "NumPy"],
  },
  {
    title: "Modelling & Machine Learning",
    skills: [
      "Statistics",
      "Forecasting",
      "Clustering",
      "Scikit-learn",
      "TensorFlow",
      "PyTorch",
    ],
  },
  {
    title: "Data Engineering & Tools",
    skills: ["Pandera", "Pytest", "Docker", "Git/GitLab", "Codex"],
  },
];

export const EXPERIENCES = [
  {
    title: "Independent Travel",
    image: hobbyTravel.src,
    year: "Feb. 2026 - Aug. 2026 (7 months)",
    company: "Career break",
    description: "Independent travel after completing my master's degree.",
    tasks: [],
    technologies: {},
  },
  {
    title: "Data Science Intern (Master's Thesis)",
    image: aividens,
    year: "Aug. 2025 - Jan. 2026 (6 months)",
    company:
      '<a href="https://aividens.com" target="_blank" rel="noopener noreferrer" class="hover:text-sky-300 hover:underline">AiVidens</a>',
    description: `
      Studied how payment reminders and collection actions affect payer behaviour,
      with the aim of improving collection strategies through data analysis.
    `,
    tasks: [
      "Developed KPIs now used by marketing in sales discussions and available to clients to guide collection decisions.",
      "Built a validated Python (Pandas)/SQL pipeline using only historical payment data.",
      "Applied PCA and K-Means (scikit-learn) to group approximately 1,700 customers into five behavioural profiles.",
      "Worked with non-technical marketing colleagues to translate business needs into clear indicators and explain statistical results in plain language.",
    ],
    technologies: {
      Python: "https://www.python.org/",
      Pandas: "https://pandas.pydata.org/",
      PostgreSQL: "https://www.postgresql.org/",
      "Scikit-learn": "https://scikit-learn.org/",
      Pandera: "https://pandera.readthedocs.io/",
    },
  },
  {
    title: "Software & Automation Engineer Intern",
    image: aividens,
    year: "Oct. 2023 - Jul. 2025 (1 year 10 months)",
    company:
      '<a href="https://aividens.com" target="_blank" rel="noopener noreferrer" class="hover:text-sky-300 hover:underline">AiVidens</a>',
    description: `
      Worked part-time alongside my studies, automating client data cleaning and
      database access, and improving the reliability of machine-learning code
      through unit tests with pytest.
    `,
    tasks: [],
    technologies: {
      Python: "https://www.python.org/",
      PostgreSQL: "https://www.postgresql.org/",
      Pandas: "https://pandas.pydata.org/",
      Pytest: "https://docs.pytest.org/",
      GitLab: "https://about.gitlab.com/",
    },
  },
  {
    title: "Data Science & Machine Learning Intern",
    image: aividens,
    year: "Apr. 2023 - May 2023 (2 months)",
    company:
      '<a href="https://aividens.com" target="_blank" rel="noopener noreferrer" class="hover:text-sky-300 hover:underline">AiVidens</a>',
    description: `
      Cleaned and modelled client data using scikit-learn and TensorFlow,
      and documented the analysis in a Jupyter Notebook.
    `,
    tasks: [],
    technologies: {
      Pandas: "https://pandas.pydata.org/",
      "Scikit-learn": "https://scikit-learn.org/",
      TensorFlow: "https://www.tensorflow.org/",
      JupyterLab: "https://jupyter.org/",
    },
  },
  {
    title: "Student Worker",
    image: colruyt,
    year: "Aug. 2019 - Dec. 2022 (3 years 5 months)",
    company:
      '<a href="https://colruytgroup.com" target="_blank" rel="noopener noreferrer" class="hover:underline hover:text-sky-300">Colruyt Group</a>',
    description: `
      Learned to adapt to different personalities among colleagues and customers,
      and gained experience working under pressure.
    `,
    tasks: [],
    technologies: {},
  },
];

export const EDUCATION = [
  {
    company: "ECAM",
    image: ecam,
    year: "Sep. 2019 - Jan. 2026",
    description: "Industrial Engineering Institute, Brussels — graduated with Distinction",
    certifications: [
      "Master of Science in Industrial Engineering – Computer Science (graduated January 2026)",
      'Master\'s thesis at AiVidens: "The impact of dunning and collection actions on payer behavior"',
      "Bachelor's degree in Electrical Engineering",
    ],
    technologies: [],
  },
];

export const PROJECTS = [
  {
    title: "Motorcycle Trade Analysis",
    github: "https://github.com/Jordan-92/motorcycle-trade-analysis",
    // Replace with a motorcycle-trade project image when one is available.
    image: projectMachineLearning,
    description:
      "Analysed motorcycle trade patterns in Jupyter, compared monthly forecasting and anomaly detection methods, and added an LLM assistant to investigate flagged observations. Checked the assistant's answers against the underlying data.",
    technologies: ["Python", "Jupyter", "Forecasting", "Anomaly Detection", "LLM"],
  },
  {
    title: "AI Assistant",
    github: "https://github.com/Jordan-92/langchain_project",
    image: projectLangchain,
    description:
      "Built a LangChain application to predict pollution levels from historical pollution and weather data. Integrated the OpenAI API to provide personalised environmental advice.",
    technologies: ["LangChain", "Scikit-learn", "OpenAI", "Flask", "HTML"],
  },
  {
    title: "Movie Revenue Prediction Using Machine Learning",
    github: "https://github.com/Jordan-92/Movie-Revenue-Prediction",
    image: projectMachineLearning,
    description:
      "Developed a machine-learning model to predict movie revenue from features including budget, runtime, genre, and director.",
    technologies: ["Python", "Scikit-learn", "TensorFlow", "Data Analysis"],
  },
  {
    title: "Object-Oriented Game Development",
    github: "https://github.com/Jordan-92/OOP-project",
    image: projectObjectOrientedGame,
    description:
      "Developed a video game in Python using object-oriented programming principles, including game mechanics and character interactions.",
    technologies: ["Python"],
  },
  {
    title: "Profile Website",
    github: "https://github.com/Jordan-92/Portfolio-Website",
    image: projectPortfolioWeb,
    description:
      "My personal portfolio, built with React, Next.js, and Tailwind CSS and hosted on GitHub Pages.",
    technologies: ["React", "Next.js", "Tailwind CSS"],
  },
  {
    title: "Music Website and Mobile Application",
    github: "https://github.com/Jordan-92/Music",
    image: projectMobile,
    description:
      "Developed a music library application with web and mobile clients sharing one API and database. Users can register and create, edit, or delete entries in their music library.",
    technologies: ["Flutter", "React", "Next.js", "Supabase"],
  },
  {
    title: "Distributed Traffic Management System",
    github: "https://github.com/Jordan-92/Distributed-Systems",
    image: projectKubernetes,
    description:
      "Developed a real-time distributed system with three microservices for mapping, camera-based traffic data, and optimal route calculation.",
    technologies: ["Docker", "Kubernetes"],
  },
  {
    title: "Database Management Experience",
    image: projectDatabase,
    description:
      "Worked with SQL and NoSQL databases via command-line tools, including querying, updating, and managing data.",
    technologies: ["SQL", "NoSQL"],
  },
  {
    title: "Construction of a Robot",
    image: projectRobot,
    description:
      "Built a robot for the national EUROBOT competition, covering 3D design, mechanical construction, electronics, and programming.",
    technologies: ["C++", "Arduino", "Fusion 360", "3D Printing"],
  },
];

export const CONTACT = {
  email: "jordan.hermans@gmail.com",
};
