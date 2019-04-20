import React from 'react'

export default ({
  position,
  company,
  imageSrc,
  start,
  end,
  duration,
  className,
  children
}) => {
  return (
    <div
      className={`p-6 bg-teal-pure-darkest border border-teal-darker flex flex-col ${className}`}
    >
      <div
        className={`flex flex-col md:flex-row justify-between items-center ${
          children ? 'mb-8' : ''
        }`}
      >
        <div className="flex mb-4 md:mb-0 items-center">
          <img src={imageSrc} alt={company} className="w-16 h-16 mr-4" />
          <div>
            <p className="font-bold">{position}</p>
            <p className="text-teal-lighter">{company}</p>
          </div>
        </div>
        <div>
          <p className="text-teal-lighter">
            {start} - {end} • {duration}
          </p>
        </div>
      </div>
      {children}
    </div>
  )
}
