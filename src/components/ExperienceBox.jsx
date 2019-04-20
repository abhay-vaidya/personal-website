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
      className={`p-6 bg-teal-darkest border border-teal-dark flex flex-col ${className}`}
    >
      <div
        className={`flex justify-between items-center ${
          children ? 'mb-8' : ''
        }`}
      >
        <div className="flex items-center">
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
