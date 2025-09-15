'use client';

import { useState, useEffect } from "react"
import { BannerImages } from "../exports/images"
import Image from "next/image";

export default function CarroselComponent(){
  const [current, setCurrent] = useState(0);
  const [animateText, setAnimateText] = useState(false);

  useEffect(() => {
    setAnimateText(false);
    const timeout = setTimeout(() => setAnimateText(true), 100);
    return () => clearTimeout(timeout);
  }, [current]);

  if (!BannerImages || BannerImages.length === 0) {
    return <span>Nenhuma imagem disponível.</span>;
  }
  
  const image = BannerImages[current];
  if (!image) {
    return <span>Imagem não encontrada.</span>;
  }

  function handlePrev() {
    setCurrent(prev => (prev === 0 ? BannerImages.length - 1 : prev - 1));
  }

  function handleNext() {
    setCurrent(prev => (prev === BannerImages.length - 1 ? 0 : prev + 1));
  }

  
  return (
  <div className="relative flex items-center justify-center w-full h-[800px]">
      <Image
        src={image.src}
        alt={image.alt}
        fill={true}
        className="rounded"
        sizes="800px"
      />
      <div className="absolute inset-0 bg-black opacity-75"></div>
      <div
        className={`w-full h-1/2 flex flex-col items-center justify-center px-6 text-white transition-transform duration-700 ease-out ${
          animateText ? 'translate-y-0 opacity-100' : '-translate-y-full opacity-0'
        }`}
      >
        <h2 className="text-3xl font-bold">{image.title}</h2>
        <p className="mt-2">{image.desc}</p>
      </div>
      <button
        onClick={handlePrev}
        className="absolute left-4 top-1/2 -translate-y-1/2 z-10 bg-gray-700/70 text-white rounded-full p-2"
      >
        {'<'}
      </button>
      <button
        onClick={handleNext}
        className="absolute right-4 top-1/2 -translate-y-1/2 z-10 bg-gray-700/70 text-white rounded-full p-2"
      >
        {'>'}
      </button>
    </div>
  )
}