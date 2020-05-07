
import React from "react";
import ServicesShow from "../modules/components/ServicesShow";
import Subscribe from "../modules/components/Subscribe";
import AppFeature from "../modules/components/AppFeature";
import NewFeature from "../modules/components/NewFeature";
import Navbar from "../modules/components/TopNavbar";
import Footer from "../modules/components/Footer";

const Services = () => {
  return (
    <>
      <Navbar />
      <ServicesShow />
      <AppFeature />
      <NewFeature />
      <Subscribe />
      <Footer />
    </>
  );
};

export default Services;
