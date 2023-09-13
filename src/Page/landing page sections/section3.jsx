import React from 'react'
import PropTypes from 'prop-types'
import img1 from "../../Assect/5.png"
import img2 from "../../Assect/8.png"
import img3 from "../../Assect/6.png"
import img4 from "../../Assect/9.png"
import img5 from "../../Assect/7.png"
import img6 from "../../Assect/10.png"

const section3 = props => {
  return (
    <div id="section3">
            <h1>What to read next</h1>
            <div id="section3_1">
                <div>
                    <img src={img1} alt=""/>
                    <p>Connecting artificial intelligence with digital product design</p>
                    <br/>
                    <img src={img2} alt=""/>
                    <p>A few words about this blog platform, Ghost, and how this site was made</p>
                </div>
                <div>
                    <img src={img3} alt=""/>
                    <p>Hello world, or, in other words, why this blog exists</p>
                    <br/>
                    <img src={img4} alt=""/>
                    <p>Updating list of 50+ sources on distributed teams, remote work, and how to make it all work better</p>
                </div>
                <div>
                    <img src={img5} alt=""/>
                    <p>Here are some things you should know regarding how we work </p>
                    <br/>
                    <img src={img6} alt=""/>
                    <p>How modern remote working tools get along with Old School Cowboy's methods</p>
                </div>
                
            </div>

        </div>
    )
}

section3.propTypes = {}

export default section3