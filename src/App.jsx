import React from 'react'
import { NavBar, Footer } from './components'
import { Courses, Experience, Landing, Projects, Skills } from './containers'
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
