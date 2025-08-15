import Link from "next/link";
import Carousel from "./components/Carousel";
import Spline from "@splinetool/react-spline/next";

export default function Home() {
  return (
    <div className="font-sans grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen ">
      <main className="top-0 flex flex-col w-full gap-[32px] row-start-2 items-center justify-center sm:items-start">
        {/* <Carousel /> */}
        <Spline scene="https://prod.spline.design/PHXDGhqohgT7ieM0/scene.splinecode" />
      </main>
      <footer className="fixed bottom-0 text-sm row-start-3 flex gap-[24px] flex-wrap w-full">
        <Link href="" className="flex flex-col justify-start">
          Available for work
        </Link>
      </footer>
    </div>
  );
}
