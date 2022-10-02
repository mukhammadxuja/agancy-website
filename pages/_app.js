import { useState, useEffect } from 'react';
import { ThemeProvider } from 'next-themes';
import { appWithTranslation } from 'next-i18next';

import Layout from '../components/layout';
import SmoothScroll from '../utils/SmoothScroll';
import CustomCursor from '../components/CustomCursor/index'
import Loading from '../components/loading/index'
import '../styles/globals.css';

function MyApp({ Component, pageProps }) {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, []);
  return (
    <ThemeProvider defaultTheme="system" enableSystem={true} attribute="class">
      {loading ? (
        <Loading />
      ) : (
      <Layout>
        <Component {...pageProps} />
      </Layout>
      )}
    </ThemeProvider>
  );
}

export default appWithTranslation(MyApp);
