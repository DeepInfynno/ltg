import { NextPageWithLayout } from "./_app";
import { Layout } from "@components/layouts";

const Affiliate: NextPageWithLayout = () => {
  return (
    <div>
      <div className="bg-gray-900 text-white text-center md:text-left">
        <div className="mx-auto py-24 md:py-48 max-w-7xl">
          <h1 className="text-3xl md:text-6xl font-semibold leading-normal md:w-[50%] w-full">
            live<span className="text-red-500">ticket</span> group Affiliate
            Programm
          </h1>
          <h1 className="text-white mt-12 text-xl font-semibold">
            When you market more, you’ll earn more.
          </h1>
          <div>
            <button className="mt-20 bg-red-500 text-white text-lg hover:bg-red-600 px-10 py-1 rounded-full transition-all ease-in-out duration-200">
              Become an affiliate
            </button>
          </div>
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-4">
        <div className="py-10">
          <p>
            We provide superior ticketing, marketing and service solutions for
            buyers and sellers. We will help strengthen your brand and enhance
            your earnings through our resale ticket marketplace.
          </p>
          <p>
            LiveTicketGroup affiliates connect buyers with more than XX million
            tickets to XX live events in Europe, UK and US - from major sporting
            events to popular concerts.
          </p>
          <p className="mt-4 font-semibold">
            We are a growing company and would love for you to join us on our
            journey!
          </p>
          <p>
            Connect with more users worldwide and drive your revenue through our
            LIVE Affiliate Program. You’ll have access to LiveTicketGroup’s
            inventory, real-time reporting, and account management.
          </p>
          <button className="mt-12 bg-red-500 text-white text-lg hover:bg-red-600 px-10 py-1 rounded-full transition-all ease-in-out duration-200">
            Become an affiliate
          </button>
        </div>
      </div>
      {/* what we belive */}
      <div className="max-w-7xl mx-auto px-4">
        <h1 className="text-xl">WHAT WE BELIEVE</h1>
        <h1 className="mt-4 text-3xl"> What’s in it for you.</h1>
        <h1 className="text-2xl max-w-lg mt-16 px-10">
          Captivating banner ads designed to drive traffic from your site to
          LiveTicketGroup
        </h1>
      </div>
      {/* T&c */}
      <div className="bg-red-500 flex max-w-7xl mx-auto px-4 mt-16 rounded-md">
        <div className="flex flex-col gap-6 w-1/2 md:px-24 px-2 py-16">
          <h1 className="text-3xl font-semibold text-white">Affiliates T&Cs</h1>
          <p className="text-lg text-white">
            We want to deliver quality service to our customers - every time.
            Our terms & conditions protect us, our customers and our affiliates.
          </p>
          <button className="bg-transparent text-white text-sm rounded-full border border-white w-max px-4 py-2">
            Learn more
          </button>
        </div>
        <div></div>
      </div>
      {/* what we belive */}
      <div className="max-w-7xl mx-auto px-4 mt-24">
        <h1 className="text-xl">WHAT WE BELIEVE</h1>
        <h1 className="mt-4 text-3xl"> What’s in it for you.</h1>
        <h1 className="text-2xl max-w-xl mt-16 px-24 bg-red-500 text-white py-12 rounded-lg font-semibold">
          Captivating banner ads designed to drive traffic from your site to
          LiveTicketGroup
        </h1>
      </div>
      {/* api docs */}
      <div className="flex max-w-7xl mx-auto px-4 mt-16 rounded-md">
        <div className="flex flex-col gap-6 w-1/2 md:px-24 px-2 py-16">
          <h1 className="text-3xl font-semibold">API Documentation</h1>
          <p className="text-lg">
            Loren Ipsum text all else , we’re one team that trusts and supports
            each other –our unity gives us the.
          </p>
          <button className="text-sm rounded-full bg-red-500 text-white w-max px-4 py-2">
            Learn more
          </button>
        </div>
        <div></div>
      </div>
    </div>
  );
};

Affiliate.getLayout = (page) => <Layout>{page}</Layout>;

export default Affiliate;
