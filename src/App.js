import React from 'react'
import NavBar from './components/NavBar'
import Footer from './components/Footer'
import Landing from './containers/Landing'
import Skills from './containers/Skills'
import Experience from './containers/Experience'
import Courses from './containers/Courses'
import Projects from './containers/Projects'
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { faFileAlt } from '@fortawesome/free-solid-svg-icons'
import { library } from '@fortawesome/fontawesome-svg-core'

library.add(faGithub, faLinkedin, faFileAlt)

const App = () => {
  return (
    <div>
      <NavBar />
      <main className="container mx-auto">
        <Landing />
        <Skills />
        <Experience />
        <Courses />
        <Projects />
      </main>
      <Footer />
    </div>
  )
}

export default App
