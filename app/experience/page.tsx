import ExperienceItem from "../../components/ExperienceItem";

const items = [
  {
    title: "Head of Project Management, Full-Stack Developer",
    role: "JumboCode",
    period: "2023 — Present",
    bullets: [
      "Led two 14-member development teams to deliver a full-stack library web app for non-profits, applying client-server architectures and leveraging REST APIs for data exchange (ReactJS, NextJS, TypeScript, Prisma, PostgreSQL).",
      "Engineered and implemented RBAC and audit logging mechanisms to safeguard tutor and volunteer data, ensuring multi-role access in compliance with privacy requirements.",
      "Managed 12 project teams as Head of Project Management, coaching PMs on agile system design and leadership, facilitating efficient project scope definition, execution, and timely client deliverables.",
      "Developed backend infrastructure for nonprofit HomeStart by designing scalable database schemas and RESTful API endpoints with optimized performance and data integrity (MongoDB, Prisma, Node.js).",
    ],
  },
  {
    title: "CS Teaching Assistant",
    role: "Tufts University",
    period: "2023 — Present",
    bullets: [
      "Ran weekly labs of 20+ students and held office hours to reinforcing algorithmic concepts such as dynamic programming and graphs, improving average exam scores by 4%.",
      "Evaluated 40+ student algorithm implementations weekly for correctness across all input cases and adherence to theoretical complexity bounds, providing detailed technical feedback.",
    ],
  },
  {
    title: "Machine Learning Intern",
    role: "Kathalyst",
    period: "2023 — 2024",
    bullets: [
      "Build machine learning models to generate text documentation for developers",
      "Developed web-scraping tools using Python and Beautiful Soup to collect training data for documentation writing",
    ],
  },
  {
    title: "Software Researcher",
    role: "Yale University O'Hern Lab",
    period: "Summer 2023",
    bullets: [
      "Engineered neural network models in Python using scikit-learn " +
        "and MATLAB to predict protein docking accuracy, applying feature " +
        "engineering to encode molecular and energetic properties",
      "Accelerated model training and evaluation pipelines by parallelizing" +
        " batch jobs and optimizing I/O, cutting runtime from 3 hours to " +
        "seconds and automating visualization for NIH-funded research publications.",
    ],
  },
  {
    title: "B.S. Computer Science",
    role: "Tufts University",
    period: "2023 — 2027",
    bullets: ["Studying computer science with a minor in chemistry"],
  },
];

export default function Experience() {
  return (
    <section className="container mx-auto px-6 py-10">
      <h1 className="text-2xl font-bold mb-4">Experience & education</h1>
      <div>
        {items.map((i) => (
          <ExperienceItem key={i.role + i.period} item={i} />
        ))}
      </div>
    </section>
  );
}
