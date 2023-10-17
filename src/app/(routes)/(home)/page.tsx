import CharacteristicsSection from "./_components/CharacteristicsSection";
import HeroSection from "./_components/HeroSection";
import MindsetSection from "./_components/MindsetSection";
import NegativeConversationSection from "./_components/NegativeConversationSection";

export default function Home() {
  return (
    <main className="flex w-full flex-col items-center overflow-hidden">
      <div className="flex w-full flex-col items-center">
        <HeroSection />
        <NegativeConversationSection />
        <MindsetSection />
        <CharacteristicsSection />
      </div>
    </main>
  );
}
