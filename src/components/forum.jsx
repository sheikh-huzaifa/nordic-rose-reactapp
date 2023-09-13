import React from 'react'
import PropTypes from 'prop-types'

const forum = props => {
  return (
    <div id="forum">
            <hr/>
            <div>
                <h1>Sign up for the newsletter</h1>
                <p>If you want relevant updates occasionally, sign up for the private newsletter. Your email is never shared. </p>
                <form action="">
                    <input type="text" placeholder="Enter Your Email..."/><button>Subscribe</button>
                </form>
            </div>

        </div>
  )
}

forum.propTypes = {}

export default forum