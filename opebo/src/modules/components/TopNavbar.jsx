import React, { Component, useState } from "react";
import { Link } from "react-router-dom";
import { FaBars, FaTimes, FaSearch } from "react-icons/fa";

const logo = require("../../assets/images/logo.png");
const menuIcon = require("../../assets/images/menu.svg");

const links = [
  {
    route: `/`,
    title: `Home`,
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
function TopNavbar() {
  const [isExpanded, toggleExpansion] = useState(false);
  const [searchExpanded, setSearchExpanded] = useState(false);

  return (
    <header className='bg-gray-300 font-sans items-center'>
      <div className='flex flex-wrap items-center justify-between mx-auto p-3 md:p-4 md:pt-0'>
        <Link
          className='flex items-center md:mt-3 md:ml-12 no-underline text-white'
          to='/'
        >
          <img className='h-8 mr-2 w-auto' src={logo} alt='logo'></img>
          <span className='font-bold text-gray-800 text-xs tracking-tight'>
            Opebo Industries Pvt. Ltd.
          </span>
        </Link>

        <div className='flex items-center'>
          <button
            className='block md:hidden items-center px-3 py-2 rounded text-black'
            onClick={() => toggleExpansion(false)}
          >
            <Link
              to='/services/'
              className='text-black active:text-black hover:text-black'
            >
              <FaSearch className='h4 w-4' />
            </Link>
          </button>
          <button
            className='block md:hidden flex items-center px-3 py-2 rounded text-black'
            onClick={() => toggleExpansion(!isExpanded)}
          >
            {isExpanded ? (
              <FaTimes className='h-4 w-4' />
            ) : (
              <FaBars className='h4 w-4' />
            )}
          </button>
        </div>
        <nav
          className={`${
            isExpanded ? `block` : `hidden`
          } md:block md:flex md:items-center mt-4 text-sm w-full md:w-auto`}
        >
          <div class='block relative'>
            <span class='h-full absolute inset-y-0 left-0 flex items-center pl-2'>
              <svg
                viewBox='0 0 24 24'
                class='h-4 w-4 fill-current text-gray-500'
              >
                <path d='M10 4a6 6 0 100 12 6 6 0 000-12zm-8 6a8 8 0 1114.32 4.906l5.387 5.387a1 1 0 01-1.414 1.414l-5.387-5.387A8 8 0 012 10z'></path>
              </svg>
            </span>
            <input
              placeholder='Search'
              class=' appearance-none rounded border border-gray-400 border-b block pl-8 pr-6 py-2 w-full bg-gray-400 text-sm text-gray-700 focus:bg-gray-300 placeholder-gray-700 focus:placeholder-gray-600 focus:text-gray-700 focus:outline-none'
            />
          </div>
          {links.map((link) => (
            <Link
              onClick={() => toggleExpansion(!isExpanded)}
              className='block md:inline-block mt-4 md:mt-0 md:ml-6 no-underline text-black active:text-orange-600 hover:text-orange-600'
              key={link.title}
              to={link.route}
            >
              {link.title}
            </Link>
          ))}

          <div className='mt-3 sm:m-0 md:block md:flex md:items-center text-sm w-full md:w-auto'>
            <button className='sm:ml-10 px-5 sm:block h-10 text-white active:text-orange-600 text-md font-sans rounded font-medium bg-orange-600 hover:bg-orange-700'>
              <Link
                to='/signup/'
                className='text-white active:text-white hover:text-white'
                onClick={() => toggleExpansion(!isExpanded)}
              >
                Signup
              </Link>
            </button>
            <button className='ml-6 h-10 px-6 sm:block text-white active:text-white text-white text-md font-sans rounded font-medium bg-black hover:bg-gray-900'>
              <Link
                to='/login/'
                className='text-white active:text-white hover:text-white'
                onClick={() => toggleExpansion(!isExpanded)}
              >
                Login
              </Link>
            </button>
          </div>
        </nav>
      </div>
    </header>
  );
}

export default TopNavbar;

/*<div className='w-full sm:w-full'>
  <input
    className='w-full text-left bg-gray-300 text-black rounded-lg px-3 py-2'
    placeholder='Search by your demand'
  ></input>
</div>;*/
