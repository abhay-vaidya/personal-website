import React from "react";
import { Link } from "react-scroll";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { navigation, socials } from "../Data";

const SCROLL_OFFSET = -86;

const renderNavLinks = () => {
  return navigation.map((navItem, index) => {
    return (
      <Link
        key={`nav-${index}`}
        activeClass="border-white"
        to={navItem.toLowerCase()}
        spy={true}
        smooth={true}
        offset={SCROLL_OFFSET}
        className="mx-3 py-1 font-expanded font-bold cursor-pointer border-b-2 border-transparent lg:hover:border-white"
      >
        {navItem}
      </Link>
    );
  });
};

const renderSocialLinks = () => {
  return socials.map(({ name, faIcon, link }, index) => {
    return (
      <a
        key={`social-${index}`}
        href={link}
        rel="noopener noreferrer"
        target="_blank"
        title={name}
        className="mx-3 hover:text-purple-400"
      >
        <FontAwesomeIcon icon={faIcon} />
      </a>
    );
  });
};

const NavBar = () => {
  const navLinks = renderNavLinks();
  const socialLinks = renderSocialLinks();

  return (
    <header className="fixed w-full z-50 select-none bg-gradient-to-b from-black to-transparent">
      <nav className="p-6 flex-col md:flex-row flex md:items-center text-center justify-between container mx-auto">
        <Link
          to="landing"
          spy={true}
          smooth={true}
          className="cursor-pointer py-2 px-4 mb-2 md:mb-0 font-expanded font-bold"
        >
          Abhay Vaidya
        </Link>
        <div>
          <div className="items-center w-full md:flex-grow md:flex md:justify-around">
            <div className="text-xs mb-4 md:mb-0 uppercase">{navLinks}</div>
            <div>{socialLinks}</div>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default NavBar;
