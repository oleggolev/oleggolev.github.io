"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";
import { FileText, ExternalLink } from "lucide-react";
import { SectionContainer } from "./shared/SectionContainer";
import { trackProjectClick, trackLinkClick } from "@/lib/utils";

const TAG_COLORS: Record<string, string> = {
  "web-dev": "#ff0000",
  "full-stack": "#ff0000",
  nlp: "#293ea0",
  "deep-learning": "#6f9cff",
  audio: "#ff6fc3",
  ml: "#639e9e",
  privacy: "#ff6b6b",
};

const PROJECTS = [
  {
    id: "gradattack",
    title: "Evaluating Gradient Inversion Defenses in Federated Learning on the Brain Tumor MRI Dataset",
    year: "2024",
    image: "/images/gradient-inversion.png",
    tags: ["ml", "privacy"],
    authors: "Oleg Golev",
    description: "Analysis of gradient inversion attacks and defensive mechanisms in federated learning systems for medical imaging",
    github: "https://github.com/oleggolev/GradAttack-Med",
    paper: "/files/Evaluating Gradient Inversion Defenses in Federated Learning on the Brain Tumor MRI Dataset.pdf",
  },
  {
    id: "debiasing",
    title: "Replicating Double-Hard Gender Debiasing Algorithm",
    year: "2022",
    image: "/images/bert.png",
    tags: ["nlp", "ml"],
    authors: "Alan Ding, Oleg Golev, Alik Zalmover",
    description: "Reproduced and extended the Double-Hard Debias algorithm using BERTbase to reduce word embeddings gender bias",
    paper: "/files/Golev - Double Hard Debias.pdf",
  },
  {
    id: "beatboxing",
    title: "Deep Learning for Automatic Beatboxing Transcription",
    year: "2021",
    image: "/images/bbx.png",
    tags: ["deep-learning", "audio"],
    authors: "Oleg Golev",
    description: "Deep neural network approach for automatic transcription of human beatboxing sounds into musical notation",
    paper: "/files/Golev - ML for Beatboxing.pdf",
  },
  {
    id: "tigercrush",
    title: "TigerCrush",
    year: "2020",
    image: "/images/tigercrush.png",
    tags: ["web-dev", "full-stack"],
    authors: "Oleg Golev, Alan Ding, and Gerald Huang",
    description: "Anonymous crush-matching platform for Princeton students, gathered 1000+ users and featured in The Daily Princetonian",
    github: "https://github.com/alanjding/TigerCrush",
  },
  {
    id: "mealqueue",
    title: "MealQueue",
    year: "2020",
    image: "/images/mealqueue.png",
    tags: ["web-dev", "full-stack"],
    authors: "Anthony Hein, Oleg Golev, Rahul Jagetia, Aryan Bhasin, Manan Goenka",
    description: "Digital ordering queue system for Princeton University's Late Meal cafe, replacing pen-and-paper workflow with real-time order management between students, chefs, and admins.",
  },
];

const OTHER_PROJECTS = [
  { title: "Automated JIT Liquidity Provision", url: "/files/Golev - JIT on Uniswap.pdf" },
  { title: "Survey of TinyML Methods for Whale Detection", url: "/files/Golev - TinyML for Whale Detection.pdf" },
  { title: "Survey of Blockchain in IoT Applications", url: "/files/Golev - Blockchain for IoT.pdf" },
  { title: "Sensor System for Water Depth Mapping", url: "/files/Golev - Water Depth Sensing.pdf" },
];

export function ProjectsSection() {
  return (
    <SectionContainer id="projects" className="bg-white" delay={200}>
      <h2 className="text-2xl font-semibold mb-6">✨ projects</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
        {PROJECTS.map((project, index) => (
          <article
            key={project.id}
            className="flex flex-col border border-gray-300 rounded-lg p-4 bg-white shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all duration-300 opacity-0-init animate-fade-in-up"
            style={{ animationDelay: `${300 + index * 100}ms` }}
          >
            <div className="relative w-full h-40 mb-4">
              <Image
                src={project.image}
                alt={project.title}
                fill
                className="object-cover rounded"
              />
            </div>

            <div className="flex flex-col flex-1">
              <div className="flex justify-between items-start mb-2">
                <span className="text-[10px] bg-[#e7cfff] px-2 py-0.5">
                  {project.year}
                </span>
                <div className="flex gap-1">
                  {project.tags.map((tag) => (
                    <div
                      key={tag}
                      className="flex items-center text-[10px]"
                      style={{ color: TAG_COLORS[tag] }}
                    >
                      <span
                        className="inline-block w-[7px] h-[7px] rounded-full mr-1"
                        style={{ backgroundColor: TAG_COLORS[tag] }}
                      />
                      {tag}
                    </div>
                  ))}
                </div>
              </div>

              <h3 className="text-[15px] font-bold leading-tight mb-2">
                {project.title}
              </h3>

              <p className="text-[13px] leading-tight mb-4">
                <span className="font-bold">{project.authors}</span>
              </p>

              <p className="text-xs leading-tight italic mb-4 flex-1">
                {project.description}
              </p>

              <div className="flex gap-2 mt-auto">
                {project.paper && (
                  <a 
                    href={project.paper} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="no-underline cursor-pointer"
                    onClick={() => trackProjectClick(project.title, 'paper')}
                  >
                    <Button variant="outline" size="sm" className="cursor-pointer inline-flex items-center gap-1 px-3 py-1 text-xs font-medium text-black bg-transparent border border-gray-300 rounded hover:bg-gray-50 transition-colors duration-300">
                      <FileText className="w-3 h-3" />
                      paper
                    </Button>
                  </a>
                )}
                {project.github && (
                  <a 
                    href={project.github} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="no-underline cursor-pointer"
                    onClick={() => trackProjectClick(project.title, 'code')}
                  >
                    <Button variant="outline" size="sm" className="cursor-pointer inline-flex items-center gap-1 px-3 py-1 text-xs font-medium text-black bg-transparent border border-gray-300 rounded hover:bg-gray-50 transition-colors duration-300">
                      <ExternalLink className="w-3 h-3" />
                      code
                    </Button>
                  </a>
                )}
              </div>
            </div>
          </article>
        ))}
      </div>

      <div className="text-sm text-gray-600">
        <p className="mb-2">Other projects:</p>
        <p className="leading-relaxed">
          {OTHER_PROJECTS.map((project, index) => (
            <span key={project.title}>
              <a
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#0eb5ff] hover:underline transition-colors cursor-pointer"
                onClick={() => trackLinkClick(project.title, project.url)}
              >
                {project.title}
              </a>
              {index < OTHER_PROJECTS.length - 1 ? ", " : ""}
            </span>
          ))}
        </p>
      </div>
    </SectionContainer>
  );
}
