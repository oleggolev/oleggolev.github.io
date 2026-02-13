import { cn, trackSocialClick } from "@/lib/utils";
import { LucideIcon } from "lucide-react";

interface SocialLinkProps {
  href: string;
  icon: LucideIcon;
  label: string;
  external?: boolean;
  className?: string;
}

export function SocialLink({ 
  href, 
  icon: Icon, 
  label, 
  external = true,
  className 
}: SocialLinkProps) {
  const handleClick = () => {
    trackSocialClick(label);
  };

  return (
    <a
      href={href}
      target={external ? "_blank" : undefined}
      rel={external ? "noopener noreferrer" : undefined}
      className={cn(
        "text-gray-700 hover:text-[#0eb5ff] transition-all duration-300 hover:scale-110 cursor-pointer",
        className
      )}
      aria-label={label}
      onClick={handleClick}
    >
      <Icon className="w-7 h-7" />
    </a>
  );
}
