import React from 'react'
import { Link } from 'react-router-dom'

import { Helmet } from 'react-helmet'

import './automation-page-4.css'

const AutomationPage4 = (props) => {
  return (
    <div className="automation-page4-container">
      <Helmet>
        <title>Automation-Page-4 - exported project</title>
        <meta
          property="og:title"
          content="Automation-Page-4 - exported project"
        />
      </Helmet>
      <div className="automation-page4-frame-automation-page">
        <div className="automation-page4-container1">
          <img
            alt="Rectangle11538"
            src="https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/68c41574-8329-4cf6-81f2-600ca2e73425/916de6c9-a0b7-4c0d-9c51-5b0f7113dde1?org_if_sml=13080"
            className="automation-page4-rectangle1"
          />
          <div className="automation-page4-menu1">
            <div className="automation-page4-group">
              <img
                alt="Vector1541"
                src="/playground_assets/vector1541-i6ap.svg"
                className="automation-page4-vector"
              />
            </div>
          </div>
          <div className="automation-page4-group1">
            <img
              alt="Vector1543"
              src="/playground_assets/vector1543-1fgm.svg"
              className="automation-page4-vector1"
            />
            <img
              alt="Vector1544"
              src="/playground_assets/vector1544-p6ef.svg"
              className="automation-page4-vector2"
            />
          </div>
          <span className="automation-page4-text">
            <span>
              <span>My Home</span>
              <br></br>
              <span>Light Saver</span>
            </span>
          </span>
          <Link to="/create-automation-5" className="automation-page4-navlink">
            <img
              alt="Rectangle31546"
              src="https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/68c41574-8329-4cf6-81f2-600ca2e73425/2af900ff-6a97-42ce-81d8-c0e4377a1e6c?org_if_sml=1773"
              className="automation-page4-create-automation"
            />
          </Link>
          <Link to="/create-automation-5" className="automation-page4-navlink1">
            <div className="automation-page4-addtask1">
              <div className="automation-page4-group2">
                <img
                  alt="Vector1549"
                  src="/playground_assets/vector1549-uf8.svg"
                  className="automation-page4-vector3"
                />
              </div>
            </div>
          </Link>
          <img
            alt="Rectangle41550"
            src="https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/68c41574-8329-4cf6-81f2-600ca2e73425/0fd60739-3617-44d8-a88b-80df7d5641be?org_if_sml=1773"
            className="automation-page4-rectangle4"
          />
          <Link to="/support-page-7" className="automation-page4-navlink2">
            <img
              alt="Rectangle141511"
              src="https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/68c41574-8329-4cf6-81f2-600ca2e73425/4fea7c28-651b-408a-a4ec-d8fe62f4e0c1?org_if_sml=1774"
              className="automation-page4-rectangle14"
            />
          </Link>
          <Link to="/support-page-7" className="automation-page4-text05">
            <span>Support</span>
          </Link>
          <Link to="/support-page-7" className="automation-page4-navlink3">
            <div className="automation-page4-help1">
              <div className="automation-page4-group3">
                <img
                  alt="Vector1511"
                  src="/playground_assets/vector1511-l41a.svg"
                  className="automation-page4-vector4"
                />
              </div>
            </div>
          </Link>
          <span className="automation-page4-text07">
            <span>
              <span>What Are</span>
              <br></br>
              <span>Automations?</span>
            </span>
          </span>
          <div className="automation-page4-cycle1">
            <div className="automation-page4-group4">
              <img
                alt="Vector1553"
                src="/playground_assets/vector1553-pxnm.svg"
                className="automation-page4-vector5"
              />
              <img
                alt="Vector1554"
                src="/playground_assets/vector1554-lptb.svg"
                className="automation-page4-vector6"
              />
            </div>
          </div>
          <img
            alt="Rectangle131555"
            src="/playground_assets/rectangle131555-zr5.svg"
            className="automation-page4-rectangle13"
          />
          <Link to="/main-page-3" className="automation-page4-text12">
            <span>Automations</span>
          </Link>
          <Link
            to="/create-automation-5"
            className="automation-page4-create-automation-text"
          >
            <span>
              <span>
                Create New
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </span>
              <br></br>
              <span>Automation</span>
            </span>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default AutomationPage4
