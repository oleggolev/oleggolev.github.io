"use client";

import Image from "next/image";
import { SectionContainer } from "./shared/SectionContainer";

const SYSTEMS_PROJECTS = [
  {
    id: "bitcoin",
    title: "Bitcoin Mining Network Simulator",
    course: "COS 470: Principles of Blockchains (Fall 2022)",
    icon: "/images/rust.png",
    description: "A cycle-accurate Bitcoin mining network simulator in Rust",
  },
  {
    id: "raft",
    title: "Raft Consensus & KV Storage Service",
    course: "COS 418: Distributed Systems (Spring 2021)",
    icon: "/images/go.png",
    description: "Raft consensus implementation with fault-tolerant key-value store",
  },
  {
    id: "chandy",
    title: "Chandy-Lamport Snapshot Algorithm",
    course: "COS 418: Distributed Systems (Spring 2021)",
    icon: "/images/go.png",
    description: "Implementation of the Chandy-Lamport distributed snapshot algorithm",
  },
  {
    id: "mips",
    title: "MIPS ISA Cycle-Accurate CPU Simulator",
    course: "COS 375: Computer Architecture (Spring 2021)",
    icon: "/images/c++.png",
    description: "MIPS ISA CPU simulator with pipelining and hazard detection in C++",
  },
  {
    id: "kernel",
    title: "x86 OS Kernel w/ Unix-like File System",
    course: "COS 318: Operating Systems (Fall 2020)",
    icon: "/images/c.png",
    description: "Operating system kernel with process management, virtual memory, and file system",
  },
  {
    id: "proxy",
    title: "HTTP Proxy w/ DNS Pre-Fetching",
    course: "COS 461: Computer Networks (Spring 2020)",
    icon: "/images/go.png",
    description: "Caching HTTP proxy with concurrent connection handling and DNS prefetching",
  },
];

export function FunSystemsSection() {
  return (
    <SectionContainer id="fun-systems" className="bg-white" delay={300}>
      <h2 className="text-2xl font-semibold mb-6">✨ fun systems stuff</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {SYSTEMS_PROJECTS.map((project, index) => (
          <article
            key={project.id}
            className="flex items-start gap-4 border border-gray-300 rounded-lg p-4 bg-white shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all duration-300 opacity-0-init animate-fade-in-up"
            style={{ animationDelay: `${400 + index * 50}ms` }}
          >
            <div className="relative w-12 h-12 flex-shrink-0">
              <Image
                src={project.icon}
                alt={project.title}
                fill
                className="object-contain"
              />
            </div>
            <div className="flex-1">
              <h3 className="text-sm font-bold leading-tight mb-1">
                {project.title}
              </h3>
              <p className="text-xs text-gray-600 mb-1">{project.course}</p>
              <p className="text-xs text-gray-500 leading-relaxed">
                {project.description}
              </p>
            </div>
          </article>
        ))}
      </div>
    </SectionContainer>
  );
}
