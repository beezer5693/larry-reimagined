import AboutSection from "./_components/AboutSection";
import BookSection from "./_components/BookSection";
import HeroSection from "./_components/HeroSection";
import MindsetSection from "./_components/MindsetSection";
import KeySection from "./_components/keys/KeySection";
import TalkSection from "./_components/talks/TalkSection";
import ThoughtSection from "./_components/thoughts/ThoughtSection";

export default function Home() {
  return (
    <main className="flex w-full flex-col items-center overflow-hidden">
      <HeroSection />
      <div className="w-full space-y-28 lg:space-y-60">
        <ThoughtSection />
        <MindsetSection />
      </div>
      <AboutSection />
      <div className="w-full space-y-28 lg:space-y-52">
        <KeySection />
        <TalkSection />
      </div>
      <BookSection />
    </main>
  );
}
