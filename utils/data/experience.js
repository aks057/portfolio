export const experiences = [
  {
    id: 1,
    company: "Leucine - AI for Pharma",
    location: "Bangalore, India",
    roles: [
      {
        title: "Software Development Engineer",
        duration: "May 2025 - Present",
        techStack: ["Java", "Spring Boot", "Apache Kafka", "PostgreSQL", "React.js", "Stripe"],
        points: [
          "Architected and built from scratch a highly available Kafka event-streaming pipeline for real-time SAP-to-DWI data integration: a 3-broker cluster with partition-based parallel processing and Dead Letter Queue error handling, processing thousands of events daily with zero data loss.",
          "Owned an end-to-end Acumatica ERP integration pipeline across the full SDLC, from design to production, keeping enterprise systems and internal databases in sync.",
          "Engineered a multi-layered feature-flag subscription system with UI, backend and database access controls plus Stripe webhooks, automating premium feature gating and real-time upgrades.",
        ],
      },
      {
        title: "Software Development Engineer Intern",
        duration: "Jan 2025 - Apr 2025",
        techStack: ["React.js", "Java", "PostgreSQL", "OpenAI", "Stripe"],
        points: [
          "Built GPT-based semantic analysis of FDA regulatory documents, improving interpretive accuracy and entity-extraction precision.",
          "Architected an end-to-end Stripe integration for subscription billing and real-time transaction dashboards, automating invoice workflows and reconciliation.",
          "Built platform security and operational controls (Google reCAPTCHA, rate limiting, usage quotas, domain allow/block lists) and automated data-validation pipelines with ChatGPT-driven checks.",
        ],
      },
    ],
  },
]
