import React, { Component } from 'react'
import NavBar from './components/NavBar'
import Landing from './components/Landing'
import Skills from './components/Skills'
import Experience from './components/Experience'
import Courses from './components/Courses'

class App extends Component {
  render() {
    return (
      <div className="font-sans leading-normal text-white">
        <NavBar />
        <div className="container mx-auto">
          <Landing />
          <hr className="border border-black" />
          <Skills />
          <hr className="border border-black" />
          <Experience />
          <hr className="border border-black" />
          <Courses />
        </div>
      </div>
    )
  }
}

export default App
