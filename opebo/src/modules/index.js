import React from "react";
import "../assets/tailwind/main.css";
import CarouselOpebo from "./components/carousel";
import CBody from "./components/body";
import ServiceCard from "./components/services-card";
import CardScroll from "./components/card-scroll";
import Navbar from "./components/TopNavbar";
import ReadyCard from "./components/ReadyCard";

function Modules() {
  return (
    <React.Fragment>
      <Navbar />
      <CarouselOpebo />
      <section>
        <div className='justify-center'>
          <ServiceCard />
        </div>
      </section>

      <CardScroll />
      <ReadyCard />
      <CBody />
    </React.Fragment>
  );
}

export default Modules;
