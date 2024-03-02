import React from "react";
import "./Reviews.css";

export default function Review() {
  return (
    <div style={{flexGrow:'1'}} className="Reviewss">
      <div className="ReviewText">
        <div className="YellowBlackGradient-2"></div>
        <div className="ReviewContent">“Certe, inquam, pertinax non existimant oportere exquisitis rationibus conquisitis de quo enim ipsam. Torquem detraxit hosti et quidem faciunt, ut aut.”</div>
      </div>
      <div className="ReviewDiv">
        <img loading="lazy" src="./Images/ReviewProfile.png" className="ReviewImg" />
        <div className="ReviewDiv-2">
          <div className="ReviewDiv-3">Lara Madrigal</div>
          <div className="ReviewDiv-4">Client</div>
        </div>
      </div>
    </div>
  );
}
