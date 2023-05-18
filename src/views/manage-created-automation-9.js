import React from 'react'
import { Link } from 'react-router-dom'

import DangerousHTML from 'dangerous-html/react'
import { Helmet } from 'react-helmet'

import './manage-created-automation-9.css'

const ManageCreatedAutomation9 = (props) => {
  return (
    <div className="manage-created-automation9-container">
      <Helmet>
        <title>Manage-created-automation-9 - exported project</title>
        <meta
          property="og:title"
          content="Manage-created-automation-9 - exported project"
        />
      </Helmet>
      <div className="manage-created-automation9-main-page">
        <div className="manage-created-automation9-container1">
          <div className="manage-created-automation9-container2">
            <img
              src="/playground_assets/rectangle111011-eeab-200h.png"
              alt="Rectangle111011"
              className="manage-created-automation9-rectangle11"
            />
            <img
              src="/playground_assets/rectangle311011-4d0m-200h.png"
              alt="Rectangle311011"
              className="manage-created-automation9-rectangle31"
            />
            <span className="manage-created-automation9-text">
              <span>Monday</span>
            </span>
            <img
              src="/playground_assets/rectangle321012-yt2c-200h.png"
              alt="Rectangle321012"
              className="manage-created-automation9-rectangle32"
            />
            <img
              src="/playground_assets/rectangle341012-32yg-200h.png"
              alt="Rectangle341012"
              className="manage-created-automation9-rectangle34"
            />
            <img
              src="/playground_assets/rectangle361012-4uwg-200h.png"
              alt="Rectangle361012"
              className="manage-created-automation9-rectangle36"
            />
            <img
              src="/playground_assets/rectangle351013-6r2q-200h.png"
              alt="Rectangle351013"
              className="manage-created-automation9-rectangle35"
            />
            <img
              src="/playground_assets/rectangle371013-vuke-200h.png"
              alt="Rectangle371013"
              className="manage-created-automation9-rectangle37"
            />
            <span className="manage-created-automation9-text02">
              <span>Tuesday</span>
            </span>
            <span className="manage-created-automation9-text04">
              <span>Thursday</span>
            </span>
            <span className="manage-created-automation9-text06">
              <span>Saturday</span>
            </span>
            <span className="manage-created-automation9-text08">
              <span>Friday</span>
            </span>
            <span className="manage-created-automation9-text10">
              <span>Sunday</span>
            </span>
            <span className="manage-created-automation9-text12">
              <span>Wednesday</span>
            </span>
          </div>
          <div className="manage-created-automation9-container3">
            <div className="manage-created-automation9-arrowdropdown1 Content">
              <select
                name="Please select a week"
                className="manage-created-automation9-select"
              >
                <option value="Light Control Automation">
                  Week 16/04/2023
                </option>
                <option value="Option 2">Week 23/04/2023</option>
                <option value="New Option">Week 01/05/2023</option>
                <option value="Option 3">Week 30/04/2023</option>
                <option value="New Option">Week 08/05/2023</option>
              </select>
            </div>
            <span className="manage-created-automation9-text14">
              Please select a week
            </span>
          </div>
          <div className="manage-created-automation9-container4">
            <div className="manage-created-automation9-arrowdropdown11 Content">
              <select
                name="Please select a week"
                className="manage-created-automation9-select1"
              >
                <option value="Option 1" selected>
                  When door is locked
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </option>
                <option value="Option 2">When door is opened</option>
                <option value="Option 3">Motion detection</option>
              </select>
            </div>
            <span className="manage-created-automation9-text15">
              How to do this
            </span>
          </div>
          <div className="manage-created-automation9-container5">
            <div className="manage-created-automation9-arrowdropdown12 Content">
              <select
                name="Please select a week"
                className="manage-created-automation9-select2"
              >
                <option value="Option 1" selected>
                  09:00 AM
                </option>
                <option value="Option 2">09:15 AM</option>
                <option value="Option 3">09:30 AM</option>
                <option value="Option 4">09:45 AM</option>
                <option value="Option 5">10:00 AM</option>
                <option value="Option 6">Customize time</option>
              </select>
            </div>
            <span className="manage-created-automation9-text16">
              <span>Please select a time</span>
              <br></br>
            </span>
          </div>
          <Link
            to="/i-am-away-auto-created-6"
            className="manage-created-automation9-navlink"
          >
            <div className="manage-created-automation9-container6">
              <div className="manage-created-automation9-container7">
                <img
                  alt="Rectangle13444"
                  src="/playground_assets/rectangle13444-5k0i-200h.png"
                  className="manage-created-automation9-rectangle1"
                />
                <div className="manage-created-automation9-group">
                  <img
                    alt="Vector3444"
                    src="/playground_assets/vector3444-11yi.svg"
                    className="manage-created-automation9-vector"
                  />
                  <img
                    alt="Vector3444"
                    src="/playground_assets/vector3444-8l1.svg"
                    className="manage-created-automation9-vector1"
                  />
                </div>
                <span className="manage-created-automation9-text19">
                  <span>
                    <span>My Home</span>
                    <br></br>
                    <span>Light Saver</span>
                  </span>
                </span>
                <img
                  alt="Rectangle133450"
                  src="/playground_assets/rectangle133450-42e.svg"
                  className="manage-created-automation9-rectangle13"
                />
                <span className="manage-created-automation9-text24">
                  Manage I am away
                </span>
              </div>
            </div>
          </Link>
          <div className="manage-created-automation9-div">
            <DangerousHTML
              html={`<!DOCTYPE html>
<html>
<head>
  <style>
    .toggle {
      position: relative;
      display: inline-block;
      width: 60px;
      height: 34px;
    }

    .toggle input {
      display: none;
    }

    .slider {
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background-color: #ccc;
      border-radius: 34px;
      cursor: pointer;
      transition: .4s;
    }

    .slider:before {
      position: absolute;
      content: "";
      height: 26px;
      width: 26px;
      left: 4px;
      bottom: 4px;
      background-color: white;
      border-radius: 50%;
      transition: .4s;
    }

    input:checked + .slider {
      background-color: #2196F3;
    }

    input:checked + .slider:before {
      transform: translateX(26px);
    }
  </style>
</head>
<body>
  <label class="toggle">
    <input type="checkbox" id="toggleButton">
    <span class="slider"></span>
  </label>

  <script>
    const toggleButton = document.getElementById("toggleButton");

    toggleButton.addEventListener("change", function() {
      if (this.checked) {
        // Toggle is ON
        console.log("Toggle is ON");
        // Do something when the toggle is switched ON
      } else {
        // Toggle is OFF
        console.log("Toggle is OFF");
        // Do something when the toggle is switched OFF
      }
    });
  </script>
</body>
</html>
`}
            ></DangerousHTML>
          </div>
          <div className="manage-created-automation9-div1">
            <DangerousHTML
              html={`<!DOCTYPE html>
<html>
<head>
  <style>
    .toggle {
      position: relative;
      display: inline-block;
      width: 60px;
      height: 34px;
    }

    .toggle input {
      display: none;
    }

    .slider {
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background-color: #ccc;
      border-radius: 34px;
      cursor: pointer;
      transition: .4s;
    }

    .slider:before {
      position: absolute;
      content: "";
      height: 26px;
      width: 26px;
      left: 4px;
      bottom: 4px;
      background-color: white;
      border-radius: 50%;
      transition: .4s;
    }

    input:checked + .slider {
      background-color: #2196F3;
    }

    input:checked + .slider:before {
      transform: translateX(26px);
    }
  </style>
</head>
<body>
  <label class="toggle">
    <input type="checkbox" id="toggleButton">
    <span class="slider"></span>
  </label>

  <script>
    const toggleButton = document.getElementById("toggleButton");

    toggleButton.addEventListener("change", function() {
      if (this.checked) {
        // Toggle is ON
        console.log("Toggle is ON");
        // Do something when the toggle is switched ON
      } else {
        // Toggle is OFF
        console.log("Toggle is OFF");
        // Do something when the toggle is switched OFF
      }
    });
  </script>
</body>
</html>
`}
            ></DangerousHTML>
          </div>
          <div className="manage-created-automation9-div2">
            <DangerousHTML
              html={`<!DOCTYPE html>
<html>
<head>
  <style>
    .toggle {
      position: relative;
      display: inline-block;
      width: 60px;
      height: 34px;
    }

    .toggle input {
      display: none;
    }

    .slider {
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background-color: #ccc;
      border-radius: 34px;
      cursor: pointer;
      transition: .4s;
    }

    .slider:before {
      position: absolute;
      content: "";
      height: 26px;
      width: 26px;
      left: 4px;
      bottom: 4px;
      background-color: white;
      border-radius: 50%;
      transition: .4s;
    }

    input:checked + .slider {
      background-color: #2196F3;
    }

    input:checked + .slider:before {
      transform: translateX(26px);
    }
  </style>
</head>
<body>
  <label class="toggle">
    <input type="checkbox" id="toggleButton">
    <span class="slider"></span>
  </label>

  <script>
    const toggleButton = document.getElementById("toggleButton");

    toggleButton.addEventListener("change", function() {
      if (this.checked) {
        // Toggle is ON
        console.log("Toggle is ON");
        // Do something when the toggle is switched ON
      } else {
        // Toggle is OFF
        console.log("Toggle is OFF");
        // Do something when the toggle is switched OFF
      }
    });
  </script>
</body>
</html>
`}
            ></DangerousHTML>
          </div>
          <div className="manage-created-automation9-div3">
            <DangerousHTML
              html={`<!DOCTYPE html>
<html>
<head>
  <style>
    .toggle {
      position: relative;
      display: inline-block;
      width: 60px;
      height: 34px;
    }

    .toggle input {
      display: none;
    }

    .slider {
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background-color: #ccc;
      border-radius: 34px;
      cursor: pointer;
      transition: .4s;
    }

    .slider:before {
      position: absolute;
      content: "";
      height: 26px;
      width: 26px;
      left: 4px;
      bottom: 4px;
      background-color: white;
      border-radius: 50%;
      transition: .4s;
    }

    input:checked + .slider {
      background-color: #2196F3;
    }

    input:checked + .slider:before {
      transform: translateX(26px);
    }
  </style>
</head>
<body>
  <label class="toggle">
    <input type="checkbox" id="toggleButton">
    <span class="slider"></span>
  </label>

  <script>
    const toggleButton = document.getElementById("toggleButton");

    toggleButton.addEventListener("change", function() {
      if (this.checked) {
        // Toggle is ON
        console.log("Toggle is ON");
        // Do something when the toggle is switched ON
      } else {
        // Toggle is OFF
        console.log("Toggle is OFF");
        // Do something when the toggle is switched OFF
      }
    });
  </script>
</body>
</html>
`}
            ></DangerousHTML>
          </div>
          <div className="manage-created-automation9-div4">
            <DangerousHTML
              html={`<!DOCTYPE html>
<html>
<head>
  <style>
    .toggle {
      position: relative;
      display: inline-block;
      width: 60px;
      height: 34px;
    }

    .toggle input {
      display: none;
    }

    .slider {
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background-color: #ccc;
      border-radius: 34px;
      cursor: pointer;
      transition: .4s;
    }

    .slider:before {
      position: absolute;
      content: "";
      height: 26px;
      width: 26px;
      left: 4px;
      bottom: 4px;
      background-color: white;
      border-radius: 50%;
      transition: .4s;
    }

    input:checked + .slider {
      background-color: #2196F3;
    }

    input:checked + .slider:before {
      transform: translateX(26px);
    }
  </style>
</head>
<body>
  <label class="toggle">
    <input type="checkbox" id="toggleButton">
    <span class="slider"></span>
  </label>

  <script>
    const toggleButton = document.getElementById("toggleButton");

    toggleButton.addEventListener("change", function() {
      if (this.checked) {
        // Toggle is ON
        console.log("Toggle is ON");
        // Do something when the toggle is switched ON
      } else {
        // Toggle is OFF
        console.log("Toggle is OFF");
        // Do something when the toggle is switched OFF
      }
    });
  </script>
</body>
</html>
`}
            ></DangerousHTML>
          </div>
          <div className="manage-created-automation9-div5">
            <DangerousHTML
              html={`<!DOCTYPE html>
<html>
<head>
  <style>
    .toggle {
      position: relative;
      display: inline-block;
      width: 60px;
      height: 34px;
    }

    .toggle input {
      display: none;
    }

    .slider {
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background-color: #ccc;
      border-radius: 34px;
      cursor: pointer;
      transition: .4s;
    }

    .slider:before {
      position: absolute;
      content: "";
      height: 26px;
      width: 26px;
      left: 4px;
      bottom: 4px;
      background-color: white;
      border-radius: 50%;
      transition: .4s;
    }

    input:checked + .slider {
      background-color: #2196F3;
    }

    input:checked + .slider:before {
      transform: translateX(26px);
    }
  </style>
</head>
<body>
  <label class="toggle">
    <input type="checkbox" id="toggleButton">
    <span class="slider"></span>
  </label>

  <script>
    const toggleButton = document.getElementById("toggleButton");

    toggleButton.addEventListener("change", function() {
      if (this.checked) {
        // Toggle is ON
        console.log("Toggle is ON");
        // Do something when the toggle is switched ON
      } else {
        // Toggle is OFF
        console.log("Toggle is OFF");
        // Do something when the toggle is switched OFF
      }
    });
  </script>
</body>
</html>
`}
            ></DangerousHTML>
          </div>
          <div className="manage-created-automation9-div6">
            <DangerousHTML
              html={`<!DOCTYPE html>
<html>
<head>
  <style>
    .toggle {
      position: relative;
      display: inline-block;
      width: 60px;
      height: 34px;
    }

    .toggle input {
      display: none;
    }

    .slider {
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background-color: #ccc;
      border-radius: 34px;
      cursor: pointer;
      transition: .4s;
    }

    .slider:before {
      position: absolute;
      content: "";
      height: 26px;
      width: 26px;
      left: 4px;
      bottom: 4px;
      background-color: white;
      border-radius: 50%;
      transition: .4s;
    }

    input:checked + .slider {
      background-color: #2196F3;
    }

    input:checked + .slider:before {
      transform: translateX(26px);
    }
  </style>
</head>
<body>
  <label class="toggle">
    <input type="checkbox" id="toggleButton">
    <span class="slider"></span>
  </label>

  <script>
    const toggleButton = document.getElementById("toggleButton");

    toggleButton.addEventListener("change", function() {
      if (this.checked) {
        // Toggle is ON
        console.log("Toggle is ON");
        // Do something when the toggle is switched ON
      } else {
        // Toggle is OFF
        console.log("Toggle is OFF");
        // Do something when the toggle is switched OFF
      }
    });
  </script>
</body>
</html>
`}
            ></DangerousHTML>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ManageCreatedAutomation9
