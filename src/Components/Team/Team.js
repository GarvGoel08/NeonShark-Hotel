import React from 'react'
import './Team.css'

export default function Team() {
  return (
    <div className="TeamDiv">
        <div className="TeamDiv-2">
          <div className="TeamImgDiv">
            <img
              srcSet='./Images/Team.jpg'
              className="TeamImg"
            />
          </div>
          <div className="TeamContent">
            <div className="TeamContentDiv-1">
              <div className="YellowBlackGradient"></div>
              <div className="TeamContentDiv-2">You’re in good hands</div>
              <div className="TeamContentDiv-3">
                Torquatos nostros? quos dolores eos, qui dolorem ipsum per se
                texit, ne ferae quidem se repellere, idque instituit docere sic:
                omne animal, simul atque integre iudicante itaque aiunt hanc
                quasi involuta aperiri, altera occulta quaedam et voluptatem
                accusantium doloremque.
              </div>
              <div className="LearnMoreMain">
                <div className="LearnMore">Learn more</div>
                <img
                  src='./Images/ArrowYellow.svg'
                  className="LearnMoreArrow"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
  )
}
