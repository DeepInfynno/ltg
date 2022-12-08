import Button from "@components/form/Button";

const ContactForm = () => {
  return (
    <div className="w-full max-w-[280px] xs:max-w-xs sm:max-w-sm md:max-w-xl lg:max-w-3xl xl:max-w-4xl 2xl:max-w-[1364px] mx-auto">
      <div className="bg-gray-100 rounded-xl my-16">
        <div className="flex flex-col lg:flex-row items-center lg:justify-between lg:py-[50px] xl-[44px] 2xl:[84px] lg:p-0 md:p-10 p-6">
          <div className="lg:w-[673px] w-full flex flex-col items-center mb-10 lg:px-0 md:px-12 ">
            <div>
              <h3 className="2xl:text-4xl xl:text-3xl md:text-2xl text-xl font-semibold mb-4 text-center lg:text-left">
                Get in Touch!
              </h3>
              <p className="2xl:text-xl xl:text-lg md:text-base text-sm leading-9 text-center lg:text-left w-full max-w-[329px]">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry.
              </p>
            </div>
          </div>
          <div className="lg:w-3/5 lg:px-0 md:px-12 lg:pr-[46px] xl:pr-[56px] 2xl:pr-[86px]">
            <form className="space-y-5">
              <input
                type="text"
                name="name"
                placeholder="Name"
                className="border-none w-full rounded-lg px-4 py-2 placeholder:text-gray-400"
              />
              <input
                type="email"
                name="email"
                placeholder="Email"
                className="border-none w-full rounded-lg px-4 py-2 placeholder:text-gray-400"
              />
              <textarea
                name="message"
                placeholder="Your Message"
                className="border-none w-full rounded-lg px-4 py-2 placeholder:text-gray-400"
                rows={5}
              />
              <div className="flex justify-center lg:justify-start cursor-pointer">
                <Button className="!px-10">Say hi!</Button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
