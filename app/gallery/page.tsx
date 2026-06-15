"use client";

import Image from "next/image";
import { useState, useEffect } from "react";


export default function Gallery() {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  useEffect(() => {
  const handleKeyDown = (e: KeyboardEvent) => {
    if (!selectedImage) return;

    if (e.key === "Escape") {
      setSelectedImage(null);
    }

    if (e.key === "ArrowRight") {
      setSelectedImage((prev) =>
        prev && prev < images.length ? prev + 1 : 1
      );
    }

    if (e.key === "ArrowLeft") {
      setSelectedImage((prev) =>
        prev && prev > 1 ? prev - 1 : images.length
      );
    }
  };

  window.addEventListener("keydown", handleKeyDown);

  return () => {
    window.removeEventListener("keydown", handleKeyDown);
  };
}, [selectedImage]);

  const images = Array.from({ length: 22 }, (_, i) => i + 1);

  return (
    <main className="min-h-screen bg-[#0D1117] text-white">
      <div className="max-w-7xl mx-auto px-6 py-20">

        <h1 className="text-5xl font-bold mb-6">
          Gallery
        </h1>

        <p className="text-xl text-gray-300 mb-12">
          Prints, prototypes and design projects I have done. 
        </p>

<p className="text-xl text-gray-300 mb-12">
          Please visit my Facebook or Instagram for more content and updates. Links can be found in at the bottom of the page. 
        </p>
        

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">

          {images.map((num) => (
            <div
  key={num}
  onClick={() => setSelectedImage(num)}
  className="bg-[#161B22] rounded-xl overflow-hidden border border-cyan-500/20 transition-all duration-300 hover:scale-[1.02] hover:border-cyan-500 cursor-pointer"
>
              <div className="relative h-72">

                <Image
                  src={`/images/gallery/print${num}.jpg`}
                  alt={`Project ${num}`}
                  fill
                  className="object-contain"
                />

              </div>

             
            </div>
          ))}

        </div>

      </div>
      {selectedImage && (
  <div
    className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-6 animate-fadeIn"
    onClick={() => setSelectedImage(null)}
  >
    <div
      className="relative w-full max-w-6xl h-[80vh]"
      onClick={(e) => e.stopPropagation()}
    >
      <Image
        src={`/images/gallery/print${selectedImage}.jpg`}
        alt={`Project ${selectedImage}`}
        fill
        className="object-contain"
      />

<button
  onClick={() =>
    setSelectedImage((prev) =>
      prev && prev > 1 ? prev - 1 : images.length
    )
  }
  className="absolute left-4 top-1/2 -translate-y-1/2 text-white text-5xl font-bold px-4"
>
  ‹
</button>

<button
  onClick={() =>
    setSelectedImage((prev) =>
      prev && prev < images.length ? prev + 1 : 1
    )
  }
  className="absolute right-4 top-1/2 -translate-y-1/2 text-white text-5xl font-bold px-4"
>
  ›
</button>

      <button
        onClick={() => setSelectedImage(null)}
        className="absolute top-4 right-4 text-white text-3xl font-bold"
      >
        
        ✕
        
      </button>
       {/* Image Counter */}
  <div className="absolute bottom-4 left-1/2 -translate-x-1/2 text-white bg-black/50 px-4 py-2 rounded-full">
    {selectedImage} / {images.length}
  </div>
    </div>
  </div>
)}
    </main>
  );
}