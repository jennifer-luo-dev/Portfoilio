export default function ProjectCard({
  project,
}: {
  project: {
    title: string;
    description: string;
    tech: string[];
    live?: string;
    github?: string;
    img?: string;
  };
}) {
  return (
    <article className="border rounded-lg p-4 bg-white/80 dark:bg-slate-800/60 shadow-sm">
      <div className="h-36 bg-slate-100 dark:bg-slate-700 rounded-md mb-3 flex items-center justify-center text-slate-500">
        {project.img ? (
          <img
            src={project.img}
            alt={project.title}
            className="object-cover w-full h-full rounded-md"
          />
        ) : (
          <div></div>
        )}
      </div>
      <h3 className="text-lg font-semibold">{project.title}</h3>
      <p className="text-sm text-slate-600 dark:text-slate-300 my-2">
        {project.description}
      </p>
      <div className="flex flex-wrap gap-2 mb-3">
        {project.tech.map((t) => (
          <span
            key={t}
            className="text-xs px-2 py-1 bg-slate-100 dark:bg-slate-700 rounded-full hover:bg-slate-300"
          >
            {t}
          </span>
        ))}
      </div>
      <div className="flex gap-3 text-sm">
        {project.github && (
          <a href={project.github} className="text-blue-600 hover:underline">
            GitHub
          </a>
        )}
        {project.live && (
          <a href={project.live} className="text-blue-600 hover:underline">
            Live demo
          </a>
        )}
      </div>
    </article>
  );
}
