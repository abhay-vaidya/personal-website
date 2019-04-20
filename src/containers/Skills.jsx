import React, { Component } from 'react'
import Section from './Section'

class Skills extends Component {
  render() {
    return (
      <Section title="Skills" id="skills">
        <div className="flex flex-col md:flex-row justify-end mb-6">
          <h1 className="gradient-bg mb-4 md:mr-4 md:mt-2">
            I design cool things in
          </h1>
          <ul className="list-reset flex flex-col text-2xl py-3 px-5 border-grey-darkest border-solid border-2">
            <li>Adobe XD</li>
            <li>Illustrator</li>
            <li>Photoshop</li>
          </ul>
        </div>
        <div className="flex flex-col md:flex-row justify-end">
          <h1 className="gradient-bg mb-4 md:mr-4 md:mt-2">
            and build them with
          </h1>
          <ul className="list-reset flex flex-col text-2xl py-3 px-5 border-grey-darkest border-solid border-2">
            <li>JavaScript</li>
            <li>Python</li>
            <li>Java</li>
            <li>+ more</li>
          </ul>
        </div>
      </Section>
    )
  }
}

export default Skills
