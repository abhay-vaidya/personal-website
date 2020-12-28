import hubspotImg from "./assets/hubspot.png";
import rangleImg from "./assets/rangle.jpg";
import airmilesImg from "./assets/airmiles.png";
import buddiImg from "./assets/buddi.png";
import turfwarsImg from "./assets/turfwars.png";
import connect4Img from "./assets/connect4.png";
import resume from "./assets/Abhay-Vaidya-Resume.pdf";

export const navigation = ["Skills", "Experience", "Projects"];

export const socials = [
  {
    name: "GitHub",
    faIcon: ["fab", "github"],
    link: "https://github.com/abhay-vaidya"
  },
  {
    name: "LinkedIn",
    faIcon: ["fab", "linkedin"],
    link: "https://linkedin.com/in/abhay-vaidya"
  },
  {
    name: "Resume",
    faIcon: ["fas", "file-alt"],
    link: resume
  }
];

export const experiences = [
  {
    position: "Software Engineering Intern",
    company: "HubSpot",
    location: "Boston, MA",
    companyLink: "https://hubspot.com/",
    logo: hubspotImg,
    start: "Jan. 2020",
    end: "Apr. 2020",
    duration: "4 mos",
    duties: [
      "Engineered tools and libraries used by all HubSpot products to support different locales and regions as member of Internationalization (I18n) team",
      "Launched new tool allowing PMs and UX writers to add and modify product copy without engineering involvement",
      "Delivered full-stack feature for engineers to notify translations team of urgent copy requests"
    ],
    technologies: "JavaScript, React, Redux, Java"
  },
  {
    position: "Software Developer Intern",
    company: "Rangle.io",
    location: "Toronto, ON",
    companyLink: "https://rangle.io/",
    logo: rangleImg,
    start: "May 2019",
    end: "Aug. 2019",
    duration: "4 mos",
    duties: [
      "Implemented and launched new modular flow to streamline customer onboarding and product checkout for US wellness brand's largest demographic",
      "Delivered proof-of-concept app for Japanese clothing retailer to demonstrate unification of 30+ fragmented codebases by integrating common services layer and shared design system"
    ],
    technologies: "JavaScript, Node.js, React, Redux, Express, Bash"
  },
  {
    position: "Software Developer Intern",
    company: "LoyaltyOne (AIR MILES)",
    location: "Toronto, ON",
    companyLink: "https://www.loyalty.com/",
    logo: airmilesImg,
    start: "May 2018",
    end: "Dec. 2018",
    duration: "8 mos",
    duties: [
      "Architected, developed, and launched new eCommerce platform used by over 10 million AIR MILES members to redeem for merchandise",
      "Reduced product release times from ~2 hours to <15 minutes by designing and implementing automated changelog and CI/CD process",
      "Presented tech seminar about improving API documentation practices with Postman;  adopted by 2 other teams"
    ],
    technologies: "TypeScript, Node.js, React, Redux, Express, Next.js, Jenkins"
  }
];

export const courses = {
  computerScience: {
    name: "Computer Science",
    id: "cs",
    courses: [
      "Algorithm Design and Analysis",
      "Design and Analysis of Data Structures",
      "Software Design",
      "Software Tools and Systems Programming",
      "Principles of Programming Languages",
      "Operating Systems",
      "Computability and Computational Complexity",
      "Human-Computer Interaction",
      "Engineering Large Software Systems",
      "Computer and Network Security",
      "Computer Organization"
    ]
  },
  mathematics: {
    name: "Mathematics",
    id: "math",
    courses: ["Linear Algebra I, II", "Calculus I, II, III", "Probability"]
  }
};

export const skills = {
  design: ["Adobe XD", "Photoshop", "Illustrator"],
  code: ["JavaScript", "Python", "Java", "+ more"]
};

export const projects = [
  {
    name: "Buddi",
    logo: buddiImg,
    description:
      "Pet-and-owner matchmaking app to make the adoption process easier and help potential owners find their perfect pals.",
    link: "https://github.com/abhay-vaidya/Buddi"
  },
  {
    name: "TurfWars",
    logo: turfwarsImg,
    description:
      "Verilog version of Ninendo's hit Splatoon game for the Altera DE2 board with VGA and keyboard support.",
    link: "https://github.com/abhay-vaidya/TurfWars"
  },
  {
    name: "ConnectFour",
    logo: connect4Img,
    description:
      "Java-based animated game that recreates the thrill and excitement of the classic favourite.",
    link: "https://github.com/abhay-vaidya/ConnectFour"
  }
];
