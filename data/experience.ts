export interface Experience {
  role: string;
  organization: string;
  location: string;
  period: string;
  description: string;
}

export const experiences: Experience[] = [
  {
    role: "Android App Development Intern",
    organization: "Centre for Electronic Governance (CEG)",
    location: "Jaipur",
    period: "Jun 2025 – Jul 2025",
    description:
      "Built Android apps using Flutter and Dart during the summer internship. Worked on mobile UI components, application logic, and cross-platform development workflows.",
  },
  {
    role: "Industrial Trainee — ML & IoT",
    organization: "MNIT Innovation and Incubation Centre (MIIC)",
    location: "MNIT Jaipur",
    period: "Jul 2024",
    description:
      "Trained on practical applications of machine learning and IoT with a startup incubated at MIIC. Explored model integration and real-world system design.",
  },
];
