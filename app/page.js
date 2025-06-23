'use client';

import Image from "next/image";
import TechnologiesPage from "./technologies/page";
import Get_In_Touch from "./Get_In_Touch/page";
import IndustriesPage from "./Industries/page";
import HeroSection from "./HeroSection/page";
import OurServices from "./Services/page";
import Clients from "./clients/page";
import PortfolioPage from "./portfolio/page"; 
import Footer from "./components/Footer/Footer"
import Clientcomp from "./components/Clientscomp/Clientscomp"

export default function Home() {
  return (
    <div className="">
      <HeroSection />
      <OurServices />
      <IndustriesPage />
      <TechnologiesPage />
      <Clientcomp/>
      <Get_In_Touch />
      <PortfolioPage /> 
      
    </div>
  );
}
