import React, { Component } from 'react'
import Section from './Section'
import { courses } from '../Data'

class Courses extends Component {
  getCourseSection = ({ name, id, courses }) => {
    const innerElems = courses.map((course, index) => (
      <li key={`${id}-${index}`}>{course}</li>
    ))
    return (
      <div className="mb-8 lg:mr-6">
        <h3 className="mb-6 font-bold text-2xl">{name}</h3>
        <ul className="list-disc pl-6 md:pl-0">{innerElems}</ul>
      </div>
    )
  }

  render() {
    const { computerScience, mathematics } = courses
    const csSection = this.getCourseSection(computerScience)
    const mathSection = this.getCourseSection(mathematics)

    return (
      <Section title="Courses" id="courses">
        <h2 className="gradient-bg p-2 mb-12">
          I'm constantly learning. Here are some courses I've taken that have
          helped me build a strong foundation in computer science and software
          engineering.
        </h2>
        <div className="flex flex-col lg:flex-row justify-center">
          {csSection}
          {mathSection}
        </div>
      </Section>
    )
  }
}

export default Courses
