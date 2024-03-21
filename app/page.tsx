"use client"
import AboutSection from "@/components/AboutSection";
import AchievementsSection from "@/components/AchievementsSection";
import Emailsection from "@/components/Emailsection";
import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import Navbar from "@/components/Navbar";
import ProjectsSection from "@/components/ProjectsSection";
import Splin3d from '@/components/Splin3d';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';

export default function Home() {
  const pathname=usePathname();
const isHome= pathname==='/'
const [isloading,setloading]=useState(isHome);
useEffect(()=>{
  if(isloading) return
},[isloading])
  return (
    <>
    {
      isloading && isHome ?(<Splin3d finishloading={()=>setloading(false)}/>):

      (
    <main className="flex min-h-screen flex-col bg-[#121212]">
      <Navbar />
      <div className="container mt-24 mx-auto px-12 py-4">
        <HeroSection />
        <AboutSection />
        <AchievementsSection />
        <ProjectsSection />
        <Emailsection />
      </div>
      <Footer />
    </main>
    )
}
    </>
  );
}
