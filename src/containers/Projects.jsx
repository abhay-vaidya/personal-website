import React from 'react'
import Section from './Section'
import SingleProject from '../components/SingleProject'
import { projects } from '../Data'

const renderProjectsSection = () => {
  const projectsMarkup = projects.map((project, index) => {
    return <SingleProject key={`project-${index}`} {...project} index={index} />
  })
  return <div className="flex flex-col lg:flex-row">{projectsMarkup}</div>
}

const Projects = () => {
  const projectsSection = renderProjectsSection()

  return (
    <Section title="Projects" id="projects">
      {projectsSection}
      <p className="text-2xl mt-12">
        Check out my&nbsp;
        <a
          className="hover:text-teal-400 underline"
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

export default Projects
