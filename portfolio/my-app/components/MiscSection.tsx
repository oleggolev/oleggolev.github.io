"use client";

import { useState } from "react";
import { Music, Drum, Mic2, ChevronDown, ChevronUp } from "lucide-react";
import { SectionContainer } from "./shared/SectionContainer";

const CATEGORIES = [
  {
    id: "dance",
    title: "Dance",
    icon: Music,
    description: "Hip-hop freestyle and breaking (but not my knees).",
    videos: [
      { id: "Yi5wTotBOx4", title: "HIS POWER, NOT MINE - Oleg Golev & Mary Grace Walker '27 | LOST & FOUND" },
      { id: "cVd4pzvOheY", title: "WTF | HEARTBREAKERS" },
      { id: "3br4jrR0_pE", title: "Identity Crisis | JAILBREAK" },
    ],
  },
  {
    id: "drumming",
    title: "World Drumming",
    icon: Drum,
    description: "World percussion with Japanese & African music.",
    videos: [
      { id: "F45TA5ik6a0", title: "Jack Bazaar - Princeton Tora Taiko" },
      { id: "sn1eaLJh8us", title: "Stepping Stones - Princeton Tora Taiko" },
      { id: "iZNywVUG624", title: "Korekara - Princeton Tora Taiko" },
    ],
  },
  {
    id: "acappella",
    title: "A Cappella",
    icon: Mic2,
    description: "Beatboxing and attempting to sing semi-successfully.",
    videos: [
      { id: "ZMQJcPR37Fk", title: "When I Am Afraid - Kindred Spirit Senior Arch '22" },
      { id: "c2bcHzHphSc", title: "Go Tell It on The Mountain - KS Christmas Arch 2018" },
    ],
  },
] as const;

export function MiscSection() {
  const [activeCategory, setActiveCategory] = useState<string | null>(null);

  const handleCardClick = (categoryId: string) => {
    setActiveCategory(activeCategory === categoryId ? null : categoryId);
  };

  const activeVideos = activeCategory 
    ? CATEGORIES.find((c) => c.id === activeCategory)?.videos 
    : [];

  return (
    <SectionContainer id="misc" className="bg-white" delay={400}>
      <h2 className="text-2xl font-semibold mb-6">✨ misc</h2>

      {/* Category Cards */}
      <div className="cursor-pointer grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
        {CATEGORIES.map((category, index) => {
          const Icon = category.icon;
          const isActive = activeCategory === category.id;
          return (
            <button
              key={category.id}
              onClick={() => handleCardClick(category.id)}
              className={`cursor-pointer flex flex-col items-center text-center border rounded-lg p-6 bg-white shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all duration-300 opacity-0-init animate-fade-in-up ${
                isActive
                  ? "border-[#0eb5ff] ring-2 ring-[#0eb5ff] ring-opacity-50"
                  : "border-gray-300"
              }`}
              style={{ animationDelay: `${500 + index * 100}ms` }}
            >
              <Icon
                className={`w-12 h-12 mb-4 ${
                  isActive ? "text-[#0eb5ff]" : "text-gray-600"
                }`}
              />
              <h3 className="text-lg font-bold mb-2">{category.title}</h3>
              <p className="text-sm text-gray-600">{category.description}</p>
              <div className="mt-4">
                {isActive ? (
                  <ChevronUp className="w-5 h-5 text-[#0eb5ff]" />
                ) : (
                  <ChevronDown className="w-5 h-5 text-gray-400" />
                )}
              </div>
            </button>
          );
        })}
      </div>

      {/* YouTube Gallery */}
      {activeCategory && activeVideos && (
        <div className="border border-gray-300 rounded-lg p-6 bg-gray-50 opacity-0-init animate-fade-in">
          <h3 className="text-xl font-semibold mb-4 capitalize">
            {CATEGORIES.find((c) => c.id === activeCategory)?.title} Videos
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {activeVideos.map((video) => (
              <div key={video.id} className="aspect-video">
                <iframe
                  src={`https://www.youtube.com/embed/${video.id}`}
                  title={video.title}
                  className="w-full h-full rounded-lg"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>
            ))}
          </div>
        </div>
      )}
    </SectionContainer>
  );
}
