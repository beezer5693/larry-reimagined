import NegativeConversationCards from "./NegativeConversationCards";
import { negativeConversationData } from "../_data/negative-conversation-data";

const NegativeConversionSection = () => {
  return (
    <div className="border-b border-dashed border-black pb-10 pt-7 dark:border-white">
      <section className="space-y-10">
        <div className="space-y-3">
          <h2 className="text-4xl font-bold leading-8 text-black dark:text-white md:text-5xl md:leading-10">
            Negative <br /> Conversations
          </h2>
          <p className="max-w-[60ch] leading-[18px] text-black dark:text-white">
            The conversions we have with ourselves on a daily basis have a
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
