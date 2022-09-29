import React from 'react';
import { Marquee } from '../';

const Works = () => {
  return (
    <div className='py-10 lg:py-16 xl:py-32'>
      <Marquee text="InReport" textColor="text-main dark:text-white" borderColor="border-main dark:border-white" border="border-t-[1.5px]" />
      <Marquee text="Lazydev" textColor="text-main dark:text-white" borderColor="border-main dark:border-white" border="border-t-[1.5px] border-b-[1.5px]" />
      <Marquee text="Quiz app" textColor="text-main dark:text-white" borderColor="border-main dark:border-white" border=" border-b-[1.5px]" />
      <Marquee text="School app" textColor="text-main dark:text-white" borderColor="border-main dark:border-white" border=" border-b-[1.5px]" />
    </div>
  );
};

export default Works;
