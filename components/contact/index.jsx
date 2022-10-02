import React from 'react';

import { Button } from '../';

const Contact = () => {
  return (
    <div className="container mx-auto flex items-center py-10 lg:py-16 xl:py-32">
      <div className="mx-auto space-x-4">
        <div className="flex items-center justify-center space-x-2 py-8">
          <div className="flex items-center justify-center w-8 h-8 sm:w-10 sm:h-10 rounded-full border md:border-2 border-dashed border-main animate-spin">
            <span className="w-3 h-3 sm:w-4 sm:h-4 rounded-full bg-own"></span>
          </div>
          <h3 className="text-2xl md:text- text-center text-main dark:text-white font-extrabold uppercase">
            Let's connect
          </h3>
        </div>
        <div className='flex items-center space-x-4 py-2 px-4 lg:py-6 xl:pt-10'>
          <div className='w-56 md:w-96 bg-white rounded-full border-[1.5px] border-main'>
            <input className='bg-transparent outline-none placeholder:text-main w-full p-3 mx-2 truncate' type="email" placeholder='Type your email address' />
          </div>
          <Button
            text="Send"
            textColor="text-white"
            bg="bg-main dark:bg-own"
            darkHoverBg="dark:hover:bg-green-200"
          />
        </div>
      </div>
    </div>
  );
};

export default Contact;
