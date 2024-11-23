import React from 'react';
import Header from '../components/Header'; // Update the path based on your folder structure
import SpecialityMenu from "../components/SpecialityMenu"; // Corrected spelling
import TopPharmacist from '../components/TopPharmacist';
import Banner from '../components/Banner';
const Home = () => {
  return (
    <div>
      <Header />
      <SpecialityMenu/>
      <TopPharmacist/>
      <Banner/>
    </div>
  );
};

export default Home;
