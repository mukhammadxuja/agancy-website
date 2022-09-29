import React from 'react';
import Image from 'next/image';

import Logo from '../../public/assets/images/qalampir.png';

const Loading = () => {
  return (
    <div className="flex items-center justify-center h-screen">
      <div className="flex items-center">
        <div className='flex items-center'>
          <div className="w-14 rotate-45 mr-4">
            <Image src={Logo} objectFit="contain" alt="" />
          </div>
          <h1 className='text-main text-lg md:text-xl xl:text-2xl font-semibold xl:font-bold'>Brbalo</h1>
          <sup className='font-semibold'>TM</sup>
        </div>
        <div className="h-14 w-[1.5px] bg-main ml-4 mr-3 lg:ml-5 lg:mr-4"></div>
        <div className="flex items-center space-x-1">
          {/* <h3 className='text-xl md:text-2xl mr-2 font-bold'>One</h3> */}
          <p className="text-lg md:text-xl xl:text-2xl font-semibold xl:font-bold animation_gradient_text_colorful">
            Creative Agency
          </p>
        </div>
      </div>
    </div>
  );
};

export default Loading;
