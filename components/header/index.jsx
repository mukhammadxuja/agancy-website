import React from 'react';

const Header = () => {
  return (
    <header className="header relative h-screen flex items-center justify-center">
      <div className="absolute z-10 text-center uppercase">
        <h1 className="text text-4xl lg:text-6xl xl:text-7xl 2xl:text-8xl font-extrabold">
          Richard sancho
        </h1>
        <h1 className="text text-4xl lg:text-6xl xl:text-7xl 2xl:text-8xl font-extrabold">
          Design director
        </h1>
        <p className="animation_gradient_text text-lg lg:text-2xl font-bold my-2 lg:mt-8 2xl:mt-10">
          Scroll to continue
        </p>
      </div>
      <div class="min-h-screen flex items-center justify-center px-16">
        <div class="relative w-full max-w-lg">
          <div class="absolute top-0 -left-4 w-96 h-96 bg-purple-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
          <div class="absolute top-0 -right-4 w-96 h-96 bg-yellow-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
          <div class="absolute -bottom-20 -left-[130px] w-96 h-96 bg-pink-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>
        </div>
      </div>
    </header>
  );
};

export default Header;
