import { Button } from "@/components/ui/Button";
import Link from "next/link";
import React from "react";
import { PiArrowRightBold } from "react-icons/pi";

const HireMeSection = () => {
  return (
    <div className="mx-auto mb-32 px-5 md:max-w-screen-xl">
      <div className="flex flex-col items-center gap-10">
        <h3 className="font-semibold">Why Work With Me?</h3>
        <p className="text-balance text-center text-3xl font-medium">
          Because {`I’ve`} been where you want to go. For over 20 years, I was a
          multi-million dollar producer, with my best year in 2006 bringing in
          $52 million in gross commissions. I know what it takes to succeed in
          sales at the highest level—and {`I’m`} ready to share my strategies
          with you. {`Let’s`} talk—book a call today!
        </p>
        <Link
          className="inline-block w-full px-10 md:px-20 lg:max-w-max lg:px-0"
          href="https://go.oncehub.com/LarryBryan"
        >
          <Button className="group w-full hover:brightness-110">
            <span className="text-3xl">Book a Call</span>
            <PiArrowRightBold className="ml-2 text-2xl transition duration-500 ease-in-out group-hover:translate-x-1.5" />
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default HireMeSection;
