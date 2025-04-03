"use client";

import AnimateElement from "@/components/shared/animation/AnimateElement";
import React from "react";
import { CoachingTopic } from "@/constants";

type CoachingTopics = {
  topics: CoachingTopic[];
};

function CoachingSection({ topics }: CoachingTopics) {
  return (
    <section className="mb-28 w-full px-5 md:mb-36 md:px-10 xl:mb-40">
      <div className="flex flex-col items-start gap-8 pb-20 md:items-center md:pb-10">
        <AnimateElement y={50} duration={0.75}>
          <h2 className="balance-text max-w-[25ch] text-center font-semibold uppercase tracking-tight text-gray-950">
            My Coaching Goals For You
          </h2>
        </AnimateElement>
        <AnimateElement y={50} duration={0.75} delay={0.2}>
          <p className="balance-text sub-heading text-center font-semibold text-gray-900">
            <span className="text-4xl">
              "To double or triple your income in the first 12 months!"{" "}
            </span>
            <span className="mt-20 block text-3xl uppercase text-blue-600">
              {" "}
              Here&#39;s how we will do it together...
            </span>
          </p>
        </AnimateElement>
      </div>
      <div className="mx-auto w-full max-w-[700px] lg:max-w-screen-xl">
        <div className="grid grid-cols-1 place-items-center gap-y-10 md:grid-cols-2 md:gap-x-20">
          {topics.map((topic) => (
            <div className="flex flex-col gap-4">
              <h3 className="text-center text-3xl font-semibold text-blue-600 md:text-left">
                {topic.title}
              </h3>
              <p className="sub-heading--small max-w-[400px] text-balance text-center font-medium md:text-left">
                {topic.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default CoachingSection;
