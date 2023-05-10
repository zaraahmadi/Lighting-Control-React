import React from 'react'
import { Link } from 'react-router-dom'

import { Helmet } from 'react-helmet'

import Group from '../components/group'
import './sign-up-page.css'

const SignUpPage = (props) => {
  return (
    <div className="sign-up-page-container">
      <Helmet>
        <title>SignUpPage - exported project</title>
        <meta property="og:title" content="SignUpPage - exported project" />
      </Helmet>
      <div className="sign-up-page-frame-sign-up-page">
        <img
          alt="Rectangle13652"
          src="https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/68c41574-8329-4cf6-81f2-600ca2e73425/5cadc282-ecd1-447b-87c1-fc002af74a42?org_if_sml=13080"
          className="sign-up-page-rectangle1"
        />
        <div className="sign-up-page-menu1">
          <div className="sign-up-page-container1">
            <Group rootClassName="group-root-class-name"></Group>
          </div>
        </div>
        <div className="sign-up-page-group">
          <img
            alt="Vector3652"
            src="/playground_assets/vector3652-a5q.svg"
            className="sign-up-page-vector"
          />
          <img
            alt="Vector3652"
            src="/playground_assets/vector3652-dc12.svg"
            className="sign-up-page-vector1"
          />
        </div>
        <span className="sign-up-page-my-home-ligh-save">
          <span>
            <span>My Home</span>
            <br></br>
            <span>Light Saver</span>
          </span>
        </span>
        <Link to="/main-page" className="sign-up-page-navlink">
          <img
            alt="Rectangle153653"
            src="/playground_assets/rectangle153653-miva.svg"
            className="sign-up-page-rectangle15"
          />
        </Link>
        <span className="sign-up-page-sign-up-on-top">
          <span>Sign Up</span>
        </span>
        <Link to="/main-page" className="sign-up-page-sign-up-click">
          <span>Sign Up</span>
        </Link>
        <Link to="/" className="sign-up-page-already-have-an-account-sign-in">
          <span className="sign-up-page-text06">Already have an account?</span>
          <span> Sign In</span>
        </Link>
        <span className="sign-up-page-text08">
          <span>By signing up , you agree to our privacy policy</span>
        </span>
      </div>
      <input
        type="email"
        placeholder="Email"
        className="sign-up-page-input input"
      />
      <input
        type="password"
        placeholder="Password"
        className="sign-up-page-input1 input"
      />
      <input
        type="password"
        placeholder="Confirm Password"
        className="sign-up-page-input2 input"
      />
    </div>
  )
}

export default SignUpPage
