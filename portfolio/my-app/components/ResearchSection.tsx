"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";
import { FileText } from "lucide-react";
import { SectionContainer } from "./shared/SectionContainer";
import { trackPaperClick } from "@/lib/utils";

const TAG_COLORS: Record<string, string> = {
  hci: "#ffa563",
  ml: "#639e9e",
  systems: "#6f9cff",
};

const PAPERS = [
  {
    id: "cryptoanalystbench",
    title: "CryptoAnalystBench: Failures in Multi-Tool Long-Form LLM Analysis",
    venue: "arXiv Preprint",
    year: "2026",
    image: "/images/cryptoanalystbench.png",
    tag: "ml" as const,
    authors: "Anushri Eswaran, Oleg Golev, Darshan Tank, Sidhant Rahi, Himanshu Tyagi",
    url: "https://arxiv.org/abs/2602.11304",
  },
  {
    id: "oml",
    title: "OML: A Primitive for Reconciling Open Access with Owner Control in AI Model Distribution",
    venue: "NeurIPS LockLLM Workshop",
    year: "2025",
    image: "/images/oml.png",
    tag: "ml" as const,
    authors: "Zerui Cheng, Edoardo Contente, Benjamin Tsengel Finch, Oleg Aleksandrovich Golev, Jonathan Hayase, Andrew Miller, Niusha Moshrefi, Anshul Nasery, Sewoong Oh, Himanshu Tyagi, Pramod Viswanath",
    url: "https://openreview.net/forum?id=W3ryccayYs",
  },
  {
    id: "radical",
    title: "Running Consistent Applications Closer to Users with Radical for Lower Latency",
    venue: "SOSP",
    year: "2025",
    image: "/images/radical.png",
    tag: "systems" as const,
    authors: "Nicolaas Kaashoek, Oleg Golev, Austin Li, Amit Levy, Wyatt Lloyd",
    url: "https://dl.acm.org/doi/10.1145/3731569.3764831",
  },
  {
    id: "hapster",
    title: "Hapster: Using Apple Watch Haptics to Enable Live Low-Friction Student Feedback in the Physical Classroom",
    venue: "CHI Extended Abstracts",
    year: "2024",
    image: "/images/hapster.png",
    tag: "hci" as const,
    authors: "Oleg Golev*, Michelle Huang*, Chanketya Nop*, Kritin Vongthongsri*, Andrés Monroy-Hernández, Parastoo Abtahi",
    url: "https://dl.acm.org/doi/epdf/10.1145/3613905.3650733",
  },
];

export function ResearchSection() {
  const handlePaperClick = (paper: typeof PAPERS[0]) => {
    trackPaperClick(paper.title, paper.venue);
  };

  return (
    <SectionContainer id="research" className="bg-white" delay={100}>
      <h2 className="text-2xl font-semibold mb-2">✨ selected research</h2>
      <p className="text-sm text-gray-600 mb-6">* denotes equal contribution</p>

      <div className="flex flex-col gap-4">
        {PAPERS.map((paper, index) => (
          <article
            key={paper.id}
            className="flex flex-col sm:flex-row border border-gray-300 rounded-lg p-4 bg-white shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all duration-300 opacity-0-init animate-fade-in-up"
            style={{ animationDelay: `${200 + index * 100}ms` }}
          >
            <div className="relative w-full sm:w-[20%] h-32 sm:h-auto mr-0 sm:mr-4 mb-4 sm:mb-0 flex-shrink-0">
              <Image
                src={paper.image}
                alt={paper.title}
                fill
                className="object-cover rounded"
              />
            </div>

            <div className="flex flex-col w-full sm:w-[80%]">
              <div className="flex justify-between items-start mb-2">
                <span className="text-xs bg-[#e7cfff] px-2 py-0.5">
                  {paper.venue} {paper.year}
                </span>
                <div 
                  className="flex items-center text-xs"
                  style={{ color: TAG_COLORS[paper.tag] }}
                >
                  <span
                    className="inline-block w-[7px] h-[7px] rounded-full mr-1"
                    style={{ backgroundColor: TAG_COLORS[paper.tag] }}
                  />
                  {paper.tag}
                </div>
              </div>

              <h3 className="text-base font-bold leading-tight mb-2">
                {paper.title}
              </h3>

              <p className="text-sm leading-tight mb-3">
                <span className="font-bold">{paper.authors}</span>
              </p>

              <div className="flex gap-2 mt-auto">
                <a
                  href={paper.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="no-underline cursor-pointer"
                  onClick={() => handlePaperClick(paper)}
                >
                  <Button
                    variant="outline"
                    size="sm"
                    className="cursor-pointer inline-flex items-center gap-1 px-3 py-1 text-xs font-medium text-black bg-transparent border border-gray-300 rounded hover:bg-gray-50 transition-colors duration-300"
                  >
                    <FileText className="w-3 h-3" />
                    paper
                  </Button>
                </a>
              </div>
            </div>
          </article>
        ))}
      </div>
    </SectionContainer>
  );
}
