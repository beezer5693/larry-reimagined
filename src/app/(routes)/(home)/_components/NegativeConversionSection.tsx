import NegativeConversationCards from "./NegativeConversationCards";
import { negativeConversationData } from "../_data/negative-conversation-data";

const NegativeConversionSection = () => {
  return (
    <div className="border-b border-dashed border-black pb-10 pt-7">
      <section className="space-y-10">
        <div className="space-y-3">
          <div className="inline-block pb-3 text-xs text-black">
            <p className="rounded-full border border-black px-3 py-1">
              Change your mind - change your life
            </p>
          </div>
          <h2 className="text-4xl font-bold leading-8 text-black md:text-5xl md:leading-10">
            Negative Conversations
          </h2>
          <p className="max-w-[60ch] leading-[18px] text-black">
            The conversations we have with ourselves on a daily basis have a
            significant impact on the way we experience and see life. Do you
            have any of the following feelings and or thoughts?
          </p>
        </div>
        <NegativeConversationCards data={negativeConversationData} />
      </section>
    </div>
  );
};
export default NegativeConversionSection;
