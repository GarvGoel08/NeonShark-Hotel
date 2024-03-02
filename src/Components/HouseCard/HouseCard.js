import React from 'react';
import './HouseCard.css';

export default function HouseCard() {
  return (
    <div className="HouseCard" onClick={() => (window.location.href='/hotel')}>
      <img
        src='./Images/HouseSampleImg.png'
        className="HouseCard-Img"
      />
      <div className="HouseCard-Title">Malto House</div>
      <div className="HouseCard-Divider" />
      <div className="HouseCard-Details">
        <div className="HouseCard-Item">
          <img
            src='./Images/Bed.svg'
            className="HouseCard-Item-Img"
          />
          <div className="HouseCard-Item-Value">4</div>
        </div>
        <div className="HouseCard-ItemContainer">
          <div className="HouseCard-ItemSeparator" />
          <img
            src='./Images/Shower.svg'
            className="HouseCard-Item-Img"
          />
          <div className="HouseCard-Item-Value">2</div>
        </div>
        <div className="HouseCard-ItemContainer">
          <div className="HouseCard-ItemSeparator" />
          <img
            src='./Images/Rooms.svg'
            className="HouseCard-Item-Img"
          />
          <div className="HouseCard-Item-Value">2</div>
        </div>
      </div>
    </div>
  );
}
