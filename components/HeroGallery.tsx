'use client';

import React from 'react';
import { motion, type Variants } from 'framer-motion';
import Image from 'next/image';

type HeroGalleryProps = {
	images: string[];
};

// Uniform grid - all same size for clean look
const HeroGallery: React.FC<HeroGalleryProps> = ({ images }) => {
	const containerVariants = {
		hidden: { opacity: 0 },
		visible: {
			opacity: 1,
			transition: {
				staggerChildren: 0.04,
				delayChildren: 0.1,
			},
		},
	};

	const itemVariants: Variants = {
		hidden: { opacity: 0, scale: 0.95, y: 20 },
		visible: {
			opacity: 1,
			scale: 1,
			y: 0,
			transition: {
				duration: 0.5,
				ease: [0.25, 0.46, 0.44, 0.94] as [number, number, number, number],
			},
		},
	};

	// Use first 22 images for uniform grid (4x5 + 2)
	const displayImages = images.slice(0, 22);

	return (
		<div className="w-full h-full">
			<motion.div
				className="grid grid-cols-5 md:grid-cols-6 lg:grid-cols-7 gap-1 md:gap-2"
				variants={containerVariants}
				initial="hidden"
				whileInView="visible"
				viewport={{ once: true, margin: '-100px' }}
			>
				{displayImages.map((src, index) => (
					<motion.div
						key={index}
						className="relative aspect-square overflow-hidden rounded-lg md:rounded-xl cursor-pointer group"
						variants={itemVariants}
						whileHover={{ scale: 1.05 }}
						transition={{ duration: 0.25 }}
					>
						<Image
							src={src}
							alt={`Event ${index + 1}`}
							fill
							className="object-cover transition-transform duration-400 group-hover:scale-110"
							sizes="(max-width: 640px) 25vw, (max-width: 1024px) 20vw, 16vw"
							unoptimized
							priority={index < 6}
						/>
						<div className="absolute inset-0 bg-gradient-to-t from-cursor-bg/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
					</motion.div>
				))}
			</motion.div>
		</div>
	);
};

export default HeroGallery;