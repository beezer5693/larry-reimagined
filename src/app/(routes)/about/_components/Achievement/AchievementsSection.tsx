import AnimateElement from "@/components/shared/animation/AnimateElement";
import { CAREER_ACHIEVEMENTS, LIFE_ACHIEVEMENTS } from "@/constants";
import Achievements from "./Achievements";

function AchievementsSection() {
  return (
    <section className="relative z-10 w-full sm:mb-32 sm:px-5 lg:mb-44">
      <div className="mx-auto w-full max-w-screen-2xl bg-[#1d1c20] px-5 pb-16 pt-12 sm:rounded-md md:px-10 lg:px-16 lg:pb-24 lg:pt-20">
        <div className="mb-20 flex w-full flex-col items-center">
          <AnimateElement className="mb-14" duration={0.5}>
            <h3 className="balance-text bg-gradient-to-b from-white from-40% to-gray-400 bg-clip-text text-center font-semibold tracking-tight text-transparent">
              Career Achievements
            </h3>
          </AnimateElement>
          <Achievements achievements={CAREER_ACHIEVEMENTS} />
        </div>
        <div className="flex w-full flex-col items-center">
          <AnimateElement className="mb-14" duration={0.5}>
            <h3 className="balance-text bg-gradient-to-b from-white from-40% to-gray-400 bg-clip-text text-center font-semibold tracking-tight text-transparent">
              Life Accomplishments
            </h3>
          </AnimateElement>
          <Achievements achievements={LIFE_ACHIEVEMENTS} />
        </div>
      </div>
    </section>
  );
}

export default AchievementsSection;
