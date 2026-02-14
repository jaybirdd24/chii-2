"use client";

import { TransitionLink as Link } from "@/components/ui/TransitionLink";
import { ArrowRight, RotateCcw } from "lucide-react";
import { Button } from "@/components/ui/Button";
import type { ServiceRecommendation } from "@/lib/quiz-data";

interface QuizResultsProps {
  recommendations: ServiceRecommendation[];
  onRetake: () => void;
  onClose: () => void;
}

export function QuizResults({
  recommendations,
  onRetake,
  onClose,
}: QuizResultsProps) {
  return (
    <div className="animate-fade-in text-center">
      <h3 className="font-heading text-2xl md:text-3xl text-text-primary mb-2">
        Your Perfect Match
      </h3>
      <p className="text-text-secondary mb-8">
        Based on your answers, we recommend:
      </p>

      <div className="space-y-4 mb-8">
        {recommendations.map((rec, index) => (
          <div
            key={rec.service.slug}
            className={`p-6 rounded-lg ${
              index === 0 ? "bg-sage-100 border-2 border-sage-300" : "bg-cream-200"
            }`}
          >
            <div className="flex items-center justify-between mb-2">
              <h4 className="font-heading text-xl text-text-primary">
                {rec.service.title}
              </h4>
              <span className="text-sage-600 font-medium">
                {rec.matchPercentage}% match
              </span>
            </div>
            <p className="text-text-secondary text-sm mb-4">
              {rec.service.tagline}
            </p>
            <Link
              href={`/services/${rec.service.slug}`}
              onClick={onClose}
              className="inline-flex items-center gap-2 text-sage-600 hover:text-sage-700 transition-colors font-medium"
            >
              Learn more
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        ))}
      </div>

      <div className="flex flex-col sm:flex-row gap-3 justify-center">
        <Button onClick={onRetake} variant="outline">
          <RotateCcw className="w-4 h-4 mr-2" />
          Retake Quiz
        </Button>
        <Button onClick={onClose}>
          Browse All Services
        </Button>
      </div>
    </div>
  );
}
