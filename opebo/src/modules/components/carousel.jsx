import React from "react";
import { Carousel } from "antd";
import "./css/carousel.css";
import SearchPlace from "./search";

const image1 = require("../../assets/images/1.jpg");
const image2 = require("../../assets/images/2.jpg");
const image3 = require("../../assets/images/3.jpg");
const image4 = require("../../assets/images/4.jpg");

function CarouselOpebo() {
  return (
    <React.Fragment>
      <section>
        <Carousel autoplay>
          <div>
            <img src={image1}></img>
          </div>
          <div>
            <img src={image2}></img>
          </div>
          <div>
            <img src={image3}></img>
          </div>
          <div>
            <img src={image4}></img>
          </div>
        </Carousel>
        <SearchPlace />
      </section>
    </React.Fragment>
  );
}

export default CarouselOpebo;
