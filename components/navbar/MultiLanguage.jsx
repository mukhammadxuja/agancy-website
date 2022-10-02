import React from 'react';
import { useRouter } from 'next/router';

const multiLanguage = () => {
  const [languages, setLanguages] = React.useState(false);
  const router = useRouter();

  const openLang = () => {
    setLanguages(!languages);
  };
  return (
    <div className="relative text-main dark:text-white">
      <div onClick={openLang} className="cursor-pointer">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M10.5 21l5.25-11.25L21 21m-9-3h7.5M3 5.621a48.474 48.474 0 016-.371m0 0c1.12 0 2.233.038 3.334.114M9 5.25V3m3.334 2.364C11.176 10.658 7.69 15.08 3 17.502m9.334-12.138c.896.061 1.785.147 2.666.257m-4.589 8.495a18.023 18.023 0 01-3.827-5.802"
          />
        </svg>
      </div>
      <div
        className={
          languages
            ? 'absolute left-1/2 transform -translate-x-1/2 bottom-4 md:bottom-6 xl:bottom-8 p-2 rounded-md border border-main bg-gray-200 backdrop-filter backdrop-blur-xl'
            : 'hidden'
        }
      >
        <ul className="">
          <li
            onClick={() => router.push('/en', '/en', { locale: 'en' })}
            className="text-lg text-main hover:text-muted font-normal cursor-pointer active"
          >
            En
          </li>
          <li
            onClick={() => router.push('/ru', '/ru', { locale: 'ru' })}
            className="text-lg text-main hover:text-muted font-normal cursor-pointer"
          >
            Ru
          </li>
          <li
            onClick={() => router.push('/uz', '/uz', { locale: 'uz' })}
            className="text-lg text-main hover:text-muted font-normal cursor-pointer"
          >
            Uz
          </li>
        </ul>
      </div>
    </div>
  );
};

export default multiLanguage;
