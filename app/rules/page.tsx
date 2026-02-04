"use client";
import Wrapper from "../components/wrapper";

export default function Rules(){
    return(
    <Wrapper>
        <div className="min-h-screen bg-[#0a0a0a] px-8 py-16">
            <div className="max-w-4xl mx-auto">
                {/* Header */}
                <div className="text-center mb-20 animate-fade-in">
                    <h1 className="text-[#efdb92] text-6xl font-bold mb-6 tracking-tight font-cormorant">
                        Rules & Regulations
                    </h1>
                    <p className="text-gray-400 text-lg">
                        Jabagadadash 6.0 - Please read carefully before registering
                    </p>
                </div>

                {/* Rules Content - Flowing Layout */}
                <div className="space-y-12 text-gray-300">
                    
                    {/* Registration & Eligibility */}
                    <section className="animate-slide-up" style={{ animationDelay: '0.1s' }}>
                        <h2 className="text-[#efdb92] text-3xl font-bold mb-6 pb-5 border-b border-[rgba(239,219,146,0.2)], text-center font-jetbrains-mono">
                            Registration & Eligibility
                        </h2>
                        <div className="space-y-4 leading-relaxed text-lg">
                            <p>1. Registration and payment for all events must be completed online through the registration QR.</p>
                            <p>2. Students enrolled in any Undergraduate (UG) or Postgraduate (PG) programme are eligible to participate.</p>
                            <p>3. All participants must produce a valid college identity card or a letter of authorisation issued by their institution.</p>
                            <p>4. Students are allowed to register for multiple event in case of a schedule conflict, the participant must select one event, and all otherr conflicting registrations will be cancelled without any refund</p>
                        </div>
                    </section>

                    {/* Event Dates & Venue */}
                    <section className="animate-slide-up" style={{ animationDelay: '0.2s' }}>
                        <h2 className="text-[#efdb92] text-3xl font-bold mb-6 pb-5 border-b border-[rgba(239,219,146,0.2)], text-center font-jetbrains-mono">
                            Event Dates & Venue
                        </h2>
                        <div className="space-y-4 leading-relaxed text-lg">
                            <p>5. Jabagadadash 6.0 will be held over three days – <span className="text-[#efdb92] font-semibold">19th, 20th, and 21st February 2026</span>.</p>
                            <p>6. All events will take place at <span className="text-[#efdb92]">Lalita Pratishthanam (LP) Campus, Chinmaya Vishwa Vidyapeeth</span>, Onakkoor, Piravom, Ernakulam.</p>
                            <p>7. All participants (individual and team) must check in at the venue between <span className="text-[#efdb92] font-semibold">8:30 AM and 10:30 AM</span> on the day of their event.</p>
                        </div>
                    </section>

                    {/* Accommodation & Transportation */}
                    <section className="animate-slide-up" style={{ animationDelay: '0.3s' }}>
                        <h2 className="text-[#efdb92] text-3xl font-bold mb-6 pb-5 border-b border-[rgba(239,219,146,0.2)], text-center font-jetbrains-mono">
                            Accommodation & Transportation
                        </h2>
                        <div className="space-y-4 leading-relaxed text-lg">
                            <p>8. Accommodation will be provided to participants at reasonable rates and will be allotted on a first-come, first-served basis.</p>
                            <p>9. Transportation will be arranged from Piravom to the fest venue as per the schedule communicated by the organizing team.</p>
                            <p className="text-gray-400 italic">For more details contact the organizing team.</p>
                        </div>
                    </section>

                    {/* Event Rules & Participation */}
                    <section className="animate-slide-up" style={{ animationDelay: '0.4s' }}>
                        <h2 className="text-[#efdb92] text-3xl font-bold mb-6 pb-5 border-b border-[rgba(239,219,146,0.2)], text-center font-jetbrains-mono">
                            Event Rules & Participation
                        </h2>
                        <div className="space-y-4 leading-relaxed text-lg">
                            <p>10. Participants must strictly adhere to the general rules and code of conduct of the host institution.</p>
                            <p>11. Each event has its own set of rules and regulations, which must be read and followed at all times.</p>
                            <p>12. Failure to comply with event rules may result in <span className="text-red-400 font-semibold">disqualification</span>.</p>
                        </div>
                    </section>

                    {/* Submissions & Event Conduct */}
                    <section className="animate-slide-up" style={{ animationDelay: '0.5s' }}>
                        <h2 className="text-[#efdb92] text-3xl font-bold mb-6 pb-5 border-b border-[rgba(239,219,146,0.2)], text-center font-jetbrains-mono">
                            Submissions & Event Conduct
                        </h2>
                        <div className="space-y-4 leading-relaxed text-lg">
                            <p>13. All submissions must be made in the prescribed format only.</p>
                            <p>14. Once submitted, no modifications or re-submissions will be permitted.</p>
                            <p>15. All submissions must be the original work of the participants. Any form of <span className="text-red-400 font-semibold">plagiarism or copyright infringement</span> will lead to immediate disqualification.</p>
                        </div>
                    </section>

                    {/* Code of Conduct */}
                    <section className="animate-slide-up" style={{ animationDelay: '0.6s' }}>
                        <h2 className="text-[#efdb92] text-3xl font-bold mb-6 pb-5 border-b border-[rgba(239,219,146,0.2)], text-center font-jetbrains-mono">
                            Code of Conduct
                        </h2>
                        <div className="space-y-4 leading-relaxed text-lg">
                            <p>16. Participants are expected to maintain discipline, professionalism, and decorum throughout the fest.</p>
                            <p>17. Any form of vulgarity, profanity, abuse, misconduct, or inappropriate behavior will result in immediate disqualification (individual or entire team).</p>
                            <p>18. Participants will be held liable for any damage to campus property and will be subject to appropriate disciplinary action.</p>
                            <p>19. <span className="text-[#efdb92] font-semibold">Chinmaya Vishwa Vidyapeeth is a strictly vegetarian campus.</span> Consumption or possession of non-vegetarian food is prohibited within the campus premises.</p>
                        </div>
                    </section>

                    {/* Communication & Queries */}
                    <section className="animate-slide-up" style={{ animationDelay: '0.7s' }}>
                        <h2 className="text-[#efdb92] text-3xl font-bold mb-6 pb-5 border-b border-[rgba(239,219,146,0.2)], text-center font-jetbrains-mono">
                            Communication & Queries
                        </h2>
                        <div className="space-y-4 leading-relaxed text-lg">
                            <p>20. Important event-related information will be communicated through the registered email IDs provided during registration.</p>
                            <p>21. For event-specific queries, participants should contact the respective event coordinators.</p>
                            <p>22. For general inquiries, participants may reach out to Team Jabagadadash.</p>
                        </div>
                    </section>

                    {/* Final Authority */}
                    <section className="animate-slide-up" style={{ animationDelay: '0.8s' }}>
                        <h2 className="text-[#efdb92] text-3xl font-bold mb-6 pb-5 border-b border-[rgba(239,219,146,0.2)], text-center font-jetbrains-mono">
                            Final Authority
                        </h2>
                        <div className="space-y-4 leading-relaxed text-lg">
                            <p>23. Important event-related information will be communicated through the registered email IDs provided during registration</p>
                            <p>24. For event-specific queries, participants should contact the respective event coordinators.</p>
                            <p>25. For general inquiries, participants may reach out to Team Jabagadadash</p>
                        </div>
                    </section>

                </div>

                {/* Footer Note */}
                <div className="mt-20 p-8 bg-[rgba(239,219,146,0.05)] border border-[rgba(239,219,146,0.3)] rounded-lg animate-fade-in">
                    <p className="text-gray-300 text-center text-lg leading-relaxed">
                        <span className="text-[#efdb92] font-bold text-xl, text-center font-jetbrains-mono">Important Notice:</span><br/>
                        All participants must read and agree to these rules before registration. Non-compliance may result in disqualification without refund.
                    </p>
                </div>
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
    )
}