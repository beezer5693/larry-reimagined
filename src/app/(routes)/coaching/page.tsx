import React from "react";
import HeroSection from "./_components/HeroSection";
import CoachingSection from "./_components/CoachingSection";
import { COACHING_TOPICS } from "@/constants";
import HireMeSection from "./_components/HireMeSection";

const Coaching = () => {
  return (
    <main className="w-full overflow-hidden">
      <HeroSection />
      <CoachingSection topics={COACHING_TOPICS} />
      <HireMeSection />
    </main>
  );
};

export default Coaching;
