import Achievement from "./Achievement";

type AchievementProps = {
  achievements: { title: string; description: string }[];
};

const Achievements = ({ achievements }: AchievementProps) => {
  return (
    <div className="grid w-full grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-4">
      {achievements.map((achievement, index) => (
        <Achievement
          key={achievement.title}
          achievement={{ ...achievement, index }}
        />
      ))}
    </div>
  );
};
export default Achievements;
