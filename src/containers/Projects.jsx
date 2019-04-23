import React, { Component } from 'react'
import Section from './Section'
import { projects } from '../Data'

class Projects extends Component {
  getProjectsSection = () => {
    const projectsMarkup = projects.map((project, index) => {
      const { name, logo, description, link } = project
      return (
        <div
          key={name}
          className="w-full md:w-1/3 mb-6 md:mb-0 md:mr-6 flex flex-col border border-black p-6 lg:hover:border-grey-darkest"
        >
          <p className="text-grey-darkest">{`0${index}`}</p>
          <img
            className="w-3/4 flex-no-shrink my-6 mx-auto"
            src={logo}
            alt={name}
          />
          <p className="flex-grow mt-6">{description}</p>
          <a
            href={link}
            rel="noopener noreferrer"
            target="_blank"
            className="learn-more font-bold self-end mt-8 text-purple-lighter no-underline"
          >
            Learn more
          </a>
        </div>
      )
    })
    return <div className="flex flex-col md:flex-row">{projectsMarkup}</div>
  }

  render() {
    const projectsSection = this.getProjectsSection()

    return (
      <Section title="Projects" id="projects">
        {projectsSection}
        <p className="text-2xl mt-12">
          Check out my&nbsp;
          <a
            className="text-teal hover:text-teal-lighter"
            href="https://github.com/abhay-vaidya"
            rel="noopener noreferrer"
            target="_blank"
          >
            GitHub
          </a>
          &nbsp;for more.
        </p>
      </Section>
    )
  }
}

export default Projects
