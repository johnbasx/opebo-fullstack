
import React from "react";

const ReadyCard = (props) => (
  <section className='font-sans text-center py-8 lg:px-0'>
    <div className='container md:rounded flex flex-col sm:flex-row bg-orange-600 max-w-xl m-auto shadow'>
      <div className='w-full sm:w-3/4 px-10 pt-6 text-left flex flex-col justify-center'>
        <h2 className='text-white text-2xl'>Ready to get started?</h2>
        <p className='text-white mt-2 mb-6'>
          Get your desired services from our handful of services just for you
        </p>
      </div>
      <div className='w-full sm:w-1/2 flex justify-start sm:justify-center items-center pl-10 pb-6 sm:pl-0 sm:pb-0'>
        <button className=' bg-black hover:bg-gray-900 text-white hover:text-white rounded py-3 px-6 uppercase text-xs tracking-wide'>
          Find service
        </button>
      </div>
    </div>
  </section>
);

export default ReadyCard;
