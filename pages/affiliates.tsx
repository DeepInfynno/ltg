import { NextPageWithLayout } from "./_app";
import { Layout } from "@components/layouts";
import { useState } from "react";
import SliderComponent from "@components/Slider";
import Image from "next/image";
import Alexandru from "@assets/images/alexandru.svg";
import Markus from "@assets/images/markus.svg";
import Circle from "@assets/images/Circle.svg";
import Button from "@components/form/Button";
import Meta from "@components/Meta";
import OgImage from "../assets/images/logo-1.svg";
import Link from "next/link";
import Newsletter from "@components/Newsletter";

const believesData = [
  {
    id: 1,
    title:
      "Captivating banner ads designed to drive traffic from your site to LiveTicketGroup",
  },
  {
    id: 2,
    title: "Commission earned with every sale",
  },
  {
    id: 3,
    title:
      "Traffic cookies, so you can capture potential sales even if users don’t convert the first time",
  },
  {
    id: 4,
    title: "Secure transactions backed by our 100% Buyer Guarantee",
  },
];
const believesData2 = [
  {
    id: 1,
    title:
      "Captivating banner ads designed to drive traffic from your site to LiveTicketGroup",
  },
  {
    id: 2,
    title: "Commission earned with every sale",
  },
  {
    id: 3,
    title:
      "Traffic cookies, so you can capture potential sales even if users don’t convert the first time",
  },
  {
    id: 4,
    title: "Secure transactions backed by our 100% Buyer Guarantee",
  },
];

const Affiliate: NextPageWithLayout = () => {
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [currentIndex2, setCurrentIndex2] = useState<number>(0);
  return (
    <>
      <Meta
        title={"Become an Affiliate"}
        description={"Lorem, ipsum dolor sit amet consectetur"}
        og_title={"Affiliate"}
        og_description={"Lorem, ipsum dolor sit amet consectetur"}
        og_image={OgImage}
      />
      <div className="relative">
        <section className="relative mx-auto w-full max-w-[1920px] overflow-hidden">
          <div className="absolute -right-40 -top-[280px]  md:right-0 lg:h-[1250px] h-[800px] md:-top-[350px]">
            <Image
              src={Circle}
              width={100}
              alt="circle"
              height={100}
              className="w-[100%] h-[100%] sticky"
            />
          </div>
          <div className="bg-black flex items-center h-[300px] xs:h-[350px] md:h-[450px] lg:h-[550px] xl:h-[600px] 2xl:h-[850px] text-white text-center md:text-left">
            <div className="container mx-auto px-4 md:px-8 lg:px-8 py-24 lg:py-48 max">
              <h1 className="text-2xl md:text-3xl lg:text-6xl xl:text-7xl xl:max-w-[801px] 2xl:max-w-[901px] xl:leading-[90px] 2xl:leading-[113px] 2xl:text-8xl font-semibold md:leading-[1.1] w-full">
                Live<span className="text-[#EA0000]">ticket</span>
                group Affiliate Programm
              </h1>
              <h1 className="text-white lg:mt-20 mt-10 2xl:text-[22px] xl:text-xl lg:text-lg md:text-base text-sm font-semibold">
                When you market more, you’ll earn more.
              </h1>
              <div>
                <Link href="/contact">
                  <Button className="mt-12 lg:mt-24">Become an affiliate</Button>
                </Link>
              </div>
            </div>
          </div>
        </section>
        <section className="flex flex-col justify-center items-center">
          <div className="max-w-[280px] xs:max-w-xs sm:max-w-sm md:max-w-xl lg:max-w-3xl xl:max-w-4xl 2xl:max-w-[1364px] w-full">
            <div className="container mt-10">
              <div className="py-10">
                <p className="text-lg md:text-xl lg:leading-[30px] leading-9">
                  We provide superior ticketing, marketing and service solutions
                  for buyers and sellers. We will help strengthen your brand and
                  enhance your earnings through our resale ticket marketplace.
                </p>
                <p className="text-lg md:text-xl lg:leading-[30px] leading-9">
                  LiveTicketGroup affiliates connect buyers with more than XX
                  million tickets to XX live events in Europe, UK and US - from
                  major sporting events to popular concerts.
                </p>
                <p className="mt-10 md:mt-10 font-semibold text-xl md:text-xl lg:leading-[30px] leading-9">
                  Are you interested in a media or branded partnership?
                </p>
                <p className="text-lg md:text-xl lg:leading-[30px] leading-9">
                  Connect with more users worldwide and drive your revenue through
                  our LIVE Affiliate Program. You’ll have access to
                  LiveTicketGroup’s inventory, real-time reporting, and account
                  management.
                </p>
                <div className="flex flex-row justify-center lg:justify-start">
                  <Link href="/contact">
                    <Button className="mt-12 lg:mt-24">Become an affiliate</Button>
                  </Link>
                </div>
              </div>
            </div>
            {/* </div> */}
          </div>
          <div className="max-w-[240px] xs:max-w-xs sm:max-w-xl md:max-w-2xl lg:max-w-4xl 2xl:max-w-[1364px] w-full">
            {/* what we belive */}
            <div className="mt-12 container">
              <h1 className="text-base md:text-lg lg:text-xl 2xl:text-xl font-normal ml-0.5">
                WHAT WE BELIEVE
              </h1>
              <h1 className="mt-10 text-xl md:text-2xl lg:text-3xl xl:text-4xl font-bold">
                What’s in it for you.
              </h1>
              <div className="affiliate w-[calc(100%_-_60px)] ml-[30px] lg:py-20 md:py-16 md:pb-16 pb-12">
                <SliderComponent
                  setCurrentIndex={setCurrentIndex}
                  sliderFor={"affiliate"}
                  showArrows
                  componentData={believesData.map((believe, index) => {
                    return (
                      <div
                        key={believe.id}
                          className={` bg-[#F8F8F8] h-[100px] flex flex-row items-center justify-center ${
                          index === (currentIndex !== (believesData.length - 1) ? currentIndex + 1 : 0)
                          ? "opacity-100" : "md:opacity-40"
                          }  lg:px-6 md:px-8 md:py-16 sm:px-5 px-4 py-2 rounded-lg `}
                      >
                        <div className="h-full grid place-items-center">
                          <p
                              className="2xl:text-2xl xl:text-xl lg:text-lg md:text-base sm:text-sm text-xs max-w-lg font-bold lg:leading-9 md:leading-8  leading-7"
                            style={{
                              display: "-webkit-box",
                              overflow: "hidden",
                              WebkitBoxOrient: "vertical",
                              WebkitLineClamp: 3,
                            }}
                          >
                            {believe.title}
                          </p>
                        </div>
                      </div>
                    );
                  })}
                />
              </div>
            </div>
          </div>
          <div className="max-w-[280px] xs:max-w-xs sm:max-w-sm md:max-w-xl lg:max-w-3xl xl:max-w-4xl 2xl:max-w-[1364px] w-full">
            {/* T&c */}
            <div className="container">
              <div className="bg-[#EA0000] px-6 lg:px-8 xl:px-10 flex flex-col lg:flex-row gap-1 lg:gap-10 rounded-md justify-center items-center md:py-8 py-10">
                <div className="flex justify-center items-center w-full">
                  <div className="w-full flex flex-col gap-9 max-w-[355px]">
                    <h1 className="text-xl lg:text-2xl xl:text-3xl 2xl:text-4xl text-white font-bold text-center lg:text-left">
                      Affiliates T&Cs
                    </h1>
                    <p className="text-base md:text-lg 2xl:text-xl text-center lg:text-left text-white leading-9">
                      We want to deliver quality service to our customers - every
                      time. Our terms & conditions protect us , our customers and
                      our affiliates.
                    </p>
                    <div className="flex justify-center lg:justify-start">
                      <Link href="/contact">
                        <Button className="bg-transparent border border-white !px-4 py-2 mt-3">
                          learn more
                        </Button>
                      </Link>
                    </div>
                  </div>
                </div>
                <div className="w-full pt-8 md:pt-16 relative lg:pt-0 lg:flex hidden">
                  <Image
                    src={Markus}
                    alt={"markus"}
                    width={600}
                    height={400}
                    className="rounded-lg "
                  />
                </div>
              </div>
            </div>
          </div>
          {/* what we belive */}
          {/* <div className="max-w-[280px] xs:max-w-sm sm:max-w-sm md:max-w-xl lg:max-w-3xl xl:max-w-4xl 2xl:max-w-[1364px] w-full"> */}
          <div className="max-w-[240px] xs:max-w-xs sm:max-w-xl md:max-w-2xl lg:max-w-4xl 2xl:max-w-[1364px] w-full">
            <div className="relative lg:pt-32 ">
              <div className="container mt-12 z-50">
                <h1 className="text-base md:text-lg lg:text-xl 2xl:text-xl font-normal ml-0.5">
                  WHAT WE BELIEVE
                </h1>
                <h1 className="mt-10 text-xl md:text-2xl lg:text-3xl xl:text-4xl font-bold">
                  What’s in it for users.
                </h1>
                <div className="affiliate lg:py-20 md:py-16 md:pb-12 pb-12">
                  <SliderComponent
                    setCurrentIndex={setCurrentIndex2}
                    currentIndex={currentIndex2}
                    sliderFor={"affiliate"}
                    showDots
                    componentData={believesData2.map((believe, index) => {
                      return (
                        <div
                          key={believe.id}
                          onClick={() => setCurrentIndex2(index - 1)}
                          className={`flex h-[100px] flex-row items-center justify-center cursor-pointer ${
                            index === (currentIndex2 !== (believesData2.length - 1) ? currentIndex2 + 1 : 0)
                              ? "opacity-100 bg-[#EA0000] text-white"
                              : "opacity-100 bg-[#EA0000] text-white md:opacity-40 md:bg-[#F8F8F8] md:text-black"
                          } lg:px-6 md:px-8 md:py-16 lg:py-16 sm:px-5 sm:py-3 px-4 py-2 rounded-lg `}
                        >
                          <div className="h-full grid place-items-center">
                            <p
                              className="2xl:text-2xl xl:text-xl lg:text-lg md:text-base sm:text-sm text-xs max-w-lg font-bold lg:leading-9 md:leading-8  leading-7"
                              style={{
                                display: "-webkit-box",
                                overflow: "hidden",
                                WebkitBoxOrient: "vertical",
                                WebkitLineClamp: 3,
                              }}
                            >
                              {believe.title}
                            </p>
                          </div>
                        </div>
                      );
                    })}
                  />
                </div>
              </div>
              {/* api docs */}
              {/* <div className="container">
                <div className="bg-[#F8F8F8] px-6 lg:px-8 flex flex-col lg:flex-row gap-1 lg:gap-10 rounded-md justify-center items-center md:py-8 py-10">
                  <div className="flex justify-center items-center w-full">
                    <div className="w-full flex flex-col gap-9 max-w-[355px]">
                      <h1 className="text-xl lg:text-2xl xl:text-3xl 2xl:text-4xl text-black font-bold text-center lg:text-left">
                        API Documentation
                      </h1>
                      <p className="text-base md:text-lg 2xl:text-xl text-center lg:text-left text-black leading-9">
                        Loren Ipsum text all else , we’re one team that trusts and
                        supports each other –our unity gives us the.
                      </p>
                      <div className="flex justify-center lg:justify-start">
                        <Link href="#">
                          <Button className="!px-4 py-2 mt-3">learn more</Button>
                        </Link>
                      </div>
                    </div>
                  </div>
                  <div className="w-full pt-8 md:pt-16 lg:pt-0 lg:flex hidden">
                    <Image
                      src={Alexandru}
                      alt={"alexandru"}
                      width={600}
                      height={400}
                      className="rounded-lg "
                    />
                  </div>
                </div>
              </div> */}
            </div>
          </div>
          <div className="max-w-[280px] xs:max-w-xs sm:max-w-sm md:max-w-xl lg:max-w-3xl xl:max-w-4xl 2xl:max-w-[1364px] w-full">
            <Newsletter />
          </div>
        </section>
        <div className="absolute bottom-[-80px] -z-10 right-0 h-[1450px]">
          <Image
            src={Circle}
            width={100}
            alt="circle"
            height={100}
            className="w-[100%] h-[100%] sticky z-[-1000]"
          />
        </div>
      </div>
    </>
  );
};

Affiliate.getLayout = (page) => <Layout>{page}</Layout>;

export default Affiliate;
