import Navbar from "@/components/shared/Navbar/Navbar";
import HeroSection from "./_components/HeroSection";
import NegativeConversionSection from "./_components/NegativeConversionSection";
import { cn } from "@/lib/utils";

export default function Home() {
  return (
    <div className={cn("flex min-h-screen flex-col items-center pb-40")}>
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
