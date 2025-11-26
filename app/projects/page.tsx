"use client";

import { useMemo, useState } from "react";
import ProjectCard from "../../components/ProjectCard";

const projects = [
  {
    title: "English At Large",
    description:
      "A full-stack inventory and content-search platform to replace a slow, manual resource lookup process for tutors. Implemented Next.js + React, PostgreSQL, and Prisma to design a scalable data model, optimized search queries, and built admin-facing workflows. Integrated Neon serverless database and API routes to handle resource ingestion, tagging, and filtering.",
    tech: ["React.js", "TypeScript", "Node", "Postgres"],
    github: "https://github.com/JumboCode/english-at-large/",
    live: "https://jumbocode.org/projects/english-at-large",
  },
  {
    title: "White",
    description:
      "A real-time collaborative editor using Yjs CRDTs, WebSockets, and TipTap/ProseMirror for rich-text editing. Architected a Next.js App Router frontend with Tailwind, and a Node.js/Express backend for document persistence via PostgreSQL + Prisma. Implemented Clerk authentication and Supabase storage for user assets, ensuring conflict-free live editing across clients.",
    tech: [
      "Next.js",
      "React.js",
      "Node.js/Express",
      "PostgreSQL",
      "Prisma",
      "Clerk",
      "Supabase",
      "Tailwind",
    ],
    github: "https://github.com/jennifer-luo-dev/white",
    live: "https://white-eta.vercel.app",
  },
  {
    title: "HomeStart",
    description:
      "A mobile-first data-collection app enabling clients to submit surveys and admins to analyze responses. Implemented Next.js UI workflows, form state management, and secure API endpoints. Created a robust data ingestion pipeline and role-based access patterns for housing-support staff.",
    tech: [
      "JavaScript",
      "Next.js",
      "React.js",
      "PostgreSQL",
      "Prisma",
      "MongoDB",
      "Tailwind",
    ],
    github: "https://jumbocode.org/projects/homestart",
    live: "https://www.homestart.org/",
  },
  {
    title: "Geo-Spatial Field Representation Learning & Reconstruction",
    description:
      "Built a deep-learning pipeline for learning compact representations of geospatial raster data. The system preprocesses spatial inputs, converts them into tensors, and trains a PyTorch-based encoder–decoder model (using transformer or neural-network embeddings) to reconstruct the original fields. I implemented custom training loops, evaluation metrics, and visualization tools to measure reconstruction accuracy and embedding quality. This approach enables scalable modeling of large geospatial fields for tasks like spatial analysis, interpolation, and unsupervised representation learning.",
    tech: [
      "Python",
      "PyTorch",
      "NumPy",
      "Pandas",
      "Rasterio",
      "GDAL",
      "TorchGeo",
      "Geospatial Data Processing",
      "Transformer Models",
      "Neural Networks",
      "Jupyter Notebook",
      "Matplotlib",
      "Scikit-learn",
    ],
    github: "https://github.com/jennifer-luo-dev/gradient-growers/tree/main",
    live: "#",
  },
  {
    title: "Movie Recommendation System",
    description:
      "Implemented a hybrid recommendation engine combining collaborative filtering and content-based embeddings. Built similarity matrices, tuned ranking functions, and validated performance using metrics like precision@k.",
    tech: ["Python", "NumPy", "Pandas", "Neural Networks", "Scikit-learn"],
    github: "#",
    live: "#",
  },
  {
    title: "Reading Level Determination Model",
    description:
      "Built a text-complexity classifier using NLP preprocessing, TF-IDF / word embedding features, and supervised learning (e.g., logistic regression, SVM, or small neural nets). Focused on feature engineering and model interpretability.",
    tech: ["Python", "NumPy", "Pandas", "Neural Networks", "Scikit-learn"],
    github: "#",
    live: "#",
  },
  {
    title: "Protein Docking Accuracy Predictor",
    description:
      "Constructed a predictive model for protein–protein docking quality using biophysical features, structural descriptors, and regression models. Built pipelines for cleaning PDB datasets and evaluating models on domain-specific metrics.",
    tech: ["Python", "NumPy", "Pandas", "Neural Networks", "Scikit-learn"],
    github: "#",
    live: "#",
  },
  {
    title: "Arith - Image Compressor & Decompressor",
    description:
      "Implemented a full compression pipeline using discrete cosine transform concepts, quantization, and 32-bit bit-packing. Built custom memory-managed data structures in C and optimized for runtime and space efficiency.",
    tech: ["C", "Bit-level operations", "Custom data structures"],
    github: "#",
    live: "#",
  },
  {
    title: "iii - Image Deskewing Tool",
    description:
      "Wrote an image-processing program that identifies and removes dark borders around scanned images. Implemented pixel-level manipulation, boundary detection, and locality-aware processing for performance.",
    tech: ["C"],
    github: "#",
    live: "#",
  },
  {
    title: "filesofpix – Image Restoration Program",
    description:
      "Built a data-structured restoration system using Hanson interfaces, implementing abstract lists, maps, and dynamic memory strategies to manipulate pixel matrices and restore corrupted images.",
    tech: ["C", "Hanson structures", "Dynamic memory management"],
    github: "#",
    live: "#",
  },
  {
    title: "gerp – File-Search Engine",
    description:
      "Created a custom grep-like tool using hash tables, file traversal, and string-parsing algorithms. Designed a searchable index for hundreds of files, emphasizing efficient lookup, memory management, and modular data-structure design.",
    tech: ["C++", "Hash tables", "File traversal", "String parsing"],
    github: "#",
    live: "#",
  },
];

export default function Projects() {
  const [query, setQuery] = useState("");
  const [selectedTags, setSelectedTags] = useState<string[]>([]);

  const allTags = useMemo(() => {
    const set = new Set<string>();
    projects.forEach((p) => p.tech.forEach((t) => set.add(t)));
    return Array.from(set).sort();
  }, []);

  const toggleTag = (tag: string) => {
    setSelectedTags((prev) =>
      prev.includes(tag) ? prev.filter((t) => t !== tag) : [...prev, tag]
    );
  };

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return projects.filter((p) => {
      const text = `${p.title} ${p.description} ${p.tech.join(
        " "
      )}`.toLowerCase();

      // Search match (if there's a query, it must be included)
      const matchesQuery = q === "" || text.includes(q);

      // Tag filter (if tags selected, require that project includes ALL selected tags)
      const matchesTags =
        selectedTags.length === 0 ||
        selectedTags.every((t) =>
          p.tech.map((x) => x.toLowerCase()).includes(t.toLowerCase())
        );

      return matchesQuery && matchesTags;
    });
  }, [query, selectedTags]);

  const clearFilters = () => {
    setQuery("");
    setSelectedTags([]);
  };

  return (
    <section className="container mx-auto px-6 py-10">
      <h1 className="text-2xl font-bold mb-4">Projects</h1>
      {/* search + tag filters */}
      <div className="mb-6 space-y-3">
        <div className="flex gap-3 items-center">
          <label htmlFor="project-search" className="sr-only">
            Search projects
          </label>
          <input
            id="project-search"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search projects, descriptions, or tech (e.g. Next.js, Python)"
            type="search"
            aria-label="Search projects"
            className="flex-1 input input-bordered px-3 py-2 rounded-md border bg-white/60 dark:bg-slate-800/60"
          />

          <button
            type="button"
            onClick={clearFilters}
            className="px-3 py-2 rounded-md text-sm bg-slate-100 dark:bg-slate-700"
            aria-label="Clear filters"
            title="Clear filters"
          >
            Clear
          </button>
        </div>

        <div className="flex flex-wrap gap-2">
          {allTags.map((t) => {
            const isSelected = selectedTags.includes(t);
            return (
              <button
                key={t}
                onClick={() => toggleTag(t)}
                type="button"
                className={`text-xs px-3 py-1 rounded-full border transition-colors focus:outline-none focus:ring-2 focus:ring-offset-1 ${
                  isSelected
                    ? "bg-blue-600 text-white border-blue-600"
                    : "bg-slate-100 dark:bg-slate-700 text-slate-700 dark:text-slate-200"
                }`}
                aria-pressed={isSelected}
                aria-label={`Filter by ${t}`}
              >
                {t}
              </button>
            );
          })}
        </div>
      </div>

      <div
        className="mb-4 text-sm text-slate-600 dark:text-slate-300"
        aria-live="polite"
      >
        Showing {filtered.length} of {projects.length} projects
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {filtered.map((p) => (
          <ProjectCard key={p.title} project={p} />
        ))}
      </div>
    </section>
  );
}
