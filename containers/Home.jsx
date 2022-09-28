import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';

import { Header, About } from '../components';

export default function Home() {
  return (
    <div className="">
      <Header />
      <section>
        <About />
      </section>
    </div>
  );
}
