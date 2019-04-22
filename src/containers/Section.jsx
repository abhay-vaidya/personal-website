import React, { Component } from 'react'
import Fade from 'react-reveal/Fade'

class Section extends Component {
  render() {
    const { title, id, children } = this.props
    return (
      <Fade bottom>
        <div>
          <hr className="border border-black" />
          <section
            id={id}
            className="p-12 flex flex-col md:flex-row w-full items-center justify-end"
          >
            <div className="w-full md:w-1/6 self-start">
              <h1 className="text-grey-darkest md:text-black section-title text-5xl md:text-7xl lg:text-8xl mb-5 md:mb-0">
                {title}
              </h1>
            </div>
            <div className="w-full md:w-5/6 flex flex-col justify-end">
              {children}
            </div>
          </section>
        </div>
      </Fade>
    )
  }
}

export default Section
