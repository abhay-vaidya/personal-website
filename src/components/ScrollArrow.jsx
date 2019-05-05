import React, { Component } from 'react'

class ScrollArrow extends Component {
  state = {
    isHidden: false
  }

  hideArrow = () => {
    this.setState({ isHidden: true })
  }

  componentDidMount() {
    window.addEventListener('scroll', this.hideArrow)
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.hideArrow)
  }

  render() {
    const { isHidden } = this.state

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
}

export default ScrollArrow
