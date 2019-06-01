import React from 'react'
import { ScrollArrow } from '../components'
import profileImg from '../assets/profile.png'

const Landing = () => {
  return (
    <section
      id="landing"
      className="flex flex-col md:flex-row w-full min-h-screen items-center justify-center p-8"
    >
      <div className="w-full mt-24 md:mt-0 md:w-1/3">
        <h1 className="gradient-bg leading-tight pb-6 text-5xl font-bold">
          Hi, I'm Abhay.
        </h1>
        <p>
          I'm a third-year Computer Science student at the University of
          Toronto.
        </p>
      </div>
      <div className="w-full md:w-2/3">
        <img className="md:ml-6" src={profileImg} alt="Abhay" />
      </div>
      <ScrollArrow />
    </section>
  )
}

export default Landing
