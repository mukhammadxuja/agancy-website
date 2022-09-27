import React from 'react';

const About = () => {
  return (
    <div className="container mx-auto flex items-center py-10 lg:py-16 xl:py-[32]">
      <div className="mx-auto space-x-4">
        <div className="flex items-center space-x-2">
          <div className="flex items-center justify-center w-8 h-8 sm:w-10 sm:h-10 rounded-full border md:border-2 border-dashed border-[#001F00] animate-spin">
            <span className="w-3 h-3 sm:w-4 sm:h-4 rounded-full bg-[#00ff00]"></span>
          </div>
          <h3 className="text-xl md:text-4xl text-[#001F00] dark:text-white font-extrabold uppercase">
            CHALLENGE ACCEPTED
          </h3>
        </div>

        <div className="w-full md:max-w-6xl">
          <p className="text-2xl lg:text-3xl text-[#001F00] dark:text-white font-semibold py-4 lg:py-6 leading-8 sm:leading-10 xl:leading-[3.700rem]">
            The state of Web3 is still far from ideal. It’s fragmented and
            siloed, halting <br /> network
            <span className="py-2 px-4 xl:py-[1.3rem] xl:px-[2.7rem] ml-2 rounded-full text-purple-600 bg-purple-200 text-lg lg:text-xl font-semibold">
              #growth
            </span>
            .It lacks sufficient incentives, preventing full
            <span className="py-2 px-4 xl:py-[1.3rem] xl:px-[2.7rem] ml-2 rounded-full text-blue-600 bg-blue-200 text-lg lg:text-xl font-semibold">
              #traction
            </span>
            . It’s too complex, slowing down
            <span className="py-2 px-4 xl:py-[1.3rem] xl:px-[2.7rem] ml-2 rounded-full text-orange-600 bg-orange-200 text-lg lg:text-xl font-semibold">
              #adoption
            </span>
            . We’re here to change this.
          </p>
        </div>
        <button className="btn">join us</button>
      </div>
    </div>
  );
};

export default About;