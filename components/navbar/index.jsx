import React from 'react';
import Image from 'next/image';
import moment from 'moment';

import Logo from '../../public/assets/images/qalampir.png';
import { Button, MultiLanguage, BgMusic, DarkAndLight } from '../';

const Navbar = () => {
  const [scroll, setScroll] = React.useState(false);
  const time = moment().format('LT');
  const day = moment().format('dddd');

  let lastScroll = window.scrollY;
  window.addEventListener('scroll', () => {
    if (lastScroll < window.scrollY) {
      setScroll(true);
    } else {
      setScroll(false);
    }

    lastScroll = window.scrollY;
  });

  return (
    <React.Fragment>
      <div
        className={
          scroll
            ? 'fixed z-50 top-0 md:top-10 left-[1rem] right-[1rem] sm:left-[2rem] sm:right-[2rem] lg:left-[4rem] lg:right-[4rem] xl:left-[5rem] xl:right-5[rem] 2xl:left-[6rem] 2xl:right-[6rem] transform -translate-y-36 duration-300'
            : 'fixed z-50 top-0 md:top-10 left-[1rem] right-[1rem] sm:left-[2rem] sm:right-[2rem] lg:left-[4rem] lg:right-[4rem] xl:left-[5rem] xl:right-5[rem] 2xl:left-[6rem] 2xl:right-[6rem] transform translate-y-0 duration-300'
        }
      >
        <div className="flex items-center justify-between">
          <div className="w-16 rotate-45">
            <Image src={Logo} objectFit="contain" alt="" />
          </div>
          <div className="fixed left-1/2 transform -translate-x-1/2 hidden md:inline-flex items-center space-x-4">
            <div className="text text-main dark:text-white flex items-center text-xl uppercase space-x-1 md:space-x-2 font-semibold">
              <span className="text">{day}</span>
              <span className="text" mix-blend-difference>
                {time}
              </span>
            </div>
          </div>
          <div className="cursor-pointer">
            <Button
              text="Menu"
              textColor="text-main dark:text-white font-semibold"
              border="border border-main dark:border-white"
              bg="bg-transparent dark:bg-transparent"
              darkHoverBg="dark:hover:bg-green-200"
            />
          </div>
        </div>
      </div>
      <div className="fixed z-50 bottom-5 right-5 flex items-center space-x-2">
        <DarkAndLight />
        <MultiLanguage />
        <BgMusic />
      </div>
    </React.Fragment>
  );
};

export default Navbar;
