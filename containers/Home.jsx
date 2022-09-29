import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';

import { Header, About, Works, Cookie, Contact } from '../components';

export default function Home() {
  return (
    <div className="">
      <Header />
      <Cookie />
      <section>
        <About />
        <Works />
      </section>
      <Contact />
    </div>
  );
}
