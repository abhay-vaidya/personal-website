import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { ScrollArrow } from "../components";
import profileImg from "../assets/profile.png";

const Landing = () => {
  return (
    <section
      id="landing"
      className="flex flex-col md:flex-row w-full min-h-screen items-center justify-center p-8"
    >
      <div className="w-full md:w-1/2 lg:w-1/3 flex items-center lg:items-end flex-col text-center">
        <span className="font-bold leading-tight lg:text-left font-expanded mb-6">
          <h2>
            <span className="gradient-bg">Hey there!</span>
            <span role="img" aria-label="Hand wave emoji" className="ml-2">
              👋
            </span>
          </h2>
          <h1 className="text-4xl xl:text-5xl">I'm Abhay.</h1>
        </span>
        <p className="lg:text-right text-sm">
          University of Toronto Computer Science 2021 and incoming Software
          Engineer at&nbsp;
          <a
            className="text-yellow-500 hover:text-yellow-300"
            href="https://hubspot.com"
            rel="noopener noreferrer"
            target="_blank"
          >
            <FontAwesomeIcon icon={["fab", "hubspot"]} /> Hubspot
          </a>
          .
        </p>
      </div>
      <div className="w-full md:w-2/3">
        <img className="md:ml-6" src={profileImg} alt="Abhay" />
      </div>
      <ScrollArrow />
    </section>
  );
};

export default Landing;
