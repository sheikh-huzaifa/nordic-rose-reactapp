import React from 'react'
import PropTypes from 'prop-types'
import img from "../../Assect/1.png"

const section1 = props => {
  return (
    <div>
        <header id="section1">
            <h1>A few words about this blog platform, Ghost, and how this site was made</h1>
            <p>Why Ghost (& Figma) instead of Medium, WordPress or other options?</p>
            <img src={img} alt=""/>
        </header>
    </div>
  )
}

section1.propTypes = {}

export default section1