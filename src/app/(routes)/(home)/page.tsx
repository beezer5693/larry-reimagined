import HeroSection from "./_components/HeroSection";
import NegativeConversationSection from "./_components/NegativeConversationSection";

export default function Home() {
  return (
    <main className="flex w-full flex-col items-center overflow-hidden px-5 pb-40">
      <div className="w-full max-w-screen-xl">
        <HeroSection />
        <NegativeConversationSection />
      </div>
    </main>
  );
}
