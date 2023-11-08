import MyStorySection from "./_components/MyStorySection";
import HeroSection from "./_components/HeroSection";
import BioSection from "./_components/BioSection";
import CareerSection from "./_components/CareerSection";
import AchievementsSection from "./_components/Achievement/AchievementsSection";
import ExperienceSection from "./_components/ExperienceSection";
import BookSection from "@/components/shared/book_larry/BookSection";

const page = () => {
  return (
    <main className="w-full overflow-hidden">
      <HeroSection />
      <BioSection />
      <MyStorySection />
      <CareerSection />
      <ExperienceSection />
      <AchievementsSection />
      <BookSection />
    </main>
  );
};

export default page;
