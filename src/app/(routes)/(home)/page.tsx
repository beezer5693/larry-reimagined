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
      <ThoughtSection />
      <MindsetSection />
      <KeySection />
      <TalkSection />
      <BookSection />
    </main>
  );
}
