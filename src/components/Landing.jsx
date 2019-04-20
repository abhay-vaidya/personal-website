import React, { Component } from 'react'
import profile from '../assets/profile.png'

class Landing extends Component {
  render() {
    return (
      <section id="landing" className="flex flex-col sm:flex-row w-full h-screen items-center justify-center p-8">
        <div className="w-full mt-24 sm:w-1/2">
          <h1 className="pb-6 text-5xl gradient-bg">Hi, I'm Abhay.</h1>
          <p>I study Computer Science at the University of Toronto.</p>
        </div>
        <div className="w-full sm:w-1/2">
          <img className="self-end mt-6" src={profile} alt="Abhay" />
        </div>
      </section>
    )
  }
}

export default Landing
