import Navbar from "@/components/shared/Navbar/Navbar";
import HeroSection from "./_components/HeroSection";
import NegativeConversionSection from "./_components/NegativeConversionSection";

export default function Home() {
  return (
    <div className="flex h-[4000px] min-h-screen flex-col items-center">
      <Navbar />
      <main className="flex w-full flex-col items-center overflow-hidden px-5">
        <div className="w-full max-w-screen-xl">
          <HeroSection />
          <NegativeConversionSection />
        </div>
      </main>
    </div>
  );
}
