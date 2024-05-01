import AboutSection from "./_components/AboutSection";
import BookSection from "../../../components/shared/book_larry/BookSection";
import HeroSection from "./_components/HeroSection";
import MindsetSection from "./_components/MindsetSection";
import KeySection from "./_components/keys/KeySection";
import TalkSection from "./_components/talks/TalkSection";
import ThoughtSection from "./_components/thoughts/ThoughtSection";
import TestimonialSection from "./_components/TestimonialSection";

export default function Home() {
  return (
    <main className="w-full overflow-hidden">
      <HeroSection />
      <ThoughtSection />
      <MindsetSection />
      <AboutSection />
      <KeySection />
      <TestimonialSection />
      <TalkSection />
      <BookSection />
    </main>
  );
}
