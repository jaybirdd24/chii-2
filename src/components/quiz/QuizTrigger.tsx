"use client";

import { useState } from "react";
import { Sparkles } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { ServiceQuiz } from "./ServiceQuiz";

interface QuizTriggerProps {
  variant?: "primary" | "outline" | "ghost";
  size?: "sm" | "md" | "lg";
  className?: string;
}

export function QuizTrigger({
  variant = "outline",
  size = "lg",
  className,
}: QuizTriggerProps) {
  const [isQuizOpen, setIsQuizOpen] = useState(false);

  return (
    <>
      <Button
        variant={variant}
        size={size}
        onClick={() => setIsQuizOpen(true)}
        className={className}
      >
        <Sparkles className="w-4 h-4 mr-2" />
        Find Your Treatment
      </Button>
      <ServiceQuiz isOpen={isQuizOpen} onClose={() => setIsQuizOpen(false)} />
    </>
  );
}
