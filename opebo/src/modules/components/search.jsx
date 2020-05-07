
import React from "react";
import { Input, Button, Select } from "antd";

const { Search } = Input;

const { Option } = Select;

function onChange(value) {
  console.log(`selected ${value}`);
}

function onBlur() {
  console.log("blur");
}

function onFocus() {
  console.log("focus");
}

function onSearch(val) {
  console.log("search:", val);
}

function SearchPlace() {
  return (
    <>
      <div className='text-center font-sans'>
        <h3 className='mt-4 text-center text-xl font-medium font-sans'>
          Your favorite<span className='text-3xl font-bold'> Services</span> at
          your
          <span className='text-3xl text-orange-500 font-bold'> Doorstep</span>
        </h3>
        <div className='flex justify-center'>
          <div class='my-2 flex flex row'>
            <div class='flex flex-row mb-0 sm:mb-0'>
              <div class='relative'>
                <select class='appearance-none h-full rounded rounded-r-none border border-black block appearance-none w-full bg-white text-gray-700 py-3 px-2 leading-tight focus:bg-white'>
                  <option>Delhi</option>
                  <option>Noida</option>
                  <option>Gurugram</option>
                  <option>Ghaziabad</option>
                  <option>Faridabad</option>
                  <option>Bhopal</option>
                  <option>Greater noida</option>
                  <option>Other</option>
                </select>
                <div class='pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700'>
                  <svg
                    class='fill-current h-4 w-4'
                    xmlns='http://www.w3.org/2000/svg'
                    viewBox='0 0 20 20'
                  >
                    <path d='M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z' />
                  </svg>
                </div>
              </div>
            </div>
            <div class='block relative'>
              <span class='h-full absolute inset-y-0 left-0 flex items-center pl-2'>
                <svg
                  viewBox='0 0 24 24'
                  class='h-5 w-5 fill-current text-gray-500'
                >
                  <path d='M10 4a6 6 0 100 12 6 6 0 000-12zm-8 6a8 8 0 1114.32 4.906l5.387 5.387a1 1 0 01-1.414 1.414l-5.387-5.387A8 8 0 012 10z'></path>
                </svg>
              </span>
              <input
                placeholder='Search'
                class=' appearance-none rounded-r rounded-l-none border border-black block pl-8 pr-6 py-3 w-full bg-white text-sm placeholder-gray-400 text-gray-700 focus:bg-white placeholder-gray-600 focus:placeholder-gray-600 focus:text-gray-700'
              />
            </div>
          </div>
        </div>

        <div className='flex justify-center items-center'>
          <button className='mt-5 h-10 text-white text-md font-sans rounded w-auto px-24 font-medium bg-black hover:bg-gray-800'>
            FIND YOUR SERVICE
          </button>
        </div>
      </div>
    </>
  );
}

export default SearchPlace;