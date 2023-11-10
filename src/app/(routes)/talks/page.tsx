import BookSection from "@/components/shared/book_larry/BookSection";
import HeroSection from "./_components/HeroSection";
import Quote from "./_components/Quote";
import Talk1 from "./_components/Talk1";
import Talk2 from "./_components/Talk2";
import Talk3 from "./_components/Talk3";
import { QUOTES } from "@/constants";

const page = () => {
  return (
    <main className="flex w-full flex-col items-center overflow-hidden bg-white">
      <HeroSection />
      <Talk1 />
      <Quote quote={QUOTES[0]} />
      <Talk2 />
      <Quote quote={QUOTES[1]} />
      <Talk3 />
      <BookSection />
    </main>
  );
};

export default page;
