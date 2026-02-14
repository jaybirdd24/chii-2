import { services, type Service } from "./services";

export interface QuizOption {
  id: string;
  label: string;
  scores: Record<string, number>;
}

export interface QuizQuestion {
  id: string;
  question: string;
  options: QuizOption[];
}

export interface ServiceRecommendation {
  service: Service;
  score: number;
  matchPercentage: number;
}

export const quizQuestions: QuizQuestion[] = [
  {
    id: "goal",
    question: "What's your main wellness goal?",
    options: [
      {
        id: "pain",
        label: "Pain relief",
        scores: { acupuncture: 3, physiotherapy: 3, massage: 2, "chinese-medicine": 2 },
      },
      {
        id: "stress",
        label: "Stress reduction",
        scores: { massage: 3, acupuncture: 2, facials: 2, "chinese-medicine": 2 },
      },
      {
        id: "skin",
        label: "Skin improvement",
        scores: { facials: 3, waxing: 2 },
      },
      {
        id: "relax",
        label: "Deep relaxation",
        scores: { massage: 3, facials: 2, acupuncture: 1, "chinese-medicine": 1 },
      },
      {
        id: "performance",
        label: "Physical performance",
        scores: { physiotherapy: 3, massage: 2, acupuncture: 1 },
      },
    ],
  },
  {
    id: "concern",
    question: "Where do you experience the most discomfort?",
    options: [
      {
        id: "back",
        label: "Back or neck",
        scores: { acupuncture: 3, physiotherapy: 3, massage: 2, "chinese-medicine": 1 },
      },
      {
        id: "muscles",
        label: "Muscles and joints",
        scores: { massage: 3, physiotherapy: 3, acupuncture: 1 },
      },
      {
        id: "face",
        label: "Skin or face",
        scores: { facials: 3, waxing: 1 },
      },
      {
        id: "fullbody",
        label: "Full body tension",
        scores: { massage: 3, acupuncture: 2, "chinese-medicine": 2 },
      },
      {
        id: "injury",
        label: "Specific injury",
        scores: { physiotherapy: 3, acupuncture: 2 },
      },
    ],
  },
  {
    id: "treatment",
    question: "What type of treatment appeals to you?",
    options: [
      {
        id: "handson",
        label: "Hands-on therapy",
        scores: { massage: 3, physiotherapy: 2 },
      },
      {
        id: "needle",
        label: "Needle-based treatment",
        scores: { acupuncture: 3, "chinese-medicine": 2 },
      },
      {
        id: "beauty",
        label: "Beauty and skincare",
        scores: { facials: 3, waxing: 2 },
      },
      {
        id: "herbal",
        label: "Herbal or holistic medicine",
        scores: { "chinese-medicine": 3, acupuncture: 1 },
      },
      {
        id: "movement",
        label: "Movement and exercise",
        scores: { physiotherapy: 3 },
      },
      {
        id: "quick",
        label: "Quick maintenance",
        scores: { waxing: 3, facials: 1 },
      },
    ],
  },
  {
    id: "time",
    question: "How much time can you dedicate?",
    options: [
      {
        id: "30min",
        label: "30 minutes",
        scores: { waxing: 2, facials: 1 },
      },
      {
        id: "60min",
        label: "60 minutes",
        scores: { massage: 2, acupuncture: 2, physiotherapy: 2, facials: 2, "chinese-medicine": 2 },
      },
      {
        id: "90min",
        label: "90+ minutes",
        scores: { massage: 3, facials: 3 },
      },
      {
        id: "flexible",
        label: "Flexible",
        scores: { massage: 1, acupuncture: 1, physiotherapy: 1, facials: 1, waxing: 1, "chinese-medicine": 1 },
      },
    ],
  },
  {
    id: "experience",
    question: "Have you tried any of these before?",
    options: [
      {
        id: "acupuncture_exp",
        label: "Acupuncture",
        scores: { acupuncture: 2 },
      },
      {
        id: "physio_exp",
        label: "Physiotherapy",
        scores: { physiotherapy: 2 },
      },
      {
        id: "massage_exp",
        label: "Massage therapy",
        scores: { massage: 2 },
      },
      {
        id: "facial_exp",
        label: "Facials",
        scores: { facials: 2 },
      },
      {
        id: "none",
        label: "None of these",
        scores: { massage: 1, facials: 1 },
      },
    ],
  },
];

export function calculateResults(
  answers: Record<string, string>
): ServiceRecommendation[] {
  const scores: Record<string, number> = {
    "chinese-medicine": 0,
    acupuncture: 0,
    physiotherapy: 0,
    massage: 0,
    waxing: 0,
    facials: 0,
  };

  // Calculate scores based on answers
  for (const questionId of Object.keys(answers)) {
    const question = quizQuestions.find((q) => q.id === questionId);
    if (!question) continue;

    const selectedOption = question.options.find(
      (o) => o.id === answers[questionId]
    );
    if (!selectedOption) continue;

    for (const [serviceSlug, score] of Object.entries(selectedOption.scores)) {
      scores[serviceSlug] = (scores[serviceSlug] || 0) + score;
    }
  }

  // Find max score for percentage calculation
  const maxPossibleScore = quizQuestions.reduce((max, q) => {
    const questionMax = Math.max(
      ...q.options.flatMap((o) => Object.values(o.scores))
    );
    return max + questionMax;
  }, 0);

  // Create recommendations sorted by score
  const recommendations: ServiceRecommendation[] = Object.entries(scores)
    .map(([slug, score]) => {
      const service = services.find((s) => s.slug === slug);
      if (!service) return null;
      return {
        service,
        score,
        matchPercentage: Math.round((score / maxPossibleScore) * 100),
      };
    })
    .filter((r): r is ServiceRecommendation => r !== null)
    .sort((a, b) => b.score - a.score);

  // Return top 2 recommendations
  return recommendations.slice(0, 2);
}
