import ContactForm from "./ContactForm";

const ContactFormSection = () => {
  return (
    <section className="flex w-full flex-col items-center bg-white px-7 py-16 md:px-10 lg:py-24">
      <div className="flex w-full max-w-screen-lg flex-col items-center">
        <div className="w-full max-w-[550px] space-y-10">
          <div className="space-y-3">
            <h2 className="text-4xl font-semibold tracking-tight text-gray-900">
              Connect with Larry
            </h2>
            <p className="max-w-[50ch] font-medium">
              Extend an invitation to have Larry come speak at your next event.
              Fill out the form below and he will be in contact with you
              shortly.
            </p>
          </div>
          <ContactForm />
        </div>
      </div>
    </section>
  );
};

export default ContactFormSection;
