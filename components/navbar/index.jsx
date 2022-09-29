import React from 'react';
import Image from 'next/image';
import moment from 'moment';
import { useTheme } from 'next-themes';
import { useRouter } from 'next/router';

import Logo from '../../public/assets/images/qalampir.png';
import { Button } from '../';

const Navbar = () => {
  const [languages, setLanguages] = React.useState(false);
  const [mute, setMute] = React.useState(false);
  const time = moment().format('LT');
  const day = moment().format('dddd');
  const router = useRouter();

  const openLang = () => {
    setLanguages(!languages);
  };

  const muteOrUnmute = () => {
    setMute(!mute);
  };

  const [mounted, setMounted] = React.useState(false);

  // When mounted on client, now we can show the UI
  React.useEffect(() => setMounted(true), []);

  if (!mounted) return null;

  const { systemTheme, theme, setTheme } = useTheme();

  const renderChangeTheme = () => {
    const currentTheme = theme === 'system' ? systemTheme : theme;

    if (currentTheme === 'dark') {
      return (
        <p
          onClick={() => setTheme('light')}
          className="font-semibold cursor-pointer"
        >
          Light Mode
        </p>
      );
    } else {
      return (
        <p
          onClick={() => setTheme('dark')}
          className="font-semibold cursor-pointer"
        >
          Dark Mode
        </p>
      );
    }
  };

  return (
    <div>
      <div className="fixed z-50 top-0 md:top-10 left-[1rem] right-[1rem] sm:left-[2rem] sm:right-[2rem] lg:left-[4rem] lg:right-[4rem] xl:left-[5rem] xl:right-5[rem] 2xl:left-[6rem] 2xl:right-[6rem]">
        <div className="flex items-center justify-between">
          <div className="w-16 rotate-45">
            <Image src={Logo} objectFit="contain" alt="" />
          </div>
          <div className="hidden md:inline-flex items-center space-x-4">
            <div className="text text-main dark:text-white flex items-center text-xl uppercase space-x-1 md:space-x-2 font-semibold">
              <span className="text">{day}</span>
              <span className="text" mix-blend-difference>
                {time}
              </span>
            </div>
          </div>
          <div className="cursor-pointer">
            <Button
              text="Menu"
              textColor="text-main dark:text-white font-semibold"
              border="border border-main dark:border-white"
              bg="bg-transparent dark:bg-transparent"
              darkHoverBg="dark:hover:bg-green-200"
            />
          </div>
        </div>
      </div>
      <div className="fixed z-50 bottom-5 right-5 flex items-center space-x-2">
        <div className="text-main dark:text-white">{renderChangeTheme()}</div>
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
        <div onClick={muteOrUnmute} className="cursor-pointer text-main dark:text-white dark:hover:text-main">
          <div className={mute ?  "hidden": "hover:bg-white p-2 md:p-3 rounded-full duration-150"}>
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
                d="M19.114 5.636a9 9 0 010 12.728M16.463 8.288a5.25 5.25 0 010 7.424M6.75 8.25l4.72-4.72a.75.75 0 011.28.53v15.88a.75.75 0 01-1.28.53l-4.72-4.72H4.51c-.88 0-1.704-.507-1.938-1.354A9.01 9.01 0 012.25 12c0-.83.112-1.633.322-2.396C2.806 8.756 3.63 8.25 4.51 8.25H6.75z"
              />
            </svg>
          </div>
          <div className={mute ? "hover:bg-white p-2 md:p-3 rounded-full duration-150" : "hidden"}>
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
                d="M17.25 9.75L19.5 12m0 0l2.25 2.25M19.5 12l2.25-2.25M19.5 12l-2.25 2.25m-10.5-6l4.72-4.72a.75.75 0 011.28.531V19.94a.75.75 0 01-1.28.53l-4.72-4.72H4.51c-.88 0-1.704-.506-1.938-1.354A9.01 9.01 0 012.25 12c0-.83.112-1.633.322-2.395C2.806 8.757 3.63 8.25 4.51 8.25H6.75z"
              />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
