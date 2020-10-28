import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const ExpertDataCard = ({ expertData }) => {
  return (
    <div class="card expert-info">
      <div class="left-div">
        <img src={expertData.img_src}></img>
        <h6>
          Price : <span className="price-span">{expertData.price}</span>
        </h6>
        <p>
          {" "}
          {expertData.rating} ({expertData.reviews})
        </p>
      </div>
      <div class="right-div">
        <h5>{expertData.name}</h5>
        <h6>
          Founder @ {expertData.company} CEO @{expertData.ceo}
        </h6>
        <hr></hr>
        <div className="span-div">
          <span className="card-span">
            {" "}
            <FontAwesomeIcon icon="clock" /> {expertData.free_sessions} free
            sessions available
          </span>
          <span className="card-span">
            <FontAwesomeIcon icon="map-marker-alt" /> {expertData.location}
          </span>
          <span className="card-span">
            <FontAwesomeIcon icon="font" /> {expertData.language_known}
          </span>
        </div>

        <p> {expertData.description}</p>
        <div class="btn-container">
          <button class="btn btn-light btn-desc">Marketing</button>
          <button class="btn btn-light btn-desc">SEO</button>
          <button class="btn btn-light btn-desc">Marketing</button>
          <button class="btn btn-light btn-desc">Marketing</button>
        </div>
      </div>
    </div>
  );
};

export default ExpertDataCard;
