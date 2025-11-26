export default function Home() {
  return (
    <section className="container mx-auto px-6 py-10 grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
      <div className="md:col-span-2">
        <h1 className="text-3xl font-bold mb-2">
          Hi! I'm Jennifer, a software engineer.
        </h1>
        <p className="text-slate-600 mb-4">
          I build accessible, performant web apps. I engineer modern UIs and
          robust backend systems with a focus on clarity and maintainability.
        </p>

        <h2 className="text-xl font-semibold mt-6">Skills</h2>
        {/* Organized skill categories */}
        {/*
          Categories: Programming languages, Frameworks, Databases,
          Cloud & Deployment, Tools, Core competencies
        */}
        <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {[
            {
              title: "Programming languages",
              items: [
                "Python",
                "C++",
                "C",
                "TypeScript",
                "JavaScript",
                "Java",
                "MATLAB",
                "HTML/CSS",
              ],
            },
            {
              title: "Frameworks & libraries",
              items: [
                "React",
                "Next.js",
                "Tailwind CSS",
                "Node.js (Express)",
                "Three.js",
                "scikit-learn",
                "Prisma",
                "YOLOv3",
              ],
            },
            {
              title: "Databases",
              items: [
                "PostgreSQL",
                "Firebase",
                "MongoDB",
                "Supabase",
                "Neon",
                "Mentra Cloud DB",
              ],
            },
            {
              title: "Cloud & deployment",
              items: ["AWS", "Vercel", "Cloud operations"],
            },
            {
              title: "Tools",
              items: ["Git", "Linux", "Linear", "Clerk", "DevOps tools"],
            },
            {
              title: "Core competencies",
              items: [
                "Software development",
                "APIs",
                "Agile methodology",
                "Project management tools",
              ],
            },
          ].map((cat) => (
            <div
              key={cat.title}
              className="p-3 border rounded-md bg-white/80 dark:bg-slate-800/60"
            >
              <h3 className="text-sm font-semibold text-slate-700 dark:text-slate-200">
                {cat.title}
              </h3>
              <div className="mt-2 flex flex-wrap gap-2">
                {cat.items.map((it) => (
                  <span
                    key={it}
                    className="text-xs px-2 py-1 bg-slate-100 dark:bg-slate-700 rounded-full text-slate-700 dark:text-slate-200 hover:bg-slate-300"
                  >
                    {it}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      <aside className="flex flex-col items-center">
        <div className="w-44 h-44 rounded-full overflow-hidden bg-slate-100 dark:bg-slate-700 mb-4">
          {/* replace with your photo at public/profile.jpg */}
          <img
            src="/images/headshot.jpeg"
            alt="Jennifer"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="text-sm text-slate-500 text-center">
          Open to roles in frontend, full-stack, or tooling.
        </div>
      </aside>
    </section>
  );
}
