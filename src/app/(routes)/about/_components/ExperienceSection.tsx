import AnimateElement from "@/components/shared/animation/AnimateElement";
import Image from "next/image";
import experienceImage from "../../../../../public/assets/about/experience.png";

const ExperienceSection = () => {
  return (
    <section className="w-full px-5 md:px-10">
      <div className="mx-auto max-w-screen-xl pb-36">
        <div className="mx-auto flex w-full max-w-screen-xl flex-col-reverse items-center justify-between gap-10 lg:flex-row lg:gap-20">
          <div className="h-[500px] lg:h-[800px]">
            <Image
              src={experienceImage}
              alt="larry speaking to audience"
              className="hidden w-auto object-cover brightness-110 lg:block"
              height={500}
              width={500}
              quality={65}
            />
            <Image
              className="w-auto object-cover brightness-110 lg:hidden"
              src={experienceImage}
              height={200}
              width={200}
              quality={65}
              alt="Larry pointing at you"
            />
          </div>
          <div className="flex flex-col justify-center gap-8">
            <AnimateElement duration={0.75} y={50}>
              <h3 className="font-semibold tracking-tighter text-gray-950">
                My experience.
              </h3>
            </AnimateElement>
            <div className="text-gray-800">
              <AnimateElement y={50} duration={0.75} delay={0.1}>
                <p className="sub-heading mb-4 font-medium lg:max-w-[45ch]">
                  I have had a rich and diverse career in the financial and
                  investment industry, marked by entrepreneurial success and
                  innovative ventures. I founded a mutual fund company focused
                  on principal-protected equity-based investments and became a
                  1/3 owner of a cryptocurrency hedge fund management company.
                  My experience includes building and operating a multi-state
                  insurance and investment distribution operation, as well as
                  creating a life insurance settlement company targeting wealthy
                  seniors. {`I've`} also successfully prepared and presented
                  start-up investment pitch decks to investment banks, Angel
                  investors, and private hedge funds.
                </p>
              </AnimateElement>
              <AnimateElement y={50} duration={0.75} delay={0.2}>
                <p className="sub-heading mb-4 font-medium lg:max-w-[45ch]">
                  In addition, I crafted a business plan centered around a Wall
                  Street roll-up strategy that eventually led to an initial
                  public offering (IPO). My track record encompasses the design
                  and implementation of unique marketing concepts that generated
                  millions of dollars in revenue. I possess a solid grasp of
                  contracts, legal documents, corporate entities, and tax
                  structures. {`I've`} had the privilege of speaking at various
                  industry functions, particularly within the sales and
                  distribution sectors of the insurance and investment
                  industries.
                </p>
              </AnimateElement>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
