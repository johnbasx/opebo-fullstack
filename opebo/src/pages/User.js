import React from "react";
import { Link } from "react-router-dom";
import Footer from "../modules/components/Footer";

const logo = require("../assets/images/logo-w.png");

const links = [
  {
    route: `/`,
    title: `Home`,
  },
  {
    route: `/profile`,
    title: `Profile`,
  },
  {
    route: `/bookings`,
    title: `Bookings`,
  },
  {
    route: `/transactions`,
    title: `Transactions`,
  },
  {
    route: `/myLocations`,
    title: `My Locations`,
  },
  {
    route: `/notifications`,
    title: `Notifications`,
  },
  {
    route: `/services`,
    title: `Services`,
  },
  {
    route: `/about`,
    title: `About`,
  },
  {
    route: `/contact`,
    title: `Contact`,
  },
  {
    route: `/opebospecials`,
    title: `Opebo Specials`,
  },
];

const User = () => {
  return (
    <>
      <header className='antialiased bg-black pb-32 font-sans'>
        <div className='container mx-auto px-6 font-sans'>
          <div className='flex justify-between items-center pt-4 pb-8 border-b-2 border-gray-500'>
            <button className='flex flex-wrap items-center text-xl font-semibold'>
              <Link to='/' key='Home'>
                <img className='h-10 mr-2 w-auto' src={logo} alt='logo'></img>
              </Link>
            </button>
          </div>
          <nav className='flex flex-wrap pt-6 font-semibold -mx-2 font-sans text-white active:text-orange-500'>
            {links.map((link) => (
              <Link
                key={link.title}
                to={link.route}
                className='no-underline mr-2 mb-2 px-2 py-1 rounded text-white active:text-black hover:bg-orange-400 hover:text-white bg-orange-500 rounded-full'
              >
                {link.title}
              </Link>
            ))}
          </nav>
        </div>
      </header>
      <div className='container mx-auto px-6 -mt-24 font-sans'>
        <div className='flex flex-wrap -mx-6'>
          <div className='flex-1 px-6'>
            <div className='mb-12'>
              <div className='bg-white rounded-lg shadow p-6 mb-6'>
                <div className='mb-8'>
                  <div className='flex items-center'>
                    <img
                      className='h-40 w-40 rounded-full block mr-4'
                      src='https://avataaars.io/?avatarStyle=Circle&topType=NoHair&accessoriesType=Round&facialHairType=MoustacheFancy&facialHairColor=Red&clotheType=Overall&clotheColor=Pink&eyeType=Close&eyebrowType=UpDown&mouthType=Tongue&skinColor=Tanned'
                      alt=''
                    />
                    <div className='flex flex-col md:flex-row items-baseline'>
                      <span className='font-bold font-sans text-4xl mr-1'>
                        Johnbas
                      </span>
                      <span className='text-sm text-grey-dark md:ml-4 font-bold'>
                        john@example.com
                      </span>
                    </div>
                  </div>
                </div>

                <div className='-mx-6 mb-6 md:pl-10'>
                  <div className='w-full md:table'>
                    <div className='md:table-row'>
                      <div className='md:table-cell md:w-1/4 px-6 pt-3 md:pb-2'>
                        Username:
                      </div>
                      <div className='md:table-cell md:w-3/4 px-6 pt-2 pb-3 md:py-2 text-black font-semibold'>
                        <a
                          href='#'
                          className='text-black font-semibold no-underline border-b hover:border-black'
                        >
                          elated-stonebraker-70896a
                        </a>
                      </div>
                    </div>
                    <div className='md:table-row'>
                      <div className='md:table-cell bg-grey-lightest md:w-1/4 px-6 pt-3 md:pb-2'>
                        Name:
                      </div>
                      <div className='md:table-cell bg-grey-lightest md:w-3/4 px-6 pt-2 pb-3 md:py-2 text-black font-semibold'>
                        <button
                          type='button'
                          className='leading-normal inline-flex items-center px-2 py-1 bg-grey-light hover:bg-grey rounded font-medium'
                        >
                          <span>Opebo user</span>
                        </button>
                      </div>
                    </div>
                    <div className='md:table-row'>
                      <div className='md:table-cell md:w-1/4 px-6 pt-3 md:pb-2'>
                        Email:
                      </div>
                      <div className='md:table-cell md:w-3/4 px-6 pt-2 pb-3 md:py-2 text-black font-semibold'>
                        <a
                          href='#'
                          className='text-black font-semibold no-underline border-b hover:border-black'
                        >
                          opebo.user@opebo.com
                        </a>
                      </div>
                    </div>
                    <div className='md:table-row'>
                      <div className='md:table-cell bg-grey-lightest md:w-1/4 px-6 pt-3 md:pb-2'>
                        user ID:
                      </div>
                      <div className='md:table-cell bg-grey-lightest md:w-3/4 px-6 pt-2 pb-3 md:py-2 text-black font-semibold'>
                        42999d0e-b846-4039-bfb5-5b3a1cd68a3b
                      </div>
                    </div>
                    <div className='md:table-row'>
                      <div className='md:table-cell md:w-1/4 px-6 pt-3 md:pb-2'>
                        Created:
                      </div>
                      <div className='md:table-cell md:w-3/4 px-6 pt-2 pb-3 md:py-2 text-black font-semibold'>
                        Mar 4, 2020 at 1:14 PM
                      </div>
                    </div>
                    <div className='md:table-row'>
                      <div className='md:table-cell bg-grey-lightest md:w-1/4 px-6 pt-3 md:pb-2'>
                        Last update:
                      </div>
                      <div className='md:table-cell bg-grey-lightest md:w-3/4 px-6 pt-2 pb-3 md:py-2 text-black font-semibold'>
                        Mar 11, 2020 at 4:00 PM
                      </div>
                    </div>
                  </div>
                </div>
                <div>
                  <button
                    type='button'
                    className='leading-normal border hover:bg-grey-lighter px-4 py-2 md:ml-10 font-medium text-white bg-black rounded'
                  >
                    Change profile details
                  </button>
                </div>
              </div>
            </div>
            <hr className='h-1 mb-10 bg-gray-300' />

            <div className='mb-12'>
              <div className='rounded-lg p-6 mb-6'>
                <button
                  type='button'
                  className='md:ml-10 bg-red-500 px-8 py-2 font-medium text-white rounded'
                >
                  logout
                  <svg
                    className='inline-block h-3 w-3 ml-3'
                    fill='currentColor'
                    xmlns='http://www.w3.org/2000/svg'
                    viewBox='0 0 20 20'
                  >
                    <polygon points='16.172 9 10.101 2.929 11.515 1.515 20 10 19.293 10.707 11.515 18.485 10.101 17.071 16.172 11 0 11 0 9' />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default User;
