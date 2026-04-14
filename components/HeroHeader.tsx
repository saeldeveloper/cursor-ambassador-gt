'use client';

import React from 'react';
import { motion } from 'framer-motion';
import HeroGallery from '@/components/HeroGallery';
import { galleryImages } from '@/content/gallery-images';

const HeroHeader: React.FC = () => {
	return (
		<motion.div
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			transition={{ duration: 0.6, delay: 0.2 }}
			className="relative min-h-[80vh] md:min-h-[90vh] border-t border-cursor-border overflow-hidden"
		>
			{/* Text overlaid on images */}
			<motion.div
				initial={{ opacity: 0, y: 40 }}
				animate={{ opacity: 1, y: 0 }}
				transition={{ duration: 0.8, delay: 0.4, ease: [0.25, 0.46, 0.44, 0.94] }}
				className="absolute inset-0 z-10 flex flex-col items-center justify-center text-center pointer-events-none px-4"
			>
				<motion.h1
					className="font-cursor text-5xl md:text-7xl lg:text-8xl font-bold uppercase tracking-wider text-white drop-shadow-2xl"
					initial={{ opacity: 0, letterSpacing: '0.2em' }}
					animate={{ opacity: 1, letterSpacing: '0.15em' }}
					transition={{ duration: 1, delay: 0.6 }}
				>
					Cursor
				</motion.h1>
				<motion.span
					className="font-cursor text-6xl md:text-8xl lg:text-9xl font-bold uppercase tracking-widest text-white drop-shadow-2xl"
					initial={{ opacity: 0, y: 30 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.8, delay: 0.8, ease: [0.25, 0.46, 0.44, 0.94] }}
				>
					Guatemala
				</motion.span>
				<motion.p
					className="mt-6 text-xl md:text-2xl text-white/90 max-w-xl drop-shadow-lg font-cursor"
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					transition={{ duration: 0.8, delay: 1.2 }}
				>
					La comunidad de desarrolladores que programan con IA
				</motion.p>
			</motion.div>

			{/* Gallery as background */}
			<div className="absolute inset-0 pt-20">
				<HeroGallery images={galleryImages} />
			</div>
		</motion.div>
	);
};

export default HeroHeader;