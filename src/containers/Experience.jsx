import React from 'react'
import { SingleExperience } from '../components'
import Section from './Section'
import { experiences } from '../Data'
import resume from '../assets/Abhay-Vaidya-Resume.pdf'

const renderExperienceSection = () => {
  return experiences.map((exp, index) => {
    return <SingleExperience key={`exp-${index}`} {...exp} />
  })
}

const Experience = () => {
  const experienceSection = renderExperienceSection()

  return (
    <Section id="experience" title="Exp.">
      <h2 className="gradient-bg p-2 mb-12">
        I've had the pleasure of working at some great companies to gain
        valuable industry experience.
      </h2>
      {experienceSection}
      <p className="text-2xl mt-6">
        Check out my&nbsp;
        <a
          className="hover:text-teal-400 underline"
          href={resume}
          rel="noopener noreferrer"
          target="_blank"
        >
          resume
        </a>
        &nbsp;to learn more.
      </p>
    </Section>
  )
}

export default Experience
