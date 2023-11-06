import AnimateElement from "@/components/shared/animation/AnimateElement";

type AchievementProps = {
  achievement: { title: string; description: string; index: number };
};

const Achievement = ({ achievement }: AchievementProps) => {
  return (
    <AnimateElement
      key={achievement.title}
      x={-50}
      duration={0.5}
      delay={0.1 * achievement.index}
    >
      <div className="card-shadow flex h-48 flex-col justify-start gap-5 rounded-2xl bg-gradient-to-b from-[#242325] to-[#171619] p-8 shadow-xl shadow-neutral-300/50 lg:h-56">
        <h4 className="text-3xl font-semibold text-gray-50">
          {achievement.title}
        </h4>
        <p className="balance-text text-lg font-medium text-gray-300">
          {achievement.description}
        </p>
      </div>
    </AnimateElement>
  );
};
export default Achievement;
