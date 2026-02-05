import LandingLogo from "../public/jb6_logo.png"
import LandingLogo2 from "../public/jb6_bg_removed.png"
import Image from "next/image";
import LightRays from "@/components/LightRays"
import Countdown from "@/components/countdown";
import Wrapper from "@/components/wrapper";
import UpdatesComponents from "@/components/updatescomponent";

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

export default function Home() {
  return (<>
    <Wrapper>
        <div className="w-full h-screen bg-black">
            <LightRays className="absolute -z-10 left-0" followMouse={false} raysColor="#efdb92" raysSpeed={0.5} raysOrigin="top" lightSpread={2} pulsating={false}/>
          <div className="absolute -translate-x-1/2 -translate-y-1/2 left-1/2 top-1/2 flex items-center justify-center w-full flex-col max-sm:px-4">
            <Image src={LandingLogo} className="w-150 sm:w-80 max-sm:w-55" alt="landing-logo"/>
            <Image src={LandingLogo2} className="w-150 mt-5 max-sm:w-55 max-sm:mt-3" alt="landing-logo"/>

            <Countdown/>
          </div>

          {/*<div className="w-full h-screen bg-black flex flex-row">
            <div className="flex w-1/2 h-screen justify-start px-12 items-center">
              <div className="w-full">
                <h1 className="text-[#efdb92] text-7xl font-cormorant mb-16">Sponsors</h1>
                
                <div className="mb-16">
                  <h2 className="text-[#efdb92] text-3xl font-cormorant mb-8">Title Sponsor</h2>
                  <div className="border border-[rgba(239,219,146,0.3)] rounded-lg p-8 flex items-center justify-center h-48 bg-[rgba(239,219,146,0.05)]">
                    <p className="text-gray-400 text-xl">Title Sponsor Logo</p>
                  </div>
                </div>

                <div>
                  <h2 className="text-[#efdb92] text-2xl font-cormorant mb-6">Other Sponsors</h2>
                  <div className="grid grid-cols-3 gap-6">
                    <div className="border border-[rgba(239,219,146,0.2)] rounded-lg p-4 flex items-center justify-center h-32 bg-[rgba(239,219,146,0.03)]">
                      <p className="text-gray-500 text-sm">Sponsor</p>
                    </div>
                    <div className="border border-[rgba(239,219,146,0.2)] rounded-lg p-4 flex items-center justify-center h-32 bg-[rgba(239,219,146,0.03)]">
                      <p className="text-gray-500 text-sm">Sponsor</p>
                    </div>
                    <div className="border border-[rgba(239,219,146,0.2)] rounded-lg p-4 flex items-center justify-center h-32 bg-[rgba(239,219,146,0.03)]">
                      <p className="text-gray-500 text-sm">Sponsor</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex w-1/2 h-screen justify-center">
                <LightRays className="absolute -z-10 left-0" followMouse={false} raysColor="#efdb92" raysSpeed={0.5} raysOrigin="right" lightSpread={2} pulsating={false}/>
            </div>
          </div>
          */}
          <div className="w-60 h-px bg-linear-to-r from-transparent via-[#efdb92] to-transparent mx-auto absolute mt-25 left-1/2 -translate-x-1/2 -translate-y-1/2"></div>

          <div className="w-full h-250 bg-black flex flex-col justify-center items-center p-10 max-sm:p-4 max-sm:pb-24 max-sm:h-auto">
            <h1 className="text-[#efdb92] text-6xl text-center py-18 font-cormorant max-sm:text-4xl max-sm:py-8">Updates</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 max-w-7xl mx-auto w-full max-sm:gap-6">
              {datObj.map((item, index)=>
                  <UpdatesComponents key={index} title={item.title} desc={item.desc} imagesrc={item.imagesrc} modalDesc={item.modalDesc} link={item.link}/>
              )}
            </div>
          </div>

        </div>
    </Wrapper>
    </>
    
  );
}
