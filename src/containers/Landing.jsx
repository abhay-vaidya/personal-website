import React from "react";
import { ScrollArrow } from "../components";
import profileImg from "../assets/profile.png";

const Landing = () => {
  return (
    <section
      id="landing"
      className="flex flex-col md:flex-row w-full min-h-screen items-center justify-center p-8"
    >
      <div className="w-full mt-28 md:mt-0 md:w-1/3 flex items-center lg:items-end flex-col leading-tight text-center lg:text-left font-expanded font-bold">
        <h2>
          <span className="gradient-bg">Hey there!</span>
          <span role="img" aria-label="Hand wave emoji" className="ml-2">
            👋
          </span>
        </h2>
        <h1 className="text-4xl xl:text-5xl">I'm Abhay.</h1>
      </div>
      <div className="w-full md:w-2/3">
        <img className="md:ml-6" src={profileImg} alt="Abhay" />
      </div>
      <ScrollArrow />
    </section>
  );
};

export default Landing;
