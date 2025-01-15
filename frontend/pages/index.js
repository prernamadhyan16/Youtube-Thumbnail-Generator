import React from 'react';
import HomeCarousel from '../components/Carousel';
import Header from '../components/Header';
import Footer from '../components/Footer';
import InputSection from '../components/InputSection';

const Home = () => {
  return (
    <div>
        <Header/>
      <HomeCarousel />
      {/* <Footer/> */}
      <InputSection/>
    </div>
  );
};

export default Home;
