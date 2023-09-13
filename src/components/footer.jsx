import React from 'react'
import PropTypes from 'prop-types'
import img from "../Assect/Group 40.png"

const footer = props => {
  return (
    <footer id="footer">
            <img src={img} alt=""/>
            <div>
                <h1>NORDIC ROSE</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis eu velit tempus erat egestas efficitur. In hac habitasse platea dictumst. Fusce a nunc eget ligula suscipit finibus. </p>
                <a href="">Twitter</a><a href="">LinkedIN</a><a href="">RSS</a>
            </div>
            <p>© 2012–2020 Nordic Rose Co. <br/> All rights reserved. </p>
        </footer>
  )
}

footer.propTypes = {}

export default footer