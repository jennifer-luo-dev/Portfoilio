export default function Header() {
  return (
    <header className="border-b bg-gradient-to-r from-white/50 via-slate-50 to-transparent dark:from-slate-900/60">
      <nav className="container mx-auto px-6 py-4 flex items-center justify-between">
        <a href="/" aria-label="Home" className="font-semibold text-lg">
          Jennifer Luo
        </a>
        <ul className="flex gap-4 items-center text-sm">
          <li>
            <a href="/" className="hover:underline">
              Home
            </a>
          </li>
          <li>
            <a href="/projects" className="hover:underline">
              Projects
            </a>
          </li>
          <li>
            <a href="/experience" className="hover:underline">
              Experience
            </a>
          </li>
          <li>
            <a href="/contact" className="rounded-lg px-3 py-1 border">
              Contact
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}
