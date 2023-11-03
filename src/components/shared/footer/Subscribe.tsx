import SubscribeForm from "./SubscribeForm";

const Subscribe = () => {
  return (
    <div className="max-w-[375px] space-y-8 text-white">
      <div className="space-y-3">
        <h4 className="text-center text-2xl font-semibold lg:text-left">
          Get Inspired. Subscribe.
        </h4>
        <p className="text-center text-sm font-medium text-gray-100 lg:text-left">
          Your gateway to a wealth of motivation and personal development
          resources. Get ready for exclusive content, empowering insights, and
          the latest from Larry, all delivered directly to your inbox.
        </p>
      </div>
      <SubscribeForm />
    </div>
  );
};

export default Subscribe;
