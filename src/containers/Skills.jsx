import React from "react";
import Section from "./Section";
import { skills } from "../Data";

const renderSkillsSection = (skillList, caption, keyPrefix) => {
  const innerElems = skillList.map((skill, index) => (
    <li key={`${keyPrefix}-${index}`}>{skill}</li>
  ));

  return (
    <div className="flex flex-col md:flex-row justify-end mb-6">
      <h2 className="gradient-bg mb-4 md:mr-4 md:mt-2">{caption}</h2>
      <ul className="border-box flex flex-col text-2xl py-3 px-5 border border-gray-800">
        {innerElems}
      </ul>
    </div>
  );
};

const Skills = () => {
  const { design, code } = skills;
  const designSkillSection = renderSkillsSection(
    design,
    "I design cool things in",
    "design"
  );
  const codeSkillSection = renderSkillsSection(
    code,
    "and build them with",
    "code"
  );

  return (
    <Section title="Skills" id="skills">
      {designSkillSection}
      {codeSkillSection}
    </Section>
  );
};

export default Skills;
