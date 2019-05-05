import React from 'react'

export default ({ name, logo, description, link, index }) => {
  return (
    <div
      key={name}
      className="border-box w-full lg:w-1/3 mb-6 lg:mb-0 lg:mr-6 flex flex-col border border-gray-800 p-6 lg:hover:border-gray-700"
    >
      <p className="select-none text-gray-700">{`0${index}`}</p>
      <img className="w-3/4 flex-shrink-0 my-6 mx-auto" src={logo} alt={name} />
      <p className="flex-grow mt-6">{description}</p>
      <a
        href={link}
        rel="noopener noreferrer"
        target="_blank"
        className="learn-more select-none font-bold self-end mt-8 text-purple-300 no-underline"
      >
        Learn more
      </a>
    </div>
  )
}
