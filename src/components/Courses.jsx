import React, { Component } from 'react'

class Courses extends Component {
  render() {
    return (
      <section
        id="experience"
        className="p-12 flex w-full items-center justify-end"
      >
        <div className="w-1/6 self-start">
          <h1 className="text-black section-title">Courses</h1>
        </div>
        <div className="w-5/6 flex flex-col justify-end">
          <h1 className="gradient-bg p-2 mb-12">
            I'm constantly learning. Here are some courses I've taken that have
            helped me build a strong foundation in computer science and software
            engineering.
          </h1>
          <div className="flex justify-center">
            <div className="mr-6">
              <h3 className="mb-6 ml-8">Computer Science</h3>
              <ul>
                <li>Introduction to Computer Science I</li>
                <li>Introduction to Computer Science II</li>
                <li>Discrete Mathematics</li>
                <li>Introduction to the Theory of Computation</li>
                <li>Software Design</li>
                <li>Software Tools and Systems Programming</li>
                <li>Computer Organization</li>
                <li>Design and Analysis of Data Structures</li>
                <li>Introduction to Software Engineering</li>
                <li>Principles of Programming Languages</li>
                <li>Computability and Computational Complexity</li>
                <li>Human-Computer Interaction</li>
                <li>Engineering Large Software Systems</li>
                <li>Computer and Network Security</li>
              </ul>
            </div>
            <div>
              <h3 className="mb-6 ml-8">Mathematics</h3>
              <ul>
                <li>Calculus I for Mathematical Sciences</li>
                <li>Calculus II for Mathematical Sciences</li>
                <li>Linear Algebra I</li>
                <li>Linear Algebra II</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    )
  }
}

export default Courses
