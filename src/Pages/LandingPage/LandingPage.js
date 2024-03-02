import React from "react";
import "./LandingPage.css";
import Navbar from "../../Components/navbar/navbar";
import Team from "../../Components/Team/Team";
import Filters from "../../Components/filters/Filters";
import HouseCard from "../../Components/HouseCard/HouseCard";
import Team1 from "../../Components/Team copy/Team-1";
import Reviews from "../../Components/Reviews/Reviews";
import Footer from "../../Components/Footer/Footer";
export default function LandingPage() {
  
  return (
    <>
      <div
        className="LandingPage"
        style={{
          background:
            "linear-gradient(to top, rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.1))," +
            'url("./Images/LandingPageBackground.png")',
        }}
      >
        <Navbar></Navbar>
        <div className="BeautifulHomes">Beautiful homes made for you</div>
        <div className="BeautifulHomesDesc">
          In oculis quidem se esse admonere interesse enim maxime placeat,
          facere possimus, omnis. Et quidem faciunt, ut labore et accurate
          disserendum et harum quidem exercitus quid.
        </div>
        <div className="ListingsDiv">
          <div className="ListingsDiv-2">
            <div className="ListingsColumn">
              <div className="ListingText">See all listings</div>
            </div>
            <div className="ListingsColumn-2">
              <img src="./Images/ArrowYellow.svg" className="ListingImg" />
            </div>
          </div>
        </div>
      </div>
      <Team />
      <div className="PlacesToLive">
        <div className="YellowBlackGradient-1"></div>
        <div className="PlaesToLiveHead">You’re in good hands</div>
        <Filters />
        <div className="HouseCardsFlex">
          <HouseCard />
          <HouseCard />
          <HouseCard />
          <HouseCard />
          <HouseCard />
          <HouseCard />
        </div>
      </div>
      <Team1 />
      <div className="GradientBlack">
        <div className="GradientFlex">
          <div className="YellowBlackGradient-1"></div>
          <div className="GradientHeading">You’re in good hands</div>
          <div className="GradientContent">Torquatos nostros? quos dolores eos, qui dolorem ipsum per se texit, ne ferae quidem se repellere, idque instituit docere sic: omne animal, simul atque integre iudicante itaque aiunt hanc quasi involuta aperiri, altera occulta quaedam et voluptatem accusantium doloremque.</div>
          <div>
            <button className="WorkWithUsBtn" style={{ maxWidth: "300px" }}>
              {/* Below Buttons CSS IS in navbar.css */}
              <div className="WorkWithUsText">Learn More</div>
              <img loading="lazy" src="./Images/Arrow.svg" className="Arrow" />
            </button>
          </div>
        </div>
      </div>
      <div className="Reviews">
        <Reviews/>
        <Reviews/>
        <Reviews/>
      </div>
      <Footer/>
    </>
  );
}
