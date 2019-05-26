import React from 'react'
import footerImg from '../assets/footer.png'

const Footer = () => {
  return (
    <footer className="hidden md:flex">
      <img className="self-end h-36 w-full" src={footerImg} alt="Footer" />
    </footer>
  )
}

export default Footer
