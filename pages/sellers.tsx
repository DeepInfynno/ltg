import { Layout } from "@components/layouts";
import { NextPageWithLayout } from "./_app";
import { TbHandClick } from "react-icons/tb";
import { BiSupport } from "react-icons/bi";
import { TfiLayers, TfiDesktop } from "react-icons/tfi";
import LTG1 from '@assets/images/LTG01.svg'
import LTG2 from '@assets/images/LTG02.svg'
import LTG3 from '@assets/images/LTG03.svg'
import LTG4 from '@assets/images/LTG04.svg'
import Image from "next/image";

const features = [
  {
    icon: <Image src={LTG1} alt="icon" width={42} height={63} />,
    title: "Simple",
    description:
      "List your tickets for free on our marketplace. Edit or remove your listing anytime before the tickets sell.",
  },
  {
    icon: <Image src={LTG2} alt="icon" width={46} height={54} />,
    title: "Dedicated",
    description:
      "Our customer service team is available 24/7 to answer questions from sellers. ",
  },
  {
    icon: <Image src={LTG3} alt="icon" width={44} height={43} />,
    title: "Transparent",
    description:
      "No surprises - We keep our seller fees reasonable and visible, so you get the most from every sale.",
  },
  {
    icon: <Image src={LTG4} alt="icon" width={58} height={43} />,
    title: "Accessible",
    description:
      "Android? iPhone? Mobile web? iPad? Tablet? Phablet? We’ve got you covered.",
  },
];

const Sellers: NextPageWithLayout = () => {
  return (
    <div className="max-w-[1920px] mx-auto">
      <div className="bg-[url('../assets/images/sellerback.svg')] bg-fixed bg-no-repeat bg-[44%] xl:bg-[left_46%] 2xl:h-[955px]">
        <div className="py-28 md:py-24 xl:py-64 max-w-[90vw] xl:max-w-7xl mx-auto px-4 text-white">
          <h1 className="text-white text-4xl max-w-[65vw] md:max-w-none md:text-[60px] xl:text-[98px] font-bold leading-[50px] md:leading-[73px] xl:leading-[113px]">
            Sell tickets on <br />
            live<span className="text-[#EA0000]">ticket</span>group.
          </h1>
          <p className="mt-[54px] md:mt-[78px] text-[18px] md:text-[22px] max-w-[745px] leading-[26px] font-bold text-white">
            We are the world&apos;s largest sports ticket marketplace providing
            superior ticketing, marketing and service solutions for buyers and
            sellers.
          </p>
          <button className="uppercase mt-[84px] bg-[#EA0000] text-white hover:bg-red-600 px-10 py-2 rounded-[20px] transition-all ease-in-out duration-200">
            Start Selling
          </button>
        </div>
      </div>
      <div className="mt-[64px] md:mt-[103px] max-w-[540px] lg:max-w-[863px] mx-4 sm:mx-auto text-[20px] md:text-[26px] leading-[30px] text-black font-bold">
        Our platform will enable you to sell tickets in an efficient way. Our
        online marketing experts ensure your tickets get the right exposure.
      </div>
      <div className="max-w-[1024px] 2xl:max-w-[1366px] mx-auto mt-[83px] mb-[50px] lg:mb-[85px] px-5 md:px-7 lg:px-0">
        <div className="grid md:grid-cols-2 gap-[18px]">
          {features.map((feature, i) => (
            <div key={i} className="bg-gray-100 rounded-lg flex p-8 md:p-12">
              <div className="min-w-[90px] lg:min-w-[130px] relative">{feature.icon}</div>
              <div>
                <h3 className="text-[30px] md:text-[35px] leading-[30px] text-black font-bold">{feature.title}</h3>
                <p className="mt-[35px] lg:mt-[65px] max-w-[420px] text-[18px] md:text-[20px] leading-[30px]">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="text-center mb-[40px] lg:mb-[73px]">
        <button className="bg-[#EA0000] text-white hover:bg-red-600 px-16 py-2 rounded-full transition-all ease-in-out duration-200">
          <span className="text-[18px] leading-5 font-bold uppercase">Start Selling</span>
        </button>
      </div>
    </div>
  );
};

Sellers.getLayout = (page) => <Layout>{page}</Layout>;

export default Sellers;
