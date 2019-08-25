import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const SingleProject = ({ name, logo, description, link, index }) => {
  return (
    <div
      key={name}
      className="border-box w-full lg:w-1/3 mb-6 lg:mb-0 lg:mr-6 flex flex-col border border-gray-800 p-6"
    >
      <p className="select-none text-gray-700">{`0${index}`}</p>
      <img className="w-3/4 flex-shrink-0 my-6 mx-auto" src={logo} alt={name} />
      <p className="flex-grow mt-6">{description}</p>
      <a
        href={link}
        rel="noopener noreferrer"
        target="_blank"
        className="flex items-center select-none self-end mt-8 text-purple-300 hover:text-purple-200 no-underline"
      >
        Learn more
        <FontAwesomeIcon size="xs" className="ml-2" icon="external-link-alt" />
      </a>
    </div>
  );
};

export default SingleProject;
