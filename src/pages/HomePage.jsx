import React from 'react'
import HeroSection from '../components/Home/HeroSection';
import WelcomeNote from '../components/Home/WelcomeNote';
import FacilitySection from '../components/Home/FacilitySection';
import SportsSection from '../components/Home/SportsSection';
import HighLabs from '../components/Home/HighLabs';
import DiverseCuri from '../components/Home/DiverseCuri';
import ExtraFun from '../components/Home/ExtraFun';
import GlorySpeaks from '../components/Home/GlorySpeaks';
import HomeCard from '../components/Home/HomeCard';
import Header from '../Layout/Header';
import DedicatedTeaching from '../components/Home/DedicatedTeaching';
import Footer from '../Layout/Footer';
import Copy from '../Layout/Copy';

const HomePage = () => {
  return (
    <>
    <Header/>
    <HeroSection/>
    <WelcomeNote/>
    <FacilitySection/>
    <SportsSection/>
    <HighLabs/>
    <DiverseCuri/>
    <ExtraFun/>
    <GlorySpeaks/>
    <DedicatedTeaching/>
    <HomeCard/>
    <Footer/>
    <Copy/>
    </>
  )
}

export default HomePage;