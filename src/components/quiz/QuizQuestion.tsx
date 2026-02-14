"use client";

import { cn } from "@/lib/utils";
import type { QuizQuestion as QuizQuestionType } from "@/lib/quiz-data";

interface QuizQuestionProps {
  question: QuizQuestionType;
  selectedOption: string | null;
  onSelect: (optionId: string) => void;
}

export function QuizQuestion({
  question,
  selectedOption,
  onSelect,
}: QuizQuestionProps) {
  const questionId = `quiz-q-${question.id}`;

  return (
    <div className="animate-fade-in">
      <h3
        id={questionId}
        className="font-heading text-2xl md:text-3xl text-text-primary text-center mb-8"
      >
        {question.question}
      </h3>
      <div role="radiogroup" aria-labelledby={questionId} className="grid gap-3">
        {question.options.map((option) => {
          const isSelected = selectedOption === option.id;
          return (
            <button
              key={option.id}
              role="radio"
              aria-checked={isSelected}
              onClick={() => onSelect(option.id)}
              className={cn(
                "p-4 rounded-lg text-left transition-all duration-300",
                "border-2 hover:border-sage-400",
                isSelected
                  ? "border-sage-500 bg-sage-50"
                  : "border-border bg-surface hover:bg-sage-50"
              )}
            >
              <span
                className={cn(
                  "text-lg",
                  isSelected
                    ? "text-sage-700 font-medium"
                    : "text-text-primary"
                )}
              >
                {option.label}
              </span>
            </button>
          );
        })}
      </div>
    </div>
  );
}
