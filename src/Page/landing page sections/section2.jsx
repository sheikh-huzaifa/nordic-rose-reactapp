import React from 'react'
import PropTypes from 'prop-types'
import img1 from "../../Assect/4.png"
import img2 from "../../Assect/fb Vector.png"
import img3 from "../../Assect/twitter Vector.png"
import img4 from "../../Assect/3.png"


const section2 = props => {
  return (
    <div>
        <div id="section2">
            <div id="section2_1">
                <img src={img1} alt=""/>
                <div><p>Mika MAtikainen</p>
                    <p id="section2_1_p">Apr 15, 2020 · 4 min read</p>
                </div>
                <span>
                    <img src={img2} alt=""/><img src={img3} alt=""/>
                </span>
            </div>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis eu velit tempus erat egestas efficitur. In hac habitasse platea dictumst. Fusce a nunc eget ligula suscipit finibus. Aenean pharetra quis lacus at viverra. 
            <br/> <br/> Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Aliquam quis posuere ligula. In eu dui molestie, molestie lectus eu, semper lectus. </p>
            
            <h1>Next on the pipeline</h1>
            <p>Duis eu velit tempus erat egestas efficitur. In hac habitasse platea dictumst. Fusce a nunc eget ligula suscipit finibus. Aenean pharetra quis lacus at viverra. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.
            <br/> <br/> Morbi efficitur auctor metus, id mollis lorem pellentesque id. Nullam posuere maximus dui et fringilla. </p>
            
            
            <img id="section2_img" src={img4} alt="" />
            <p id="caption"> Image caption centered this way and I’ll make this a bit longer to indicate the amount of line-height. </p>

            <p>Aenean pharetra quis lacus at viverra. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Aliquam quis posuere ligula. 
            <br/> <br/> In eu dui molestie, molestie lectus eu, semper lectus. Proin at justo lacinia, auctor nisl et, consequat ante. Donec sit amet nisi arcu. Morbi efficitur auctor metus, id mollis lorem pellentesque id. Nullam posuere maximus dui et fringilla. Nulla non volutpat leo.</p>
            <ul>
                <p>A list looks like this:</p>
                <li>First item in the list.</li>
                <li>Second item in the list lorem ipsum sit amer nunc felis dolor lorem ipsum sit amet.</li>
                <li>Third item in the list.</li>
            </ul>
            <p>Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Aliquam quis posuere ligula. </p>
            <p>Thanks for reading. <br/> Mika.</p>
            <div id="social">
                <div id="social1"><img src={img2} alt=""/> <p>Share on Facebook</p> </div>
                <div id="social2"><img src={img3} alt=""/> <p>Share on Twitter</p> </div>
            </div>
            <p>Tags:<a href="">product design</a><a href="">,Culture</a></p>
            <hr/>
            <div id="section2_2">
                <img src={img1} alt=""/>
                <p><b>Mika Matikainen</b> is a Design Founder & Advisor, Berlin School of Creative Leadership Executive MBA participant, Zippie advisor, Wolt co-founder, and Nordic Rose stakeholder.  </p>
            </div>
            
        </div>
    </div>
  )
}

section2.propTypes = {}

export default section2