import React from 'react';
import Header from '../components/Header';
import 'bootstrap/dist/css/bootstrap.min.css';
// import Footer from '../components/Footer';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Header />
      <div style={{ paddingTop: '70px' }}> {/* Space for the fixed header */}
        <Component {...pageProps} />
        {/* <Footer/> */}
      </div>
    </>
  );
}

export default MyApp;
