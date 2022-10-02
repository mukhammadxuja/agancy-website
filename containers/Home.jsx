import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';

import {
  Header,
  About,
  Works,
  Cookie,
  Contact,
  Services,
  Clients,
  Tools,
} from '../components';

export default function Home() {
  return (
    <div>
      <div className="">
        <Header />
        <Cookie />
        <section>
          <About />
          <Works />
          <Services />
          <Tools />
          {/* <Clients /> */}
        </section>
        <Contact />
      </div>
    </div>
  );
}
