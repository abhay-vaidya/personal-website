import React, { Component } from 'react'
import { Link } from 'react-scroll'

class NavBar extends Component {
  render() {
    return (
      <nav className="fixed w-full z-50 font-bold">
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
            <ul className="list-reset w-full md:flex-grow md:flex md:justify-around">
              <Link
                activeClass="nav-active"
                to="skills"
                spy={true}
                smooth={true}
                offset={-86}
                className="nav-item sm:mx-3 cursor-pointer py-2 px-4 rounded-full hover:bg-black"
              >
                Skills
              </Link>
              <Link
                activeClass="nav-active"
                to="experience"
                spy={true}
                smooth={true}
                offset={-70}
                className="nav-item sm:mx-3 cursor-pointer py-2 px-4 rounded-full hover:bg-black"
              >
                Experience
              </Link>
              <Link
                activeClass="nav-active"
                to="projects"
                spy={true}
                smooth={true}
                offset={-70}
                className="nav-item sm:mx-3 cursor-pointer py-2 px-4 rounded-full hover:bg-black"
              >
                Projects
              </Link>
            </ul>
          </div>
        </div>
      </nav>
    )
  }
}

export default NavBar
