"use client";

import { cn } from "@/lib/utils";
import { TransitionLink as Link } from "@/components/ui/TransitionLink";
import Image from "next/image";
import { ArrowRight, Leaf, Zap, HeartPulse, Waves, Sparkles, Droplet, type LucideIcon } from "lucide-react";
import { useCardTilt } from "@/hooks/useCardTilt";

const iconMap: Record<string, LucideIcon> = {
  leaf: Leaf,
  zap: Zap,
  "heart-pulse": HeartPulse,
  waves: Waves,
  sparkles: Sparkles,
  droplet: Droplet,
};

interface CardProps {
  title: string;
  description: string;
  href?: string;
  image?: string;
  icon?: string;
  className?: string;
  category?: string;
}

export function Card({
  title,
  description,
  href,
  image,
  icon,
  className,
  category,
}: CardProps) {
  const Icon = icon ? iconMap[icon] : undefined;
  const { ref: tiltRef, onMouseMove, onMouseLeave } = useCardTilt();

  const cardClasses = cn(
    "group block bg-surface rounded-lg overflow-hidden",
    "shadow-sm hover:shadow-xl",
    "transition-shadow duration-400 ease-out",
    "hover:-translate-y-1",
    className
  );

  const content = (
    <>
      {/* Image */}
      <div className="aspect-[4/3] overflow-hidden bg-sage-100 relative">
        {image ? (
          <Image
            src={image}
            alt={title}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className="object-cover transition-transform duration-600 ease-out group-hover:scale-105"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-sage-100 to-sage-200">
            {Icon ? (
              <Icon className="service-icon w-12 h-12 text-sage-400 stroke-[1.5]" />
            ) : (
              null
            )}
          </div>
        )}
      </div>

      {/* Content */}
      <div className="p-6 lg:p-8">
        {category && (
          <span className="text-xs uppercase tracking-wider text-sage-500 mb-2 block">
            {category}
          </span>
        )}
        <h3 className="font-heading text-xl lg:text-2xl text-text-primary mb-3">
          {title}
        </h3>
        <p className="text-text-secondary leading-relaxed mb-4 line-clamp-2">
          {description}
        </p>
        {href && (
          <span className="inline-flex items-center text-sage-600 font-medium group-hover:text-sage-700 transition-colors">
            Learn More
            <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
          </span>
        )}
      </div>
    </>
  );

  if (href) {
    return (
      <div
        ref={tiltRef}
        onMouseMove={onMouseMove}
        onMouseLeave={onMouseLeave}
        style={{ perspective: 800 }}
      >
        <Link href={href} className={cardClasses}>
          {content}
        </Link>
      </div>
    );
  }

  return (
    <div
      ref={tiltRef}
      onMouseMove={onMouseMove}
      onMouseLeave={onMouseLeave}
      style={{ perspective: 800 }}
      className={cardClasses}
    >
      {content}
    </div>
  );
}
