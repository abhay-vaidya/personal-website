import React from 'react'
import footerImg from '../assets/footer.png'

export default () => {
  return (
    <footer className="hidden md:flex">
      <img className="self-end h-36 w-full" src={footerImg} alt="Footer" />
    </footer>
  )
}
