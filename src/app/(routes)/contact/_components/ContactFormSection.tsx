import AnimatedText from "@/app/(routes)/contact/_components/AnimatedText";
import AnimateElement from "@/components/shared/animation/AnimateElement";
import SocialLinks from "@/components/shared/footer/SocialLinks";
import Link from "next/link";
import ContactForm from "./ContactForm";

const ContactFormSection = () => {
  return (
    <section className="flex w-full flex-col items-center bg-white px-5 py-16 md:px-10 lg:py-24">
      <div className="flex w-full max-w-screen-xl justify-center gap-20">
        <div className="max-w-[650px] space-y-10">
          <div className="space-y-8">
            <AnimatedText
              className="bg-gray-950 bg-clip-text text-5xl font-semibold tracking-tighter text-transparent md:text-6xl lg:text-7xl"
              text={"Invite Larry to speak at your next event."}
            />
            <AnimateElement duration={1.25} delay={2}>
              <p className="font-medium text-gray-800 lg:text-lg">
                Interested in having Larry speak at your next event? Fill out
                the form below and Larry will contact you shortly to discuss
                more.
              </p>
            </AnimateElement>
          </div>
          <AnimateElement duration={1} delay={2}>
            <>
              <ContactForm />
              <div className="mt-20 grid w-full flex-1 grid-cols-2 gap-y-10 text-gray-950">
                <div className="col-span-2 flex flex-col items-center gap-1 lg:col-span-1">
                  <h3 className="text-lg font-semibold">Mailing Address</h3>
                  <p className="text-center text-base font-medium">
                    151 N Nob Hill Rd, Suite 350
                    <br />
                    Plantation, FL 33324
                  </p>
                </div>
                <div className="col-span-2 flex flex-col items-center gap-1 lg:col-span-1">
                  <h3 className="text-lg font-semibold">Connect on Social</h3>
                  <SocialLinks className="text-gray-950 hover:opacity-80" />
                </div>
                <div className="col-span-2 flex flex-col items-center gap-1 lg:col-span-1">
                  <h3 className="text-lg font-semibold">Email</h3>
                  <Link
                    className="relative font-medium before:absolute before:bottom-[1px] before:left-0 before:h-[1px] before:w-0 before:bg-black before:transition-all before:duration-300 before:ease-in-out before:hover:w-full"
                    href="mailto:larry@larrybryanlive.com"
                  >
                    larry@larrybryanlive.com
                  </Link>
                </div>
                <div className="col-span-2 flex flex-col items-center gap-1 lg:col-span-1">
                  <h3 className="text-lg font-semibold">Phone</h3>
                  <p className="font-medium">+1 (954) 240-6900</p>
                </div>
              </div>
            </>
          </AnimateElement>
        </div>
      </div>
    </section>
  );
};

export default ContactFormSection;
