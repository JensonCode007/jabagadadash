import Wrapper from "@/components/wrapper";
import scheduleData from "./scheduleData.json";
import BackgroundParticles from "@/components/BackgroundParticles";

export default function Schedule() {
  return (
    <>
      <BackgroundParticles />
      <Wrapper>
        {/* Main div is transparent to show particles in the margins */}
        <div className="min-h-screen px-8 py-16 relative">
          <div className="max-w-7xl mx-auto">
            <h1 className="text-center text-[#efdb92] text-5xl font-bold mb-15 tracking-tight font-cormorant">
              Event Schedule
            </h1>

            {scheduleData.fests.map((fest, festIndex) => (
              <section key={festIndex} className="mb-20">
                <h2 className="text-[#efdb92] text-2xl font-semibold mb-10 font-jetbrains-mono text-start">
                  {fest.name}
                </h2>

                {/* 1. relative z-10: Lifts table above particles.
                  2. bg-black/95: Almost fully opaque black to hide particles.
                  3. backdrop-blur-md: Blurs any stray light from particles.
                */}
                <div className="relative z-10 overflow-x-auto rounded-2xl border border-[rgba(239,219,146,0.3)] bg-black/95 backdrop-blur-md shadow-2xl">
                  <table className="w-full border-collapse text-left">
                    <thead>
                      <tr className="border-b-2 border-[rgba(239,219,146,0.3)]">
                        <th className="py-5 px-6 text-[#efdb92] font-semibold text-lg font-jetbrains-mono whitespace-nowrap">
                          Event Name
                        </th>
                        <th className="py-5 px-6 text-[#efdb92] font-semibold text-lg font-jetbrains-mono whitespace-nowrap">
                          Category
                        </th>
                        <th className="py-5 px-6 text-[#efdb92] font-semibold text-lg font-jetbrains-mono whitespace-nowrap">
                          Date
                        </th>
                        <th className="py-5 px-6 text-[#efdb92] font-semibold text-lg font-jetbrains-mono whitespace-nowrap">
                          Registration Fee
                        </th>
                        <th className="py-5 px-6 text-[#efdb92] font-semibold text-lg font-jetbrains-mono whitespace-nowrap">
                          Cash Prize
                        </th>
                      </tr>
                    </thead>
                    <tbody className="text-gray-300">
                      {fest.events.map((event, eventIndex) => (
                        <tr
                          key={eventIndex}
                          // Added 'group' back so we can trigger the text color change
                          className="border-b border-[rgba(255,255,255,0.05)] bg-transparent group"
                        >
                          {/* Added 'group-hover:text-[#efdb92]' back to cells.
                            'transition-colors' makes the gold fade in smoothly.
                          */}
                          <td className="py-5 px-6 font-medium text-gray-200 group-hover:text-[#efdb92] transition-colors duration-200 whitespace-nowrap">
                            {event.name}
                          </td>
                          <td className="py-5 px-6 text-gray-400 font-jetbrains-mono text-sm group-hover:text-[#efdb92] transition-colors duration-200 whitespace-nowrap">
                            {event.category}
                          </td>
                          <td className="py-5 px-6 text-gray-400 font-jetbrains-mono text-sm group-hover:text-[#efdb92] transition-colors duration-200 whitespace-nowrap">
                            {event.date}
                          </td>
                          <td className="py-5 px-6 text-gray-300 group-hover:text-[#efdb92] transition-colors duration-200 whitespace-nowrap">
                            {event.registrationFee}
                          </td>
                          <td className="py-5 px-6 text-[#efdb92] font-semibold whitespace-nowrap">
                            {event.cashPrize}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </section>
            ))}
          </div>
        </div>
      </Wrapper>
    </>
  );
}