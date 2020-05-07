
import React from "react";
import { Link } from "react-router-dom";

const logo = require("../../assets/images/logo-w.png");

const footer = (props) => {
  return (
    <div>
      <footer className='font-sans bg-black text-white py-8 px-4 hover:text-orange-600'>
        <div className='mx-auto container overflow-hidden flex flex-col lg:flex-row justify-between'>
          <a href='/' className='block mr-4 w-1/3'>
            <img src={logo} className='w-48 ' alt='logo' />
          </a>

          <div className='w-1/2 flex text-sm mt-6 lg:mt-0'>
            <ul className='text-gray-700 list-none p-0 font-thin flex flex-col text-left'>
              <Link className='inline-block py-2 px-3 text-white uppercase no-underline font-bold tracking-wide'>
                Product
              </Link>
              <Link
                to='/user'
                key='User'
                className='inline-block py-2 px-3 text-gray-500 hover:text-orange-500 font-medium no-underline'
              >
                Popular
              </Link>
              <Link
                to='/privacypolicy'
                key='PrivacyPolicy'
                className='inline-block py-2 px-3 text-gray-500 hover:text-orange-500 font-medium no-underline'
              >
                Privacy Policy
              </Link>
              <Link
                to='/disclaimer'
                key='Disclaimer'
                className='inline-block py-2 px-3 text-gray-500 hover:text-orange-500 font-medium no-underline'
              >
                Disclaimer
              </Link>
              <Link
                to='/cookiespolicy'
                key='CookiesPolicy'
                className='inline-block py-2 px-3 text-gray-500 hover:text-orange-500 font-medium no-underline'
              >
                Cookies policy
              </Link>
            </ul>
            <ul className='text-gray-700 list-none p-0 font-thin flex flex-col text-left'>
              <Link className='inline-block py-2 px-3 text-white uppercase no-underline font-bold tracking-wide'>
                Company
              </Link>
              <Link
                to='/termsandconditions'
                key='TermsAndConditions'
                className='inline-block py-2 px-3 text-gray-500 hover:text-orange-500 font-medium no-underline'
              >
                Terms &amp; Condition
              </Link>
              <Link
                to='/enduserlicense'
                key='EndUserLicense'
                className='inline-block py-2 px-3 text-gray-500 hover:text-orange-500 font-medium no-underline'
              >
                EULA
              </Link>
              <Link
                to='/returnrefundpolicy'
                key='ReturnRefundPolicy'
                className='inline-block py-2 px-3 text-gray-500 hover:text-orange-500 font-medium no-underline'
              >
                Return, Refund policy
              </Link>
              <Link>
                <a
                  href='#top'
                  className='inline-block py-2 px-3 text-gray-500 hover:text-orange-500 font-medium no-underline'
                >
                  Works
                </a>
              </Link>
            </ul>
            <ul className='text-gray-700 list-none p-0 font-thin flex flex-col text-left'>
              <Link className='inline-block py-2 px-3 text-white uppercase no-underline font-bold tracking-wide'>
                Vendors
              </Link>
              <Link>
                <a
                  href='#top'
                  className='inline-block py-2 px-3 text-gray-500 hover:text-orange-500 font-medium no-underline'
                >
                  Contact
                </a>
              </Link>
              <Link>
                <a
                  href='#top'
                  className='inline-block py-2 px-3 text-gray-500 hover:text-orange-500 font-medium no-underline'
                >
                  Business
                </a>
              </Link>
              <Link>
                <a
                  href='#top'
                  className='inline-block py-2 px-3 text-gray-500 hover:text-orange-500 font-medium no-underline'
                >
                  Services
                </a>
              </Link>
              <Link>
                <a
                  href='#top'
                  className='inline-block py-2 px-3 text-gray-500 hover:text-orange-500 font-medium no-underline'
                >
                  Info
                </a>
              </Link>
            </ul>
          </div>
          <div className='text-gray-700 flex justify-center'>
            <div className='inline-block py-2 px-3 text-white uppercase font-bold tracking-wide'>
              Find Us ON
              <div className='flex pt-4'>
                <a
                  className='block flex items-center text-white hover:text-orange-500 mr-6 no-underline'
                  href='#top'
                >
                  <i className='fab fa-whatsapp'></i>
                </a>
                <a
                  className='block flex items-center text-white hover:text-orange-500 mr-6 no-underline'
                  href='#top'
                >
                  <i className='fab fa-facebook'></i>
                </a>
                <a
                  className='block flex items-center text-white hover:text-orange-500 no-underline'
                  href='#top'
                >
                  <i className='fab fa-instagram'></i>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className='pt-4 mt-4 text-gray-700 border-t border-gray-900 text-center'>
          ©2020
          <a href='/' className='font-bold text-white hover:text-orange-500'>
            {" "}
            OpeBo Industries
          </a>
          . All rights reserved.
        </div>
      </footer>
    </div>
  );
};

export default footer;
