import AnimateElement from "@/components/shared/animation/AnimateElement";
import { FaQuoteLeft } from "react-icons/fa";

type QuoteProps = {
  quote: { text: string; author: string };
};

const Quote = ({ quote }: QuoteProps) => {
  return (
    <section className="mb-28 w-full px-5 pb-7 pt-14 md:mb-36 md:px-10 lg:pt-0 xl:mb-56">
      <div className="relative mx-auto flex max-w-[700px] flex-col items-center justify-center lg:max-w-[900px]">
        <div className="absolute -top-[4.5rem] left-5">
          <FaQuoteLeft className="text-9xl text-gray-300/40" />
        </div>
        <AnimateElement
          className="relative flex flex-col items-center"
          duration={1}
          delay={0.5}
        >
          <>
            <div className="quote balance-text mb-9 text-center font-medium italic">
              <span>{`"`}</span>
              {quote.text}
              <span>{`"`}</span>
            </div>
            <div className="sub-heading text-center font-medium">
              - {quote.author}
            </div>
          </>
        </AnimateElement>
      </div>
    </section>
  );
};

export default Quote;
