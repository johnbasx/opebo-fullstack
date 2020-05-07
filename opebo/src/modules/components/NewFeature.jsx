import React from "react";

const NewFeature = () => {
  return (
    <section
      className='bg-gray-100 font-sans text-gray-900 px-4 py-4 lg:px-4'
      role='alert'
    >
      <div className='container items-center flex max-w-xl m-auto leading-none'>
        <span className='flex rounded-full bg-black uppercase px-4 py-2 text-md text-white font-bold mr-3'>
          New
        </span>
        <span className='mr-2 text-left mr-auto'>
          New Feature! It is a long established fact that a reader will be
          distracted.
        </span>
        <span className='opacity-75 h-4 w-4'>
          <i className='fas fa-chevron-right'></i>
        </span>
      </div>
    </section>
  );
};

export default NewFeature;
