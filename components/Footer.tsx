export default function Footer() {
  return (
    <footer className="border-t py-6 mt-8">
      <div className="container mx-auto px-6 text-sm text-center text-slate-500">
        © {new Date().getFullYear()} Jennifer Luo — building with accessibility
        & performance in mind.
      </div>
    </footer>
  );
}
