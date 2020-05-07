
import React from "react";
import Carousel from "../modules/components/carousel";
import ServicesCard from "../modules/components/services-card";
import CardScroll from "../modules/components/card-scroll";
import ReadyCard from "../modules/components/ReadyCard";
import Body from "../modules/components/body";
import Navbar from "../modules/components/TopNavbar";
import Footer from "../modules/components/Footer";

const Home = () => {
  return (
    <>
      <Navbar />
      <Carousel />
      <ServicesCard />
      <CardScroll />
      <ReadyCard />
      <Body />
      <Footer />
    </>
  );
};

export default Home;