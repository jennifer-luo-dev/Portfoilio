export default function ExperienceItem({
  item,
}: {
  item: { title: string; role: string; period: string; bullets: string[] };
}) {
  return (
    <div className="mb-6">
      <div className="flex justify-between items-start">
        <div>
          <div className="text-sm text-slate-500">{item.period}</div>
          <h4 className="font-semibold">{item.role}</h4>
        </div>
      </div>
      <p className="text-sm text-slate-600 mt-1">{item.title}</p>
      <ul className="mt-2 text-sm list-disc ml-5 text-slate-600">
        {item.bullets.map((b) => (
          <li key={b}>{b}</li>
        ))}
      </ul>
    </div>
  );
}
