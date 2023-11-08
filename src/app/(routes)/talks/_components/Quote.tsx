import AnimateElement from "@/components/shared/animation/AnimateElement";

type QuoteProps = {
  quote: { text: string; author: string };
};

const Quote = ({ quote }: QuoteProps) => {
  return (
    <section className="mb-28 px-5 md:mb-36 md:px-10 xl:mb-60">
      <div className="mx-auto flex max-w-[1100px] flex-col items-center justify-center">
        <AnimateElement duration={0.75} delay={0.5}>
          <>
            <div className="quote balance-text mb-7 text-center font-medium italic">
              {quote.text}
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
