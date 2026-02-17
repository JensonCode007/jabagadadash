'use client';

import LandingLogo from "../public/jb6_logo.png"
import LandingLogo2 from "../public/jb6_bg_removed.png"
import CollegeLogo from "../public/chinmaya_logo.png"
import Image from "next/image";
import LightRays from "@/components/LightRays"
import Countdown from "@/components/countdown";
import Wrapper from "@/components/wrapper";
import Sponsor1 from "../public/sponsers/Copy of Management fest - LOGIC SCHOOL-2.png"
import Sponsor2 from "../public/sponsers/Copy of Management fest - LOGIC SCHOOL.png"
import Sponsor3 from "../public/sponsers/Copy of Psychology fest_Thanatos-2 1st Prize (2).png"
import Sponsor4 from "../public/sponsers/Copy of Psychology fest_Thanatos-2 1st Prize.png"
import Sponsor5 from "../public/sponsers/Copy_of_DYOTA__Psychology_Quiz__-removebg-preview.png"
import Sponsor6 from "../public/sponsers/Copy_of_Idea_dharshan-removebg-preview.png"
import Sponsor7 from "../public/sponsers/Copy_of_PRADHARSHINI_PROJECT_EXPO-removebg-preview.png"
import Sponsor8 from "../public/sponsers/Copy_of_RANAM_CODING_COMPETETITION-removebg-preview.png"
import Sponsor9 from "../public/sponsers/Cultural_Dhruva_26_Taranga_Yugma-removebg-preview.png"
import Sponsor10 from "../public/sponsers/KIRTILAL JEWELLS_page-0001-Photoroom.png"
import Sponsor11 from "../public/sponsers/Management fest - LOGIC SCHOOL-2.png"
import Sponsor12 from "../public/sponsers/Management fest - LOGIC SCHOOL.png"
import Sponsor13 from "../public/sponsers/Robo_war-_D_LINK-removebg-preview.png"
import Sponsor14 from "../public/sponsers/Screenshot_2026-02-17_at_10.36.02_AM-removebg-preview.png"
import Sponsor15 from "../public/sponsers/Screenshot_2026-02-17_at_10.37.26_AM-removebg-preview.png"
import UpdatesComponents from "@/components/updatescomponent";
import BounceCards from "@/components/BounceCards";
import Link from "next/link";
import BackgroundParticles from "@/components/BackgroundParticles";
import { useState } from 'react';
import EventModal from "@/components/EventModal";
import { mockEvents } from "./events/eventData";
import FAQItem from "@/components/FAQItem";
import faqData from "./faq.json";

const datObj = [
    {
        title: "Accomodation",
        desc: "Stay with us!",
        link: "",
        imagesrc: "/accomodation.jpg",
        modalDesc: "Hostel accommodation is available for outstation participants attending the university fest. Enjoy a safe and comfortable stay on campus—limited slots, so register early!",
        
    },
    {
        title: "Travel",
        desc: "Travel Made Easy!",
        link: "",
        imagesrc: "/travel.png",
        modalDesc: "The university offers travel assistance for outstation participants during the college fest. Register early to avail these facilities."
    }
]

const bounceImages: string[] =[
    "/daksh.png",
    "/taranga.png",
    "/dyota.png",
    "/jigisha.png",
    "/ranam.png"
]

// Map bounce card indices to event IDs
const bounceCardEventIds = ["7", "18", "23", "25", "9"];

export default function Home() {
  const [selectedEvent, setSelectedEvent] = useState<any>(null);

  const handleBounceCardClick = (cardIndex: number) => {
    const eventId = bounceCardEventIds[cardIndex];
    const event = mockEvents.find(e => e.id === eventId);
    if (event) {
      setSelectedEvent(event);
    }
  };

  return (<>
    <BackgroundParticles />
    <Image src={CollegeLogo} alt="College logo" className="w-55 sm:w-50 z-0 absolute top-30 -translate-x-1/2 -translate-y-1/2 left-1/2 sm:translate-x-0 sm:translate-y-0 sm:left-10 sm:top-10"/>
    <Wrapper>
        <div className="w-full h-screen bg-black">
            <LightRays className="absolute -z-10 left-0" followMouse={false} raysColor="#efdb92" raysSpeed={0.5} raysOrigin="top" lightSpread={2} pulsating={false}/>
          <div className="absolute -translate-x-1/2 -translate-y-1/2 left-1/2 top-1/2 flex items-center justify-center w-full flex-col max-sm:px-4">
            <Image src={LandingLogo} className="w-150 sm:w-80 max-sm:w-55" alt="landing-logo"/>
            <Image src={LandingLogo2} className="w-150 mt-5 max-sm:w-55 max-sm:mt-3" alt="landing-logo"/>

            <Countdown/>
            <Link 
              href={"/events"} 
              className="relative flex justify-center items-center rounded-full px-12 py-4 mt-8
              max-sm:px-6 max-sm:py-2.5 max-sm:mt-5
              font-jetbrains-mono font-semibold text-base tracking-wide
              max-sm:text-sm max-sm:tracking-normal
              border-2 border-[#efdb926f] text-[#efdb92] bg-transparent
              overflow-hidden group cursor-pointer
              transition-all duration-500
              hover:border-transparent hover:text-black
              hover:scale-110 hover:rotate-2
              max-sm:hover:scale-105 max-sm:hover:rotate-1
              active:scale-95 active:rotate-0
              before:absolute before:inset-0 before:bg-[#efdb92] before:rounded-full
              before:scale-x-0 before:origin-left before:transition-transform before:duration-500
              hover:before:scale-x-100
              after:absolute after:w-full after:h-full after:top-0 after:left-0
              after:bg-gradient-to-r after:from-transparent after:via-white/20 after:to-transparent
              after:translate-x-[-200%] after:skew-x-12 after:transition-transform after:duration-700
              hover:after:translate-x-[200%]"
            >
              <span className="relative z-10 flex items-center gap-2 max-sm:gap-1.5">
                <span className="inline-block transition-transform duration-300 group-hover:rotate-[360deg] max-sm:text-sm">
                  ✦
                </span>
                <span>Register now</span>
                <span className="inline-block transition-transform duration-300 group-hover:rotate-[360deg] group-hover:delay-100 max-sm:text-sm">
                  ✦
                </span>
              </span>
              
              {/* Corner decorations */}
              <span className="absolute top-2 right-4 w-2 h-2 border-t-2 border-r-2 border-[#efdb92] opacity-0 group-hover:opacity-100 transition-all duration-500 group-hover:top-1 group-hover:right-3 max-sm:hidden"></span>
              <span className="absolute bottom-2 left-4 w-2 h-2 border-b-2 border-l-2 border-[#efdb92] opacity-0 group-hover:opacity-100 transition-all duration-500 group-hover:bottom-1 group-hover:left-3 max-sm:hidden"></span>
            </Link>
          </div>

          <div className="w-full h-screen bg-black flex flex-row">
            <div className="flex w-1/2 h-screen justify-start px-12 items-center">
              <div className="w-full">
                <h1 className="text-[#efdb92] text-7xl font-cormorant mb-16">Sponsors</h1>
                <div>
                  <div className="grid grid-cols-3 gap-6">
                    <div className="border border-[rgba(239,219,146,0.2)] rounded-lg p-4 flex items-center justify-center h-32 bg-[rgba(239,219,146,0.03)]">
                      <Image src={Sponsor1} alt="Sponsor" className="max-h-full max-w-full object-contain"/>
                    </div>
                    <div className="border border-[rgba(239,219,146,0.2)] rounded-lg p-4 flex items-center justify-center h-32 bg-[rgba(239,219,146,0.03)]">
                      <Image src={Sponsor10} alt="Kirtilal Jewells" className="max-h-full max-w-full object-contain"/>
                    </div>
                    <div className="border border-[rgba(239,219,146,0.2)] rounded-lg p-4 flex items-center justify-center h-32 bg-[rgba(239,219,146,0.03)]">
                      <Image src={Sponsor2} alt="Sponsor" className="max-h-full max-w-full object-contain"/>
                    </div>
                    <div className="border border-[rgba(239,219,146,0.2)] rounded-lg p-4 flex items-center justify-center h-32 bg-[rgba(239,219,146,0.03)]">
                      <Image src={Sponsor4} alt="Sponsor" className="max-h-full max-w-full object-contain"/>
                    </div>
                    <div className="border border-[rgba(239,219,146,0.2)] rounded-lg p-4 flex items-center justify-center h-32 bg-[rgba(239,219,146,0.03)]">
                      <Image src={Sponsor5} alt="Sponsor" className="max-h-full max-w-full object-contain"/>
                    </div>
                    <div className="border border-[rgba(239,219,146,0.2)] rounded-lg p-4 flex items-center justify-center h-32 bg-[rgba(239,219,146,0.03)]">
                      <Image src={Sponsor6} alt="Sponsor" className="max-h-full max-w-full object-contain"/>
                    </div>
                    <div className="border border-[rgba(239,219,146,0.2)] rounded-lg p-4 flex items-center justify-center h-32 bg-[rgba(239,219,146,0.03)]">
                      <Image src={Sponsor7} alt="Sponsor" className="max-h-full max-w-full object-contain"/>
                    </div>
                    <div className="border border-[rgba(239,219,146,0.2)] rounded-lg p-4 flex items-center justify-center h-32 bg-[rgba(239,219,146,0.03)]">
                      <Image src={Sponsor8} alt="Sponsor" className="max-h-full max-w-full object-contain"/>
                    </div>
                    <div className="border border-[rgba(239,219,146,0.2)] rounded-lg p-4 flex items-center justify-center h-32 bg-[rgba(239,219,146,0.03)]">
                      <Image src={Sponsor9} alt="Sponsor" className="max-h-full max-w-full object-contain"/>
                    </div>
                    <div className="border border-[rgba(239,219,146,0.2)] rounded-lg p-4 flex items-center justify-center h-32 bg-[rgba(239,219,146,0.03)]">
                      <Image src={Sponsor11} alt="Sponsor" className="max-h-full max-w-full object-contain"/>
                    </div>
                    <div className="border border-[rgba(239,219,146,0.2)] rounded-lg p-4 flex items-center justify-center h-32 bg-[rgba(239,219,146,0.03)]">
                      <Image src={Sponsor12} alt="Sponsor" className="max-h-full max-w-full object-contain"/>
                    </div>
                    <div className="border border-[rgba(239,219,146,0.2)] rounded-lg p-4 flex items-center justify-center h-32 bg-[rgba(239,219,146,0.03)]">
                      <Image src={Sponsor13} alt="Sponsor" className="max-h-full max-w-full object-contain"/>
                    </div>
                    <div className="border border-[rgba(239,219,146,0.2)] rounded-lg p-4 flex items-center justify-center h-32 bg-[rgba(239,219,146,0.03)]">
                      <Image src={Sponsor14} alt="Sponsor" className="max-h-full max-w-full object-contain"/>
                    </div>
                    <div className="border border-[rgba(239,219,146,0.2)] rounded-lg p-4 flex items-center justify-center h-32 bg-[rgba(239,219,146,0.03)]">
                      <Image src={Sponsor15} alt="Sponsor" className="max-h-full max-w-full object-contain"/>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex w-1/2 h-screen justify-center">
                <LightRays className="absolute -z-10 left-0" followMouse={false} raysColor="#efdb92" raysSpeed={0.5} raysOrigin="right" lightSpread={2} pulsating={false}/>
            </div>
          </div>
          

          {/* Bounce Cards Section */}
          <div className="w-full bg-black py-16 max-sm:py-8 flex justify-center">
            <div className="flex flex-col items-center">
              <h1 className="text-[#efdb92] text-5xl text-center font-cormorant max-sm:text-3xl mb-10">Event Highlights</h1>
              <BounceCards 
                images={bounceImages}
                className="max-sm:scale-72 -mt-22 sm:mt-15"
                enableHover
                onCardClick={handleBounceCardClick}
              />
            </div>
          </div>

         { /*<div className="w-full h-200 bg-black flex flex-col justify-center items-center py-10 max-sm:p-4 max-sm:pb-24 max-sm:h-auto">
            <h1 className="text-[#efdb92] text-5xl text-center py-18 font-cormorant max-sm:text-3xl max-sm:py-8">Updates</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 max-w-7xl mx-auto w-full max-sm:gap-6">
              {datObj.map((item, index)=>
                  <UpdatesComponents key={index} title={item.title} desc={item.desc} imagesrc={item.imagesrc} modalDesc={item.modalDesc} link={item.link}/>
              )}
            </div>
          </div>*/}

          <div className="w-full bg-black py-16 sm:pb-35 flex flex-col justify-center items-center max-sm:p-4">
            <h1 className="text-[#efdb92] text-5xl text-center py-8 font-cormorant max-sm:text-3xl max-sm:py-6 mb-2">FAQs</h1>
            <div className="max-w-4xl w-full mx-auto space-y-4 px-4">
              {faqData.map((faq, index) => (
                <FAQItem key={index} question={faq.question} answer={faq.answer} />
              ))}
            </div>
          </div>

        </div>
    </Wrapper>
    
    {/* Event Modal */}
    {selectedEvent && (
      <EventModal event={selectedEvent} onClose={() => setSelectedEvent(null)} />
    )}
    </>
    
  );
}
