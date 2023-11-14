import AnimateElement from "@/components/shared/animation/AnimateElement";
import Image from "next/image";
import child1 from "../../../../../public/assets/about/child1.jpeg";

const MyStorySection = () => {
  return (
    <section className="mb-28 w-full bg-white md:mb-36 md:px-10 xl:mb-60">
      <div className="mx-auto w-full max-w-[700px] lg:max-w-screen-2xl">
        <div className="flex w-full flex-col-reverse gap-10 lg:flex-row lg:items-center lg:gap-20">
          <div className="sm: h-[400px] overflow-hidden sm:shadow-2xl sm:shadow-neutral-700/60 md:h-[600px] lg:h-[800px] lg:flex-1">
            <Image
              src={child1}
              alt="Larry as a child"
              className="h-full w-full object-cover object-bottom grayscale"
              quality={65}
            />
          </div>
          <div className="flex basis-[45%] flex-col lg:items-end">
            <div className="px-5 md:px-0">
              <AnimateElement className="mb-8" y={50} duration={0.75}>
                <h3 className="balance-text balance-text text-center font-semibold tracking-tight text-gray-950 lg:text-left">
                  The Early Days
                </h3>
              </AnimateElement>
              <div className="font-medium text-gray-800 md:text-lg lg:max-w-[600px] lg:text-xl">
                <AnimateElement y={50} duration={0.75} delay={0.2}>
                  <p className="sub-heading--small balance-text mb-4 text-center lg:text-left">
                    My life had a modest beginning, marked by my {`parents'`}{" "}
                    separation when I was only three months old, and my{" "}
                    {`father's`} swift disappearance from my life. Growing up, I
                    grappled with self-esteem, self-respect, and self-confidence
                    issues, often battling fear, embarrassment, and
                    procrastination. My internal dialogue was predominantly
                    negative and disheartening. This mindset hindered my path to
                    success.
                  </p>
                </AnimateElement>
                <AnimateElement y={50} duration={0.75} delay={0.3}>
                  <p className="sub-heading--small balance-text mb-4 text-center lg:text-left">
                    Adding to my unique upbringing, my mother dressed me in
                    professor-like attire from the age of three, sending me to
                    preschool in suits, bowties, and wingtip shoes. As I
                    progressed through school, I remained a C+ student while my
                    friends excelled with A+ grades. The college application
                    process presented limited options, and I barely gained
                    admission to FSU, while my friends headed to prestigious
                    institutions. My journey was marked by failure, culminating
                    in my dismissal from FSU with a meager 1.2 GPA.
                  </p>
                </AnimateElement>
                <AnimateElement y={50} duration={0.75} delay={0.4}>
                  <p className="sub-heading--small balance-text text-center lg:text-left">
                    My {`parents'`} response to my academic struggles was to
                    hand me a job application and insist I work long hours. I
                    took on the roles of a janitor during the day and a car
                    parking attendant in the evenings. It {`wasn't`} until a
                    pivotal moment that I realized the power of self-perception
                    and self-talk in shaping {`one's`} actions and destiny.
                    Overnight, I committed to a 180-degree life transformation
                    and now share the tools and knowledge for others to achieve
                    a similar change. As someone still on their self-improvement
                    journey, I invite you to embark on this transformation
                    together with me.
                  </p>
                </AnimateElement>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MyStorySection;
