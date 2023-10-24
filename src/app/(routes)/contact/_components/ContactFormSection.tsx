"use client";

import SocialLinks from "@/components/shared/footer/SocialLinks";
import ContactForm from "./ContactForm";
import Link from "next/link";
import AnimatedText from "@/components/shared/animation/AnimatedText";
import { motion } from "framer-motion";

const ContactFormSection = () => {
  const variants = {
    initial: {
      opacity: 0,
    },
    animate: {
      opacity: 1,
      transition: {
        duration: 1,
      },
    },
  };
  return (
    <section className="flex w-full flex-col items-center bg-white px-7 py-16 md:px-10 lg:py-24">
      <div className="flex w-full flex-col items-center">
        <div className="max-w-[550px] space-y-10 lg:space-y-16">
          <div className="space-y-5">
            <AnimatedText
              className="text-5xl font-bold tracking-tighter text-black"
              text={"Invite Larry to Speak at your Next Event."}
            />
            <motion.p
              initial="hidden"
              animate="visible"
              transition={{ duration: 1.25, delay: 2 }}
              variants={{
                visible: { opacity: 1, y: 0 },
                hidden: { opacity: 0, y: 0 },
              }}
            >
              Interested in having Larry speak at your next event? Fill out the
              form below and Larry will contact you shortly to discuss more.
            </motion.p>
          </div>
          <motion.div
            initial="hidden"
            animate="visible"
            transition={{ duration: 1.25, delay: 2 }}
            variants={{
              visible: { opacity: 1, y: 0 },
              hidden: { opacity: 0, y: 0 },
            }}
          >
            <ContactForm />
          </motion.div>
          <motion.div
            initial="hidden"
            animate="visible"
            transition={{ duration: 1.25, delay: 2 }}
            variants={{
              visible: { opacity: 1, y: 0 },
              hidden: { opacity: 0, y: 0 },
            }}
            className="grid w-full flex-1 grid-cols-2 gap-y-10 pt-6"
          >
            <div className="col-span-2 flex flex-col items-center gap-1 lg:col-span-1">
              <h3 className="font-semibold">Mailing Address</h3>
              <p className="text-center text-sm font-medium">
                151 N Nob Hill Rd, Suite 350
                <br />
                Plantation, FL 33324
              </p>
            </div>
            <div className="col-span-2 flex flex-col items-center gap-1 lg:col-span-1">
              <h3 className="font-semibold">Connect on Social</h3>
              <SocialLinks className="text-black" />
            </div>
            <div className="col-span-2 flex flex-col items-center gap-1 lg:col-span-1">
              <h3 className="font-semibold">Email</h3>
              <Link
                className="relative text-sm font-medium before:absolute before:bottom-[1px] before:left-0 before:h-[1px] before:w-0 before:bg-black before:transition-all before:duration-300 before:ease-in-out before:hover:w-full"
                href="mailto:larry@larrybryanlive.com"
              >
                larry@larrybryanlive.com
              </Link>
            </div>
            <div className="col-span-2 flex flex-col items-center gap-1 lg:col-span-1">
              <h3 className="font-semibold">Phone</h3>
              <p className="text-sm font-medium">+1 (954) 240-6900</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactFormSection;
