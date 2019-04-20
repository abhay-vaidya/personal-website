import React, { Component } from 'react'
import ExperienceBox from '../components/ExperienceBox'
import Section from './Section'
import airmiles from '../assets/airmiles.png'
import rangle from '../assets/rangle.jpg'
import resume from '../assets/Abhay-Vaidya-Resume.pdf'

class Experience extends Component {
  render() {
    return (
      <Section id="experience" title="Exp.">
        <h1 className="gradient-bg p-2 mb-12">
          I've had the pleasure of working at some great companies to grow as a
          software engineer.
        </h1>
        <ExperienceBox
          position="Software Developer Co-op"
          company="Rangle.io"
          imageSrc={rangle}
          start="May 2019"
          end="Present"
          duration="4 mos"
          className="mb-6"
        />
        <ExperienceBox
          position="Software Developer Co-op"
          company="LoyaltyOne - AIR MILES Reward Program"
          imageSrc={airmiles}
          start="May 2018"
          end="Dec. 2018"
          duration="8 mos"
          className="mb-12"
        >
          <ul className="mb-8">
            <li>
              Helped architect and develop new e-commerce merchandising platform
              visible to over 10 million AIR MILES members
            </li>
          </ul>
          <div>
            <p className="font-bold">Technologies:</p>
            <p>Node.js, React + Redux, Express, TypeScript, Next.js</p>
          </div>
        </ExperienceBox>
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
