"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { useSwipeable } from "react-swipeable";

type ProductGalleryProps = {
  images: string[];
  title: string;
};

export default function ProductGallery({
  images,
  title,
}: ProductGalleryProps) {
  const [selectedImage, setSelectedImage] = useState(0);

  const previousImage = () => {
    setSelectedImage((prev) =>
      prev === 0 ? images.length - 1 : prev - 1
    );
  };

  const nextImage = () => {
    setSelectedImage((prev) =>
      prev === images.length - 1 ? 0 : prev + 1
    );
  };

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "ArrowLeft") previousImage();
      if (event.key === "ArrowRight") nextImage();
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  const handlers = useSwipeable({
    onSwipedLeft: nextImage,
    onSwipedRight: previousImage,
    trackMouse: false,
  });

  return (
    <div>
      <div
        {...handlers}
        className="relative bg-[#161B22] rounded-2xl p-8 border border-cyan-500/20 mb-6 overflow-hidden"
      >
        <Image
          src={images[selectedImage]}
          alt={title}
          width={900}
          height={900}
          priority
          className="w-full h-[500px] object-contain transition-all duration-300"
        />

        {images.length > 1 && (
          <>
            <button
              onClick={previousImage}
              className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-cyan-600 text-white w-12 h-12 rounded-full transition"
            >
              ‹
            </button>

            <button
              onClick={nextImage}
              className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-cyan-600 text-white w-12 h-12 rounded-full transition"
            >
              ›
            </button>

            <div className="absolute bottom-4 right-4 bg-black/60 px-3 py-1 rounded-full text-sm">
              {selectedImage + 1} / {images.length}
            </div>
          </>
        )}
      </div>

      {images.length > 1 && (
        <div className="grid grid-cols-4 gap-4">
          {images.map((image, index) => (
            <button
              key={image}
              onClick={() => setSelectedImage(index)}
              className={`rounded-xl overflow-hidden border-2 transition-all duration-300 ${
                selectedImage === index
                  ? "border-cyan-400 scale-105 shadow-[0_0_20px_rgba(34,211,238,0.45)]"
                  : "border-transparent hover:border-cyan-500/40 hover:scale-105"
              }`}
            >
              <Image
                src={image}
                alt={`${title} ${index + 1}`}
                width={250}
                height={250}
                className="w-full h-24 object-cover"
              />
            </button>
          ))}
        </div>
      )}
    </div>
  );
}