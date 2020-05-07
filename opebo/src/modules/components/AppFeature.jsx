
import React from "react";

const appImage = require("../../assets/images/appImage.png");
const playstoreImage = require("../../assets/images/playstore.png");

const AppFeature = () => {
  return (
    <>
      <section className='my-8 font-sans container max-w-xl m-auto flex flex-col lg:flex-row text-center lg:text-left sm:items-center'>
        <div className='w-full lg:w-1/2'>
          <img className='w-full' src={appImage} alt='app-image' />
        </div>
        <div className='w-full lg:w-1/2 flex flex-col justify-center items-start p-8 items-center lg:items-start'>
          <h1 class='my-4 font-bold text-4xl'>App Features</h1>
          <p class='leading-normal mb-4 w-2/3 text-gray-700'>
            <span className='font-bold text-xl text-orange-500'>Download</span>{" "}
            our app from playstore and have a better experience with our
            services with offers and much more functionalities.
          </p>
          <a href='/' className='w-1/2'>
            <img src={playstoreImage} />
          </a>
        </div>
      </section>
    </>
  );
};

export default AppFeature;
