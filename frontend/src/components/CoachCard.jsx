import React from 'react'
import '../styles/CoachCard.css'

const CoachCard = (props) => {
  return (
    <div className="card">
      <div className="photo">
        <img src={props.pic} />
      </div>
      <div className="name">
        <h4>{props.name}</h4>
      </div>
    </div>
  )
}

export default CoachCard
