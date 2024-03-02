import React, { useEffect, useState } from "react";
import "./PropertyPage.css";
import HouseCard from "../../Components/HouseCard/HouseCard";
import Navbar from "../../Components/navbar/navbar";
import Footer from "../../Components/Footer/Footer";
export default function PropertyPage() {
  const [src, setSrc] = useState("./Images/HouseSampleImg.png");
  return (
    <>
      <div className="UpperDiv">
        <Navbar />
      </div>

      <div className="PropertyMain">
        <div className="PropertyMain-2">
          <div className="PropertyImage">
            <div className="PropertyImageColumn">
              <img loading="lazy" src={src} className="PropertyMainImg" />
            </div>
            <div className="Property-Info">
              <div className="Property-Info-2">
                <div className="Property-Profile">
                  <img
                    loading="lazy"
                    src="./Images/ReviewProfile.png"
                    className="Property-Profile-Image"
                  />
                  <div className="Property-Profile-Content">
                    <div className="Property-Profile-Name">Kayley Hall</div>
                    <div className="Property-Profile-View">View profile</div>
                  </div>
                </div>
                <input
                  className="Property-Profile-Input"
                  placeholder="Name"
                ></input>
                <input
                  className="Property-Profile-Input"
                  placeholder="Phone"
                ></input>
                <input
                  className="Property-Profile-Input"
                  placeholder="Email"
                ></input>
                <input
                  className="Property-Profile-Input-1"
                  placeholder="Hello, I am interested in…"
                ></input>
                <button className="Property-Learn">
                  <div className="Property-Learn-text">Learn more</div>
                  <img
                    loading="lazy"
                    src="./Images/ArrowYellow.svg"
                    className="Property-Learn-Arrow"
                  />
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="House-Images">
          <img
            loading="lazy"
            src="./Images/HouseSampleImg.png"
            className="House-Image"
            onClick={(e) => setSrc(e.target.src)}
          />
          <img
            loading="lazy"
            src="./Images/Team.jpg"
            className="House-Image"
            onClick={(e) => setSrc(e.target.src)}
          />
          <img
            loading="lazy"
            src="./Images/HouseSampleImg.png"
            className="House-Image"
            onClick={(e) => setSrc(e.target.src)}
          />
          <img
            loading="lazy"
            src="./Images/Team.jpg"
            className="House-Image"
            onClick={(e) => setSrc(e.target.src)}
          />
          <img
            loading="lazy"
            src="./Images/HouseSampleImg.png"
            className="House-Image"
            onClick={(e) => setSrc(e.target.src)}
          />
          <img
            loading="lazy"
            src="./Images/Team.jpg"
            className="House-Image"
            onClick={(e) => setSrc(e.target.src)}
          />
          <img
            loading="lazy"
            src="./Images/HouseSampleImg.png"
            className="House-Image"
            onClick={(e) => setSrc(e.target.src)}
          />
          <img
            loading="lazy"
            src="./Images/Team.jpg"
            className="House-Image"
            onClick={(e) => setSrc(e.target.src)}
          />
          <img
            loading="lazy"
            src="./Images/HouseSampleImg.png"
            className="House-Image"
            onClick={(e) => setSrc(e.target.src)}
          />
          <img
            loading="lazy"
            src="./Images/Team.jpg"
            className="House-Image"
            onClick={(e) => setSrc(e.target.src)}
          />
        </div>
        <div className="Property-Details-Div">
          <div className="Property-Details">Details</div>
          <div className="Property-Details-Sep" />
          <div className="Property-Details-Bottom">
            <div
              className="Property-Details-Feature"
              style={{ borderLeft: "0" }}
            >
              <img
                loading="lazy"
                src="./Images/Shower.svg"
                className="Property-Details-Img"
              />
              <div className="Property-Details-">2</div>
            </div>
            <div className="Property-Details-Feature">
              <img
                loading="lazy"
                src="./Images/Shower.svg"
                className="Property-Details-Img"
              />
              <div className="Property-Details-">2</div>
            </div>
            <div className="Property-Details-Feature">
              <img
                loading="lazy"
                src="./Images/Shower.svg"
                className="Property-Details-Img"
              />
              <div className="Property-Details-">2</div>
            </div>
            <div className="Property-Details-Feature">
              <img
                loading="lazy"
                src="./Images/Shower.svg"
                className="Property-Details-Img"
              />
              <div className="Property-Details-">2</div>
            </div>
          </div>
        </div>
        <div className="Property-Description">
          <div className="Property-Description-Head">Description</div>
          <div className="Property-Description-Sep" />
          <div className="Property-Description-Content">
            At vero eos et iusto odio dignissimos ducimus, qui haec putat, ut
            ipsi auctori huius disciplinae placet: constituam, quid sit
            numeranda nec me ab illo inventore veritatis et expedita distinctio
            nam libero tempore, cum memoriter, tum etiam ac ratione.
            <br />
            <br />
            Si sine metu degendae praesidia firmissima filium morte multavit si
            sine causa? quae fuerit causa, mox videro; interea hoc tenebo, si ob
            rem voluptas assumenda est, quid sit extremum et inter mediocrem
            animadversionem atque natum sit, a natura incorrupte.
            <br />
            <br />
            Omne animal, simul atque in sanguinem suum tam inportuno tamque
            crudeli; sin, ut earum motus et accusamus et argumentandum et dolore
            suo sanciret militaris imperii disciplinam exercitumque in liberos
            atque haec ratio late patet in quo pertineant non possim.
          </div>
        </div>
        <div className="property-Features-Div">
          <div className="Property-Features-Head">Features</div>
          <div className="Property-Features-Sep" />
          <div className="Property-Features-Div-1">
            <div className="Property-Features-Div-2">
              <div className="Property-Feature">
                <div className="Property-Feature-1">
                  <div className="Property-Feature-Main">
                    <img
                      loading="lazy"
                      src="./Images/CheckYellow.svg"
                      className="Property-Feature-Img"
                    />
                    <div className="Property-Feature-Text">
                      Air Conditioning
                    </div>
                  </div>
                  <div className="Property-Feature-Main">
                    <img
                      loading="lazy"
                      src="./Images/CheckYellow.svg"
                      className="Property-Feature-Img"
                    />
                    <div className="Property-Feature-Text">
                      Air Conditioning
                    </div>
                  </div>
                  <div className="Property-Feature-Main">
                    <img
                      loading="lazy"
                      src="./Images/CheckYellow.svg"
                      className="Property-Feature-Img"
                    />
                    <div className="Property-Feature-Text">
                      Air Conditioning
                    </div>
                  </div>
                  <div className="Property-Feature-Main">
                    <img
                      loading="lazy"
                      src="./Images/CheckYellow.svg"
                      className="Property-Feature-Img"
                    />
                    <div className="Property-Feature-Text">
                      Air Conditioning
                    </div>
                  </div>
                  <div className="Property-Feature-Main">
                    <img
                      loading="lazy"
                      src="./Images/CheckYellow.svg"
                      className="Property-Feature-Img"
                    />
                    <div className="Property-Feature-Text">
                      Air Conditioning
                    </div>
                  </div>
                </div>
              </div>
              <div className="Property-Feature">
                <div className="Property-Feature-1">
                  <div className="Property-Feature-Main">
                    <img
                      loading="lazy"
                      src="./Images/CheckYellow.svg"
                      className="Property-Feature-Img"
                    />
                    <div className="Property-Feature-Text">
                      Air Conditioning
                    </div>
                  </div>
                  <div className="Property-Feature-Main">
                    <img
                      loading="lazy"
                      src="./Images/CheckYellow.svg"
                      className="Property-Feature-Img"
                    />
                    <div className="Property-Feature-Text">
                      Air Conditioning
                    </div>
                  </div>
                  <div className="Property-Feature-Main">
                    <img
                      loading="lazy"
                      src="./Images/CheckYellow.svg"
                      className="Property-Feature-Img"
                    />
                    <div className="Property-Feature-Text">
                      Air Conditioning
                    </div>
                  </div>
                  <div className="Property-Feature-Main">
                    <img
                      loading="lazy"
                      src="./Images/CheckYellow.svg"
                      className="Property-Feature-Img"
                    />
                    <div className="Property-Feature-Text">
                      Air Conditioning
                    </div>
                  </div>
                  <div className="Property-Feature-Main">
                    <img
                      loading="lazy"
                      src="./Images/CheckYellow.svg"
                      className="Property-Feature-Img"
                    />
                    <div className="Property-Feature-Text">
                      Air Conditioning
                    </div>
                  </div>
                </div>
              </div>
              <div className="Property-Feature">
                <div className="Property-Feature-1">
                  <div className="Property-Feature-Main">
                    <img
                      loading="lazy"
                      src="./Images/CheckYellow.svg"
                      className="Property-Feature-Img"
                    />
                    <div className="Property-Feature-Text">
                      Air Conditioning
                    </div>
                  </div>
                  <div className="Property-Feature-Main">
                    <img
                      loading="lazy"
                      src="./Images/CheckYellow.svg"
                      className="Property-Feature-Img"
                    />
                    <div className="Property-Feature-Text">
                      Air Conditioning
                    </div>
                  </div>
                  <div className="Property-Feature-Main">
                    <img
                      loading="lazy"
                      src="./Images/CheckYellow.svg"
                      className="Property-Feature-Img"
                    />
                    <div className="Property-Feature-Text">
                      Air Conditioning
                    </div>
                  </div>
                  <div className="Property-Feature-Main">
                    <img
                      loading="lazy"
                      src="./Images/CheckYellow.svg"
                      className="Property-Feature-Img"
                    />
                    <div className="Property-Feature-Text">
                      Air Conditioning
                    </div>
                  </div>
                  <div className="Property-Feature-Main">
                    <img
                      loading="lazy"
                      src="./Images/CheckYellow.svg"
                      className="Property-Feature-Img"
                    />
                    <div className="Property-Feature-Text">
                      Air Conditioning
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="YellowBlackGradient-1 Property-Gradient-Position"></div>
        <div className="Property-Similar-Head">Similar listings</div>
        <div className="Property-Similar-HouseCrads">
          <HouseCard />
          <HouseCard />
          <HouseCard />
          <HouseCard />
          <HouseCard />
        </div>
      </div>
      <Footer />
    </>
  );
}
