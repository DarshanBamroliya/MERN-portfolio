import React from 'react';
import HeroSec from './Pages/Herosec/page';
import Header from '@/Components/Common/Header/page';
import OurProject from './Pages/OurProject/page';

function HomePage() {
  return (
    <>
      <HeroSec />
      <Header />
      <OurProject />
    </>
  )
}

export default HomePage;