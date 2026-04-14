'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';
import Image from 'next/image';

const ALL_IMAGES = [
  '/events/primer-meetup-cursor-gt-1.jpeg',
  '/events/antigua-cursor-gt-1.jpeg',
  '/events/antigua-cursor-gt-2.jpeg',
  '/events/cursor-event-4.jpeg',
  '/events/cafe-cursor-gt-1.jpeg',
  '/events/cafe-cursor-gt-2.jpeg',
  '/events/cafe-cursor-gt-3.jpeg',
  '/events/cafe-cursor-gt-4.jpeg',
  '/events/antigua-cursor-gt-3.jpeg',
  '/events/antigua-cursor-gt-4.jpeg',
  '/events/primer-meetup-cursor-gt-2.jpeg',
  '/events/cafe-cursor-gt-5.jpeg',
  '/events/cafe-cursor-gt-6.jpeg',
  '/events/primer-meetup-cursor-gt-3.jpeg',
  '/events/antigua-cursor-gt-5.jpeg',
  '/events/cursor-event-16.jpeg',
  '/events/antigua-cursor-gt-6.jpeg',
  '/events/cursor-event-18.jpeg',
  '/events/antigua-cursor-gt-7.jpeg',
  '/events/antigua-cursor-gt-8.jpeg',
  '/events/antigua-cursor-gt-9.jpeg',
  '/events/primer-meetup-cursor-gt-4.jpeg',
];

export const AutoCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Auto-advance every 4 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % ALL_IMAGES.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative w-full h-[50vh] md:h-[60vh] overflow-hidden bg-cursor-bg">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#1c1a12] via-[#14120b] to-[#0f0d06]" />

      {/* Images - smaller, more compact */}
      <div className="absolute inset-0 z-10 flex items-center justify-center p-4 md:p-8">
        <div className="relative w-full max-w-4xl h-full">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
              className="absolute inset-0"
            >
              <Image
                src={ALL_IMAGES[currentIndex]}
                alt={`Evento ${currentIndex + 1}`}
                fill
                className="object-contain object-center rounded-lg"
                unoptimized
                priority
                sizes="80vw"
              />
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      {/* Dots indicator */}
      <div className="absolute bottom-3 left-1/2 -translate-x-1/2 z-20 flex gap-1.5">
        {ALL_IMAGES.slice(0, 8).map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-1.5 h-1.5 rounded-full transition-all ${
              currentIndex === index ? 'bg-white w-4' : 'bg-white/40'
            }`}
            aria-label={`Go to image ${index + 1}`}
          />
        ))}
      </div>

      {/* Text overlay - smaller and centered */}
      <div className="absolute inset-0 z-20 flex flex-col items-center justify-start pt-6 md:pt-10 pointer-events-none">
        <motion.h1
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="font-cursor text-3xl sm:text-4xl md:text-5xl font-bold uppercase tracking-wider text-white"
          style={{
            textShadow: '0 0 20px rgba(0,0,0,0.9)',
          }}
        >
          Cursor Guatemala
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-1 text-sm md:text-base text-white/70"
          style={{
            textShadow: '0 0 10px rgba(0,0,0,0.8)',
          }}
        >
          La comunidad de desarrolladores que programan con IA
        </motion.p>
      </div>
    </div>
  );
};