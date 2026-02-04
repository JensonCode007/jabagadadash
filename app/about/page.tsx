import Wrapper from "../components/wrapper";

import CampusMap from "../components/mapView";

export default function AboutPage() {
  return (
    <Wrapper>
        <div className="min-h-screen bg-[#0a0a0a] px-8 py-16">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-center text-[#efdb92] text-5xl font-bold mb-20 tracking-tight">
          About
        </h1>

        {/* About Section */}
        <section className="mb-24">
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
        <div className="w-full h-px bg-gradient-to-r from-transparent via-[#efdb92] to-transparent mb-24"></div>

        {/* Location Section */}
        <section className="mb-24">
          <h2 className="text-[#efdb92] text-4xl font-bold mb-10 text-center">Location</h2>
          <div className="text-gray-300 text-lg leading-relaxed text-center space-y-1 mb-12">
            <p className="text-[#efdb92] font-semibold text-xl">Lalita Pratishthanam (LP) Campus</p>
            <p className="text-gray-400">Chinmaya Vishwa Vidyapeeth Global Campus</p>
            <p className="text-gray-400">Anthyal - Onakkoor Road</p>
            <p className="text-gray-400">Piravom, Ernakulam - 686667</p>
          </div>
          
          {/* Placeholder for Map */}
          <div className="border border-[rgba(239,219,146,0.3)] rounded-lg p-16 flex items-center justify-center">
            <CampusMap></CampusMap>
          </div>
        </section>

        {/* Divider */}
        <div className="w-full h-px bg-gradient-to-r from-transparent via-[#efdb92] to-transparent mb-24"></div>

        {/* Contact Us Section */}
        <section className="mb-16">
          <h2 className="text-[#efdb92] text-4xl font-bold mb-16 text-center">Contact Us</h2>
          
          {/* Faculty Coordinators */}
          <div className="mb-16">
            <h3 className="text-[#efdb92] text-2xl font-semibold mb-8 text-center">Faculty Coordinators</h3>
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
            <h3 className="text-[#efdb92] text-2xl font-semibold mb-8 text-center">Student Coordinators</h3>
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
            <h3 className="text-[#efdb92] text-2xl font-semibold mb-12 text-center">Fest Heads</h3>
            
            <div className="text-gray-300 max-w-6xl mx-auto">
              {/* Row 1: Management Fest and Tech Fest */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-12 mb-12">
                {/* Management Fest */}
                <div className="text-center">
                  <p className="text-[#efdb92] font-semibold text-xl mb-6">Management Fest</p>
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
                  <p className="text-[#efdb92] font-semibold text-xl mb-6">Tech Fest</p>
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
                  <p className="text-[#efdb92] font-semibold text-xl mb-6">Cultural Fest</p>
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
                  <p className="text-[#efdb92] font-semibold text-xl mb-6">Literary Fest</p>
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
                <p className="text-[#efdb92] font-semibold text-xl mb-6">General Events</p>
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
    </Wrapper>
    
  );
}
