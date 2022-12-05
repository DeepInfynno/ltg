const Newsletter = () => {
  return (
    <div className="bg-gray-100 max-w-6xl mx-auto my-16 rounded-lg p-16 text-center">
      <h3 className="text-3xl font-semibold">Sign up for our newsletter</h3>
      <p className="max-w-2xl mx-auto py-8">
        Loren Ipsum text all else , we&apos;re one team that trusts and supports
        each other our unity gives us the strength to tackle even the most
        difficult challenges facing our business.
      </p>
      <form className="mt-2 max-w-4xl mx-auto">
        <input
          type="email"
          name="email"
          placeholder="Your Email Address"
          className="border-none w-full rounded-lg px-4 py-2 placeholder:text-gray-400"
        />
        <button className="mt-8 bg-red-500 text-white hover:bg-red-600 px-6 py-2 rounded-full transition-all ease-in-out duration-200 uppercase">
          Sign up now
        </button>
      </form>
    </div>
  );
};

export default Newsletter;
