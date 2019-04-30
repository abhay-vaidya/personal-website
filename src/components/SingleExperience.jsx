import React from 'react'

export default ({
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
      className={
        'p-6 bg-teal-pure-darkest border border-teal-darker flex flex-col mb-6'
      }
    >
      <div
        className={`flex flex-col md:flex-row justify-between items-center ${
          duties ? 'mb-8' : ''
        }`}
      >
        <div className="flex mb-4 md:mb-0 items-center">
          <img src={logo} alt={company} className="w-16 h-16 mr-4" />
          <div>
            <p className="font-bold">{position}</p>
            <a
              className="text-teal-lighter lg:hover:text-teal-lightest"
              href={companyLink}
              rel="noopener noreferrer"
              target="_blank"
            >
              {company}
            </a>
          </div>
        </div>
        <div>
          <p className="text-teal-lighter">
            {`${start} - ${end}${duration ? ` • ${duration}` : ''}`}
          </p>
        </div>
      </div>
      {duties && (
        <ul className="mb-8">
          {duties.map((duty, index) => (
            <li key={`duty-${index}`}>{duty}</li>
          ))}
        </ul>
      )}
      {technologies && (
        <div>
          <p className="font-bold">Tools & Technologies:</p>
          <p>{technologies}</p>
        </div>
      )}
    </article>
  )
}
