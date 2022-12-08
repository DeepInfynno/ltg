import Button from "./form/Button";

const Newsletter = () => {
  return (
    <div className="bg-gray-100 max-w-6xl sm:mx-auto mx-[19px] md:my-[88px] my-[32px] rounded-lg md:p-16 p-5 text-center">
      <h3 className="md:text-3xl text-[22px]  font-semibold">
        Sign up for our newsletter
      </h3>
      <p className="max-w-2xl mx-auto py-8 text-base">
        Loren Ipsum text all else , we&apos;re one team that trusts and supports
        each other our unity gives us the strength to tackle even the most
        difficult challenges facing our business.
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
  );
};

export default Newsletter;
