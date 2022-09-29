import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';

import { Header, About, Works, Cookie } from '../components';

export default function Home() {
  return (
    <div className="">
      <Header />
      <Cookie />
      <section>
        <About />
        <Works />
      </section>
    </div>
  );
}
