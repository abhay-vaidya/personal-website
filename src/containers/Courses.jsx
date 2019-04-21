import React, { Component } from 'react'
import Section from './Section'
import { courses } from '../Data'

class Courses extends Component {
  getCourseSection = (subject, courseList) => {
    const innerElems = courseList.map((course) => <li>{course}</li>)
    return (
      <div className="mb-4 md:mr-6">
        <h3 className="mb-6 ml-8">{subject}</h3>
        <ul>{innerElems}</ul>
      </div>
    )
  }
  render() {
    const { computerScience, mathematics } = courses
    const csSection = this.getCourseSection('Computer Science', computerScience)
    const mathSection = this.getCourseSection('Mathematics', mathematics)
    return (
      <Section title="Courses" id="courses">
        <h1 className="gradient-bg p-2 mb-12">
          I'm constantly learning. Here are some courses I've taken that have
          helped me build a strong foundation in computer science and software
          engineering.
        </h1>
        <div className="flex flex-col md:flex-row justify-center">
          {csSection}
          {mathSection}
        </div>
      </Section>
    )
  }
}

export default Courses
