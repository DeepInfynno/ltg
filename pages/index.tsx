import Brands from "@components/Brands";
import { Layout } from "@components/layouts";
import Newsletter from "@components/Newsletter";
import Offices from "@components/Offices";
import { NextPageWithLayout } from "./_app";

const Home: NextPageWithLayout = () => {
  return (
    <div>
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
