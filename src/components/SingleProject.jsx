import React from 'react'

export default ({ name, logo, description, link, index }) => {
  return (
    <div
      key={name}
      className="border-box w-full md:w-1/3 mb-6 md:mb-0 md:mr-6 flex flex-col border border-black p-6 lg:hover:border-grey-darkest"
    >
      <p className="select-none text-grey-darkest">{`0${index}`}</p>
      <img
        className="w-3/4 flex-no-shrink my-6 mx-auto"
        src={logo}
        alt={name}
      />
      <p className="flex-grow mt-6">{description}</p>
      <a
        href={link}
        rel="noopener noreferrer"
        target="_blank"
        className="learn-more select-none font-bold self-end mt-8 text-purple-lighter no-underline"
      >
        Learn more
      </a>
    </div>
  )
}
