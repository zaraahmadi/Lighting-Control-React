import React from 'react'
import { Link } from 'react-router-dom'

import { Helmet } from 'react-helmet'

import Group from '../components/group'
import './sign-up-page-2.css'

const SignUpPage2 = (props) => {
  return (
    <div className="sign-up-page2-container">
      <Helmet>
        <title>Sign-up-page-2 - exported project</title>
        <meta property="og:title" content="Sign-up-page-2 - exported project" />
      </Helmet>
      <div className="sign-up-page2-frame-sign-up-page">
        <Link to="/main-page-3" className="sign-up-page2-navlink">
          <img
            alt="Rectangle13652"
            src="https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/68c41574-8329-4cf6-81f2-600ca2e73425/5cadc282-ecd1-447b-87c1-fc002af74a42?org_if_sml=13080"
            className="sign-up-page2-rectangle1"
          />
        </Link>
        <div className="sign-up-page2-menu1">
          <div className="sign-up-page2-container1">
            <Group rootClassName="group-root-class-name"></Group>
          </div>
        </div>
        <Link to="/main-page-3" className="sign-up-page2-navlink1">
          <div className="sign-up-page2-group">
            <img
              alt="Vector3652"
              src="/playground_assets/vector3652-a5q.svg"
              className="sign-up-page2-vector"
            />
            <img
              alt="Vector3652"
              src="/playground_assets/vector3652-dc12.svg"
              className="sign-up-page2-vector1"
            />
          </div>
        </Link>
        <Link to="/main-page-3" className="sign-up-page2-my-home-ligh-save">
          <span>
            <span>My Home</span>
            <br></br>
            <span>Light Saver</span>
          </span>
        </Link>
        <Link to="/main-page-3" className="sign-up-page2-navlink2">
          <img
            alt="Rectangle153653"
            src="/playground_assets/rectangle153653-miva.svg"
            className="sign-up-page2-rectangle15"
          />
        </Link>
        <span className="sign-up-page2-sign-up-on-top">
          <span>Sign Up</span>
        </span>
        <Link to="/main-page-3" className="sign-up-page2-sign-up-click">
          <span>Sign Up</span>
        </Link>
        <Link to="/" className="sign-up-page2-already-have-an-account-sign-in">
          <span className="sign-up-page2-text06">Already have an account?</span>
          <span> Sign In</span>
        </Link>
        <span className="sign-up-page2-text08">
          <span>By signing up , you agree to our privacy policy</span>
        </span>
      </div>
      <input
        type="email"
        placeholder="Email"
        className="sign-up-page2-input input"
      />
      <input
        type="password"
        placeholder="Password"
        className="sign-up-page2-input1 input"
      />
      <input
        type="password"
        placeholder="Confirm Password"
        className="sign-up-page2-input2 input"
      />
    </div>
  )
}

export default SignUpPage2
