'use client';

import Image from "next/image";
import SocialMedia from "./components/socialMedia/SocialMedia";
import TechnologiesPage from "./pages/Technologies/page";
import Get_In_Touch from "./pages/Get_In_Touch/page";
import IndustriesPage from "./pages/Industries/page";
import HeroSection from "./pages/HeroSection/page";
import OurServices from "./pages/Services/page";
import Navbar from "./components/Navbar/Navbar";
import Clients from "./pages/clients/page";
import PortfolioPage from "./pages/portfolio/page"; 
// import Footer from "./components/Footer/Footer"

export default function Home() {
  return (
    <div className="">
      <SocialMedia />
      <Navbar />
      <HeroSection />
      <OurServices />
      <IndustriesPage />
      <TechnologiesPage />
      <Clients />
      <Get_In_Touch />
      <PortfolioPage /> 
      {/* <Footer/> */}
    </div>
  );
}
