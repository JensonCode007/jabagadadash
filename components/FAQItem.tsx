'use client';

import { useState } from 'react';
import { ChevronDown } from 'lucide-react';

interface FAQItemProps {
  question: string;
  answer: string;
}

export default function FAQItem({ question, answer }: FAQItemProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border border-[#2a2a2a] rounded-lg bg-[#151515] overflow-hidden transition-all duration-300 hover:border-[#efdb92]/30 backdrop-blur-sm">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full px-6 py-4 flex justify-between items-center text-left group transition-colors duration-200"
      >
        <span className="text-[#efdb92] font-semibold text-lg max-sm:text-base pr-4 group-hover:text-[#f5e8b8] transition-colors duration-200">
          {question}
        </span>
        <ChevronDown
          className={`text-[#efdb92] transition-transform duration-300 flex-shrink-0 ${
            isOpen ? 'rotate-180' : ''
          }`}
          size={24}
        />
      </button>
      <div
        className={`transition-all duration-300 ease-in-out ${
          isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        } overflow-hidden`}
      >
        <div className="px-6 pb-4 text-gray-400 leading-relaxed">
          {answer}
        </div>
      </div>
    </div>
  );
}
