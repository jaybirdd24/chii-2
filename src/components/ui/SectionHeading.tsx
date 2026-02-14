import { cn } from "@/lib/utils";

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  alignment?: "left" | "center" | "right";
  className?: string;
  as?: "h1" | "h2" | "h3";
}

const alignmentClasses = {
  left: "text-left",
  center: "text-center mx-auto",
  right: "text-right",
};

export function SectionHeading({
  title,
  subtitle,
  alignment = "center",
  className,
  as: Tag = "h2",
}: SectionHeadingProps) {
  return (
    <div
      className={cn(
        "max-w-2xl mb-12 lg:mb-16",
        alignmentClasses[alignment],
        className
      )}
    >
      <Tag className="font-heading text-3xl md:text-4xl lg:text-5xl text-text-primary tracking-tight">
        {title}
      </Tag>
      {subtitle && (
        <p className="mt-4 text-lg text-text-secondary leading-relaxed">
          {subtitle}
        </p>
      )}
    </div>
  );
}
