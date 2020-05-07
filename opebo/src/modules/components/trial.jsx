import React from "react";
import {
  FaBell,
  FaBullseye,
  FaCheck,
  FaMapMarkerAlt,
  FaHandsHelping,
  FaLaugh,
} from "react-icons/fa";
import AppFeature from "./AppFeature";

const map = require("../../assets/images/map.svg");
const phone = require("../../assets/images/phone-about.png");

const trial = () => {
  return (
    <>
      <section className='font-sans container m-auto text-center py-8 antialiased'>
        <label for='tagline' className='font-bold text-black text-5xl'>
          About Us
        </label>
        <p className='mb-4 font-normal max-w-md text-gray-600 m-auto'>
          To help to serve better we need to make you know about us better
        </p>
        <hr className='border-b w-1/2 m-auto my-6 border-orange-300' />
        <div>
          <h2 className='font-bold text-3xl'>Who are we?</h2>
          <p className='mb-4 font-normal px-10 md:px-20 md:text-xl text-gray-800 m-auto'>
            Opebo (Opebo Industries Pvt. Ltd.) is an Indian based home-services
            provider. We are an all-in-one platform that helps users/customers
            hire premium and budget service professionals, from beauticians and
            masseurs to security, sofa cleaners, carpenters and repair services.
          </p>
          <p className='mt-10 mb-4 font-medium px-10 md:px-24 text-xl md:text-3xl text-gray-900 m-auto'>
            Our Mission is to empower millions of service professionals by
            delivering services at-home in a way that has never been experienced
            before.
          </p>
        </div>
        <section className='mt-16 bg-white md:px-16 py-4 font-sans'>
          <div className='container max-w-xl m-auto flex flex-wrap items-center justify-center'>
            <h1 className='w-full font-bold text-3xl text-orange-500 md:w-1/4 font-medium tracking-normal md:mb-0'>
              Important
              <br />
              Stats
            </h1>
            <div className='w-1/3 md:w-1/4 flex-col'>
              <h2 className='text-4xl text-gray-700 font-bold'>2000+</h2>
              <span className='md:text-xl mr-2 text-gray-600'>
                Trained Professionals
              </span>
            </div>
            <div className='w-1/3 md:w-1/4 flex-col'>
              <h2 className='text-4xl text-gray-700 font-bold'>10K+</h2>
              <span className='md:text-xl mr-2 text-gray-600'>
                Happy Customers
              </span>
            </div>
            <div className='w-1/3 md:w-1/4 flex-col'>
              <h2 className='text-4xl text-gray-700 font-bold'>8</h2>
              <span className='md:text-xl mr-2 text-gray-600'>
                Cities in India
              </span>
            </div>
          </div>
        </section>

        <section>
          <div className='mt-16'>
            <h2 className='font-bold text-3xl'>How we do it</h2>
            <p className='mb-4 font-normal px-10 md:px-24 md:text-xl text-gray-900 m-auto'>
              Opebo provides a platform that allows skilled and experienced
              professionals to connect with users looking for specific services.
              All the professionals, though experienced and skilled, undergo
              intensive training modules before being allowed to list their
              services on the platform. Once on the platform, our match-making
              algorithm identifies professionals who are closest to the users’
              requirements and available at the requested time and date.
            </p>
            <p className='mt-10 font-bold text-lg'>
              <i>
                Only 1 in 10 service providers who register with us are allowed
                to list their service.
              </i>
            </p>
          </div>
        </section>

        <section className='font-sans container max-w-xl m-auto flex flex-col lg:flex-row justify-center my-8'>
          <div className='order-2 lg:order-1 w-full lg:w-1/4 flex flex-col items-center lg:items-end justify-center text-center lg:text-right ml-0 lg:ml-8 mt-8'>
            <FaBell className='p-3 w-12 h-12 bg-orange-400 text-white mb-2 rounded-full ' />

            <h2 className='text-black mb-2 font-medium text-2xl'>
              Choose a service
            </h2>
            <p className='text-gray-700 leading-normal mb-8 px-10 md:p-0'>
              Choose your desired service from our handful of services provided
              just for you.
            </p>
            <FaBullseye className='p-3 w-12 h-12 bg-orange-400 text-white mb-2 rounded-full ' />
            <h2 className='text-black mb-2 font-medium text-2xl'>
              Choose your category
            </h2>
            <p className='text-gray-700 leading-normal mb-8 px-10 md:p-0'>
              There are a wide variety of categories available for each services
              to meet the need of the customer.
            </p>
            <FaCheck className='p-3 w-12 h-12 bg-orange-400 text-white mb-2 rounded-full ' />
            <h2 className='text-black mb-2 font-medium text-2xl'>
              Book your choice
            </h2>
            <p className='text-gray-700 leading-normal px-10 md:p-0'>
              Select from the choices we provide and book your service at ease.
            </p>
          </div>
          <div className='order-1 lg:order-2 w-full lg:w-1/2 max-w-sm m-auto mb-6 lg:mb-0'>
            <img src={phone} alt='' />
          </div>
          <div className='order-last w-full lg:w-1/4 flex flex-col items-center lg:items-start justify-center text-center lg:text-left mt-8 mr-8'>
            <FaMapMarkerAlt className='p-3 w-12 h-12 bg-orange-400 text-white mb-2 rounded-full ' />
            <h2 className='text-black mb-2 font-medium text-2xl'>
              Booking assigned
            </h2>
            <p className='text-gray-700 leading-normal mb-8 px-10 md:p-0'>
              Your booking will be assigned to one of the nearest vendors in
              your area upon successful booking.
            </p>
            <FaHandsHelping className='p-3 w-12 h-12 bg-orange-400 text-white mb-2 rounded-full ' />
            <h2 className='text-black mb-2 font-medium text-2xl'>
              Vendor will accept the job.
            </h2>
            <p className='text-gray-700 leading-normal mb-8 px-10 md:p-0'>
              The designated vendor will be provided to you at your doorstep. If
              not we will assign a new one.
            </p>
            <FaLaugh className='p-3 w-12 h-12 bg-orange-400 text-white mb-2 rounded-full ' />
            <h2 className='text-black mb-2 font-medium text-2xl'>
              Customer Satisfaction
            </h2>
            <p className='text-gray-700 leading-normal px-10 md:p-0'>
              We want to provide you the best services at home with ease.
            </p>
          </div>
        </section>

        <section>
          <div className='mt-16'>
            <h2 className='font-bold text-3xl'>Our Story so far</h2>
            <p className='mb-4 font-normal px-10 md:px-24 md:text-xl text-gray-900 m-auto'>
              Opebo is now established in 8 cities all across India in:
              Delhi-NCR, Bhopal, Ghaziabad, Faridabad, Gurugram, Greater Noida,
              Patna and Chandigarh. We are expanding our services across India
              in the coming future.
            </p>
          </div>
          <div className='flex p-10 justify-center items-center'>
            <img src={map} alt='map'></img>
          </div>
        </section>

        <hr className='border-b w-full m-auto my-6 border-orange-300' />
      </section>
      <section className='my-8 font-sans container m-auto max-w-xl'>
        <div className='text-center'>
          <h1 className='my-4 font-bold text-4xl'>Our Leadership Team</h1>
          <p className='leading-normal mb-4 max-w-sm m-auto text-xl'>
            The team which made this possible.
          </p>
        </div>
        <div className='flex flex-col sm:flex-row flex-wrap my-8'>
          <div className='w-full sm:w-1/2 md:w-1/3 flex flex-col items-center justify-center h-48 md:h-64 p-8 border-gray-300 border-r border-b hover:shadow-md hover:border-0 bg-white hover:transform-scale-subtle transition-normal hover:show-child'>
            <div className='w-16 h-16 rounded-full bg-orange-400' alt=''></div>
            <h3 className='mt-4 mb-1 text-2xl font-bold'>Shinjani Jha</h3>
            <p className='mt-4 text-center text-gray-700 leading-normal px-6 hidden hover:block'>
              Shinjani Jha is responsible for marketing and product growth at
              Opebo. When not busy at work, Shinjani enjoys immersing herself in
              interesting experiences be it socializing, travelling, cooking her
              favorite dishes.
            </p>
          </div>
          <div className='w-full sm:w-1/2 md:w-1/3 flex flex-col items-center justify-center h-48 md:h-64 p-8 border-gray-300 border-r border-b hover:shadow-md hover:border-0 bg-white hover:transform-scale-subtle transition-normal hover:show-child'>
            <div className='w-16 h-16 rounded-full bg-green-500' alt=''></div>
            <h3 className='mt-4 mb-1 text-2xl font-bold'>Shinjani Jha</h3>
            <p className='mt-4 text-center text-gray-700 leading-normal px-6 hidden hover:block'>
              Shinjani Jha is responsible for marketing and product growth at
              Opebo. When not busy at work, Shinjani enjoys immersing herself in
              interesting experiences be it socializing, travelling, cooking her
              favorite dishes.
            </p>
          </div>
          <div className='w-full sm:w-1/2 md:w-1/3 flex flex-col items-center justify-center h-48 md:h-64 p-8 border-gray-300 border-b hover:shadow-md hover:border-0 bg-white hover:transform-scale-subtle transition-normal hover:show-child'>
            <div className='w-16 h-16 rounded-full bg-gray-900' alt=''></div>
            <h3 className='mt-4 mb-1 text-2xl font-bold'>Shinjani Jha</h3>
            <p className='mt-4 text-center text-gray-700 leading-normal px-6 hidden hover:block'>
              Shinjani Jha is responsible for marketing and product growth at
              Opebo. When not busy at work, Shinjani enjoys immersing herself in
              interesting experiences be it socializing, travelling, cooking her
              favorite dishes.
            </p>
          </div>
        </div>
      </section>
      <section className='bg-white py-4 font-sans'>
        <div className='text-center'>
          <h1 className='my-4 font-bold text-4xl'>Our Investors</h1>
          <p className='leading-normal mb-4 max-w-sm m-auto text-xl'>
            Here are our Investors.
          </p>
        </div>
        <div className='mt-10 container max-w-xl m-auto flex flex-wrap items-center justify-start'>
          <div className='w-full md:w-1/4 lg:w-1/5 flex flex-col mb-8 px-3'>
            <div className='overflow-hidden bg-white shadow hover:shadow-raised'>
              <img
                className='w-full'
                src='https://source.unsplash.com/random/400x225'
                alt='Sunset in the mountains'
              />
              <div className='p-6 flex flex-col justify-between'>
                <h3 className='font-medium text-gray-900 mb-4 leading-normal'>
                  Desktop Publishing Software like Aldus PageMaker
                </h3>
              </div>
            </div>
          </div>

          <div className='w-full md:w-1/4 lg:w-1/5 flex flex-col mb-8 px-3'>
            <div className='overflow-hidden bg-white shadow hover:shadow-raised'>
              <img
                className='w-full'
                src='https://source.unsplash.com/random/400x225'
                alt='Sunset in the mountains'
              />
              <div className='p-6 flex flex-col justify-between'>
                <h3 className='font-medium text-gray-900 mb-4 leading-normal'>
                  Desktop Publishing Software like Aldus PageMaker
                </h3>
              </div>
            </div>
          </div>

          <div className='w-full md:w-1/4 lg:w-1/5 flex flex-col mb-8 px-3'>
            <div className='overflow-hidden bg-white shadow hover:shadow-raised'>
              <img
                className='w-full'
                src='https://source.unsplash.com/random/400x225'
                alt='Sunset in the mountains'
              />
              <div className='p-6 flex flex-col justify-between'>
                <h3 className='font-medium text-gray-900 mb-4 leading-normal'>
                  Desktop Publishing Software like Aldus PageMaker
                </h3>
              </div>
            </div>
          </div>

          <div className='w-full md:w-1/4 lg:w-1/5 flex flex-col mb-8 px-3'>
            <div className='overflow-hidden bg-white shadow hover:shadow-raised'>
              <img
                className='w-full'
                src='https://source.unsplash.com/random/400x225'
                alt='Sunset in the mountains'
              />
              <div className='p-6 flex flex-col justify-between'>
                <h3 className='font-medium text-gray-900 mb-4 leading-normal'>
                  Desktop Publishing Software like Aldus PageMaker
                </h3>
              </div>
            </div>
          </div>

          <div className='w-full md:w-1/4 lg:w-1/5 flex flex-col mb-8 px-3'>
            <div className='overflow-hidden bg-white shadow hover:shadow-raised'>
              <img
                className='w-full'
                src='https://source.unsplash.com/random/400x225'
                alt='Sunset in the mountains'
              />
              <div className='p-6 flex flex-col justify-between'>
                <h3 className='font-medium text-gray-900 mb-4 leading-normal'>
                  Desktop Publishing Software like Aldus PageMaker
                </h3>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className=' mt-16 flex flex-col justify-center items-center'>
        <h1 className='font-medium text-2xl'>
          You could be a part of our journey. Interested to join us?
        </h1>
        <button className='mt-4 bg-orange-500 font-bold text-white px-16 py-3 rounded hover:bg-orange-400'>
          APPLY NOW
        </button>
      </section>
      <AppFeature />
    </>
  );
};

export default trial;
