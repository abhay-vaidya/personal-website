import React, { useState, useCallback, useEffect } from 'react'

const ScrollArrow = () => {
  const [isHidden, setHidden] = useState(false)

  const hideArrow = useCallback(() => {
    setHidden(true)
  }, [isHidden])

  useEffect(() => {
    window.addEventListener('scroll', hideArrow)
    return () => {
      window.removeEventListener('scroll', hideArrow)
    }
  }, [])

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="48"
      height="48"
      viewBox="0 0 24 24"
      strokeWidth="1"
      strokeLinecap="round"
      strokeLinejoin="arcs"
      className={`scroll-arrow absolute bottom-0 text-gray-500 stroke-current ${
        isHidden ? 'invisible' : ''
      }`}
    >
      <path d="M6 9l6 6 6-6" />
    </svg>
  )
}

export default ScrollArrow
