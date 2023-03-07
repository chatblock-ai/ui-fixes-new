import React from 'react'

import PropTypes from 'prop-types'

import './component7.css'

const Component7 = (props) => {
  return (
    <div className="component7-container">
      <a
        href="https://chatblock.ai/"
        target="_blank"
        rel="noreferrer noopener"
        className="component7-link"
      >
        <img
          alt={props.image_alt}
          src={props.image_src}
          className="component7-image"
        />
      </a>
    </div>
  )
}

Component7.defaultProps = {
  image_src: '/playground_assets/landing%20page%20%5B2%5D%20%5B1%5D1-200h.png',
  image_alt: 'image',
}

Component7.propTypes = {
  image_src: PropTypes.string,
  image_alt: PropTypes.string,
}

export default Component7
