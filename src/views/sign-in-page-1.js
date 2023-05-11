import React from 'react'
import { Link } from 'react-router-dom'

import { Helmet } from 'react-helmet'

import './sign-in-page-1.css'

const SignInPage1 = (props) => {
  return (
    <div className="sign-in-page1-container">
      <Helmet>
        <title>exported project</title>
      </Helmet>
      <div className="sign-in-page1-container1">
        <div className="sign-in-page1-frame7">
          <img
            alt="Rectangle183"
            src="/playground_assets/rectangle183-1zk-200h.png"
            className="sign-in-page1-rectangle1"
          />
        </div>
        <div className="sign-in-page1-menu1">
          <div className="sign-in-page1-group">
            <img
              alt="Vector740"
              src="/playground_assets/vector740-b6ss.svg"
              className="sign-in-page1-vector"
            />
          </div>
        </div>
        <div>
          <img
            alt="Vector753"
            src="/playground_assets/vector753-1hwo.svg"
            className="sign-in-page1-vector1"
          />
          <img
            alt="Vector754"
            src="/playground_assets/vector754-cwo.svg"
            className="sign-in-page1-vector2"
          />
        </div>
        <div className="sign-in-page1-group1 sign-in-page1-group1">
          <div className="sign-in-page1-frame6">
            <span className="sign-in-page1-text">
              <span>
                <span>My Home</span>
                <br></br>
                <span>Light Saver</span>
              </span>
            </span>
          </div>
        </div>
        <Link to="/main-page-3" className="sign-in-page1-navlink">
          <img
            alt="Frame11052"
            src="/playground_assets/frame11052-lrsp.svg"
            className="sign-in-page1-frame1"
          />
        </Link>
        <span className="sign-in-page1-text05">
          <span>Sign in</span>
        </span>
        <Link to="/main-page-3" className="sign-in-page1-navlink1">
          <div className="sign-in-page1-login-button-text">
            <span className="sign-in-page1-text07">
              <span>Log In</span>
            </span>
          </div>
        </Link>
        <Link
          to="/sign-up-page-2"
          className="sign-in-page1-dont-have-an-account-sign-up"
        >
          <span className="sign-in-page1-text09">
            Don’t have an account?
            <span
              dangerouslySetInnerHTML={{
                __html: ' ',
              }}
            />
          </span>
          <span>Sign Up</span>
        </Link>
        <span className="sign-in-page1-text11">
          <span>Forgot Password?</span>
        </span>
      </div>
      <input
        type="email"
        placeholder="Email"
        className="sign-in-page1-input input"
      />
      <input
        type="password"
        placeholder="Password"
        className="sign-in-page1-input1 input"
      />
    </div>
  )
}

export default SignInPage1
