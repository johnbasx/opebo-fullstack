
import React from "react";
import "./css/card-scroll.css";

const image1 = require("../../assets/images/1.jpg");
const image2 = require("../../assets/images/2.jpg");
const image3 = require("../../assets/images/3.jpg");
const image4 = require("../../assets/images/4.jpg");

function CardScroll() {
  return (
    <section className='md:py-4'>
      <div className='mt-5 md:mt-10 text-center font-sans text-black'>
        <p className='text-2xl m-0 p-0 font-bold'>
          Experiences in the spotlight
        </p>
        <p>100% Hygienic | Sanitized Tools | Disposable Products</p>
      </div>
      <div>
        <div className='mt-5 card-scroll lg:px-4 bg-gray-100'>
          <div className='h-auto w-full p-4 rounded lg:w-64 inline-block'>
            <img className='rounded cover shadow-lg' src={image1}></img>
          </div>
          <div className='h-auto w-full p-4 rounded lg:w-64 inline-block'>
            <img className='rounded cover shadow-lg ' src={image2}></img>
          </div>
          <div className='h-auto w-full p-4 rounded lg:w-64 inline-block'>
            <img className='rounded cover shadow-lg ' src={image3}></img>
          </div>
          <div className='h-auto w-full p-4 rounded lg:w-64 inline-block'>
            <img className='rounded cover shadow-lg ' src={image4}></img>
          </div>
          <div className='h-auto w-full p-4 rounded lg:w-64 inline-block'>
            <img className='rounded cover shadow-lg ' src={image1}></img>
          </div>
          <div className='h-auto w-full p-4 rounded lg:w-64 inline-block'>
            <img className='rounded cover shadow-lg ' src={image2}></img>
          </div>
          <div className='h-auto w-full p-4 rounded lg:w-64 inline-block'>
            <img className='rounded cover shadow-lg ' src={image4}></img>
          </div>
          <div className='h-auto w-full p-4 rounded lg:w-64 inline-block'>
            <img className='rounded cover shadow-lg ' src={image2}></img>
          </div>
          <div className='h-auto w-full p-4 rounded lg:w-64 inline-block'>
            <img className='rounded cover shadow-lg ' src={image3}></img>
          </div>
          <div className='h-auto w-full p-4 rounded lg:w-64 inline-block'>
            <img className='rounded cover shadow-lg ' src={image4}></img>
          </div>
        </div>
      </div>
    </section>
  );
}

export default CardScroll;