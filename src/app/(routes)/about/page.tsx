import BookSection from "@/components/shared/book_larry/BookSection";
import { AboutCarousel } from "@/app/(routes)/about/_components/AboutCarousel";
import { aboutImageCourasel } from "@/constants";
import AchievementsSection from "./_components/Achievement/AchievementsSection";
import BioSection from "./_components/BioSection";
import CareerSection from "./_components/CareerSection";
import ExperienceSection from "./_components/ExperienceSection";
import HeroSection from "./_components/HeroSection";
import MyStorySection from "./_components/MyStorySection";

const page = () => {
  return (
    <main className="w-full overflow-hidden">
      <HeroSection />
      <BioSection />
      <MyStorySection />
      <CareerSection />
      <ExperienceSection />
      <AchievementsSection />
      <AboutCarousel items={aboutImageCourasel} speed={"slow"} />
      <BookSection />
    </main>
  );
};

export default page;
