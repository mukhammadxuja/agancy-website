import { gsap } from 'gsap';

import Logo from '../../public/assets/images/qalampir.png';
import { useEffect } from 'react';
import { useRef } from 'react';

const Header = () => {
  const tl = gsap.timeline();

  const h1 = useRef(null);
  const h1Second = useRef(null);
  
  return (
    <header className="relative h-screen flex items-center justify-center">
      <div className="absolute z-10 text-center uppercase">
        <h1
          ref={h1}
          className="text text-main dark:text-white text-4xl lg:text-6xl xl:text-7xl 2xl:text-8xl font-extrabold"
        >
          Richard sancho
        </h1>
        <h1
          ref={h1Second}
          className="text text-main dark:text-white text-4xl lg:text-6xl xl:text-7xl 2xl:text-8xl font-extrabold"
        >
          Design director
        </h1>
        <p className="animation_gradient_text text-main dark:text-white text-lg lg:text-2xl font-bold my-2 lg:mt-8 2xl:mt-10">
          Scroll to continue
        </p>
      </div>
      <div className="min-h-screen flex items-center justify-center px-16">
        <div className="relative w-full max-w-lg">
          <div className="absolute bg-purple-500 -top-10 -left-4 w-64 h-64 lg:w-96 lg:h-96 rounded-full mix-blend-multiply filter blur-2xl opacity-70 animate-blob"></div>
          <div className="absolute bg-green-500 -top-10 -right-4 w-64 h-64 lg:w-96 lg:h-96 rounded-full mix-blend-multiply filter blur-2xl opacity-70 animate-blob animation-delay-2000"></div>
          <div className="absolute bg-orange-500 -bottom-10 -left-[100px] sm:-left-[80px] md:-left-[130px] w-64 h-64 lg:w-96 lg:h-96 rounded-full mix-blend-multiply filter blur-2xl opacity-70 animate-blob animation-delay-4000"></div>
        </div>
      </div>
    </header>
  );
};

export default Header;
