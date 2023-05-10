import React from 'react'
import { Link } from 'react-router-dom'

import { Helmet } from 'react-helmet'

import './automation-page.css'

const AutomationPage = (props) => {
  return (
    <div className="automation-page-container">
      <Helmet>
        <title>Automation-Page - exported project</title>
        <meta
          property="og:title"
          content="Automation-Page - exported project"
        />
      </Helmet>
      <div className="automation-page-frame-automation-page">
        <div className="automation-page-container1">
          <img
            alt="Rectangle11538"
            src="https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/68c41574-8329-4cf6-81f2-600ca2e73425/916de6c9-a0b7-4c0d-9c51-5b0f7113dde1?org_if_sml=13080"
            className="automation-page-rectangle1"
          />
          <div className="automation-page-menu1">
            <div className="automation-page-group">
              <img
                alt="Vector1541"
                src="/playground_assets/vector1541-i6ap.svg"
                className="automation-page-vector"
              />
            </div>
          </div>
          <div className="automation-page-group1">
            <img
              alt="Vector1543"
              src="/playground_assets/vector1543-1fgm.svg"
              className="automation-page-vector1"
            />
            <img
              alt="Vector1544"
              src="/playground_assets/vector1544-p6ef.svg"
              className="automation-page-vector2"
            />
          </div>
          <span className="automation-page-text">
            <span>
              <span>My Home</span>
              <br></br>
              <span>Light Saver</span>
            </span>
          </span>
          <img
            alt="Rectangle31546"
            src="https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/68c41574-8329-4cf6-81f2-600ca2e73425/2af900ff-6a97-42ce-81d8-c0e4377a1e6c?org_if_sml=1773"
            className="automation-page-create-automation"
          />
          <div className="automation-page-addtask1">
            <div className="automation-page-group2">
              <img
                alt="Vector1549"
                src="/playground_assets/vector1549-uf8.svg"
                className="automation-page-vector3"
              />
            </div>
          </div>
          <img
            alt="Rectangle41550"
            src="https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/68c41574-8329-4cf6-81f2-600ca2e73425/0fd60739-3617-44d8-a88b-80df7d5641be?org_if_sml=1773"
            className="automation-page-rectangle4"
          />
          <img
            alt="Rectangle141511"
            src="https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/68c41574-8329-4cf6-81f2-600ca2e73425/4fea7c28-651b-408a-a4ec-d8fe62f4e0c1?org_if_sml=1774"
            className="automation-page-rectangle14"
          />
          <span className="automation-page-text05">
            <span>Support</span>
          </span>
          <div className="automation-page-help1">
            <div className="automation-page-group3">
              <img
                alt="Vector1511"
                src="/playground_assets/vector1511-l41a.svg"
                className="automation-page-vector4"
              />
            </div>
          </div>
          <span className="automation-page-text07">
            <span>
              <span>What Are</span>
              <br></br>
              <span>Automations?</span>
            </span>
          </span>
          <div className="automation-page-cycle1">
            <div className="automation-page-group4">
              <img
                alt="Vector1553"
                src="/playground_assets/vector1553-pxnm.svg"
                className="automation-page-vector5"
              />
              <img
                alt="Vector1554"
                src="/playground_assets/vector1554-lptb.svg"
                className="automation-page-vector6"
              />
            </div>
          </div>
          <img
            alt="Rectangle131555"
            src="/playground_assets/rectangle131555-zr5.svg"
            className="automation-page-rectangle13"
          />
          <Link to="/main-page" className="automation-page-text12">
            <span>Automations</span>
          </Link>
          <span className="automation-page-create-automation-text">
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
          </span>
        </div>
      </div>
    </div>
  )
}

export default AutomationPage
