
import React from "react";

const Subscribe = () => {
  return (
    <section>
      <div class='w-full  bg-orange-500  bg-no-repeat font-sans'>
        <div class=' p-10  py-20  flex  flex-col  flex-wrap  justify-center  content-center'>
          <div class=' m-0  p-0  text-3xl  text-white  antialiased  text-center'>
            Get Our Updates
          </div>
          <div class=' m-0  p-0  text-xl  text-white  antialiased  text-center'>
            Find out about updates and other news
          </div>
          <div class=' mt-3  flex  flex-row  flex-wrap'>
            <input
              type='text'
              class=' text-black rounded-l rounded-r-none w-2/3  p-2 px-3 placeholder-gray-500'
              placeholder='john@mail.com'
            />
            <button
              class=' p-2  w-1/3 rounded-r rounded-r-none bg-black text-white hover:bg-gray-900'
              type='button'
            >
              Subscribe
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Subscribe;