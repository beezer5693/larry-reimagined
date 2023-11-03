import MyStorySection from "./_components/MyStorySection";
import HeroSection from "./_components/HeroSection";
import BioSection from "./_components/BioSection";
import CareerSection from "./_components/CareerSection";
import AchievementsSection from "./_components/AchievementsSection";

const page = () => {
  return (
    <main className="flex w-full flex-col items-center overflow-hidden">
      <HeroSection />
      <BioSection />
      <MyStorySection />
      <CareerSection />
      <AchievementsSection />
    </main>
  );
};

export default page;
