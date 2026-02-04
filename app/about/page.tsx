"use client";
import Wrapper from "../components/wrapper";
import { Train, Bus } from "lucide-react";
import CampusMap from "../components/mapView";

export default function AboutPage() {
  return (
    <Wrapper>
        <div className="min-h-screen bg-[#0a0a0a] px-8 py-16">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-center text-[#efdb92] text-5xl font-bold mb-10 tracking-tight animate-fade-in font-cormorant">
          About
        </h1>

        {/* About Section */}
        <section className="mb-24 animate-slide-up" style={{ animationDelay: '0.1s' }}>
          <p className="text-gray-300 text-xl leading-loose text-center max-w-4xl mx-auto">
            <span className="text-[#efdb92] font-semibold text-2xl">Jabagadadash 6.0</span>, the sixth edition of CVV's International Inter-University Mega Fest,
            celebrates innovation, intellect, management excellence, creativity, and human understanding.
            The 2026 edition brings together five major verticals: <span className="text-[#efdb92] font-medium">Tech Fest</span>, <span className="text-[#efdb92] font-medium">Management Fest</span>, <span className="text-[#efdb92] font-medium">Cultural
            Fest</span>, <span className="text-[#efdb92] font-medium">Literary Fest</span>, and <span className="text-[#efdb92] font-medium">Psychology Fest</span>, offering a platform for students from universities
            across India and abroad to showcase their talents, ideas, and creativity in a truly
            multidisciplinary celebration.
          </p>
        </section>

        {/* Divider */}
        <div className="w-full h-px bg-linear-to-r from-transparent via-[#efdb92] to-transparent mb-24"></div>

        {/* Location Section */}
        <section className="mb-24 animate-slide-up" style={{ animationDelay: '0.2s' }}>
          <h2 className="text-[#efdb92] text-4xl font-bold mb-10 text-center font-jetbrains-mono">Location</h2>
          <div className="text-gray-300 text-lg leading-relaxed text-center space-y-1 mb-12">
            <p className="text-[#efdb92] font-semibold text-xl">Lalita Pratishthanam (LP) Campus</p>
            <p className="text-gray-400">Chinmaya Vishwa Vidyapeeth Global Campus</p>
            <p className="text-gray-400">Anthyal - Onakkoor Road</p>
            <p className="text-gray-400">Piravom, Ernakulam - 686667</p>
          </div>
          
          {/* Placeholder for Map */}
          <div className="border border-[rgba(239,219,146,0.3)] rounded-lg p-16 flex items-center justify-center mb-16">
            <CampusMap></CampusMap>
          </div>

          {/* Route Maps */}
          <div className="mt-16">
            <h3 className="text-[#efdb92] text-3xl font-bold mb-12 text-center font-jetbrains-mono">Route Map to Campus</h3>
            
            <div className="space-y-8">
              {/* From Ernakulam South Railway Station */}
              <div className="bg-[rgba(239,219,146,0.05)] border border-[rgba(239,219,146,0.3)] rounded-lg p-6">
                <h4 className="text-[#efdb92] text-xl font-semibold mb-4 flex items-center gap-2">
                  <Train className="w-6 h-6" />
                  From Ernakulam South Railway Station (Ernakulam Junction) /
                </h4>
                <h4 className="text-[#efdb92] text-xl font-semibold mb-4 flex items-center gap-2 ml-8">
                     Ernakulam North Railway Station (Ernakulam Town)
                </h4>
                <ol className="text-gray-300 space-y-3 leading-relaxed ml-8">
                  <li className="list-decimal">From the Railway Station, take <span className="text-[#efdb92] font-medium">Kochi Metro / city bus</span> to <span className="text-[#efdb92] font-medium">Vyttila</span>.</li>
                  <li className="list-decimal">Get down at <span className="text-[#efdb92] font-medium">Vyttila Hub / Vyttila Metro Station</span> (Vyttila Mobility Hub Bus Terminal).</li>
                  <li className="list-decimal">From Vyttila Hub, board a <span className="text-[#efdb92] font-medium">bus towards Piravom / Onakoor Bridge</span>.</li>
                  <li className="list-decimal">Get down at <span className="text-[#efdb92] font-medium">Onakoor Bridge</span>.</li>
                  <li className="list-decimal">Take an <span className="text-[#efdb92] font-medium">auto-rickshaw</span> from Onakoor Bridge to <span className="text-[#efdb92] font-medium">Chinmaya Vishwa Vidyapeeth Global Campus</span>.</li>
                </ol>
              </div>

              {/* From Vyttila Bus Stand */}
              <div className="bg-[rgba(239,219,146,0.05)] border border-[rgba(239,219,146,0.3)] rounded-lg p-6">
                <h4 className="text-[#efdb92] text-xl font-semibold mb-4 flex items-center gap-2">
                  <Bus className="w-6 h-6" />
                  From Vyttila Bus Stand (Vyttila Mobility Hub)
                </h4>
                <ol className="text-gray-300 space-y-3 leading-relaxed ml-8">
                  <li className="list-decimal">From <span className="text-[#efdb92] font-medium">Vyttila Bus Stand</span>, board a <span className="text-[#efdb92] font-medium">bus heading towards Piravom / Onakoor Bridge</span>.</li>
                  <li className="list-decimal">Get down at <span className="text-[#efdb92] font-medium">Onakoor Bridge</span>.</li>
                  <li className="list-decimal">Take an <span className="text-[#efdb92] font-medium">auto-rickshaw</span> from Onakoor Bridge to <span className="text-[#efdb92] font-medium">Chinmaya Vishwa Vidyapeeth Global Campus</span>.</li>
                </ol>
              </div>

              {/* From Piravom Road Railway Station */}
              <div className="bg-[rgba(239,219,146,0.05)] border border-[rgba(239,219,146,0.3)] rounded-lg p-6">
                <h4 className="text-[#efdb92] text-xl font-semibold mb-4 flex items-center gap-2">
                  <Train className="w-6 h-6" />
                  From Piravom Road Railway Station
                </h4>
                <ol className="text-gray-300 space-y-3 leading-relaxed ml-8">
                  <li className="list-decimal">From <span className="text-[#efdb92] font-medium">Piravom Road Railway Station</span>, take an <span className="text-[#efdb92] font-medium">auto-rickshaw or local bus</span> to <span className="text-[#efdb92] font-medium">Piravom / Onakoor Bridge</span>.</li>
                  <li className="list-decimal">Get down at <span className="text-[#efdb92] font-medium">Onakoor Bridge</span>.</li>
                  <li className="list-decimal">Take an <span className="text-[#efdb92] font-medium">auto-rickshaw</span> from Onakoor Bridge to <span className="text-[#efdb92] font-medium">Chinmaya Vishwa Vidyapeeth Global Campus</span>.</li>
                </ol>
              </div>


              <div className="bg-[rgba(239,219,146,0.05)] border border-[rgba(239,219,146,0.3)] rounded-lg p-6">
                <h4 className="text-[#efdb92] text-xl font-semibold mb-4 flex items-center gap-2">
                  <Train className="w-6 h-6" />
                  From Muvattupuzha / Koothatukulam Bus Stand
                </h4>
                <ol className="text-gray-300 space-y-3 leading-relaxed ml-8">
                  <li className="list-decimal">From Muvattupuzha Bus Stand, board a bus towards<span className="text-[#efdb92] font-medium"> Piravom</span>.</li>
                  <li className="list-decimal">Get down at <span className="text-[#efdb92] font-medium">Onakoor Bridge</span>.</li>
                  <li className="list-decimal">Take an <span className="text-[#efdb92] font-medium">auto-rickshaw</span> from Onakoor Bridge to <span className="text-[#efdb92] font-medium">Chinmaya Vishwa Vidyapeeth Global Campus</span>.</li>
                </ol>
              </div>

            </div>
          </div>
        </section>

        {/* Divider */}
        <div className="w-full h-px bg-gradient-to-r from-transparent via-[#efdb92] to-transparent mb-24"></div>

        {/* Contact Us Section */}
        <section className="mb-16 animate-slide-up" style={{ animationDelay: '0.3s' }}>
          <h2 className="text-[#efdb92] text-4xl font-bold mb-16 text-center font-jetbrains-mono">Contact Us</h2>
          
          {/* Faculty Coordinators */}
          <div className="mb-16">
            <h3 className="text-[#efdb92] text-2xl font-semibold mb-8 text-center font-jetbrains-mono">Faculty Coordinators</h3>
            <div className="flex justify-center gap-16 text-gray-300 flex-wrap">
              <div className="text-center">
                <p className="font-medium text-lg mb-2">Dr. Rakhy K S</p>
                <a href="tel:+919605378605" className="text-gray-400 hover:text-[#efdb92] transition-colors text-base">
                  +91 96053 78605
                </a>
              </div>
              <div className="text-center">
                <p className="font-medium text-lg mb-2">Mr. Sarath T R</p>
                <a href="tel:+919633244735" className="text-gray-400 hover:text-[#efdb92] transition-colors text-base">
                  +91 96332 44735
                </a>
              </div>
            </div>
          </div>

          {/* Student Coordinators */}
          <div className="mb-16">
            <h3 className="text-[#efdb92] text-2xl font-semibold mb-8 text-center font-jetbrains-mono">Student Coordinators</h3>
            <div className="flex justify-center gap-12 text-gray-300 flex-wrap">
              <div className="text-center">
                <p className="font-medium text-lg mb-2">Krishna K</p>
                <a href="tel:+919497218799" className="text-gray-400 hover:text-[#efdb92] transition-colors text-base">
                  +91 94972 18799
                </a>
              </div>
              <div className="text-center">
                <p className="font-medium text-lg mb-2">Rosemary Tomy</p>
                <a href="tel:+917994171544" className="text-gray-400 hover:text-[#efdb92] transition-colors text-base">
                  +91 79941 71544
                </a>
              </div>
              <div className="text-center">
                <p className="font-medium text-lg mb-2">Meenakshi M</p>
                <a href="tel:+918547563471" className="text-gray-400 hover:text-[#efdb92] transition-colors text-base">
                  +91 85475 63471
                </a>
              </div>
            </div>
          </div>

          {/* Fest Heads */}
          <div>
            <h3 className="text-[#efdb92] text-2xl font-semibold mb-12 text-center font-jetbrains-mono">Fest Heads</h3>
            
            <div className="text-gray-300 max-w-6xl mx-auto">
              {/* Row 1: Management Fest and Tech Fest */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-12 mb-12">
                {/* Management Fest */}
                <div className="text-center">
                  <p className="text-[#efdb92] font-semibold text-xl mb-6 font-jetbrains-mono">Management Fest</p>
                  <div className="flex justify-center gap-8 flex-wrap">
                    <div>
                      <p className="font-medium">Aditi Dev</p>
                      <a href="tel:+919778278711" className="text-gray-400 hover:text-[#efdb92] transition-colors text-sm">
                        +91 9778278711
                      </a>
                    </div>
                    <div>
                      <p className="font-medium">Advaith Sajith</p>
                      <a href="tel:+919496725235" className="text-gray-400 hover:text-[#efdb92] transition-colors text-sm">
                        +91 9496725235
                      </a>
                    </div>
                  </div>
                </div>

                {/* Tech Fest */}
                <div className="text-center">
                  <p className="text-[#efdb92] font-semibold text-xl mb-6 font-jetbrains-mono">Tech Fest</p>
                  <div className="flex justify-center gap-8 flex-wrap">
                    <div>
                      <p className="font-medium">Muhammed Raiyan Najeem</p>
                      <a href="tel:+918089510567" className="text-gray-400 hover:text-[#efdb92] transition-colors text-sm">
                        +91 8089510567
                      </a>
                    </div>
                    <div>
                      <p className="font-medium">Daewik Prasheen</p>
                      <a href="tel:+918891098650" className="text-gray-400 hover:text-[#efdb92] transition-colors text-sm">
                        +91 8891098650
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              {/* Row 2: Cultural Fest and Literary Fest */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-12 mb-12">
                {/* Cultural Fest */}
                <div className="text-center">
                  <p className="text-[#efdb92] font-semibold text-xl mb-6 font-jetbrains-mono">Cultural Fest</p>
                  <div className="flex justify-center gap-8 flex-wrap">
                    <div>
                      <p className="font-medium">Vividha Sadamast</p>
                      <a href="tel:+919967843080" className="text-gray-400 hover:text-[#efdb92] transition-colors text-sm">
                        +91 9967843080
                      </a>
                    </div>
                    <div>
                      <p className="font-medium">Amrithavarshini</p>
                      <a href="tel:+916282261449" className="text-gray-400 hover:text-[#efdb92] transition-colors text-sm">
                        +91 6282261449
                      </a>
                    </div>
                  </div>
                </div>

                {/* Literary Fest */}
                <div className="text-center">
                  <p className="text-[#efdb92] font-semibold text-xl mb-6 font-jetbrains-mono">Literary Fest</p>
                  <div className="flex justify-center gap-8 flex-wrap">
                    <div>
                      <p className="font-medium">Shreya Baiju</p>
                      <a href="tel:+918075625563" className="text-gray-400 hover:text-[#efdb92] transition-colors text-sm">
                        +91 8075625563
                      </a>
                    </div>
                    <div>
                      <p className="font-medium">Shivangi Tiwari</p>
                      <a href="tel:+918102083452" className="text-gray-400 hover:text-[#efdb92] transition-colors text-sm">
                        +91 8102083452
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              {/* General Events - Full Width */}
              <div className="text-center">
                <p className="text-[#efdb92] font-semibold text-xl mb-6 font-jetbrains-mono">General Events</p>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 justify-items-center">
                  <div>
                    <p className="font-medium">Shabaz Sha S.S <span className="text-gray-500 text-sm">(Football)</span></p>
                    <a href="tel:+919745317135" className="text-gray-400 hover:text-[#efdb92] transition-colors text-sm">
                      +91 9745317135
                    </a>
                  </div>
                  <div>
                    <p className="font-medium">Vighnesh</p>
                    <a href="tel:+919061633956" className="text-gray-400 hover:text-[#efdb92] transition-colors text-sm">
                      +91 9061633956
                    </a>
                  </div>
                  <div>
                    <p className="font-medium">Anagha Anil</p>
                    <a href="tel:+918590307578" className="text-gray-400 hover:text-[#efdb92] transition-colors text-sm">
                      +91 8590307578
                    </a>
                  </div>
                  <div>
                    <p className="font-medium">Archana</p>
                    <a href="tel:+918848325922" className="text-gray-400 hover:text-[#efdb92] transition-colors text-sm">
                      +91 8848325922
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>

        {/* Animations */}
        <style jsx>{`
            @keyframes fade-in {
                from {
                    opacity: 0;
                    transform: translateY(-20px);
                }
                to {
                    opacity: 1;
                    transform: translateY(0);
                }
            }

            @keyframes slide-up {
                from {
                    opacity: 0;
                    transform: translateY(40px);
                }
                to {
                    opacity: 1;
                    transform: translateY(0);
                }
            }

            .animate-fade-in {
                animation: fade-in 1s ease-out forwards;
            }

            .animate-slide-up {
                opacity: 0;
                animation: slide-up 0.8s ease-out forwards;
            }

            /* Smooth scroll behavior */
            html {
                scroll-behavior: smooth;
            }
        `}</style>
    </Wrapper>
    
  );
}
