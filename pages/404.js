import React from 'react';
import Link from 'next/link';

const FourOvFour = () => {
  return (
    <div className="w-full h-screen flex items-center justify-center">
      <div>
        <h1 className="text-center">404</h1>
        <p className="text-center">Sorry this page not found!</p>
        <Link href="/">
          Back to home
        </Link>
      </div>
    </div>
  );
};

export default FourOvFour;
