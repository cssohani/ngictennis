import React from 'react'
import '../styles/Coaching.css'
import court from '../assets/court.jpg'

const Coaching = () => {
  return (
    <>
      <div className="coaching-header">
        <div className="header-text">
          <h1>Unlock your true potential!</h1>
          <h4>Check out our programs below!</h4>
        </div>
      </div>
      <div className="plans-container">
        <div className="plans">
          <div className="plan-card">
            <h1>Basic</h1>
            <ul>
              <li>Tennis rules and scoring</li>
              <li>Basic shot techniques</li>
              <li>Proper grip and footwork</li>
              <li>Coordination and movement</li>
            </ul>
            <button>Add to Cart</button>
          </div>
          <div className="plan-card">
            <h1>Intermediate</h1>
            <ul>
              <li>Refinement of strokes</li>
              <li>Introduction to topspin</li>
              <li>Matchplay strategy</li>
              <li>Consistency drills</li>
            </ul>
            <button>Add to Cart</button>
          </div>
          <div className="plan-card">
            <h1>Advanced</h1>
            <ul>
              <li>Endurance training</li>
              <li>Advanced shot techniques</li>
              <li>Match tactical training</li>
              <li>1 on 1 training</li>
            </ul>
            <button>Add to Cart</button>
          </div>
        </div>

      </div>
    </>
  )
}

export default Coaching
