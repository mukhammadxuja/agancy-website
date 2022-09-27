import React from 'react';
import Image from 'next/image';
import Logo from '../../public/assets/images/qalampir.png';
import Link from 'next/link';

const Footer = () => {
  return (
    <div>
      <div className="container mx-auto flex items-center justify-between py-10 lg:py-16">
        <p className="ml-5 lg:ml-32 text-lg font-medium text-[#001F00] dark:text-white">
          ©2022
        </p>
        <ul className="flex items-center space-x-2 md:space-x-4 lg:space-x-6 xl:space-x-10 text-[#001F00] dark:text-white text-lg md:text-xl font-medium md:font-semibold">
          <li>
            <a target="_blank" href="google.com">
              <p>IG</p>
            </a>
          </li>
          <li>
            <a target="_blank">
              <p>TG</p>
            </a>
          </li>
          <li>
            <a target="_blank">
              <p>IN</p>
            </a>
          </li>
        </ul>
        <p className="ml-5 lg:ml-32 text-lg font-medium text-[#001F00] dark:text-white">
          M : hello@gmail.com
        </p>
      </div>
    </div>
  );
};

export default Footer;
