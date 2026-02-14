"use client";

import { cn } from "@/lib/utils";

interface QuizProgressProps {
  currentStep: number;
  totalSteps: number;
}

export function QuizProgress({ currentStep, totalSteps }: QuizProgressProps) {
  return (
    <div
      role="progressbar"
      aria-valuenow={currentStep + 1}
      aria-valuemin={1}
      aria-valuemax={totalSteps}
      aria-label={`Question ${currentStep + 1} of ${totalSteps}`}
      className="flex items-center justify-center gap-2 mb-8"
    >
      {Array.from({ length: totalSteps }).map((_, index) => (
        <div
          key={index}
          className={cn(
            "w-2 h-2 rounded-full transition-all duration-300",
            index < currentStep
              ? "bg-sage-500"
              : index === currentStep
              ? "bg-sage-500 w-4"
              : "bg-sage-200"
          )}
        />
      ))}
      <span className="sr-only">
        Question {currentStep + 1} of {totalSteps}
      </span>
    </div>
  );
}
