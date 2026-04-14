'use client';

import { motion } from 'framer-motion';
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

export const AnimatedGalleryDemo = () => {
  return (
    <div className="relative w-full min-h-screen bg-cursor-bg">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#1c1a12] to-[#14120b]" />

      {/* Images layer */}
      <div className="relative z-10 p-2">
        <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 gap-1">
          {ALL_IMAGES.map((src, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.3, delay: index * 0.03 }}
              className="relative aspect-square w-full h-full rounded-md overflow-hidden"
            >
              <Image
                src={src}
                alt={`Evento ${index + 1}`}
                fill
                className="object-cover"
                unoptimized
                sizes="20vw"
              />
            </motion.div>
          ))}
        </div>
      </div>

      {/* Text OVERLAY */}
      <div className="absolute inset-0 z-20 flex flex-col items-center justify-start pt-8 md:pt-16 pointer-events-none">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="font-cursor text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-bold uppercase tracking-widest text-white"
          style={{
            textShadow: '0 0 30px rgba(0,0,0,0.9), 0 4px 15px rgba(0,0,0,0.9)',
          }}
        >
          Cursor Guatemala
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mt-2 text-base sm:text-xl md:text-2xl text-white"
          style={{
            textShadow: '0 0 20px rgba(0,0,0,0.8)',
          }}
        >
          La comunidad de desarrolladores que programan con IA
        </motion.p>
      </div>
    </div>
  );
};