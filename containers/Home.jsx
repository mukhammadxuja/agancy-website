import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';

import { Header, About, Works, Cookie, Contact, Loading } from '../components';

export default function Home() {
  return (
    <div>
      <div className="">
        <Header />
        <Cookie />
        <section>
          <About />
          <Works />
        </section>
        <Contact />
      </div>
    </div>
  );
}
