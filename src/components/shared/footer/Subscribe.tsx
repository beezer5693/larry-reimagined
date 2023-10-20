import SubscribeForm from "./SubscribeForm";

const Subscribe = () => {
  return (
    <div className="space-y-6 text-white">
      <div className="space-y-3">
        <h4 className="text-4xl font-bold">
          Subscribe to {"Larry's"} Newsletter
        </h4>
        <p className="max-w-[50ch]">
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
