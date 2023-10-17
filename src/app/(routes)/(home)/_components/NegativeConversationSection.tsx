import { NEGATIVE_THOUGHTS } from "@/constants";
import NegativeConversationCards from "./NegativeConversationCards";

const NegativeConversationSection = () => {
  return (
    <section className="flex w-full justify-center px-5 pb-20 pt-16 md:px-10">
      <div className="max-w-screen-xl space-y-10">
        <div className="space-y-4">
          <div className="inline-block pb-3 text-xs text-black">
            <p className="inline-flex items-center rounded-full border border-black px-3 py-1 font-semibold capitalize">
              Your mindset determines your life
            </p>
          </div>
          <h2 className="text-4xl font-bold leading-8 tracking-tight text-black md:text-[2.5rem] md:leading-[35px]">
            Do Any of These Thoughts Ever
            <br /> Hold You Back In Your Career?
          </h2>
          <p className="max-w-[60ch] leading-[20px] text-black">
            The conversations we have with ourselves on a daily basis have a
            significant impact on the results we get in life. Do you have any of
            the following thoughts or feelings?
          </p>
        </div>
        <NegativeConversationCards data={NEGATIVE_THOUGHTS} />
      </div>
    </section>
  );
};

export default NegativeConversationSection;
