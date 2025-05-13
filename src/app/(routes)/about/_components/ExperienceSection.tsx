import AnimateElement from "@/components/shared/animation/AnimateElement";
import Image from "next/image";
import experienceImage from "../../../../../public/assets/about/experience.png";
import { Button } from "@/components/ui/Button";
import { PiArrowUpRightBold } from "react-icons/pi";
import Link from "next/link";

const ExperienceSection = () => {
  return (
    <section className="w-full px-5 md:px-10">
      <div className="mx-auto max-w-[700px] pb-36 lg:max-w-screen-2xl">
        <div className="mx-auto flex w-full max-w-screen-xl flex-col-reverse items-center justify-between gap-10 lg:flex-row lg:gap-32">
          <div className="lg:flex-basis-3/5 h-[500px] lg:h-[800px] xl:mb-48">
            <Image
              src={experienceImage}
              alt="Larry pointing at you"
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
          <div className="flex flex-1 flex-col justify-center gap-8">
            <AnimateElement duration={0.75} y={50}>
              <h3 className="balance-text text-center font-semibold tracking-tight text-gray-950 lg:text-left">
                My Expertise
              </h3>
            </AnimateElement>
            <div className="text-gray-800 lg:max-w-[600px]">
              <AnimateElement y={50} duration={0.75} delay={0.1}>
                <p className="sub-heading--small balance-text mb-4 text-center font-medium lg:text-left">
                  I have had a rich and diverse career in the financial and
                  investment industries, marked by entrepreneurial success,
                  innovative ventures, along with some failures to. I invested
                  in tech startups, still manage my family&#39;s fixed, equity,
                  and real estate investment portfolios, and founded a mutual
                  fund company focused on principal-protected, equity-based
                  investments. In 2020, I added cryptocurrency to my
                  family&#39;s investment portfolio and became a 1/3 owner of a
                  cryptocurrency hedge fund management company. My experience
                  includes building and operating a multi-state insurance and
                  investment distribution operation, as well as creating a life
                  insurance settlement company targeting wealthy seniors.
                  I&#39;ve` also successfully prepared and presented start-up
                  investment pitch decks to investment banks, Angel investors,
                  and private hedge funds.
                </p>
              </AnimateElement>
              <AnimateElement y={50} duration={0.75} delay={0.2}>
                <p className="sub-heading--small balance-text mb-4 text-center font-medium lg:text-left">
                  In addition, I crafted a business plan centered around a Wall
                  Street roll-up strategy that eventually led to an initial
                  public offering (IPO). My track record has encompassed the
                  design and implementation of unique marketing concepts that
                  generated millions of dollars in revenue. I possess a solid
                  grasp of contracts, legal documents, corporate entities, and
                  tax structures. Lastly, {`I've`} had the privilege of speaking
                  at various industry functions, particularly within the sales
                  and distribution sectors of the insurance and investment
                  industries. As for my speaking fees, they go to the Bryan
                  Family Foundation, my family&#39;s 501(c)(3) charitable
                  foundation.
                </p>
              </AnimateElement>
              <AnimateElement
                className="px-10 pt-5 md:px-20 lg:px-0"
                y={50}
                duration={0.75}
                delay={0.3}
              >
                <div className="flex flex-col gap-2 md:flex-row">
                  <Link href="/talks">
                    <Button className="w-full bg-[#0f0e10] text-gray-50 hover:opacity-90 lg:max-w-max">
                      <span>See My Talks</span>
                      <PiArrowUpRightBold className="ml-2" size={16} />
                    </Button>
                  </Link>
                  <Link href="/coaching">
                    <Button className="w-full hover:opacity-90 lg:max-w-max">
                      <span>Coaching</span>
                      <PiArrowUpRightBold className="ml-2" size={16} />
                    </Button>
                  </Link>
                </div>
              </AnimateElement>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
