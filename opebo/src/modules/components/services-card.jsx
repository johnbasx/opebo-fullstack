import React from "react";

const salon = require("../../assets/services/salon.svg");
const car = require("../../assets/services/car.svg");
const clean = require("../../assets/services/clean.svg");
const electric = require("../../assets/services/electric.svg");
const food = require("../../assets/services/food.svg");
const home = require("../../assets/services/home.svg");
const makeup = require("../../assets/services/makeup.svg");
const massage = require("../../assets/services/massage.svg");
const paint = require("../../assets/services/paint.svg");
const pet = require("../../assets/services/pet.svg");

function ServiceCard() {
  return (
    <section>
      <div className='mt-4 text-center'>
        <p className='text-2xl font-sans font-bold text-black'>
          <span className='text-orange-600'>O</span>pe
          <span className='text-orange-600'>B</span>o
          <span className='text-sm font-medium'> services on demand</span>
        </p>
      </div>
      <div className='flex flex-wrap justify-center'>
        <div className='w-1/6 lg:w-1/12 bg-gray-300 shadow-lg h-auto lg:p-4 m-1 rounded overflow-hidden cursor-pointer'>
          <img src={salon} className='p-2' alt='random' />
        </div>
        <div className='w-1/6 lg:w-1/12 bg-gray-300 shadow-lg h-auto lg:p-4 m-1 rounded overflow-hidden cursor-pointer'>
          <img src={car} className='p-2' alt='random' />
        </div>
        <div className='w-1/6 lg:w-1/12 bg-gray-300 shadow-lg h-auto lg:p-4 m-1 rounded overflow-hidden cursor-pointer'>
          <img src={home} className='p-2' alt='random' />
        </div>
        <div className='w-1/6 lg:w-1/12 bg-gray-300 shadow-lg h-auto lg:p-4 m-1 rounded overflow-hidden cursor-pointer'>
          <img src={clean} className='p-2' alt='random' />
        </div>
        <div className='w-1/6 lg:w-1/12 bg-gray-300 shadow-lg h-auto lg:p-4 m-1 rounded overflow-hidden cursor-pointer'>
          <img src={food} className='p-2' alt='random' />
        </div>
        <div className='w-1/6 lg:w-1/12 bg-gray-300 shadow-lg h-auto lg:p-4 m-1 rounded overflow-hidden cursor-pointer'>
          <img src={electric} className='p-2' alt='random' />
        </div>
        <div className='w-1/6 lg:w-1/12 bg-gray-300 shadow-lg h-auto lg:p-4 m-1 rounded overflow-hidden cursor-pointer'>
          <img src={makeup} className='p-2' alt='random' />
        </div>
        <div className='w-1/6 lg:w-1/12 bg-gray-300 shadow-lg h-auto lg:p-4 m-1 rounded overflow-hidden cursor-pointer'>
          <img src={massage} className='p-2' alt='random' />
        </div>
        <div className='w-1/6 lg:w-1/12 bg-gray-300 shadow-lg h-auto lg:p-4 m-1 rounded overflow-hidden cursor-pointer'>
          <img src={paint} className='p-2' alt='random' />
        </div>
        <div className='w-1/6 lg:w-1/12 bg-gray-300 shadow-lg h-auto lg:p-4 m-1 rounded overflow-hidden cursor-pointer'>
          <img src={pet} className='p-2' alt='random' />
        </div>
      </div>
    </section>
  );
}

export default ServiceCard;
