import React, { Component } from 'react'
import NavBar from './components/NavBar'
import Landing from './containers/Landing'
import Skills from './containers/Skills'
import Experience from './containers/Experience'
import Courses from './containers/Courses'

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
        </div>
      </div>
    )
  }
}

export default App
