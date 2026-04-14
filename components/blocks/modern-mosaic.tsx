'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';

const ALL_IMAGES = [
  '/events/primer-meetup-cursor-gt-1.jpeg',
  '/events/antigua-cursor-gt-1.jpeg',
  '/events/antigua-cursor-gt-2.jpeg',
  '/events/cafe-cursor-gt-5.jpeg',
  '/events/cafe-cursor-gt-1.jpeg',
  '/events/cafe-cursor-gt-10.jpeg',
  '/events/cafe-cursor-gt-3.jpeg',
  '/events/antigua-cursor-gt-10.jpeg',
  '/events/primer-meetup-cursor-gt-2.jpeg',
  '/events/cafe-cursor-gt-7.jpeg',
];

export const ModernMosaic = () => {
  return (
    <div className="relative w-full min-h-screen bg-cursor-bg">
      {/* Simple gradient background */}
      <div className="absolute inset-0 bg-[#14120b]" />

      {/* Responsive grid with hover animation */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-px bg-black">
        {ALL_IMAGES.map((src, index) => (
          <motion.div
            key={index}
            className="relative aspect-square cursor-pointer"
            whileHover={{ scale: 1.05, zIndex: 10 }}
            transition={{ duration: 0.2 }}
          >
            <Image
              src={src}
              alt={`Evento ${index + 1}`}
              fill
              className="object-cover transition-transform duration-200 hover:brightness-110"
              unoptimized
              sizes="(max-width: 640px) 50vw, (max-width: 768px) 33vw, (max-width: 1024px) 25vw, 20vw"
            />
          </motion.div>
        ))}
      </div>
    </div>
  );
};