import React from 'react'

const SingleExperience = ({
  position,
  company,
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
      className={'p-6 bg-gray-900 border border-gray-700 flex flex-col mb-6'}
    >
      <div
        className={`flex flex-col lg:flex-row justify-between items-center ${
          duties ? 'mb-8' : ''
        }`}
      >
        <div className="flex mb-4 lg:mb-0 items-center">
          <img src={logo} alt={company} className="w-16 h-16 mr-4" />
          <div>
            <p className="font-bold">{position}</p>
            <a
              className="text-gray-500 lg:hover:text-gray-100"
              href={companyLink}
              rel="noopener noreferrer"
              target="_blank"
            >
              {company}
            </a>
          </div>
        </div>
        <div>
          <p className="text-gray-500">
            {`${start} - ${end}${duration ? ` • ${duration}` : ''}`}
          </p>
        </div>
      </div>
      {duties && (
        <ul className="list-disc pl-6 md:pl-10 mb-8">
          {duties.map((duty, index) => (
            <li key={`duty-${index}`}>{duty}</li>
          ))}
        </ul>
      )}
      {technologies && (
        <div>
          <p className="select-none text-gray-500 mb-2">
            Tools & Technologies:
          </p>
          <p>{technologies}</p>
        </div>
      )}
    </article>
  )
}

export default SingleExperience
