import React from 'react';
import Header from '../components/Header';
import 'bootstrap/dist/css/bootstrap.min.css';
// import Footer from '../components/Footer';
import { Provider } from '@/components/ui/provider';

function MyApp({ Component, pageProps }) {
  return (
    <Provider>
      <Header />
      <div style={{ paddingTop: '70px' }}> {/* Space for the fixed header */}
        <Component {...pageProps} />
        {/* <Footer/> */}
      </div>
    </Provider>
  );
}

export default MyApp;
