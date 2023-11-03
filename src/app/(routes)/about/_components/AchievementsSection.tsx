import AnimateElement from "@/components/shared/animation/AnimateElement";
import { CAREER_ACHIEVEMENTS, LIFE_ACHIEVEMENTS } from "@/constants";

function AchievementsSection() {
  return (
    <section className="mb-28 w-full px-5 md:mb-36 md:px-10 xl:mb-60">
      <div className="mx-auto w-full max-w-screen-2xl">
        <div className="mb-32 flex w-full flex-col items-center">
          <div>
            <AnimateElement className="mb-14" duration={0.5}>
              <h3 className="balance-text text-5xl font-semibold tracking-tighter text-gray-950 md:text-6xl lg:text-center">
                Career achievements.
              </h3>
            </AnimateElement>
            <div className="grid grid-cols-1 gap-10 bg-gray-200/50 p-10 md:grid-cols-2 lg:grid-cols-4">
              {CAREER_ACHIEVEMENTS.map((achievement, index) => (
                <AnimateElement
                  key={achievement.title}
                  x={-50}
                  duration={0.5}
                  delay={0.1 * index}
                >
                  <div className="flex h-full flex-col items-center justify-start gap-5 rounded-lg bg-white p-10 shadow-xl shadow-neutral-300/20">
                    <h4 className="text-center text-4xl font-semibold text-gray-950">
                      {achievement.title}
                    </h4>
                    <p className="balance-text text-center text-xl font-medium text-gray-800">
                      {achievement.description}
                    </p>
                  </div>
                </AnimateElement>
              ))}
            </div>
          </div>
        </div>
        <div className="flex w-full flex-col items-center">
          <div>
            <AnimateElement className="mb-14" duration={0.5}>
              <h3 className="balance-text text-5xl font-semibold tracking-tighter text-gray-950 md:text-6xl lg:text-center">
                Life achievements.
              </h3>
            </AnimateElement>
            <div className="grid grid-cols-1 gap-10 bg-gray-200/50 p-5 md:grid-cols-2 lg:grid-cols-4 lg:p-10">
              {LIFE_ACHIEVEMENTS.map((achievement, index) => (
                <AnimateElement
                  key={achievement.title}
                  x={-50}
                  duration={0.5}
                  delay={0.1 * index}
                >
                  <div className="flex h-full flex-col items-center justify-start gap-5 rounded-lg bg-white p-5 shadow-xl shadow-neutral-300/20 lg:p-10">
                    <h4 className="text-center text-4xl font-semibold text-gray-950">
                      {achievement.title}
                    </h4>
                    <p className="balance-text text-center text-xl font-medium text-gray-800">
                      {achievement.description}
                    </p>
                  </div>
                </AnimateElement>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
export default AchievementsSection;
