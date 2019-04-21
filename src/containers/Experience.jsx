import React, { Component } from 'react'
import ExperienceBox from '../components/ExperienceBox'
import Section from './Section'
import { experiences } from '../Data'
import resume from '../assets/Abhay-Vaidya-Resume.pdf'

class Experience extends Component {
  getExperienceSection = () => {
    return experiences.map((exp) => {
      const {
        position,
        company,
        imageSrc,
        start,
        end,
        duration,
        duties,
        technologies
      } = exp
      return (
        <ExperienceBox
          position={position}
          company={company}
          imageSrc={imageSrc}
          start={start}
          end={end}
          duration={duration}
          duties={duties}
          technologies={technologies}
          className="mb-6"
        />
      )
    })
  }

  render() {
    const experienceSection = this.getExperienceSection()
    return (
      <Section id="experience" title="Exp.">
        <h1 className="gradient-bg p-2 mb-12">
          I've had the pleasure of working at some great companies to grow as a
          software engineer.
        </h1>
        {experienceSection}
        <p className="text-2xl">
          Check out my&nbsp;
          <a
            className="text-teal hover:text-teal-lighter"
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
}

export default Experience
