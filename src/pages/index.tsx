import Bg from "@/components/Bg/Bg";
import Hero from "@/components/Hero";

export default function Home() {
  return (
    <main>
      <Bg />
      <Hero />
      <div className="w-full relative bg-white ">
        <div className="wave">
          <div className="w w-1"></div>
          <div className="w w-2"></div>
          <div className="w w-3"></div>
          <div className="w w-4"></div>
        </div>
      </div>
    </main>
  );
}
