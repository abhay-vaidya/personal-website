import rangle from './assets/rangle.jpg'
import airmiles from './assets/airmiles.png'
import buddi from './assets/buddi.png'
import turfwars from './assets/turfwars.png'
import connect4 from './assets/connect4.png'

export const experiences = [
  {
    position: 'Software Developer Co-op',
    company: 'Rangle.io',
    logo: rangle,
    start: 'May 2019',
    end: 'Present',
    duration: '4 mos'
  },
  {
    position: 'Software Developer Co-op',
    company: 'LoyaltyOne - AIR MILES Reward Program',
    logo: airmiles,
    start: 'May 2018',
    end: 'Dec. 2018',
    duration: '8 mos',
    duties: [
      'Helped architect and develop new e-commerce merchandising platform visible to over 10 million AIR MILES members'
    ],
    technologies: 'Node.js, React + Redux, Express, TypeScript, Next.js'
  }
]

export const courses = {
  computerScience: [
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
  ],
  mathematics: [
    'Calculus I for Mathematical Sciences',
    'Calculus II for Mathematical Sciences',
    'Linear Algebra I',
    'Linear Algebra II'
  ]
}

export const skills = {
  design: ['Adobe XD', 'Photoshop', 'Illustrator'],
  code: ['JavaScript', 'Python', 'Java', '+ More']
}

export const projects = [
  {
    name: 'Buddi',
    logo: buddi,
    description:
      'Pet and owner matchmaking app to make the adoption process easier and help potential owners find their perfect pals.',
    link: 'https://github.com/abhay-vaidya/Buddi'
  },
  {
    name: 'TurfWars',
    logo: turfwars,
    description:
      "Verilog version of Ninendo's hit Splatoon game for the Altera DE2 board with VGA and keyboard support.",
    link: 'https://github.com/abhay-vaidya/TurfWars'
  },
  {
    name: 'ConnectFour',
    logo: connect4,
    description:
      'Java-based, animated game that recreates the thrill and excitement of the classic favourite.',
    link: 'https://github.com/abhay-vaidya/ConnectFour'
  }
]
