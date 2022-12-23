import Button from "./form/Button";

const Newsletter = () => {
  return (
    <div className="w-full max-w-[280px] xs:max-w-xs sm:max-w-sm md:max-w-xl lg:max-w-3xl xl:max-w-4xl 2xl:max-w-[1364px] mx-auto">
      <div className="bg-gray-100 md:my-[88px] my-[32px] rounded-lg md:p-16 p-5 text-center">
        <h3 className="2xl:text-4xl xl:text-3xl md:text-2xl text-xl font-semibold">
          Sign up for our newsletter
        </h3>
        <p className="max-w-2xl mx-auto py-8 2xl:text-xl xl:text-lg md:text-base text-sm">
          Join the LiveTicketGroup Tribe and stay up to date on all upcoming
          events! Don’t worry, we’ll only email you when it’s really (we mean,
          really) important - like exclusive deals to some of the best live
          matches in the world!
        </p>
        <form className="mt-2 max-w-4xl mx-auto">
          <input
            type="email"
            id="newsInput"
            name="email"
            placeholder="Your Email Address"
            className="border-none w-full rounded-lg px-4 py-2 placeholder:text-gray-400"
          />
          <Button className="mt-[70px] mb-[40px] md:mb-0">sign up now</Button>
        </form>
      </div>
    </div>
  );
};

export default Newsletter;
