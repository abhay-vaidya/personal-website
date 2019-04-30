import React, { Component } from 'react'
import Section from './Section'
import SingleProject from '../components/SingleProject'
import { projects } from '../Data'

class Projects extends Component {
  getProjectsSection = () => {
    const projectsMarkup = projects.map((project, index) => {
      return <SingleProject {...project} index={index} />
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
