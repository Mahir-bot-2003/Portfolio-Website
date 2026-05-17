export interface Project {
  title: string;
  description: string;
  techStack: string[];
  githubUrl: string;
  highlight?: string;
}

export const projects: Project[] = [
  {
    title: "ML Mule Account Detection System",
    description:
      "A pipeline that flags money laundering mule accounts in bank transaction data. The hard part wasn't the model — it was engineering 180+ fraud-pattern features that could process 400M+ rows without melting memory. Final LightGBM + XGBoost ensemble hit 0.983 AUC. Also built a temporal window algorithm to catch suspicious activity periods for flagged accounts.",
    techStack: ["Python", "Scikit-learn", "LightGBM", "XGBoost", "Pandas"],
    githubUrl: "https://github.com/Mahir-bot-2003/Mule-Detection-model",
    highlight: "0.983 AUC on 400M+ transactions",
  },
  {
    title: "Samwaad AI",
    description:
      "An AI meeting intelligence platform that transcribes meetings in real-time, then extracts summaries, sentiment, action items, and chapter breaks. Integrated Google Speech-to-Text and Gemini AI for diarization and decision tracking. Backend runs on FastAPI with WebSockets, Redis pub/sub, PostgreSQL, and JWT auth. Also automated post-meeting workflows — Google Calendar events, SendGrid emails, CRM logs — all triggered by what the AI detected in the conversation.",
    techStack: [
      "Python",
      "FastAPI",
      "WebSockets",
      "Redis",
      "PostgreSQL",
      "Google Speech-to-Text",
      "Gemini AI",
    ],
    githubUrl: "https://github.com/dimension-drifter/samwaadai",
    highlight: "Real-time transcription + automated workflows",
  },
  {
    title: "Smart Budget Tracker",
    description:
      "A cross-platform personal finance app built with Flutter. Tracks expenses, visualizes monthly budgets with interactive pie charts, and has an AI-powered assistant that gives personalized savings suggestions. Includes CSV export and a dark-themed responsive UI.",
    techStack: ["Flutter", "Dart", "Firebase"],
    githubUrl: "https://github.com/Mahir-bot-2003/finance-tracker-app",
    highlight: "AI-powered budgeting assistant",
  },
];

export const archives: Project[] = [
  {
    title: "KRITI-AI",
    description: "Kriti AI is an AI-powered voice assistant system designed for the hospitality industry, enabling seamless voice interaction.",
    techStack: ["Python", "AI", "Voice"],
    githubUrl: "https://github.com/Mahir-bot-2003/KRITI-AI",
  },
  {
    title: "Local Shell Agent",
    description: "A lightweight Unix-like shell built from scratch in Python that supports command parsing and built-in commands.",
    techStack: ["Python", "Shell", "OS"],
    githubUrl: "https://github.com/Mahir-bot-2003/Local_Shell_agent",
  },
  {
    title: "EDA Mule Detection",
    description: "Exploratory Data Analysis (EDA) on financial transaction data to identify potential money laundering mule accounts.",
    techStack: ["Jupyter Notebook", "Data Analysis", "Python"],
    githubUrl: "https://github.com/Mahir-bot-2003/EDA-Mule-Detection",
  },
  {
    title: "Fraud Detection System",
    description: "Machine learning trial project predicting whether credit card transactions are fraudulent using classification models.",
    techStack: ["Python", "Scikit-learn", "Machine Learning"],
    githubUrl: "https://github.com/Mahir-bot-2003/Fraud-detection-System",
  },
  {
    title: "Medical Insurance Predictor",
    description: "Uses Linear Regression to predict medical insurance costs based on factors like age, BMI, and smoking status.",
    techStack: ["Python", "Machine Learning", "Linear Regression"],
    githubUrl: "https://github.com/Mahir-bot-2003/Medical-insurance",
  }
];
