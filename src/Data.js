import rangleImg from './assets/rangle.jpg'
import airmilesImg from './assets/airmiles.png'
import buddiImg from './assets/buddi.png'
import turfwarsImg from './assets/turfwars.png'
import connect4Img from './assets/connect4.png'
import resume from './assets/Abhay-Vaidya-Resume.pdf'

export const navigation = ['Skills', 'Experience', 'Projects']

export const socials = [
  {
    name: 'GitHub',
    faIcon: ['fab', 'github'],
    link: 'https://github.com/abhay-vaidya'
  },
  {
    name: 'LinkedIn',
    faIcon: ['fab', 'linkedin'],
    link: 'https://linkedin.com/in/abhay-vaidya'
  },
  {
    name: 'Resume',
    faIcon: ['fas', 'file-alt'],
    link: resume
  }
]

export const experiences = [
  {
    position: 'Software Developer Co-op',
    company: 'Rangle.io',
    companyLink: 'https://rangle.io/',
    logo: rangleImg,
    start: 'May 2019',
    end: 'Present'
  },
  {
    position: 'Software Developer Co-op',
    company: 'LoyaltyOne - AIR MILES Reward Program',
    companyLink: 'https://www.loyalty.com/',
    logo: airmilesImg,
    start: 'May 2018',
    end: 'Dec. 2018',
    duration: '8 mos',
    duties: [
      'Helped architect and develop new e-commerce merchandising platform visible to over 10 million AIR MILES members',
      'Designed automated changelog process with git and Jira integration to improve accountability and establish an audit trail',
      'Presented tech seminar about improving internal API documentation practices with Postman'
    ],
    technologies:
      'Node.js, React + Redux, Express, TypeScript, Next.js, Jenkins'
  }
]

export const courses = {
  computerScience: {
    name: 'Computer Science',
    id: 'cs',
    courses: [
      'Introduction to Computer Science I',
      'Introduction to Computer Science II',
      'Discrete Mathematics',
      'Introduction to the Theory of Computation',
      'Software Design',
      'Software Tools and Systems Programming',
      'Computer Organization',
      'Design and Analysis of Data Structures',
      'Introduction to Software Engineering',
      'Principles of Programming Languages',
      'Computability and Computational Complexity',
      'Human-Computer Interaction',
      'Engineering Large Software Systems',
      'Computer and Network Security'
    ]
  },
  mathematics: {
    name: 'Mathematics',
    id: 'math',
    courses: [
      'Calculus I for Mathematical Sciences',
      'Calculus II for Mathematical Sciences',
      'Linear Algebra I',
      'Linear Algebra II'
    ]
  }
}

export const skills = {
  design: ['Adobe XD', 'Photoshop', 'Illustrator'],
  code: ['JavaScript', 'Python', 'Java', '+ more']
}

export const projects = [
  {
    name: 'Buddi',
    logo: buddiImg,
    description:
      'Pet-and-owner matchmaking app to make the adoption process easier and help potential owners find their perfect pals.',
    link: 'https://github.com/abhay-vaidya/Buddi'
  },
  {
    name: 'TurfWars',
    logo: turfwarsImg,
    description:
      "Verilog version of Ninendo's hit Splatoon game for the Altera DE2 board with VGA and keyboard support.",
    link: 'https://github.com/abhay-vaidya/TurfWars'
  },
  {
    name: 'ConnectFour',
    logo: connect4Img,
    description:
      'Java-based animated game that recreates the thrill and excitement of the classic favourite.',
    link: 'https://github.com/abhay-vaidya/ConnectFour'
  }
]
