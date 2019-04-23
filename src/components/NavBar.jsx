import React, { Component } from 'react'
import { Link } from 'react-scroll'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { navigation, socials } from '../Data'

const SCROLL_OFFSET = -86

class NavBar extends Component {
  getNavLinks = () => {
    return navigation.map((navItem, index) => {
      return (
        <Link
          key={`nav-${index}`}
          activeClass="nav-active"
          to={navItem.toLowerCase()}
          spy={true}
          smooth={true}
          offset={SCROLL_OFFSET}
          className="nav-item md:mx-3 cursor-pointer py-2 px-4 rounded-full lg:hover:bg-black"
        >
          {navItem}
        </Link>
      )
    })
  }

  getSocialLinks = () => {
    return socials.map(({ name, faIcon, link }, index) => {
      return (
        <a
          key={`social-${index}`}
          href={link}
          rel="noopener noreferrer"
          target="_blank"
          title={name}
          className="nav-item md:mx-3 py-2 px-4 md:px-0"
        >
          <FontAwesomeIcon icon={faIcon} color="white" />
        </a>
      )
    })
  }

  render() {
    const navLinks = this.getNavLinks()
    const socialLinks = this.getSocialLinks()

    return (
      <nav className="nav-wrapper fixed w-full z-50 font-bold select-none">
        <div className="p-6 flex-col md:flex-row flex md:items-center text-center justify-between container mx-auto">
          <Link
            to="landing"
            spy={true}
            smooth={true}
            className="cursor-pointer py-2 px-4 mb-2 md:mb-0"
          >
            Abhay Vaidya
          </Link>
          <div>
            <div className="items-center w-full md:flex-grow md:flex md:justify-around">
              <div className="mb-4 md:mb-0">{navLinks}</div>
              <div>{socialLinks}</div>
            </div>
          </div>
        </div>
      </nav>
    )
  }
}

export default NavBar
