import React from 'react'
import { Link } from 'react-router-dom'

import { Helmet } from 'react-helmet'

import './create-automation.css'

const CreateAutomation = (props) => {
  return (
    <div className="create-automation-container">
      <Helmet>
        <title>Create-automation - exported project</title>
        <meta
          property="og:title"
          content="Create-automation - exported project"
        />
      </Helmet>
      <img
        alt="Rectangle11564"
        src="https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/68c41574-8329-4cf6-81f2-600ca2e73425/4c488781-cce1-497c-acf2-27bf7b4e3d81?org_if_sml=13080"
        className="create-automation-rectangle1"
      />
      <img
        alt="Rectangle171512"
        src="https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/68c41574-8329-4cf6-81f2-600ca2e73425/35894925-44cf-4062-90cf-8deef20a4173?org_if_sml=13084"
        className="create-automation-rectangle17"
      />
      <img
        alt="Rectangle181512"
        src="https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/68c41574-8329-4cf6-81f2-600ca2e73425/4a1b6069-21d4-493d-9e36-8a7b16a700ad?org_if_sml=13080"
        className="create-automation-rectangle18"
      />
      <div className="create-automation-menu1">
        <div className="create-automation-group">
          <img
            alt="Vector1567"
            src="/playground_assets/vector1567-6ldi.svg"
            className="create-automation-vector"
          />
        </div>
      </div>
      <div className="create-automation-group1">
        <img
          alt="Vector1569"
          src="/playground_assets/vector1569-dgp.svg"
          className="create-automation-vector1"
        />
        <img
          alt="Vector1570"
          src="/playground_assets/vector1570-n54j.svg"
          className="create-automation-vector2"
        />
      </div>
      <span className="create-automation-text">
        <span>
          <span>My Home</span>
          <br></br>
          <span>Light Saver</span>
        </span>
      </span>
      <div className="create-automation-addtask1">
        <div className="create-automation-group2">
          <img
            alt="Vector1575"
            src="/playground_assets/vector1575-tux.svg"
            className="create-automation-vector3"
          />
        </div>
      </div>
      <img
        alt="Rectangle131582"
        src="/playground_assets/rectangle131582-rx7m.svg"
        className="create-automation-rectangle13"
      />
      <span className="create-automation-text05">
        <span>Create New Automation</span>
      </span>
      <span className="create-automation-text07">
        <span>Cancel</span>
      </span>
      <Link to="/create-automation" className="create-automation-text09">
        <span>Save</span>
      </Link>
      <input
        type="text"
        placeholder="New Automation Name......."
        className="create-automation-input input"
      />
      <div
        data-thq="thq-dropdown"
        className="create-automation-thq-dropdown list-item"
      >
        <div
          data-thq="thq-dropdown-toggle"
          className="create-automation-dropdown-toggle"
        >
          <span className="create-automation-text11">
            When to turn off lights
          </span>
          <div
            data-thq="thq-dropdown-arrow"
            className="create-automation-dropdown-arrow"
          >
            <svg viewBox="0 0 1024 1024" className="create-automation-icon">
              <path d="M426 726v-428l214 214z"></path>
            </svg>
          </div>
        </div>
        <ul
          data-thq="thq-dropdown-list"
          className="create-automation-dropdown-list"
        >
          <li
            data-thq="thq-dropdown"
            className="create-automation-dropdown list-item"
          >
            <div
              data-thq="thq-dropdown-toggle"
              className="create-automation-dropdown-toggle01"
            >
              <span className="create-automation-text12">
                Select days of week
              </span>
              <div
                data-thq="thq-dropdown-arrow"
                className="create-automation-dropdown-arrow1"
              >
                <svg
                  viewBox="0 0 1024 1024"
                  className="create-automation-icon02"
                >
                  <path d="M426 726v-428l214 214z"></path>
                </svg>
              </div>
            </div>
            <ul
              data-thq="thq-dropdown-list"
              className="create-automation-dropdown-list01"
            >
              <li
                data-thq="thq-dropdown"
                className="create-automation-dropdown01 list-item"
              >
                <div
                  data-thq="thq-dropdown-toggle"
                  className="create-automation-dropdown-toggle02"
                >
                  <span className="create-automation-text13">
                    Monday 22/05/2023
                  </span>
                </div>
              </li>
              <li
                data-thq="thq-dropdown"
                className="create-automation-dropdown02 list-item"
              >
                <div
                  data-thq="thq-dropdown-toggle"
                  className="create-automation-dropdown-toggle03"
                >
                  <span className="create-automation-text14">
                    Tuesday 23/05/2023
                  </span>
                </div>
              </li>
              <li
                data-thq="thq-dropdown"
                className="create-automation-dropdown03 list-item"
              >
                <div
                  data-thq="thq-dropdown-toggle"
                  className="create-automation-dropdown-toggle04"
                >
                  <span className="create-automation-text15">
                    <span>Wednesday 24/05/2023</span>
                    <br></br>
                    <br></br>
                  </span>
                </div>
              </li>
              <li
                data-thq="thq-dropdown"
                className="create-automation-dropdown04 list-item"
              >
                <div
                  data-thq="thq-dropdown-toggle"
                  className="create-automation-dropdown-toggle05"
                >
                  <span className="create-automation-text19">
                    <span>
                      Thursday 25/05/2023        
                      <span
                        dangerouslySetInnerHTML={{
                          __html: ' ',
                        }}
                      />
                    </span>
                    <br></br>
                  </span>
                </div>
              </li>
              <li
                data-thq="thq-dropdown"
                className="create-automation-dropdown05 list-item"
              >
                <div
                  data-thq="thq-dropdown-toggle"
                  className="create-automation-dropdown-toggle06"
                >
                  <span className="create-automation-text22">
                    <span>
                      Friday 26/05/2023        
                      <span
                        dangerouslySetInnerHTML={{
                          __html: ' ',
                        }}
                      />
                    </span>
                    <br></br>
                  </span>
                </div>
              </li>
            </ul>
          </li>
          <li
            data-thq="thq-dropdown"
            className="create-automation-dropdown06 list-item"
          >
            <div
              data-thq="thq-dropdown-toggle"
              className="create-automation-select-a-time-drop-down"
            >
              <span className="create-automation-text25">
                Select a specific time
              </span>
              <div
                data-thq="thq-dropdown-arrow"
                className="create-automation-dropdown-arrow2"
              >
                <svg
                  viewBox="0 0 1024 1024"
                  className="create-automation-icon04"
                >
                  <path d="M426 726v-428l214 214z"></path>
                </svg>
              </div>
            </div>
            <ul
              data-thq="thq-dropdown-list"
              className="create-automation-dropdown-list02"
            >
              <li
                data-thq="thq-dropdown"
                className="create-automation-dropdown07 list-item"
              >
                <div
                  data-thq="thq-dropdown-toggle"
                  className="create-automation-dropdown-toggle07"
                >
                  <span className="create-automation-text26">9:00 AM</span>
                </div>
              </li>
              <li
                data-thq="thq-dropdown"
                className="create-automation-dropdown08 list-item"
              >
                <div
                  data-thq="thq-dropdown-toggle"
                  className="create-automation-dropdown-toggle08"
                >
                  <span className="create-automation-text27">9:15 AM</span>
                </div>
              </li>
              <li
                data-thq="thq-dropdown"
                className="create-automation-dropdown09 list-item"
              >
                <div
                  data-thq="thq-dropdown-toggle"
                  className="create-automation-dropdown-toggle09"
                >
                  <span className="create-automation-text28">9:30 AM</span>
                </div>
              </li>
              <li
                data-thq="thq-dropdown"
                className="create-automation-dropdown10 list-item"
              >
                <div
                  data-thq="thq-dropdown-toggle"
                  className="create-automation-dropdown-toggle10"
                >
                  <span className="create-automation-text29">
                    9:45 AM
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </span>
                </div>
              </li>
            </ul>
          </li>
          <li
            data-thq="thq-dropdown"
            className="create-automation-dropdown11 list-item"
          ></li>
        </ul>
      </div>
      <div
        data-thq="thq-dropdown"
        className="create-automation-select-lights list-item"
      >
        <div
          data-thq="thq-dropdown-toggle"
          className="create-automation-select-lights1"
        >
          <span className="create-automation-text30">Select lights</span>
          <div
            data-thq="thq-dropdown-arrow"
            className="create-automation-dropdown-arrow3"
          >
            <svg viewBox="0 0 1024 1024" className="create-automation-icon06">
              <path d="M426 726v-428l214 214z"></path>
            </svg>
          </div>
        </div>
        <ul
          data-thq="thq-dropdown-list"
          className="create-automation-dropdown-list03"
        >
          <li
            data-thq="thq-dropdown"
            className="create-automation-ground-floor list-item"
          >
            <div
              data-thq="thq-dropdown-toggle"
              className="create-automation-dropdown-toggle11"
            >
              <span className="create-automation-text31">Ground Floor</span>
              <div
                data-thq="thq-dropdown-arrow"
                className="create-automation-dropdown-arrow4"
              >
                <svg
                  viewBox="0 0 1024 1024"
                  className="create-automation-icon08"
                >
                  <path d="M426 726v-428l214 214z"></path>
                </svg>
              </div>
            </div>
            <ul
              data-thq="thq-dropdown-list"
              className="create-automation-dropdown-list04"
            >
              <li
                data-thq="thq-dropdown"
                className="create-automation-dropdown12 list-item"
              >
                <div
                  data-thq="thq-dropdown-toggle"
                  className="create-automation-living-room"
                >
                  <span className="create-automation-text32">Living Room</span>
                </div>
              </li>
              <li
                data-thq="thq-dropdown"
                className="create-automation-kitchen list-item"
              >
                <div
                  data-thq="thq-dropdown-toggle"
                  className="create-automation-dropdown-toggle12"
                >
                  <span className="create-automation-text33">Kitchen</span>
                </div>
                <ul
                  data-thq="thq-dropdown-list"
                  className="create-automation-dropdown-list05"
                >
                  <li
                    data-thq="thq-dropdown"
                    className="create-automation-dropdown13 list-item"
                  >
                    <div
                      data-thq="thq-dropdown-toggle"
                      className="create-automation-dropdown-toggle13"
                    >
                      <span className="create-automation-text34">
                        Sub-menu Item
                      </span>
                    </div>
                  </li>
                  <li
                    data-thq="thq-dropdown"
                    className="create-automation-dropdown14 list-item"
                  >
                    <div
                      data-thq="thq-dropdown-toggle"
                      className="create-automation-dropdown-toggle14"
                    >
                      <span className="create-automation-text35">
                        Sub-menu Item
                      </span>
                    </div>
                  </li>
                  <li
                    data-thq="thq-dropdown"
                    className="create-automation-dropdown15 list-item"
                  >
                    <div
                      data-thq="thq-dropdown-toggle"
                      className="create-automation-dropdown-toggle15"
                    >
                      <span className="create-automation-text36">
                        Sub-menu Item
                      </span>
                    </div>
                  </li>
                </ul>
              </li>
              <li
                data-thq="thq-dropdown"
                className="create-automation-dropdown16 list-item"
              >
                <div
                  data-thq="thq-dropdown-toggle"
                  className="create-automation-dropdown-toggle16"
                >
                  <span className="create-automation-text37">Bathroom</span>
                </div>
              </li>
              <li
                data-thq="thq-dropdown"
                className="create-automation-dropdown17 list-item"
              >
                <div
                  data-thq="thq-dropdown-toggle"
                  className="create-automation-dropdown-toggle17"
                >
                  <span className="create-automation-text38">Corridor</span>
                </div>
              </li>
            </ul>
          </li>
          <li
            data-thq="thq-dropdown"
            className="create-automation-first-floor list-item"
          >
            <div
              data-thq="thq-dropdown-toggle"
              className="create-automation-dropdown-toggle18"
            >
              <span className="create-automation-text39">First Floor</span>
              <div
                data-thq="thq-dropdown-arrow"
                className="create-automation-dropdown-arrow5"
              >
                <svg
                  viewBox="0 0 1024 1024"
                  className="create-automation-icon10"
                >
                  <path d="M426 726v-428l214 214z"></path>
                </svg>
              </div>
            </div>
            <ul
              data-thq="thq-dropdown-list"
              className="create-automation-dropdown-list06"
            >
              <li
                data-thq="thq-dropdown"
                className="create-automation-dropdown18 list-item"
              >
                <div
                  data-thq="thq-dropdown-toggle"
                  className="create-automation-dropdown-toggle19"
                >
                  <span className="create-automation-text40">
                    <span>Master Bedroom</span>
                    <br></br>
                    <br></br>
                  </span>
                </div>
              </li>
              <li
                data-thq="thq-dropdown"
                className="create-automation-dropdown19 list-item"
              >
                <div
                  data-thq="thq-dropdown-toggle"
                  className="create-automation-dropdown-toggle20"
                >
                  <span className="create-automation-text44">Bedroom 2</span>
                </div>
              </li>
              <li
                data-thq="thq-dropdown"
                className="create-automation-dropdown20 list-item"
              >
                <div
                  data-thq="thq-dropdown-toggle"
                  className="create-automation-dropdown-toggle21"
                >
                  <span className="create-automation-text45">Bathroom</span>
                </div>
              </li>
              <li
                data-thq="thq-dropdown"
                className="create-automation-dropdown21 list-item"
              >
                <div
                  data-thq="thq-dropdown-toggle"
                  className="create-automation-dropdown-toggle22"
                >
                  <span className="create-automation-text46">Corriodor</span>
                </div>
              </li>
              <li
                data-thq="thq-dropdown"
                className="create-automation-dropdown22 list-item"
              >
                <div
                  data-thq="thq-dropdown-toggle"
                  className="create-automation-dropdown-toggle23"
                >
                  <span className="create-automation-text47">Office</span>
                </div>
              </li>
            </ul>
          </li>
          <li
            data-thq="thq-dropdown"
            className="create-automation-garden list-item"
          >
            <div
              data-thq="thq-dropdown-toggle"
              className="create-automation-dropdown-toggle24"
            >
              <span className="create-automation-text48">Garden</span>
              <div
                data-thq="thq-dropdown-arrow"
                className="create-automation-dropdown-arrow6"
              >
                <svg
                  viewBox="0 0 1024 1024"
                  className="create-automation-icon12"
                >
                  <path d="M426 726v-428l214 214z"></path>
                </svg>
              </div>
            </div>
            <ul
              data-thq="thq-dropdown-list"
              className="create-automation-dropdown-list07"
            >
              <li
                data-thq="thq-dropdown"
                className="create-automation-dropdown23 list-item"
              >
                <div
                  data-thq="thq-dropdown-toggle"
                  className="create-automation-dropdown-toggle25"
                >
                  <span className="create-automation-text49">Patio Lights</span>
                </div>
              </li>
              <li
                data-thq="thq-dropdown"
                className="create-automation-dropdown24 list-item"
              >
                <div
                  data-thq="thq-dropdown-toggle"
                  className="create-automation-dropdown-toggle26"
                >
                  <span className="create-automation-text50">
                    Pathway Lights
                  </span>
                </div>
              </li>
              <li
                data-thq="thq-dropdown"
                className="create-automation-dropdown25 list-item"
              >
                <div
                  data-thq="thq-dropdown-toggle"
                  className="create-automation-dropdown-toggle27"
                >
                  <span className="create-automation-text51">
                    Garden Lights
                  </span>
                </div>
              </li>
              <li
                data-thq="thq-dropdown"
                className="create-automation-dropdown26 list-item"
              ></li>
            </ul>
          </li>
          <li
            data-thq="thq-dropdown"
            className="create-automation-dropdown27 list-item"
          >
            <div
              data-thq="thq-dropdown-toggle"
              className="create-automation-dropdown-toggle28"
            >
              <span className="create-automation-text52">All lights</span>
              <div
                data-thq="thq-dropdown-arrow"
                className="create-automation-dropdown-arrow7"
              >
                <svg
                  viewBox="0 0 1024 1024"
                  className="create-automation-icon14"
                >
                  <path d="M426 726v-428l214 214z"></path>
                </svg>
              </div>
            </div>
            <ul
              data-thq="thq-dropdown-list"
              className="create-automation-dropdown-list08"
            >
              <li
                data-thq="thq-dropdown"
                className="create-automation-dropdown28 list-item"
              >
                <div
                  data-thq="thq-dropdown-toggle"
                  className="create-automation-dropdown-toggle29"
                >
                  <span className="create-automation-text53">
                    Select All Lights
                  </span>
                </div>
              </li>
              <li
                data-thq="thq-dropdown"
                className="create-automation-dropdown29 list-item"
              ></li>
              <li
                data-thq="thq-dropdown"
                className="create-automation-dropdown30 list-item"
              ></li>
              <li
                data-thq="thq-dropdown"
                className="create-automation-dropdown31 list-item"
              ></li>
            </ul>
          </li>
        </ul>
      </div>
      <div
        data-thq="thq-dropdown"
        className="create-automation-choose-an-action list-item"
      >
        <div
          data-thq="thq-dropdown-toggle"
          className="create-automation-dropdown-toggle30"
        >
          <span className="create-automation-text54">Choose an action</span>
          <div
            data-thq="thq-dropdown-arrow"
            className="create-automation-dropdown-arrow8"
          >
            <svg viewBox="0 0 1024 1024" className="create-automation-icon16">
              <path d="M426 726v-428l214 214z"></path>
            </svg>
          </div>
        </div>
        <ul
          data-thq="thq-dropdown-list"
          className="create-automation-dropdown-list09"
        >
          <li
            data-thq="thq-dropdown"
            className="create-automation-dropdown32 list-item"
          >
            <div
              data-thq="thq-dropdown-toggle"
              className="create-automation-dropdown-toggle31"
            >
              <span className="create-automation-text55">Turn on lights</span>
            </div>
          </li>
          <li
            data-thq="thq-dropdown"
            className="create-automation-dropdown33 list-item"
          >
            <div
              data-thq="thq-dropdown-toggle"
              className="create-automation-dropdown-toggle32"
            >
              <span className="create-automation-text56">Turn off lights</span>
            </div>
          </li>
          <li
            data-thq="thq-dropdown"
            className="create-automation-dropdown34 list-item"
          >
            <div
              data-thq="thq-dropdown-toggle"
              className="create-automation-dropdown-toggle33"
            >
              <span className="create-automation-text57">Schedule lights</span>
            </div>
          </li>
          <li
            data-thq="thq-dropdown"
            className="create-automation-dropdown35 list-item"
          >
            <div
              data-thq="thq-dropdown-toggle"
              className="create-automation-dropdown-toggle34"
            >
              <span className="create-automation-text58">
                Set a timer for lights
              </span>
            </div>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default CreateAutomation
