import ChildHoodSection from "./_components/ChildHoodSection";
import HeroSection from "./_components/HeroSection";
import StorySection from "./_components/StorySection";

const page = () => {
  return (
    <main className="flex w-full flex-col items-center overflow-hidden">
      <HeroSection />
      <StorySection />
      <ChildHoodSection />
    </main>
  );
};

export default page;
