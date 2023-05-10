import React from 'react'
import { Link } from 'react-router-dom'

import { Helmet } from 'react-helmet'

import './frame-sign-in-page.css'

const Frame1SignInPage = (props) => {
  return (
    <div className="frame-sign-in-page-container">
      <Helmet>
        <title>exported project</title>
      </Helmet>
      <div className="frame-sign-in-page-container1">
        <div className="frame-sign-in-page-frame7">
          <img
            alt="Rectangle183"
            src="/playground_assets/rectangle183-1zk-200h.png"
            className="frame-sign-in-page-rectangle1"
          />
        </div>
        <div className="frame-sign-in-page-menu1">
          <div className="frame-sign-in-page-group">
            <img
              alt="Vector740"
              src="/playground_assets/vector740-b6ss.svg"
              className="frame-sign-in-page-vector"
            />
          </div>
        </div>
        <div>
          <img
            alt="Vector753"
            src="/playground_assets/vector753-1hwo.svg"
            className="frame-sign-in-page-vector1"
          />
          <img
            alt="Vector754"
            src="/playground_assets/vector754-cwo.svg"
            className="frame-sign-in-page-vector2"
          />
        </div>
        <div className="frame-sign-in-page-group1 frame-sign-in-page-group1">
          <div className="frame-sign-in-page-frame6">
            <span className="frame-sign-in-page-text">
              <span>
                <span>My Home</span>
                <br></br>
                <span>Light Saver</span>
              </span>
            </span>
          </div>
        </div>
        <Link to="/main-page" className="frame-sign-in-page-navlink">
          <img
            alt="Frame11052"
            src="/playground_assets/frame11052-lrsp.svg"
            className="frame-sign-in-page-frame1"
          />
        </Link>
        <span className="frame-sign-in-page-text05">
          <span>Sign in</span>
        </span>
        <Link to="/main-page" className="frame-sign-in-page-navlink1">
          <div className="frame-sign-in-page-login-button-text">
            <span className="frame-sign-in-page-text07">
              <span>Log In</span>
            </span>
          </div>
        </Link>
        <Link
          to="/sign-up-page"
          className="frame-sign-in-page-dont-have-an-account-sign-up"
        >
          <span className="frame-sign-in-page-text09">
            Don’t have an account?
            <span
              dangerouslySetInnerHTML={{
                __html: ' ',
              }}
            />
          </span>
          <span>Sign Up</span>
        </Link>
        <span className="frame-sign-in-page-text11">
          <span>Forgot Password?</span>
        </span>
      </div>
      <input
        type="email"
        placeholder="Email"
        className="frame-sign-in-page-input input"
      />
      <input
        type="password"
        placeholder="Password"
        className="frame-sign-in-page-input1 input"
      />
    </div>
  )
}

export default Frame1SignInPage
