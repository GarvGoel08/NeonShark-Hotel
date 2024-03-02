import React from "react";
import "./Footer.css";
export default function Footer() {
  return (
    <>
      <div className="footer">
        <div className="footer-section">
          <div className="footer-subsection">
            <div className="footer-heading">
              <div className="footer-heading-text">Make your dreams a</div>
              <div className="footer-heading-text-1">reality</div>
            </div>
            <button className="footer-button">
              <div className="footer-button-text">Work with us</div>
              <img
                loading="lazy"
                src='./Images/Arrow.svg'
                className="footer-img"
              />
            </button>
          </div>
          <div className="footer-divider" />
          <div className="footer-images">
            <div className="footer-image-container">
              <img
                loading="lazy"
                src="./Images/Logo.svg"
                className="footer-image"
              />
              <img
                loading="lazy"
                src="./Images/Socials.svg"
                className="footer-image"
                style={{margin: '22px 0 0 10px'}}
              />
            </div>
            <div className="footer-columns">
              <div className="footer-column">
                <div className="footer-column-heading">Column Heading</div>
                <div className="footer-link">Link goes here</div>
                <div className="footer-link">Link goes here</div>
                <div className="footer-link">Link goes here</div>
                <div className="footer-link">Link goes here</div>
              </div>
              <div className="footer-column">
                <div className="footer-column-heading">Column Heading</div>
                <div className="footer-link">Link goes here</div>
                <div className="footer-link">Link goes here</div>
                <div className="footer-link">Link goes here</div>
                <div className="footer-link">Link goes here</div>
              </div>
              <div className="footer-column">
                <div className="footer-column-heading">Column Heading</div>
                <div className="footer-link">Link goes here</div>
                <div className="footer-link">Link goes here</div>
                <div className="footer-link">Link goes here</div>
                <div className="footer-link">Link goes here</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
