import React from 'react';
import HeroSec from './Pages/Herosec/page';
import Header from './Common/Header/page';
import SelectedProjects from './Pages/SelectedProjects/page';
import OurProject from './Pages/OurProject/page';

function HomePage() {
  return (
    <>
      <HeroSec />
      <SelectedProjects />
      <Header />
      <OurProject />
    </>
  )
}

export default HomePage;