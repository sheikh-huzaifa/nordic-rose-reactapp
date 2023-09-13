import React from 'react'
import PropTypes from 'prop-types'

const header = props => {
  return (
    <nav id="nav_bar">
            <h1>NORDIC ROSE</h1>
            <ul>
                <li> <a href="">BLOG</a> </li>
                <li> <a href="">ABOUT</a> </li>
                <li> <a href="">LINKS</a> </li>
                <li> <a href="">PROJECTS</a> </li>
                
            </ul>
        </nav>
  )
}

header.propTypes = {}

export default header