import React, { Component } from 'react'
import Section from './Section'
import { skills } from '../Data'

class Skills extends Component {
  getSkillsSection = (skillList, caption, keyPrefix) => {
    const innerElems = skillList.map((skill, index) => (
      <li key={`${keyPrefix}-${index}`}>{skill}</li>
    ))

    return (
      <div className="flex flex-col md:flex-row justify-end mb-6">
        <h2 className="gradient-bg mb-4 md:mr-4 md:mt-2">{caption}</h2>
        <ul className="border-box flex flex-col text-2xl py-3 px-5 border border-gray-800 lg:hover:border-gray-700">
          {innerElems}
        </ul>
      </div>
    )
  }

  render() {
    const { design, code } = skills
    const designSkillSection = this.getSkillsSection(
      design,
      'I design cool things in',
      'design'
    )
    const codeSkillSection = this.getSkillsSection(
      code,
      'and build them with',
      'code'
    )

    return (
      <Section title="Skills" id="skills">
        {designSkillSection}
        {codeSkillSection}
      </Section>
    )
  }
}

export default Skills
