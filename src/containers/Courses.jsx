import React from "react";
import Section from "./Section";
import { courses } from "../Data";

const renderCourseSection = ({ name, id, courses }) => {
  const innerElems = courses.map((course, index) => (
    <li key={`${id}-${index}`}>{course}</li>
  ));
  return (
    <div className="mb-8 lg:mr-12 lg:mb-0">
      <h3 className="mb-6 font-bold text-2xl">{name}</h3>
      <ul className="list-disc pl-6">{innerElems}</ul>
    </div>
  );
};

const Courses = () => {
  const { computerScience, mathematics } = courses;
  const csSection = renderCourseSection(computerScience);
  const mathSection = renderCourseSection(mathematics);

  return (
    <Section title="Courses" id="courses">
      <h2 className="gradient-bg p-2 mb-12">
        Here are some courses that have helped me become a better problem
        solver.
      </h2>
      <div className="flex flex-col lg:flex-row justify-center">
        {csSection}
        {mathSection}
      </div>
    </Section>
  );
};

export default Courses;
