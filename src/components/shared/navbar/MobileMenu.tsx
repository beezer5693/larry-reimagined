"use client";

import { Button } from "@/components/ui/Button";
import { NAV_LINKS } from "@/constants";
import { cn } from "@/lib/utils";
import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";

type Props = {
  isMenuOpen: boolean;
  closeMenu: () => void;
};

export default function MobileMenu({ isMenuOpen, closeMenu }: Props) {
  const menuVariants = {
    initial: {
      scaleY: 0,
    },
    animate: {
      scaleY: 1,
      transition: {
        duration: 0.5,
        ease: [0.12, 0, 0.39, 0],
      },
    },
    exit: {
      scaleY: 0,
      transition: {
        delay: 0.5,
        duration: 0.5,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };

  const mobileMenuVariants = {
    initial: {
      y: "30vh",
      transition: {
        duration: 0.5,
        ease: [0.37, 0, 0.63, 1],
      },
    },
    open: {
      y: 0,
      transition: {
        duration: 0.7,
        ease: [0, 0.55, 0.45, 1],
      },
    },
  };

  const containerVariants = {
    initial: {
      transition: {
        staggerChildren: 0.09,
        staggerDirection: -1,
      },
    },
    open: {
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.09,
        staggerDirection: 1,
      },
    },
  };

  return (
    <>
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            className={cn(
              `fixed right-0 top-[3.55rem] z-[100] flex h-screen w-full origin-top flex-col items-center bg-white pt-20 lg:hidden`,
            )}
            variants={menuVariants}
            initial="initial"
            animate="animate"
            exit="exit"
          >
            <motion.div
              variants={containerVariants}
              initial="initial"
              animate="open"
              exit="initial"
            >
              {NAV_LINKS.map((tab, i) => (
                <div key={tab.label} className="overflow-hidden">
                  <motion.div variants={mobileMenuVariants} className="mb-7">
                    <Link
                      onClick={closeMenu}
                      href={tab.href}
                      className="w-full"
                    >
                      <div className="flex w-full flex-col items-center justify-center">
                        <div className="text-5xl font-medium text-gray-950">
                          {tab.label}
                        </div>
                      </div>
                    </Link>
                  </motion.div>
                </div>
              ))}
            </motion.div>
            <div className="mt-8 w-full px-10">
              <Link
                className="w-full max-w-[400px]"
                onClick={closeMenu}
                href="/contact"
              >
                <Button className="h-14 w-full text-xl">Book Larry</Button>
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
