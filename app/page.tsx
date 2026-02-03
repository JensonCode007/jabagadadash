import Navbar from "./components/navbar";
import LandingLogo from "../public/logo.png"
import Image from "next/image";
import LightRays from "./components/LightRays"
import Countdown from "./components/countdown";

export default function Home() {
  return (<>
      <Navbar currentPage={1}/>

      <div className="w-full h-screen bg-black">
          <LightRays className="absolute -z-10 left-0" followMouse={false} raysColor="#efdb92" raysSpeed={0.5} raysOrigin="top" lightSpread={2} pulsating={false}/>
        <div className="absolute -translate-x-1/2 -translate-y-1/2 left-1/2 top-1/2 flex items-center justify-center w-full flex-col">
          <Image src={LandingLogo} className="w-180 z-10" alt="landing-logo"/>
          <Countdown/>
        </div>
      </div>
    </>
    
  );
}
