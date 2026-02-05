'use client';

import Wrapper from "@/components/wrapper";
import { useState } from "react";
import Image from "next/image";
import BackgroundParticles from "@/components/BackgroundParticles";
import galleryDataJson from "./galleryData.json";

interface GalleryImage {
  id: number;
  src: string;
  alt: string;
  year: string;
}

const galleryData: GalleryImage[] = galleryDataJson;

export default function Gallery() {
  const [selectedImage, setSelectedImage] = useState<GalleryImage | null>(null);
  const [filter, setFilter] = useState<string>('All');

  const years = ['All', ...Array.from(new Set(galleryData.map(img => img.year))).sort().reverse()];
  
  const filteredImages = filter === 'All' 
    ? galleryData 
    : galleryData.filter(img => img.year === filter);

  return (
    <>
      <BackgroundParticles />
      <Wrapper>
      <div className="min-h-screen bg-[#0a0a0a] px-8 py-16">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-center text-[#efdb92] text-5xl font-cormorant font-bold mb-10 tracking-tight">
            Gallery
          </h1>

          {/* Year Filter */}
          <div className="flex items-center justify-center mb-16">
            <div className="bg-[rgba(255,255,255,0.04)] backdrop-blur-lg rounded-full px-6 py-3 border border-[rgba(255,255,255,0.16)] inline-flex gap-3 flex-wrap justify-center">
              {years.map((year) => (
                <button
                  key={year}
                  onClick={() => setFilter(year)}
                  className={`px-6 py-2 rounded-full text-[#efdb92] transition-all duration-300 ${
                    filter === year
                      ? 'bg-[rgba(239,219,146,0.2)] border border-[#efdb92]'
                      : 'hover:bg-[rgba(255,255,255,0.09)]'
                  }`}
                >
                  {year}
                </button>
              ))}
            </div>
          </div>

          {/* Gallery Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
              {filteredImages.map((image) => (
                <div
                  key={image.id}
                  onClick={() => setSelectedImage(image)}
                  className="group relative cursor-pointer bg-[rgba(255,255,255,0.04)] border border-[rgba(239,219,146,0.2)] hover:border-[#efdb92] transition-all duration-300 h-64 rounded-2xl overflow-hidden"
                >
                  <div className="relative w-full h-full flex items-center justify-center">
                    <Image
                      src={image.src}
                      alt={image.alt}
                      fill
                      className="object-contain group-hover:scale-110 transition-transform duration-300"
                    />
                  </div>
                  <div className="absolute inset-0 bg-linear-to-t from-black via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4 pointer-events-none">
                    <p className="text-gray-300 text-sm">{image.year}</p>
                  </div>
                </div>
              ))}
            </div>

          {filteredImages.length === 0 && (
            <div className="text-center py-16">
              <p className="text-[#efdb92] text-2xl font-semibold mb-3">Coming Soon</p>
              <p className="text-gray-400 text-lg">The 2026 event is currently ongoing. Gallery will be updated with photos soon!</p>
            </div>
          )}
        </div>
      </div>

      {/* Modal for Full Image View */}
      {selectedImage && (
        <div
          onClick={() => setSelectedImage(null)}
          className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center p-4 cursor-pointer"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="relative max-w-4xl max-h-[80vh] cursor-default"
          >
            <Image
              src={selectedImage.src}
              alt={selectedImage.alt}
              width={800}
              height={600}
              className="object-contain max-w-full max-h-[70vh]"
            />
            <div className="mt-6 text-center">
              <p className="text-gray-400">{selectedImage.year}</p>
            </div>
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute -top-10 right-0 text-[#efdb92] hover:text-white transition-colors text-2xl font-bold"
            >
              ✕
            </button>
          </div>
        </div>
      )}
    </Wrapper>
    </>
  );
}