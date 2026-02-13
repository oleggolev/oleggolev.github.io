import { Mail, GraduationCap, Github, Linkedin, Twitter, FileText, Link } from 'lucide-react';
import { trackLinkClick, trackSocialClick } from '@/lib/utils';

const socialLinks = [
  { href: 'mailto:ogolev@alumni.princeton.edu', icon: Mail, label: 'Email', external: false },
  { href: 'https://scholar.google.com/citations?user=keIjyhQAAAAJ&hl=en', icon: GraduationCap, label: 'Google Scholar' },
  { href: 'https://github.com/oleggolev', icon: Github, label: 'GitHub' },
  { href: 'https://www.linkedin.com/in/oleg-golev/', icon: Linkedin, label: 'LinkedIn' },
  { href: 'https://x.com/oleg_golev', icon: Twitter, label: 'X (Twitter)' },
  { href: 'https://substack.com/@oleggolev', icon: FileText, label: 'Substack' },
  { href: 'https://linktr.ee/oleggolev', icon: Link, label: 'More Links' },
];

const linkClass = 'font-semibold text-[#0eb5ff] hover:underline decoration-2 underline-offset-4 transition-all cursor-pointer';

interface TrackedLinkProps {
  href: string;
  linkName: string;
  children: React.ReactNode;
  className?: string;
}

function TrackedLink({ href, linkName, children, className }: TrackedLinkProps) {
  const handleClick = () => {
    trackLinkClick(linkName, href);
  };

  return (
    <a 
      href={href} 
      target="_blank" 
      rel="noopener noreferrer" 
      className={className || linkClass}
      onClick={handleClick}
    >
      {children}
    </a>
  );
}

interface SocialLinkProps {
  href: string;
  icon: React.ElementType;
  label: string;
  external?: boolean;
}

function SocialLink({ href, icon: Icon, label, external = true }: SocialLinkProps) {
  const handleClick = () => {
    trackSocialClick(label);
  };

  return (
    <a
      href={href}
      target={external ? '_blank' : undefined}
      rel={external ? 'noopener noreferrer' : undefined}
      className="text-gray-700 hover:text-[#0eb5ff] transition-all duration-300 hover:scale-110 cursor-pointer"
      aria-label={label}
      onClick={handleClick}
    >
      <Icon className="w-7 h-7" />
    </a>
  );
}

export function AboutSection() {
  return (
    <section id="about" className="py-16 px-4 sm:px-8 bg-[rgb(249,249,249)] animate-fade-in-up">
      <div className="max-w-4xl mx-auto flex flex-wrap gap-12 justify-center items-start">
        {/* Profile Image */}
        <div className="flex flex-col items-center w-full sm:w-1/3">
          <div className="relative w-[70%] sm:w-[85%] aspect-square">
            <img
              src="/images/profile.png"
              alt="Oleg Golev"
              className="object-cover rounded-[7%] shadow-lg w-full h-full"
            />
          </div>
          
          {/* Social Links */}
          <div className="flex justify-center items-center mt-6 gap-3">
            {socialLinks.map((link) => (
              <SocialLink key={link.label} {...link} />
            ))}
          </div>
        </div>
        
        {/* Bio Content */}
        <div className="flex-1 w-full sm:max-w-[60%] pt-0 sm:pt-4">
          <h1 className="text-3xl sm:text-4xl font-bold mb-6 text-gray-900 tracking-tight">Oleg Golev</h1>
          
          <div className="space-y-5 text-base sm:text-lg leading-relaxed">
            <p>
              Currently <span className="font-semibold text-[#2563eb]">Product Lead, AI</span> at{' '}
              <TrackedLink href="https://sentient.xyz/" linkName="Sentient Labs">
                Sentient Labs
              </TrackedLink>
              , working on AI reasoning research and building state-of-the-art open-source AI systems.
            </p>
            
            <p>
              Previously <span className="font-semibold text-[#2563eb]">Platform Engineer</span> at{' '}
              <TrackedLink href="https://www.deshaw.com/" linkName="D. E. Shaw">D. E. Shaw</TrackedLink>
              ,{' '}
              <TrackedLink href="https://www.arcesium.com/" linkName="Arcesium">Arcesium</TrackedLink>
              ,{' '}
              <TrackedLink href="https://www.linkedin.com/company/sisu-data/" linkName="Sisu Data">Sisu Data</TrackedLink>
              , and{' '}
              <TrackedLink href="https://www.albatrosslabs.io/" linkName="Albatross Labs">Albatross Labs</TrackedLink>
              , working on trading, fintech, and low-latency automation & infrastructure.
              For full work history, visit my{' '}
              <TrackedLink href="https://www.linkedin.com/in/oleg-golev/" linkName="LinkedIn Profile">LinkedIn</TrackedLink>
              .
            </p>
            
            <p>
              <span className="font-semibold text-[#2563eb]">B.S.E.</span> and <span className="font-semibold text-[#2563eb]">M.Eng.</span> in <span className="font-semibold text-[#2563eb]">Computer Science</span> from{' '}
              <TrackedLink href="https://www.cs.princeton.edu/" linkName="Princeton University">Princeton University</TrackedLink>
              , with research background in distributed systems, AI/ML, and HCI.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}