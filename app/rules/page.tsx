"use client";
import Wrapper from "../components/wrapper";
import { useState } from "react";
import Image from "next/image";
import Mort from "../../public/Mort.jpg"

interface RuleSection {
  id: number;
  title: string;
  content: string;
  
}

export default function Rules(){
    const [expandedRule, setExpandedRule] = useState<number | null>(null);

    const rules: RuleSection[] = [
        {
            id: 1,
            title: "General Rules",
            content: "My tummy is speaking to me"
        },
        {
            id: 2,
            title: "Participation Guidelines",
           
            content: "I am Coming King julien"
        },
        {
            id: 3,
            title: "Registration Requirements",
            
            content: "Lala lala lala lala"
        },
        {
            id: 4,
            title: "Event Conduct",
            
            content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus magna justo, lacinia eget consectetur sed, convallis at tellus. Nulla porttitor accumsan tincidunt. Cras ultricies ligula sed magna dictum porta. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae."
        },
        {
            id: 5,
            title: "Team Formation",
            
            content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec rutrum congue leo eget malesuada. Praesent sapien massa, convallis a pellentesque nec, egestas non nisi. Donec sollicitudin molestie malesuada. Vivamus suscipit tortor eget felis porttitor volutpat."
        },
        {
            id: 6,
            title: "Submission Guidelines",
            
            content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur arcu erat, accumsan id imperdiet et, porttitor at sem. Nulla quis lorem ut libero malesuada feugiat. Quisque velit nisi, pretium ut lacinia in, elementum id enim. Sed porttitor lectus nibh."
        },
        {
            id: 7,
            title: "Judging Criteria",
           
            content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris blandit aliquet elit, eget tincidunt nibh pulvinar a. Donec velit neque, auctor sit amet aliquam vel, ullamcorper sit amet ligula. Pellentesque in ipsum id orci porta dapibus. Curabitur aliquet quam id dui posuere blandit."
        },
        {
            id: 8,
            title: "Code of Conduct",
            
            content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus suscipit tortor eget felis porttitor volutpat. Curabitur non nulla sit amet nisl tempus convallis quis ac lectus. Nulla porttitor accumsan tincidunt. Proin eget tortor risus. Donec rutrum congue leo eget malesuada."
        },
        {
            id: 9,
            title: "Disqualification Terms",
            
            content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum ac diam sit amet quam vehicula elementum sed sit amet dui. Cras ultricies ligula sed magna dictum porta. Donec sollicitudin molestie malesuada. Mauris blandit aliquet elit, eget tincidunt nibh pulvinar a."
        },
        {
            id: 10,
            title: "Contact & Support",
           
            content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla quis lorem ut libero malesuada feugiat. Vivamus magna justo, lacinia eget consectetur sed, convallis at tellus. Praesent sapien massa, convallis a pellentesque nec, egestas non nisi. Curabitur arcu erat, accumsan id imperdiet et."
        }
    ];

    const toggleRule = (id: number) => {
        setExpandedRule(expandedRule === id ? null : id);
    };

    return(
    <Wrapper>
        <div className="min-h-screen bg-[#0a0a0a] px-8 py-16">
            <div className="max-w-5xl mx-auto">
                {/* Header */}
                <div className="text-center mb-16 animate-fade-in">
                    <h1 className="text-[#efdb92] text-6xl font-bold mb-6 tracking-tight">
                        Rules & Regulations
                    </h1>
                    <p className="text-gray-400 text-lg max-w-3xl mx-auto">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    </p>

                </div>

                {/* Divider */}
                <div className="w-32 h-px bg-gradient-to-r from-transparent via-[#efdb92] to-transparent mx-auto mb-16"></div>

                {/* Rules List */}
                <div className="space-y-4">
                    {rules.map((rule, index) => (
                        <div 
                            key={rule.id}
                            className="border border-[rgba(239,219,146,0.2)] rounded-lg overflow-hidden transition-all duration-300 hover:border-[rgba(239,219,146,0.4)] animate-slide-up"
                            style={{ animationDelay: `${index * 0.1}s` }}
                        >
                            {/* Rule Header */}
                            <button
                                onClick={() => toggleRule(rule.id)}
                                className="w-full px-6 py-5 flex items-center justify-between bg-[rgba(239,219,146,0.05)] hover:bg-[rgba(239,219,146,0.1)] transition-all duration-300"
                            >
                                <div className="flex items-center gap-4">
                                    <span className="text-3xl transform transition-transform duration-300 hover:scale-110">
                                        {rule.icon}
                                    </span>
                                    <h2 className="text-[#efdb92] text-xl font-semibold text-left">
                                        {rule.title}
                                    </h2>
                                </div>
                                <svg 
                                    className={`w-6 h-6 text-[#efdb92] transform transition-transform duration-300 ${expandedRule === rule.id ? 'rotate-180' : ''}`}
                                    fill="none" 
                                    stroke="currentColor" 
                                    viewBox="0 0 24 24"
                                >
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                </svg>
                            </button>

                            {/* Rule Content */}
                            <div 
                                className={`overflow-hidden transition-all duration-300 ${
                                    expandedRule === rule.id ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                                }`}
                            >
                                <div className="px-6 py-5 bg-[rgba(0,0,0,0.3)] border-t border-[rgba(239,219,146,0.1)]">
                                    <p className="text-gray-300 leading-relaxed">
                                        {rule.content}
                                    </p>
                                </div>
                                <Image src={Mort} alt="Picture of Mort"/>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Footer Note */}
                <div className="mt-16 p-6 bg-[rgba(239,219,146,0.05)] border border-[rgba(239,219,146,0.2)] rounded-lg">
                    <p className="text-gray-300 text-center">
                        <span className="text-[#efdb92] font-semibold">Important:</span> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    </p>
                </div>
            </div>
        </div>

        {/* Add animations */}
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
                    transform: translateY(30px);
                }
                to {
                    opacity: 1;
                    transform: translateY(0);
                }
            }

            .animate-fade-in {
                animation: fade-in 0.8s ease-out forwards;
            }

            .animate-slide-up {
                opacity: 0;
                animation: slide-up 0.6s ease-out forwards;
            }
        `}</style>
    </Wrapper>
    )
}