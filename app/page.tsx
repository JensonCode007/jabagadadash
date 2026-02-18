'use client';

import LandingLogo from "../public/jb6_logo.png"
import LandingLogo2 from "../public/jb6_bg_removed.png"
import CollegeLogo from "../public/chinmaya_logo.png"
import Image from "next/image";
import { Marquee } from "@/components/ui/marquee"
import LightRays from "@/components/LightRays"
import Countdown from "@/components/countdown";
import Wrapper from "@/components/wrapper";
import Sponsor1 from "../public/sponsers/Management fest - LOGIC SCHOOL.png"
import Sponsor4 from "../public/sponsers/Copy of Psychology fest_Thanatos-2 1st Prize.png"
import Sponsor5 from "../public/sponsers/Copy_of_DYOTA__Psychology_Quiz__-removebg-preview.png"
import Sponsor6 from "../public/sponsers/Copy_of_Idea_dharshan-removebg-preview.png"
import Sponsor7 from "../public/sponsers/Copy_of_PRADHARSHINI_PROJECT_EXPO-removebg-preview.png"
import Sponsor8 from "../public/sponsers/Copy_of_RANAM_CODING_COMPETETITION-removebg-preview.png"
import Sponsor9 from "../public/sponsers/Cultural_Dhruva_26_Taranga_Yugma-removebg-preview.png"
import Sponsor10 from "../public/sponsers/KIRTILAL JEWELLS_page-0001-Photoroom.png"
import Sponsor13 from "../public/sponsers/Robo_war-_D_LINK-removebg-preview.png"
import Sponsor14 from "../public/sponsers/Screenshot_2026-02-17_at_10.36.02_AM-removebg-preview.png"
import Sponsor15 from "../public/sponsers/Screenshot_2026-02-17_at_10.37.26_AM-removebg-preview.png"
import Sponsor16 from "../public/sponsers/Vadakkanady_Builders.png"
import Sponsor17 from "../public/sponsers/Care_Align.png"
import Sponsor18 from "../public/sponsers/Melange_Designs.png"
import Sponsor19 from "../public/sponsers/Kisna.png"
import Sponsor20 from "../public/sponsers/Cricket_Shack.png"
import Sponsor21 from "../public/sponsers/Rennys_Academy.png"
import UpdatesComponents from "@/components/updatescomponent";
import BounceCards from "@/components/BounceCards";
import Link from "next/link";
import BackgroundParticles from "@/components/BackgroundParticles";
import { useState } from 'react';
import EventModal from "@/components/EventModal";
import { mockEvents } from "./events/eventData";
import FAQItem from "@/components/FAQItem";
import faqData from "./faq.json";
import { cn } from "@/lib/utils";

// ─── Sponsor data ────────────────────────────────────────────────────────────

const allSponsors = [
  { src: Sponsor1,  alt: "Logic School" },
  { src: Sponsor4,  alt: "Psychology Fest" },
  { src: Sponsor5,  alt: "DYOTA Psychology Quiz" },
  { src: Sponsor6,  alt: "Idea Dharshan" },
  { src: Sponsor7,  alt: "Pradharshini Project Expo" },
  { src: Sponsor8,  alt: "Ranam Coding Competition" },
  { src: Sponsor9,  alt: "Cultural Dhruva Taranga Yugma" },
  { src: Sponsor10, alt: "Kirtilal Jewells" },
  { src: Sponsor13, alt: "Robo War D-Link" },
  { src: Sponsor14, alt: "Sponsor 14" },
  { src: Sponsor15, alt: "Sponsor 15" },
  { src: Sponsor16, alt: "Vadakkanady Builders" },
  { src: Sponsor17, alt: "Care Align" },
  { src: Sponsor18, alt: "Melange Designs" },
  { src: Sponsor19, alt: "Kisna" },
  { src: Sponsor20, alt: "Cricket Shack" },
  { src: Sponsor21, alt: "Rennys Academy" },
];

// Split into two rows
const firstRowSponsors  = allSponsors.slice(0, Math.ceil(allSponsors.length / 2));
const secondRowSponsors = allSponsors.slice(Math.ceil(allSponsors.length / 2));

// ─── Sponsor card ─────────────────────────────────────────────────────────────

const SponsorCard = ({ src, alt }: { src: any; alt: string }) => (
  <figure
    className={cn(
      "relative flex items-center justify-center mx-2",
      "h-28 w-44 shrink-0 rounded-xl border-7 p-4 cursor-pointer",
      "border-[#efdb92] bg-[#fdf8e8]",
      "hover:bg-[#fef9ed] hover:border-[#d4c27d]",
      "transition-all duration-300"
    )}
  >
    <Image
      src={src}
      alt={alt}
      className="max-h-full max-w-full object-contain"
    />
  </figure>
);

// ─── Other page data ───────────────────────────────────────────────────────────

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

const bounceImages: string[] = [
    "/daksh.png",
    "/taranga.png",
    "/dyota.png",
    "/jigisha.png",
    "/ranam.png"
]

// Map bounce card indices to event IDs
const bounceCardEventIds = ["7", "18", "23", "25", "9"];

// ─── Page ─────────────────────────────────────────────────────────────────────

export default function Home() {
  const [selectedEvent, setSelectedEvent] = useState<any>(null);

  const handleBounceCardClick = (cardIndex: number) => {
    const eventId = bounceCardEventIds[cardIndex];
    const event = mockEvents.find(e => e.id === eventId);
    if (event) {
      setSelectedEvent(event);
    }
  };

  return (
    <>
      <BackgroundParticles />
      <Image
        src={CollegeLogo}
        alt="College logo"
        className="w-55 sm:w-50 z-0 absolute top-30 -translate-x-1/2 -translate-y-1/2 left-1/2 sm:translate-x-0 sm:translate-y-0 sm:left-10 sm:top-10"
      />
      <Wrapper>
        {/* ── Hero ───────────────────────────────────────────────────────── */}
        <div className="relative w-full h-screen">
          <LightRays
            className="absolute -z-10 left-0"
            followMouse={false}
            raysColor="#efdb92"
            raysSpeed={0.5}
            raysOrigin="top"
            lightSpread={2}
            pulsating={false}
          />
          <div className="absolute -translate-x-1/2 -translate-y-1/2 left-1/2 top-1/2 flex items-center justify-center w-full flex-col max-sm:px-4">
            <Image src={LandingLogo} className="w-150 sm:w-80 max-sm:w-55" alt="landing-logo" />
            <Image src={LandingLogo2} className="w-150 mt-5 max-sm:w-55 max-sm:mt-3" alt="landing-logo" />
            <Countdown />
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
                <span className="inline-block transition-transform duration-300 group-hover:rotate-[360deg] max-sm:text-sm">✦</span>
                <span>Register now</span>
                <span className="inline-block transition-transform duration-300 group-hover:rotate-[360deg] group-hover:delay-100 max-sm:text-sm">✦</span>
              </span>
              <span className="absolute top-2 right-4 w-2 h-2 border-t-2 border-r-2 border-[#efdb92] opacity-0 group-hover:opacity-100 transition-all duration-500 group-hover:top-1 group-hover:right-3 max-sm:hidden"></span>
              <span className="absolute bottom-2 left-4 w-2 h-2 border-b-2 border-l-2 border-[#efdb92] opacity-0 group-hover:opacity-100 transition-all duration-500 group-hover:bottom-1 group-hover:left-3 max-sm:hidden"></span>
            </Link>
          </div>
        </div>

        {/* ── Sponsors Marquee ───────────────────────────────────────────── */}
        <div className="relative w-full py-20 flex flex-col items-center overflow-hidden">

          <h1 className="text-[#efdb92] text-6xl font-cormorant mb-14">
            Sponsors
          </h1>

          {/* Row 1 – scrolls left */}
          <div className="relative w-full">
            <Marquee pauseOnHover className="[--duration:30s] py-2">
              {firstRowSponsors.map((s, i) => (
                <SponsorCard key={i} src={s.src} alt={s.alt} />
              ))}
            </Marquee>
            <div className="pointer-events-none absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-black to-transparent" />
            <div className="pointer-events-none absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-black to-transparent" />
          </div>

          {/* Row 2 – scrolls right */}
          <div className="relative w-full mt-4">
            <Marquee reverse pauseOnHover className="[--duration:30s] py-2">
              {secondRowSponsors.map((s, i) => (
                <SponsorCard key={i} src={s.src} alt={s.alt} />
              ))}
            </Marquee>
            <div className="pointer-events-none absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-black to-transparent" />
            <div className="pointer-events-none absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-black to-transparent" />
          </div>
        </div>

        {/* ── Event Highlights ───────────────────────────────────────────── */}
        <div className="w-full bg-black py-16 max-sm:py-8 flex justify-center">
          <div className="flex flex-col items-center">
            <h1 className="text-[#efdb92] text-5xl text-center font-cormorant max-sm:text-3xl mb-10">
              Event Highlights
            </h1>
            <BounceCards
              images={bounceImages}
              className="max-sm:scale-72 -mt-22 sm:mt-15"
              enableHover
              onCardClick={handleBounceCardClick}
            />
          </div>
        </div>

        {/* ── FAQs ───────────────────────────────────────────────────────── */}
        <div className="w-full bg-black py-16 sm:pb-35 flex flex-col justify-center items-center max-sm:p-4">
          <h1 className="text-[#efdb92] text-5xl text-center py-8 font-cormorant max-sm:text-3xl max-sm:py-6 mb-2">
            FAQs
          </h1>
          <div className="max-w-4xl w-full mx-auto space-y-4 px-4">
            {faqData.map((faq, index) => (
              <FAQItem key={index} question={faq.question} answer={faq.answer} />
            ))}
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