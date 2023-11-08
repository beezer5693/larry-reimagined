import Link from "next/link";
import AnimateElement from "../animation/AnimateElement";

const BookSection = () => {
  return (
    <div className="flex w-full items-center justify-center bg-gradient-to-b from-blue-600 via-blue-700 to-blue-800 px-5 py-10 lg:px-10 lg:py-16">
      <div className="max-w-[700px] lg:max-w-screen-2xl">
        <AnimateElement duration={0.75}>
          <p className="call-to-action balance-text text-center font-semibold tracking-tight text-white">
            <span className="align-middle">
              Ready to book Larry for your next event?
            </span>{" "}
            <Link className="group whitespace-nowrap" href="/contact">
              <span className="relative align-middle transition duration-300 ease-in-out before:absolute before:bottom-[1px] before:left-0 before:h-[3px] before:w-full before:bg-white before:transition-all before:duration-300 before:ease-in-out group-hover:opacity-[85%] group-hover:before:opacity-[85%]">
                Get in touch.
              </span>
            </Link>
          </p>
        </AnimateElement>
      </div>
    </div>
  );
};
export default BookSection;
