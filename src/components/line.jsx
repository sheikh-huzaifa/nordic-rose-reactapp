import React from 'react'
import PropTypes from 'prop-types'
import img from "../Assect/eyes.png"

const line = props => {
  return (
    <div id="line"> 
            <hr/><img src={img} alt=""/><hr/>
        </div>
  )
}

line.propTypes = {}

export default line