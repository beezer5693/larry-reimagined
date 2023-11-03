import AnimateElement from "@/components/shared/animation/AnimateElement";
import Image from "next/image";
import child1 from "../../../../../public/assets/about/child1.jpeg";
import child2 from "../../../../../public/assets/about/child2.png";
import child3 from "../../../../../public/assets/about/child3.png";

const ChildHoodSection = () => {
  return (
    <section className="mb-28 w-full bg-white px-5 md:mb-36 md:px-10 xl:mb-60">
      <div className="mx-auto w-full max-w-screen-2xl">
        <div className="flex w-full flex-col-reverse lg:flex-row lg:items-center lg:gap-32">
          <div className="flex flex-1 flex-col justify-center gap-10 self-stretch">
            <div className="flex items-center gap-10">
              <div className="flex h-full w-full flex-col gap-10">
                <div className="relative h-full shadow-2xl shadow-neutral-600/50">
                  <Image
                    src={child3}
                    fill
                    alt="larry as a child"
                    className="h-full w-full object-cover object-[0px_-40px]"
                  />
                </div>
                <div className="relative h-full shadow-2xl shadow-neutral-600/50">
                  <Image
                    src={child1}
                    fill
                    alt="larry as a child"
                    className="w-full object-cover object-[0px_-48px]"
                  />
                </div>
              </div>
              <div className="h-2/3 w-full self-center shadow-2xl shadow-neutral-600/50">
                <Image
                  src={child2}
                  className="h-full w-full object-cover object-top"
                  alt="larry in his 20's"
                />
              </div>
            </div>
          </div>
          <div className="flex basis-2/5 flex-col border">
            <div>
              <AnimateElement className="mb-8" y={50} duration={0.75}>
                <h3 className="balance-text text-5xl font-semibold tracking-tighter text-gray-950 md:text-6xl">
                  The early years.
                </h3>
              </AnimateElement>
              <div className="font-medium text-gray-800 md:text-lg lg:max-w-[650px] lg:text-xl">
                <AnimateElement y={50} duration={0.75} delay={0.2}>
                  <p>{`So life didn't kick off in a grand way for me. My parents split when I was just three months old, and from then on, my father vanished from the scene faster than a magician's disappearing act. As I grew up, I had self-esteem, self-respect, and self-confidence issues. Fear, embarrassment, and procrastination? Oh, those were my specialties. And my conversations with myself were negative and depressing at best. Let's face it, a loser's mindset doesn't exactly lead to winning results.`}</p>
                </AnimateElement>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ChildHoodSection;
