"use client";

import React from "react";
import Image from "next/image";
import Navbar from "@/components/Navbar";
import HeroHeader from "@/components/HeroHeader";
import AmbassadorSection from "@/components/AmbassadorSection";
import FeaturedSection from "@/components/FeaturedSection";
import UpcomingEvents from "@/components/UpcomingEvents";
import PastEvents from "@/components/PastEvents";
import GlobalEvents from "@/components/GlobalEvents";
import SectionDivider from "@/components/SectionDivider";
import Footer from "@/components/Footer";
import JsonLd from "@/components/JsonLd";
import { siteConfig } from "@/content/site.config";
import { upcomingEvents } from "@/content/events";
import { ModernMosaic } from "@/components/blocks/modern-mosaic";

function buildHomeJsonLd() {
  const org = {
    "@type": "Organization",
    name: siteConfig.communityName,
    url: siteConfig.cursorCommunityUrl,
  };

  const eventItems = upcomingEvents.map((event) => ({
    "@type": "Event",
    name: event.title,
    startDate: event.date,
    location: {
      "@type": "Place",
      name: event.location,
    },
    organizer: org,
    ...(event.lumaUrl ? { url: event.lumaUrl } : {}),
    eventAttendanceMode: "https://schema.org/OfflineEventAttendanceMode",
    eventStatus: "https://schema.org/EventScheduled",
  }));

  return {
    "@context": "https://schema.org",
    "@graph": [org, ...eventItems],
  };
}

const ACTIVITIES = [
  {
    title: "Café Cursor",
    description: "Nos reunimos en cafeterías locales para programar en comunidad. Ven a colaborar con desarrolladores locales, comparte un buen café y obtén créditos de Cursor.",
    image: "/events/cafe-cursor-gt-5.jpeg",
  },
  {
    title: "Workshops",
    description: "Sesiones de aprendizaje práctico lideradas por profesionales de la comunidad. Domina flujos de trabajo avanzados y aprende a explotar el potencial de Cursor.",
    image: "/events/cafe-cursor-gt-10.jpeg",
  },
  {
    title: "Meetups",
    description: "Eventos presenciales para conectar con el ecosistema de tecnología en Guatemala. Disfruta de charlas breves, demostraciones técnicas y networking.",
    image: "/events/antigua-cursor-gt-1.jpeg",
  },
  {
    title: "Hackathons",
    description: "Competencias de desarrollo durante todo un fin de semana. Diseña y lanza proyectos reales, gana premios y forma equipo con otros profesionales del país.",
    image: "/events/cursor-hackathon-gt-1.jpeg",
  },
];

const Home: React.FC = () => {
  return (
    <main className="min-h-screen bg-cursor-bg text-cursor-text scroll-smooth">
      <JsonLd data={buildHomeJsonLd()} />
      <Navbar />
      <header className="flex flex-col items-center my-16">
        <div className="flex flex-col items-center max-w-sm py-20">
          <h1 className="text-3xl font-regular text-center mb-2 mt-4">
            Únete a la comunidad de Cursor Guatemala
          </h1>
          <p className="text-sm text-center text-cursor-text-secondary mb-6">
            Explora y conecta con la comunidad de Cursor Guatemala en meetups,
            hackathons, coworking y más.
          </p>
          <div className="flex justify-center gap-2 py-2">
            <a
              href="https://chat.whatsapp.com/B7qvuHRAVg2Bl57CpuhJ41"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-cursor-light-bg text-cursor-bg px-4 py-2 rounded-4xl font-medium hover:opacity-90 transition-opacity"
            >
              Únete ahora
            </a>
            <a
              href="https://luma.com/cursor-guatemala"
              target="_blank"
              rel="noopener noreferrer"
              className="text-cursor-text border border-white px-4 py-2 rounded-4xl hover:bg-white/10 transition-colors"
            >
              Explora eventos
            </a>
          </div>
        </div>
        <ModernMosaic />
      </header>
      <section className="max-w-6xl mx-auto px-6 py-16 md:py-24">
        <div>
          <h3 className=" max-w-xs text-2xl font-regular  mb-2 mt-4">
            Lo que estamos haciendo en Guatemala.
          </h3>
          <p className="max-w-xs text-sm  text-cursor-text-secondary mb-6">
            De una mesa en una cafetería a un proyecto terminado el fin de
            semana. Así pasan las cosas en los eventos de Cursor Guatemala.
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
          {ACTIVITIES.map((activity, index) => (
            <div key={index} className="flex flex-col">
              <div className="relative aspect-3/4 w-full rounded-sm overflow-hidden mb-4">
                <Image
                  src={activity.image}
                  alt={activity.title}
                  fill
                  className="object-cover transition-transform duration-500 hover:scale-105"
                  unoptimized
                />
              </div>
              <h4 className="text-base font-semibold text-cursor-text mb-1">{activity.title}</h4>
              <p className="text-sm text-cursor-text-secondary leading-relaxed mb-6">
                {activity.description}
              </p>
            </div>
          ))}
        </div>
      </section>
      <div className="max-w-6xl mx-auto px-6 py-16 md:py-24">
        <AmbassadorSection />
        <UpcomingEvents />
        <SectionDivider />
        <PastEvents  />
        <FeaturedSection />
        <SectionDivider />
        <GlobalEvents />
        <Footer />
      </div>
    </main>
  );
};

export default Home;
