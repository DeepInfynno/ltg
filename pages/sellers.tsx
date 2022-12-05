import { Layout } from "@components/layouts";
import { NextPageWithLayout } from "./_app";
import { TbHandClick } from "react-icons/tb";
import { BiSupport } from "react-icons/bi";
import { TfiLayers, TfiDesktop } from "react-icons/tfi";

const features = [
  {
    icon: <TbHandClick className="h-12 w-12 text-gray-700" />,
    title: "Simple",
    description:
      "List your tickets for free on our marketplace. Edit or remove your listing anytime before the tickets sell.",
  },
  {
    icon: <BiSupport className="h-12 w-12 text-gray-700" />,
    title: "Dedicated",
    description:
      "Our customer service team is available 24/7 to answer questions from sellers. ",
  },
  {
    icon: <TfiLayers className="h-12 w-12 text-gray-700" />,
    title: "Transparent",
    description:
      "No surprises - We keep our seller fees reasonable and visible, so you get the most from every sale.",
  },
  {
    icon: <TfiDesktop className="h-12 w-12 text-gray-700" />,
    title: "Accessible",
    description:
      "Android? iPhone? Mobile web? iPad? Tablet? Phablet? We’ve got you covered.",
  },
];

const Sellers: NextPageWithLayout = () => {
  return (
    <div>
      <div className="bg-gray-900">
        <div className="py-24 md:py-64 max-w-7xl mx-auto px-4 text-white">
          <h1 className="text-4xl md:text-6xl font-semibold !leading-tight">
            Sell tickets on <br />
            live<span className="text-red-500">ticket</span>group.
          </h1>
          <p className="mt-8 max-w-xl leading-loose">
            We are the world&apos;s largest sports ticket marketplace providing
            superior ticketing, marketing and service solutions for buyers and
            sellers.
          </p>
          <button className="mt-8 bg-red-500 text-white hover:bg-red-400 px-10 py-2 rounded-full transition-all ease-in-out duration-200">
            Start Selling
          </button>
        </div>
      </div>
      <div className="max-w-xl mx-auto px-4 text-center py-16 font-medium">
        Our platform will enable you to sell tickets in an efficient way. Our
        online marketing experts ensure your tickets get the right exposure.
      </div>
      <div className="max-w-6xl mx-auto">
        <div className="md:grid grid-cols-2 gap-8">
          {features.map((feature, i) => (
            <div key={i} className="bg-gray-100 rounded-lg flex p-8 md:p-12">
              <div className="w-56">{feature.icon}</div>
              <div>
                <h3 className="text-2xl font-semibold">{feature.title}</h3>
                <p className="mt-8">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="text-center">
        <button className="mt-8 bg-red-500 text-white hover:bg-red-400 px-10 py-2 rounded-full transition-all ease-in-out duration-200">
          Start Selling
        </button>
      </div>
    </div>
  );
};

Sellers.getLayout = (page) => <Layout>{page}</Layout>;

export default Sellers;
