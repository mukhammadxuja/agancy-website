import React from 'react';

const Header = () => {
  return (
    <header className="header h-screen flex items-center justify-center">
      <div className='text-center uppercase'>
        <h1 className="text-4xl lg:text-6xl xl:text-7xl 2xl:text-8xl font-extrabold">Richard sancho</h1>
        <h1 className="text-4xl lg:text-6xl xl:text-7xl 2xl:text-8xl font-extrabold">Design director</h1>
        <p className='animation_gradient_text text-lg lg:text-2xl font-bold my-2 lg:mt-8 2xl:mt-10'>Scroll to continue</p>
      </div>
    </header>
  );
};

export default Header;
