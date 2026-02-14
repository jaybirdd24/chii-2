"use client";

import { useState, useEffect, useRef } from "react";
import { X, ArrowLeft, ArrowRight } from "lucide-react";
import { createPortal } from "react-dom";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/Button";
import { QuizProgress } from "./QuizProgress";
import { QuizQuestion } from "./QuizQuestion";
import { QuizResults } from "./QuizResults";
import {
  quizQuestions,
  calculateResults,
  type ServiceRecommendation,
} from "@/lib/quiz-data";

interface ServiceQuizProps {
  isOpen: boolean;
  onClose: () => void;
}

export function ServiceQuiz({ isOpen, onClose }: ServiceQuizProps) {
  const [currentStep, setCurrentStep] = useState(0);
  const [answers, setAnswers] = useState<Record<string, string>>({});
  const [results, setResults] = useState<ServiceRecommendation[] | null>(null);
  const modalRef = useRef<HTMLDivElement>(null);
  const closeButtonRef = useRef<HTMLButtonElement>(null);

  const currentQuestion = quizQuestions[currentStep];
  const isLastQuestion = currentStep === quizQuestions.length - 1;
  const hasAnswer = currentQuestion && answers[currentQuestion.id];

  const handleSelect = (optionId: string) => {
    setAnswers((prev) => ({
      ...prev,
      [currentQuestion.id]: optionId,
    }));
  };

  const handleNext = () => {
    if (isLastQuestion) {
      const calculatedResults = calculateResults(answers);
      setResults(calculatedResults);
    } else {
      setCurrentStep((prev) => prev + 1);
    }
  };

  const handleBack = () => {
    if (currentStep > 0) {
      setCurrentStep((prev) => prev - 1);
    }
  };

  const handleRetake = () => {
    setCurrentStep(0);
    setAnswers({});
    setResults(null);
  };

  const handleClose = () => {
    onClose();
    // Reset state after modal closes
    setTimeout(() => {
      setCurrentStep(0);
      setAnswers({});
      setResults(null);
    }, 300);
  };

  // Focus trap and Escape key
  useEffect(() => {
    if (!isOpen) return;

    closeButtonRef.current?.focus();

    const modal = modalRef.current;
    if (!modal) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        handleClose();
        return;
      }

      if (e.key !== "Tab") return;

      const focusable = modal.querySelectorAll<HTMLElement>(
        'a, button:not([disabled]), [tabindex]:not([tabindex="-1"])'
      );
      if (focusable.length === 0) return;

      const first = focusable[0];
      const last = focusable[focusable.length - 1];

      if (e.shiftKey && document.activeElement === first) {
        e.preventDefault();
        last.focus();
      } else if (!e.shiftKey && document.activeElement === last) {
        e.preventDefault();
        first.focus();
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [isOpen]); // eslint-disable-line react-hooks/exhaustive-deps

  if (!isOpen) return null;

  // Use portal to render at document body level
  if (typeof window === "undefined") return null;

  return createPortal(
    <div
      className={cn(
        "fixed inset-0 z-50 flex items-center justify-center p-4",
        "animate-fade-in"
      )}
    >
      {/* Overlay */}
      <div
        className="absolute inset-0 bg-overlay"
        onClick={handleClose}
        aria-hidden="true"
      />

      {/* Modal */}
      <div
        ref={modalRef}
        className={cn(
          "relative w-full max-w-lg bg-cream-50 rounded-2xl shadow-2xl",
          "max-h-[90vh] overflow-y-auto",
          "animate-slide-up"
        )}
        role="dialog"
        aria-modal="true"
        aria-labelledby="quiz-title"
      >
        {/* Header */}
        <div className="sticky top-0 bg-cream-50 p-4 border-b border-border flex items-center justify-between z-10">
          <h2 id="quiz-title" className="font-heading text-lg text-text-primary">
            Find Your Treatment
          </h2>
          <button
            ref={closeButtonRef}
            onClick={handleClose}
            className="p-2 text-text-muted hover:text-text-primary transition-colors rounded-full hover:bg-sage-100"
            aria-label="Close quiz"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6">
          {results ? (
            <QuizResults
              recommendations={results}
              onRetake={handleRetake}
              onClose={handleClose}
            />
          ) : (
            <>
              <QuizProgress
                currentStep={currentStep}
                totalSteps={quizQuestions.length}
              />
              <QuizQuestion
                question={currentQuestion}
                selectedOption={answers[currentQuestion.id] || null}
                onSelect={handleSelect}
              />
            </>
          )}
        </div>

        {/* Footer - Navigation buttons */}
        {!results && (
          <div className="sticky bottom-0 bg-cream-50 p-4 border-t border-border flex justify-between">
            <Button
              variant="ghost"
              onClick={handleBack}
              disabled={currentStep === 0}
              className={currentStep === 0 ? "invisible" : ""}
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back
            </Button>
            <Button onClick={handleNext} disabled={!hasAnswer}>
              {isLastQuestion ? "See Results" : "Next"}
              {!isLastQuestion && <ArrowRight className="w-4 h-4 ml-2" />}
            </Button>
          </div>
        )}
      </div>
    </div>,
    document.body
  );
}
