import React from 'react';

const Footer = () => {
  return (
    <div>
      <div className="container mx-auto flex items-center justify-between py-10 lg:py-16">
        <p className="ml-5 text-lg font-medium text-main dark:text-white">
          Brbalo team. ©2022
        </p>
        <ul className="flex items-center space-x-2 md:space-x-4 lg:space-x-6 xl:space-x-8 text-main dark:text-white text-lg font-medium md:font-semibold">
          <li className="cursor-pointer block md:hidden">
            <a target="_blank" href="google.com">
              <p>IG</p>
            </a>
          </li>
          <li className="cursor-pointer hidden md:block">
            <a target="_blank" href="google.com">
              <p>INSTAGRAM</p>
            </a>
          </li>
          <li className="cursor-pointer block md:hidden">
            <a target="_blank" href="google.com">
              <p>TG</p>
            </a>
          </li>
          <li className="cursor-pointer hidden md:block">
            <a target="_blank" href="google.com">
              <p>TELEGRAM</p>
            </a>
          </li>
          <li className="cursor-pointer block md:hidden">
            <a target="_blank" href="google.com">
              <p>IN</p>
            </a>
          </li>
          <li className="cursor-pointer hidden md:block">
            <a target="_blank" href="google.com">
              <p>LINKEDIN</p>
            </a>
          </li>
          <li className="cursor-pointer block md:hidden">
            <a target="_blank" href="google.com">
              <p>EM</p>
            </a>
          </li>
          <li className="cursor-pointer hidden md:block">
            <a target="_blank" href="google.com">
              <p>EMAIL</p>
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Footer;
