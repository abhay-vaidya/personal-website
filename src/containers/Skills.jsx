import React, { Component } from 'react'
import Section from './Section'
import { skills } from '../Data'

class Skills extends Component {
  getSkillsBox = (skillList) => {
    const innerElems = skillList.map((skill) => <li>{skill}</li>)
    return (
      <ul className="list-reset flex flex-col text-2xl py-3 px-5 border-grey-darkest border-solid border-2">
        {innerElems}
      </ul>
    )
  }
  render() {
    const { design, code } = skills
    const designSkillBox = this.getSkillsBox(design)
    const codeSkillBox = this.getSkillsBox(code)
    return (
      <Section title="Skills" id="skills">
        <div className="flex flex-col md:flex-row justify-end mb-6">
          <h1 className="gradient-bg mb-4 md:mr-4 md:mt-2">
            I design cool things in
          </h1>
          {designSkillBox}
        </div>
        <div className="flex flex-col md:flex-row justify-end">
          <h1 className="gradient-bg mb-4 md:mr-4 md:mt-2">
            and build them with
          </h1>
          {codeSkillBox}
        </div>
      </Section>
    )
  }
}

export default Skills
