import React, { Component } from 'react'
import NavBar from './components/NavBar'
import Footer from './components/Footer'
import Landing from './containers/Landing'
import Skills from './containers/Skills'
import Experience from './containers/Experience'
import Courses from './containers/Courses'
import Projects from './containers/Projects'
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { faFileAlt } from '@fortawesome/free-solid-svg-icons'
import { library } from '@fortawesome/fontawesome-svg-core';

library.add(faGithub, faLinkedin, faFileAlt)

class App extends Component {
  render() {
    return (
      <div className="font-sans leading-normal text-white">
        <NavBar />
        <div className="container mx-auto">
          <Landing />
          <Skills />
          <Experience />
          <Courses />
          <Projects />
        </div>
        <Footer />
      </div>
    )
  }
}

export default App
