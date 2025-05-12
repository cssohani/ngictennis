import React from 'react'
import '../styles/About.css'
import mainPic from '../assets/about-pic-1.jpg'
import historyPic from '../assets/history-pic.jpg'

const About = () => {
  return (
    <>
      <div className="about-section">
        <div className="main-text">
          <h1>About Us</h1>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
        </div>
        <div className="main-picture">
          <div className="main-img">
            <img src={mainPic} />
          </div>
        </div>
      </div>
      
      <div className="history-section">
        <div className="history-picture">
          <div className="history-img">
            <img src={historyPic} />
          </div>
        </div>
        
        <div className="history-text">
          <h1>Our History</h1>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
        </div>
        

      </div>
      
    </>
  )
}

export default About
