import React from 'react';
import './Team-1.css';

export default function Team1() {
  return (
    <div className="Team-1-Div">
      <div className="Team-1-Div-2">
        <div className="Team-1-Content">
          <div className="Team-1-YellowBlackGradient"></div>
          <div className="Team-1-ContentDiv-2">You’re in good hands</div>
          <div className="Team-1-ContentDiv-3">
            Torquatos nostros? quos dolores eos, qui dolorem ipsum per se
            texit, ne ferae quidem se repellere, idque instituit docere sic:
            omne animal, simul atque integre iudicante itaque aiunt hanc
            quasi involuta aperiri, altera occulta quaedam et voluptatem
            accusantium doloremque.
          </div>
          <div className="Team-1-LearnMoreMain">
            <div className="Team-1-LearnMore">Learn more</div>
            <img
              src='./Images/ArrowYellow.svg'
              className="Team-1-LearnMoreArrow"
            />
          </div>
        </div>
        <div className="Team-1-ImgDiv">
          <img
            srcSet='./Images/Team.jpg'
            className="Team-1-Img"
          />
        </div>
      </div>
    </div>
  );
}
