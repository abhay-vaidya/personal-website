import React, { Component } from 'react'
import { Link } from 'react-scroll'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { faFile } from '@fortawesome/free-solid-svg-icons'
import resume from '../assets/Abhay-Vaidya-Resume.pdf'

const SCROLL_OFFSET = -86

class NavBar extends Component {
  render() {
    return (
      <nav className="nav-wrapper fixed w-full z-50 font-bold select-none">
        <div className="p-6 flex-col md:flex-row flex md:items-center text-center justify-between container mx-auto">
          <Link
            to="landing"
            spy={true}
            smooth={true}
            className="cursor-pointer py-2 px-4"
          >
            Abhay Vaidya
          </Link>
          <div>
            <div className="items-center w-full md:flex-grow md:flex md:justify-around">
              <div className="mb-4 md:mb-0">
                <Link
                  activeClass="nav-active"
                  to="skills"
                  spy={true}
                  smooth={true}
                  offset={SCROLL_OFFSET}
                  className="nav-item md:mx-3 cursor-pointer py-2 px-4 rounded-full lg:hover:bg-black"
                >
                  Skills
                </Link>
                <Link
                  activeClass="nav-active"
                  to="experience"
                  spy={true}
                  smooth={true}
                  offset={SCROLL_OFFSET}
                  className="nav-item md:mx-3 cursor-pointer py-2 px-4 rounded-full lg:hover:bg-black"
                >
                  Experience
                </Link>
                <Link
                  activeClass="nav-active"
                  to="projects"
                  spy={true}
                  smooth={true}
                  offset={SCROLL_OFFSET}
                  className="nav-item md:mx-3 cursor-pointer py-2 px-4 rounded-full lg:hover:bg-black"
                >
                  Projects
                </Link>
              </div>
              <div>
                <a
                  href="https://github.com/abhay-vaidya"
                  rel="noopener noreferrer"
                  target="_blank"
                  className="nav-item md:mx-3 py-2 px-4 md:px-0"
                >
                  <FontAwesomeIcon icon={faGithub} color="white" />
                </a>
                <a
                  href="https://linkedin.com/in/abhay-vaidya"
                  rel="noopener noreferrer"
                  target="_blank"
                  className="nav-item md:mx-3 py-2 px-4 md:px-0"
                >
                  <FontAwesomeIcon icon={faLinkedin} color="white" />
                </a>
                <a
                  href={resume}
                  rel="noopener noreferrer"
                  target="_blank"
                  className="nav-item md:mx-3 py-2 px-4 md:px-0"
                >
                  <FontAwesomeIcon icon={faFile} color="white" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </nav>
    )
  }
}

export default NavBar
