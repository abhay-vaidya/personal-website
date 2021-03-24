import PropTypes from "prop-types";
import React from "react";

const SingleExperience = ({
  position,
  company,
  location,
  companyLink,
  logo,
  start,
  end,
  duration,
  duties,
  technologies
}) => {
  return (
    <article
      className={"p-6 bg-gray-900 border border-gray-700 flex flex-col mb-6"}
    >
      <div
        className={`flex flex-col lg:flex-row justify-between items-center ${
          duties ? "mb-8" : ""
        }`}
      >
        <div className="flex mb-4 lg:mb-0 items-center">
          <img src={logo} alt={company} className="w-16 h-16 mr-4" />
          <div>
            <p className="font-bold">{position}</p>
            <a
              className="text-gray-400 lg:hover:text-gray-100"
              href={companyLink}
              rel="noopener noreferrer"
              target="_blank"
            >
              {company}
            </a>
            <p className="text-gray-400 text-xs">{location}</p>
          </div>
        </div>
        <div>
          <p className="text-gray-400">
            {`${start} - ${end}${duration ? ` • ${duration}` : ""}`}
          </p>
        </div>
      </div>
      {duties && (
        <ul className="list-disc pl-6 md:pl-10">
          {duties.map((duty, index) => (
            <li className="mb-3" key={`duty-${index}`}>
              {duty}
            </li>
          ))}
        </ul>
      )}
      {technologies && (
        <div className="mt-4">
          <p className="select-none text-gray-400 mb-2">
            Tools & Technologies:
          </p>
          <p>{technologies}</p>
        </div>
      )}
    </article>
  );
};

SingleExperience.propTypes = {
  position: PropTypes.string.isRequired,
  company: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  companyLink: PropTypes.string.isRequired,
  logo: PropTypes.string.isRequired,
  start: PropTypes.string.isRequired,
  end: PropTypes.string.isRequired,
  duration: PropTypes.string,
  duties: PropTypes.array,
  technologies: PropTypes.string
};

export default SingleExperience;
