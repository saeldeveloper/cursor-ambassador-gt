'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { Mic, Lightbulb, MessageSquareQuote, Link as LinkIcon, Calendar, Users, ChevronLeft } from 'lucide-react';
import PhotoGallery from '@/components/PhotoGallery';
import { RecapData } from '@/lib/types';
import { useI18n } from '@/lib/i18n';

interface EventRecapProps {
	recap: RecapData;
}

const EventRecap: React.FC<EventRecapProps> = ({ recap }) => {
	const { t, locale } = useI18n();

	const tr = recap.translations?.[locale];
	const summary = tr?.summary ?? recap.summary;
	const date = tr?.date ?? recap.date;
	const highlights = tr?.highlights ?? recap.highlights;
	const speakers = recap.speakers?.map((speaker, i) => ({
		...speaker,
		topic: tr?.speakerTopics?.[i] ?? speaker.topic,
	}));

	return (
		<div className="space-y-8">
			{/* Back button */}
			<div>
				<Link
					href="/"
					className="inline-flex items-center gap-2 text-sm text-cursor-text-secondary hover:text-cursor-text transition-colors group"
				>
					<ChevronLeft className="w-4 h-4 group-hover:-translate-x-0.5 transition-transform" />
					<span>Volver al inicio</span>
				</Link>
			</div>

			{/* Hero Event Header */}
			<motion.div
				initial={{ opacity: 0, y: 15 }}
				animate={{ opacity: 1, y: 0 }}
				transition={{ duration: 0.4 }}
				className="border-b border-cursor-border pb-8"
			>
				<h1 className="text-3xl md:text-4xl lg:text-5xl font-regular tracking-tight text-cursor-text mb-4">
					{recap.title}
				</h1>
				
				<div className="flex flex-wrap items-center gap-x-6 gap-y-3 text-sm text-cursor-text-secondary">
					<div className="flex items-center gap-2">
						<Calendar className="w-4 h-4 text-cursor-text-muted" />
						<span>{date}</span>
					</div>
					
					{recap.attendees && (
						<div className="flex items-center gap-2">
							<Users className="w-4 h-4 text-cursor-text-muted" />
							<span>{t('home.attendees', { count: String(recap.attendees) })}</span>
						</div>
					)}

					{recap.host && (
						<div className="flex items-center gap-2">
							<span className="text-cursor-text-muted">Organizado en</span>
							<a
								href={recap.host.url || '#'}
								target="_blank"
								rel="noopener noreferrer"
								className="text-cursor-text hover:underline inline-flex items-center gap-1.5 font-medium"
							>
								<Image
									src={recap.host.logo}
									alt={recap.host.name}
									width={16}
									height={16}
									className="rounded-full"
								/>
								{recap.host.name}
							</a>
						</div>
					)}
				</div>
			</motion.div>

			{/* Main Layout Grid */}
			<div className="grid grid-cols-1 lg:grid-cols-3 gap-8 md:gap-12 items-start">
				
				{/* Left Side: Summary & Gallery (Col span 2) */}
				<motion.div
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					transition={{ duration: 0.5, delay: 0.1 }}
					className="lg:col-span-2 space-y-8"
				>
					{/* Narrative description */}
					<div className="prose prose-invert max-w-none text-cursor-text-secondary text-base leading-relaxed space-y-4">
						{summary.map((paragraph, index) => (
							<p key={index} className="text-justify md:text-left">{paragraph}</p>
						))}
					</div>

					{/* Photo Gallery */}
					<div className="pt-6 border-t border-cursor-border">
						<h2 className="text-xl font-semibold text-cursor-text mb-4">Galería de fotos</h2>
						<PhotoGallery photos={recap.photos} embedded />
					</div>

					{/* Photo Credits */}
					{recap.photoCredits && recap.photoCredits.length > 0 && (
						<div className="text-xs text-cursor-text-faint pt-2">
							<span className="mr-1">{t('recap.photoCredits')}</span>
							{recap.photoCredits.map((credit, index) => (
								<span key={`${credit.name}-${index}`}>
									{credit.url ? (
										<a
											href={credit.url}
											target="_blank"
											rel="noopener noreferrer"
											className="hover:underline text-cursor-text-muted"
										>
											{credit.name}
										</a>
									) : (
										<span>{credit.name}</span>
									)}
									{index < recap.photoCredits!.length - 1 ? <span>, </span> : <span>.</span>}
								</span>
							))}
						</div>
					)}
				</motion.div>

				{/* Right Side: Sidebar (Col span 1) */}
				<motion.div
					initial={{ opacity: 0, x: 10 }}
					animate={{ opacity: 1, x: 0 }}
					transition={{ duration: 0.5, delay: 0.2 }}
					className="space-y-6 lg:border-l lg:border-cursor-border lg:pl-8 lg:sticky lg:top-24"
				>
					{/* Speakers Section */}
					{speakers && speakers.length > 0 && (
						<div className="space-y-4">
							<div className="flex items-center gap-2 border-b border-cursor-border pb-2">
								<Mic className="w-4 h-4 text-cursor-accent-blue" />
								<h3 className="text-sm font-semibold uppercase tracking-wider text-cursor-text-secondary">
									{t('recap.speakers')}
								</h3>
							</div>
							<div className="space-y-3">
								{speakers.map((speaker) => (
									<div
										key={speaker.name}
										className="bg-cursor-bg-dark/40 border border-cursor-border/60 rounded-lg p-3.5 flex items-start gap-3 transition-colors hover:bg-cursor-bg-dark/80"
									>
										{speaker.photo ? (
											<div className="relative w-10 h-10 rounded-full overflow-hidden flex-shrink-0 border border-cursor-border-emphasis">
												<Image
													src={speaker.photo}
													alt={speaker.name}
													fill
													className="object-cover"
													sizes="40px"
												/>
											</div>
										) : null}
										<div className="min-w-0">
											{speaker.url ? (
												<a
													href={speaker.url}
													target="_blank"
													rel="noopener noreferrer"
													className="text-cursor-text font-medium text-sm hover:underline"
												>
													{speaker.name}
												</a>
											) : (
												<p className="text-cursor-text font-medium text-sm">{speaker.name}</p>
											)}
											<p className="text-cursor-text-muted text-xs mt-0.5">{speaker.topic}</p>
										</div>
									</div>
								))}
							</div>
						</div>
					)}

					{/* Projects Section */}
					{recap.projects && recap.projects.length > 0 && (
						<div className="space-y-4">
							<div className="flex items-center gap-2 border-b border-cursor-border pb-2">
								<Lightbulb className="w-4 h-4 text-cursor-accent-yellow" />
								<h3 className="text-sm font-semibold uppercase tracking-wider text-cursor-text-secondary">
									{t('recap.projects')}
								</h3>
							</div>
							<div className="space-y-3">
								{recap.projects.map((project) => (
									<div
										key={project.name}
										className="bg-cursor-bg-dark/40 border border-cursor-border/60 rounded-lg p-3.5 transition-colors hover:bg-cursor-bg-dark/80"
									>
										{project.url ? (
											<a
												href={project.url}
												target="_blank"
												rel="noopener noreferrer"
												className="text-cursor-text font-medium text-sm hover:underline inline-flex items-center gap-1"
											>
												{project.name}
												<LinkIcon className="w-3 h-3 text-cursor-text-muted" />
											</a>
										) : (
											<p className="text-cursor-text font-medium text-sm">{project.name}</p>
										)}
										<p className="text-cursor-text-muted text-xs mt-1 leading-relaxed">
											{project.description}
										</p>
										{project.author && (
											<p className="text-cursor-text-faint text-xs mt-2">
												{t('recap.by')} {project.author}
											</p>
										)}
									</div>
								))}
							</div>
						</div>
					)}

					{/* Highlights / Feedback Section */}
					{highlights && highlights.length > 0 && (
						<div className="space-y-4">
							<div className="flex items-center gap-2 border-b border-cursor-border pb-2">
								<MessageSquareQuote className="w-4 h-4 text-cursor-accent-purple" />
								<h3 className="text-sm font-semibold uppercase tracking-wider text-cursor-text-secondary">
									{t('recap.highlights')}
								</h3>
							</div>
							<div className="space-y-3">
								{highlights.map((highlight, index) => (
									<blockquote
										key={index}
										className="bg-cursor-bg-dark/40 border-l-2 border-[#b8a8c8] rounded-r-lg px-3.5 py-3 text-sm"
									>
										<p className="text-cursor-text-secondary italic leading-relaxed">
											&ldquo;{highlight.quote}&rdquo;
										</p>
										{highlight.author && (
											<p className="text-cursor-text-faint text-xs mt-1.5 font-medium text-right">
												&mdash; {highlight.author}
											</p>
										)}
									</blockquote>
								))}
							</div>
						</div>
					)}

					{/* Resources Section */}
					{recap.resources && recap.resources.length > 0 && (
						<div className="space-y-4">
							<div className="flex items-center gap-2 border-b border-cursor-border pb-2">
								<LinkIcon className="w-4 h-4 text-cursor-accent-green" />
								<h3 className="text-sm font-semibold uppercase tracking-wider text-cursor-text-secondary">
									{t('recap.resources')}
								</h3>
							</div>
							<ul className="space-y-2">
								{recap.resources.map((resource) => (
									<li key={resource.url}>
										<a
											href={resource.url}
											target="_blank"
											rel="noopener noreferrer"
											className="text-sm text-cursor-text hover:text-cursor-text-secondary transition-colors inline-flex items-center gap-1.5"
										>
											{resource.label}
											<LinkIcon className="w-3.5 h-3.5 text-cursor-text-muted" />
										</a>
									</li>
								))}
							</ul>
						</div>
					)}
				</motion.div>
				
			</div>
		</div>
	);
};

export default EventRecap;
