import React from 'react'
import "../styles/Home.css"
import CoachCard from '../components/CoachCard'
import photo1 from '../assets/photo-gallery-1.jpg'
import photo2 from '../assets/photo-gallery-2.jpg'
import photo3 from '../assets/photo-gallery-3.jpg'
import photo4 from '../assets/photo-gallery-4.jpg'
import player from '../assets/tennis-player.jpg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheck } from '@fortawesome/free-solid-svg-icons';


const Home = () => {
  return (
    <>
      {/* landing page */}
      <div className="home-container">
        <div className="overlay" />

        <div className="banner">
          <div className="title-text">
            <h1>Improve your tennis!</h1>
            <h3>Start today!</h3>
          </div>

          <button>Get Coaching</button>
        </div>
        
      </div>

      {/* Product prompt section */}
      <div className="home-section2">
        <div className="section2-text">
          <h1>Need a new racket? Grips? Balls?</h1>
          <h3>We've got you covered! Checkout our products!</h3>
        </div>
        <button>Products</button>
      </div>



      {/* Photo gallery */}
      <div className="photo-section">
        <img src={photo1} />
        <img src={photo2} />
        <img src={photo3} />
        <img src={photo4} />
      </div>

      
      {/* Why NGIC section */}

      <div className="why-section">
        <div className="why-col">
          <h1>Why NGIC?</h1>
          <button>Get Coaching!</button>
        </div>
        <div className="why-col">
          <div className="why-point">
            <FontAwesomeIcon icon={faCheck} size="3x" />
            <h3>Professional Coaching Staff!</h3>
          </div>
          <div className="why-point">
            <FontAwesomeIcon icon={faCheck} size="3x" />
            <h3>Top Notch Facilities!</h3>
          </div>
          <div className="why-point">
            <FontAwesomeIcon icon={faCheck} size="3x" />
            <h3>Proven Training Programs!</h3>
          </div>
        </div>
        <div className="why-col">
          <div className="why-point">
            <FontAwesomeIcon icon={faCheck} size="3x" />
            <h3>Tailored to all ages!</h3>
          </div>
          <div className="why-point">
            <FontAwesomeIcon icon={faCheck} size="3x" />
            <h3>Focused on Growth!</h3>
          </div>
          <div className="why-point">
            <FontAwesomeIcon icon={faCheck} size="3x" />
            <h3>Supportive Community!</h3>
          </div>
        </div>
      </div>

      {/* Our Team section */}

      <div className="team-section">
        <h1>Meet the Team!</h1>
        <div className="coach-card">
          <CoachCard name="Grant Dog" pic={player} />
          <CoachCard name="Chai Dogani" pic={player} />
          <CoachCard name="Nicholas Dogsenti" pic={player} />
          <CoachCard name="Ivan Dogushovskyy" pic={player} />
        </div>

      </div>

      <div className="message-section">
        <div className="message-left">
          <h1>Have any questions for us?</h1>
          <h4>Send us a message!</h4>
        </div>
        <div className="message-right">
          <form className="message-form">
            <input type="text" placeholder="Name" />
            <input type="email" placeholder="Email" />
            <textarea rows="5" placeholder="Message" />
            <button type="submit">Submit</button>
          </form>
        </div>
      </div>
    </>
  )
}

export default Home
