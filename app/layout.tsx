import "./globals.css";
import Header from "../components/Header";
import Footer from "../components/Footer";

export const metadata = {
  title: "Portfolio",
  description: "Personal SWE portfolio",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-white text-slate-900 dark:bg-slate-900 dark:text-slate-100">
        <div className="min-h-screen flex flex-col">
          <Header />
          <main className="container mx-auto px-6 py-10 flex-1">
            {children}
          </main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
