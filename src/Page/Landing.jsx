import React from 'react'
import PropTypes from 'prop-types'
import Header from '../components/header'
import Section1 from './landing page sections/section1'
import Section2 from './landing page sections/section2'
import Line from '../components/line'
import Section3 from './landing page sections/section3'
import Forum from '../components/forum'
import Footer from '../components/footer'

const Landing = props => {
  return (
    <div>
        <Header/>
        <Section1/>
        <Section2/>
        <Line/>
        <Section3/>
        <Forum/>
        <Footer/>
    
    </div>
  )
}

Landing.propTypes = {}

export default Landing