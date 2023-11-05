import AnimateElement from "@/components/shared/animation/AnimateElement";
import { CAREER_ACHIEVEMENTS, LIFE_ACHIEVEMENTS } from "@/constants";
import Achievements from "./Achievements";

function AchievementsSection() {
  return (
    <section className="relative z-10 mb-28 w-full bg-[#1d1c20] px-5 md:mb-36 md:px-10 xl:mb-60">
      <div className="mx-auto w-full max-w-screen-2xl px-8 py-24 md:px-14 xl:px-20">
        <div className="relative mb-20 flex w-full flex-col items-center">
          <div>
            <AnimateElement className="mb-14" duration={0.5}>
              <h3 className="balance-text bg-gradient-to-b from-gray-50 from-40% to-gray-400 bg-clip-text text-center font-semibold tracking-tighter text-transparent">
                Career achievements.
              </h3>
            </AnimateElement>
            <Achievements achievements={CAREER_ACHIEVEMENTS} />
          </div>
        </div>
        <div className="flex w-full flex-col items-center">
          <div>
            <AnimateElement className="mb-14" duration={0.5}>
              <h3 className="balance-text bg-gradient-to-b from-gray-50 from-40% to-gray-400 bg-clip-text text-center font-semibold tracking-tighter text-transparent">
                Life achievements.
              </h3>
            </AnimateElement>
            <Achievements achievements={LIFE_ACHIEVEMENTS} />
          </div>
        </div>
      </div>
    </section>
  );
}

export default AchievementsSection;
