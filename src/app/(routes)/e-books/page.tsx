import AnimateElement from "@/components/shared/animation/AnimateElement";
import { E_BOOKS } from "@/constants";
import EBook from "./_components/item/EBook";

const Shop = () => {
  return (
    <section className="mb-28 w-full px-5 pt-10 md:mb-36 md:px-10 lg:pt-16 xl:mb-60">
      <div className="mx-auto w-full max-w-[700px] lg:max-w-screen-2xl">
        <div className="flex flex-col items-start gap-5 lg:items-center">
          <AnimateElement y={50} duration={0.75}>
            <h2 className="balance-text text-center font-semibold tracking-tight text-gray-950">
              Download Exclusive Content
            </h2>
          </AnimateElement>
          <AnimateElement y={50} duration={0.75} delay={0.2}>
            <p className="balance-text sub-heading text-center font-medium text-gray-800">
              Download my free e-books and guides to help you and your team to
              sell more products and services, acquire a super mindset, be more
              dynamic leaders and become better versions of yourselves.
            </p>
          </AnimateElement>
        </div>
        <div className="mx-auto mt-5 flex max-w-max flex-col flex-wrap items-center gap-y-14 md:mt-14 lg:flex-row lg:gap-y-10">
          {E_BOOKS.map((ebook) => (
            <EBook key={ebook.title} ebook={ebook} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Shop;
