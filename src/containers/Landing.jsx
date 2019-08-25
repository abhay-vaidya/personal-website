import React from "react";
import { ScrollArrow } from "../components";
import profileImg from "../assets/profile.png";

const Landing = () => {
  return (
    <section
      id="landing"
      className="flex flex-col md:flex-row w-full min-h-screen items-center justify-center p-8"
    >
      <div className="w-full mt-24 md:mt-0 md:w-1/3 flex items-center lg:items-end flex-col">
        <h1 className="gradient-bg leading-tight text-center lg:text-left text-5xl font-expanded font-bold">
          I'm Abhay.
        </h1>
        <h3>Student + Developer</h3>
      </div>
      <div className="w-full md:w-2/3">
        <img className="md:ml-6" src={profileImg} alt="Abhay" />
      </div>
      <ScrollArrow />
    </section>
  );
};

export default Landing;
