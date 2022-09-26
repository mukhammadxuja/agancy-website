import { useState, useEffect } from 'react';
import Head from 'next/head';
import { useTheme } from 'next-themes';
import { useRouter } from 'next/router';

import { Header } from '../components'

export default function Home() {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();
  const router = useRouter();
  const { locale } = router;

  // When mounted on client, now we can show the UI
  useEffect(() => setMounted(true), []);

  if (!mounted) return null;
  return (
    <div>
      <Header />
      <main className='md:container md:mx-auto px-4'>
      <h1 className="text-3xl font-bold underline">{locale}</h1>
      <h1>The current theme is: {theme}</h1>
      <div className="flex items-center space-x-4">
        <button onClick={() => setTheme('light')}>Light Mode</button>
        <button onClick={() => setTheme('dark')}>Dark Mode</button>
      </div>
      <div className='h-screen bg-black'>s</div>
      </main>
    </div>
  );
}