import React from 'react'

import DangerousHTML from 'dangerous-html/react'
import { Helmet } from 'react-helmet'

import './page.css'

const Page = (props) => {
  return (
    <div className="page-container">
      <Helmet>
        <title>Page - exported project</title>
        <meta property="og:title" content="Page - exported project" />
      </Helmet>
      <div className="page-div">
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
      <div className="page-div1">
        <DangerousHTML
          html={`<!DOCTYPE html>
<html>
<head>
  <style>
    .toggle {
      position: relative;
      display: inline-block;
      width: 80px;
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
      transform: translateX(46px);
    }

    .toggle-label {
      font-family: Arial, sans-serif;
      font-size: 14px;
      color: #555;
      display: flex;
      align-items: center;
      justify-content: space-between;
      margin-top: 5px;
    }
  </style>
</head>
<body>
  <label class="toggle">
    <input type="checkbox" id="toggleButton">
    <span class="slider"></span>
  </label>
  <div class="toggle-label">
    <span>OFF</span>
    <span>ON</span>
  </div>

  <script>
    const toggleButton = document.getElementById("toggleButton");
    const toggleLabels = document.querySelectorAll(".toggle-label span");

    toggleButton.addEventListener("change", function() {
      if (this.checked) {
        // Toggle is ON
        toggleLabels[0].textContent = "OFF";
        toggleLabels[1].textContent = "ON";
        // Do something when the toggle is switched ON
      } else {
        // Toggle is OFF
        toggleLabels[0].textContent = "OFF";
        toggleLabels[1].textContent = "ON";
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
  )
}

export default Page
