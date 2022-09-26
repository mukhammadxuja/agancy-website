import React from 'react';
import Image from 'next/image';
import moment from 'moment';

import Logo from '../../public/assets/images/qalampir.png';

const Navbar = () => {
  const time = moment().format('LT');
  const day = moment().format('dddd');

  return (
    <div className="fixed z-50 top-0 md:top-10 left-[1rem] right-[1rem] sm:left-[2rem] sm:right-[2rem] lg:left-[4rem] lg:right-[4rem] xl:left-[5rem] xl:right-5[rem] 2xl:left-[6rem] 2xl:right-[6rem]">
      <div className='flex items-center justify-between'>
        <div className="w-16 rotate-45">
          <Image src={Logo} objectFit="contain" alt="" />
        </div>
        <div className="hidden md:inline-flex items-center space-x-4">
          <div className="text flex items-center text-xl uppercase space-x-1 md:space-x-2 font-semibold">
            <span>{day}</span>
            <span>{time}</span>
          </div>
        </div>
        <div className="cursor-pointer">
          <span className="text text-xl uppercase space-x-1 font-semibold">
            Menu
          </span>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
