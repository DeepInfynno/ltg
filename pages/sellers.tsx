import { Layout } from "@components/layouts";
import { NextPageWithLayout } from "./_app";
import LTG1 from "@assets/images/LTG01.svg";
import LTG2 from "@assets/images/LTG02.svg";
import LTG3 from "@assets/images/LTG03.svg";
import LTG4 from "@assets/images/LTG04.svg";
import Image from "next/image";
import Button from "@components/form/Button";
import Meta from "@components/Meta";
import OgImage from "../assets/images/logo-1.svg";
import Link from "next/link";
import Newsletter from "@components/Newsletter";

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
      <Meta
        title={"Sell tickets on LiveTicketGroup - Become a Seller"}
        description={
          "We are the world's largest sports ticket marketplace providing superior ticketing, marketing and service solutions for buyers and sellers."
        }
        og_title={"Sell tickets on LiveTicketGroup - Become a Seller"}
        og_description={
          "We are the world's largest sports ticket marketplace providing superior ticketing, marketing and service solutions for buyers and sellers."
        }
        og_image={OgImage}
      />
      <div className="bg-sellerBg bg-cover h-[300px] xs:h-[350px] md:h-[450px] lg:h-[550px] xl:h-[600px] 2xl:h-[850px] before:h-[300px] xs:before:h-[350px] md:before:h-[450px] lg:before:h-[550px] xl:before:h-[600px] 2xl:before:h-[850px] before:w-full before:max-w-[1920px] before:bg-[#0000007A] before:absolute flex items-center bg-fixed bg-no-repeat sm:bg-[95%] md:bg-[90%_30%] lg:bg-[30%_30%] xl:bg-[30%_30%] 2xl:bg-[10%_10%] 3xl:bg-[-15vh_40%] 4xl:bg-[-25vh_30%]">
        <div className="container z-10 flex flex-col items-center text-center sm:block sm:text-left 3xl:max-w-[1537px] mx-auto px-4 md:px-8 lg:px-8 py-24 lg:py-48">
          <h1 className="text-white text-2xl md:text-3xl lg:text-6xl xl:text-7xl 2xl:text-8xl font-bold md:leading-[40px] lg:leading-[70px] xl:leading-[90px] 2xl:leading-[113px]">
            Sell tickets on <br />
            live<span className="text-[#EA0000]">ticket</span>group.
          </h1>
          <p className="mt-[20px] xs:mt-[22px] sm:mt-[30px] md:mt-[50px] xl:mt-[60px] 2xl:mt-[78px] max-w-[345px] md:max-w-[445px] lg:max-w-[545px] xl:max-w-[645px] 2xl:max-w-[745px] 2xl:text-[22px] xl:text-xl lg:text-lg md:text-base text-sm leading-[26px] font-bold text-white">
            We are the world&apos;s largest sports ticket marketplace providing
            superior ticketing, marketing and service solutions for buyers and
            sellers.
          </p>
          <Link href="/contact" className="w-max block">
            <Button className="mt-[22px] xs:mt-[24px] sm:mt-[40px] md:mt-[55px] xl:mt-[70px] 2xl:mt-[84px] !px-10">
              Start Selling
            </Button>
          </Link>
        </div>
      </div>
      <div className="mt-[64px] md:mt-[103px] max-w-[280px] xs:max-w-xs sm:max-w-sm md:max-w-xl lg:max-w-3xl xl:max-w-4xl 2xl:max-w-[1364px] mx-auto text-base sm:text-lg md:text-[20px] lg:text-[22px] xl:text-2xl 2xl:text-[26px] leading-[30px] text-black font-bold">
        Our platform will enable you to sell tickets in an efficient way. Our
        online marketing experts ensure your tickets get the right exposure.
      </div>
      <div className="max-w-[280px] xs:max-w-xs sm:max-w-sm md:max-w-2xl lg:max-w-4xl xl:max-w-6xl 2xl:max-w-[1364px] mx-auto mt-[83px] mb-[50px] lg:mb-[85px]">
        <div className="grid md:grid-cols-2 gap-[18px]">
          {features.map((feature, i) => (
            <div
              key={i}
              className="bg-gray-100 rounded-lg flex p-4 sm:p-6 lg:p-12"
            >
              <div className="min-w-[90px] 2xl:min-w-[130px] relative">
                {feature.icon}
              </div>
              <div>
                <h3 className="text-2xl sm:text-[26px] md:text-[28px] lg:text-[30px] xl:text-[32px] 2xl:text-[35px] leading-[30px] text-black font-bold">
                  {feature.title}
                </h3>
                <p className="mt-[35px] 2xl:mt-[65px] xl:mt-[55px] max-w-[420px] text-xs md:text-[14px] lg:text-[16px] xl:text-[18px] 2xl:text-[20px] leading-[30px]">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="text-center mb-[40px] lg:mb-[73px]">
        <Link href="/contact" className="w-max mx-auto block">
          <Button className="!px-10">Start Selling</Button>
        </Link>
      </div>
      <div className="max-w-[280px] mx-auto xs:max-w-xs sm:max-w-sm md:max-w-xl lg:max-w-3xl xl:max-w-4xl 2xl:max-w-[1364px] w-full">
        <Newsletter />
      </div>
    </div>
  );
};

Sellers.getLayout = (page) => <Layout>{page}</Layout>;

export default Sellers;
