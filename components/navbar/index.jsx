import React from 'react';
import Image from 'next/image';
import moment from 'moment';
import Logo from '../../public/assets/images/qalampir.png';

const Navbar = () => {
  const time = moment().format('LT');
  const day = moment().format('dddd');

  const log = () => {
    console.log('working');
  };

  return (
    <div>
      <div className="fixed z-50 top-0 md:top-10 left-[1rem] right-[1rem] sm:left-[2rem] sm:right-[2rem] lg:left-[4rem] lg:right-[4rem] xl:left-[5rem] xl:right-5[rem] 2xl:left-[6rem] 2xl:right-[6rem]">
        <div className="flex items-center justify-between">
          <div className="w-16 rotate-45">
            <Image src={Logo} objectFit="contain" alt="" />
          </div>
          <div className="hidden md:inline-flex items-center space-x-4">
            <div className="text text-main dark:text-white flex items-center text-xl uppercase space-x-1 md:space-x-2 font-semibold">
              <span className="text mix-blend-difference">{day}</span>
              <span className="text" mix-blend-difference>
                {time}
              </span>
            </div>
          </div>
          <div className="cursor-pointer">
            <span className="text text-main dark:text-white text-xl uppercase space-x-1 font-semibold">
              Menu
            </span>
          </div>
        </div>
      </div>
      <div className="fixed z-50 bottom-5 right-5 flex items-center space-x-2">
        <div className="text-main dark:text-white">
          <p onClick={log} className="font-semibold cursor-pointer">
            Dark Mode
          </p>
          {/* <p className='font-semibold cursor-pointer'>Light Mode</p> */}
        </div>
        <div className="cursor-pointer text-main dark:text-white">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M10.5 21l5.25-11.25L21 21m-9-3h7.5M3 5.621a48.474 48.474 0 016-.371m0 0c1.12 0 2.233.038 3.334.114M9 5.25V3m3.334 2.364C11.176 10.658 7.69 15.08 3 17.502m9.334-12.138c.896.061 1.785.147 2.666.257m-4.589 8.495a18.023 18.023 0 01-3.827-5.802"
            />
          </svg>
        </div>
        <div className="cursor-pointer text-main dark:text-white">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M14.857 17.082a23.848 23.848 0 005.454-1.31A8.967 8.967 0 0118 9.75v-.7V9A6 6 0 006 9v.75a8.967 8.967 0 01-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 01-5.714 0m5.714 0a3 3 0 11-5.714 0"
            />
          </svg>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
