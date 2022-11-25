import Brands from "@components/Brands";
import { Layout } from "@components/layouts";
import Newsletter from "@components/Newsletter";
import Offices from "@components/Offices";
import Stats from "@components/Stats";
import WhoWeAre from "@components/WhoWeAre";
import { NextPageWithLayout } from "./_app";

const Home: NextPageWithLayout = () => {
  return (
    <div>
      <div className="py-32">
        <div className="max-w-6xl mx-auto px-4">
          <h1 className="text-7xl font-semibold leading-tight">
            Experience
            <br /> it <span className="text-red-500">Live</span>.
          </h1>
          <p className="mt-8 font-medium text-gray-700">
            Curating unforgettable moments for fans worldwide.
          </p>
          <button className="mt-8 bg-red-500 text-white hover:bg-red-600 px-10 py-2 rounded-full transition-all ease-in-out duration-200">
            Become a Seller
          </button>
        </div>
      </div>
      <WhoWeAre />
      <Stats />
      <Brands />
      <Offices />
      <div className="text-center">
        <button className="mt-8 bg-red-500 text-white hover:bg-red-600 px-10 py-2 rounded-full transition-all ease-in-out duration-200 uppercase">
          Contact Us
        </button>
      </div>
      <Newsletter />
    </div>
  );
};

Home.getLayout = (page) => <Layout hideContact>{page}</Layout>;

export default Home;
