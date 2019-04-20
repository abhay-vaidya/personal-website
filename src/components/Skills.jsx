import React, { Component } from 'react'

class Skills extends Component {
  render() {
    return (
      <section id="skills" className="p-12 flex w-full items-center justify-end">
        <div className="w-1/6 self-start">
          <h1 className="text-black section-title">Skills</h1>
        </div>
        <div className="w-5/6 flex flex-col justify-end">
          <div className="flex justify-end mb-6">
            <h1 className="gradient-bg mr-4 mt-3">
              I design cool things in
            </h1>
            <ul className="list-reset flex flex-col text-2xl py-3 px-4 border-grey-darkest border-solid border-2">
              <li>Adobe XD</li>
              <li>Illustrator</li>
              <li>Photoshop</li>
            </ul>
          </div>
          <div className="flex justify-end">
            <h1 className="gradient-bg mr-4 mt-3">and build them with</h1>
            <ul className="list-reset flex flex-col text-2xl py-3 px-4 border-grey-darkest border-solid border-2">
              <li>JavaScript</li>
              <li>Python</li>
              <li>Java</li>
              <li>+ more</li>
            </ul>
          </div>
        </div>
      </section>
    )
  }
}

export default Skills
