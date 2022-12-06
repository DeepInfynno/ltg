import { NextPageWithLayout } from "./_app";
import { ContactForm, Layout } from "@components/layouts";
import { useState } from "react";
import SliderComponenet from "@components/Slider";
import Image from "next/image";
import Alexandru from "@assets/images/alexandru.svg";
import Markus from "@assets/images/markus.svg";
import Circle from "@assets/images/Circle.svg";

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
    <div>
      <div className="absolute  right-0 lg:h-[1250px] h-[800px] w-">
        <Image
          src={Circle}
          width={100}
          alt="circle"
          height={100}
          className="w-[100%] h-[100%] sticky z-[-1000]"
        />
      </div>
      <div className="bg-black text-white text-center md:text-left">
        <div className="container mx-auto px-4 md:px-8 lg:px-8  py-24 lg:py-48 max">
          <h1 className="text-2xl md:text-3xl lg:text-6xl xl:text-8xl font-semibold md:leading-[1.1] w-full">
            Live<span className="text-red-500">ticket</span>group Affiliate
            Programm
          </h1>
          <h1 className="text-white lg:mt-20 mt-10  lg:text-[22px] md:text-lg text-base font-semibold">
            When you market more, you’ll earn more.
          </h1>
          <div>
            <button className="mt-12 lg:mt-24 bg-[#EA0000] text-white font-bold text-base hover:bg-red-400 focus:bg-red-400 px-8 py-2 rounded-full transition-all ease-in-out duration-200 uppercase ">
              Become an affiliate
            </button>
          </div>
        </div>
      </div>
      <div className="container mx-auto sm:px-4 px-9  mt-10">
        <div className="py-10">
          <p className="text-lg md:text-xl lg:leading-[30px] leading-9">
            We provide superior ticketing, marketing and service solutions for
            buyers and sellers. We will help strengthen your brand and enhance
            your earnings through our resale ticket marketplace.
          </p>
          <p className="text-lg md:text-xl lg:leading-[30px] leading-9">
            LiveTicketGroup affiliates connect buyers with more than XX million
            tickets to XX live events in Europe, UK and US - from major sporting
            events to popular concerts.
          </p>
          <p className="mt-10 md:mt-10 font-semibold text-xl md:text-xl lg:leading-[30px] leading-9">
            Are you interested in a media or branded partnership?
          </p>
          <p className="text-lg md:text-xl lg:leading-[30px] leading-9">
            Connect with more users worldwide and drive your revenue through our
            LIVE Affiliate Program. You’ll have access to LiveTicketGroup’s
            inventory, real-time reporting, and account management.
          </p>
          <div className="flex flex-row justify-center lg:justify-start">
            <button className="mt-12 lg:mt-24 bg-[#EA0000] text-white font-bold text-lg hover:bg-red-400 focus:bg-red-400 px-8 py-2 rounded-full transition-all ease-in-out duration-200 uppercase ">
              Become an affiliate
            </button>
          </div>
        </div>
      </div>
      {/* what we belive */}
      <div className="mt-12 container mx-auto sm:px-4 px-9">
        <h1 className="text-xl font-normal ml-0.5">WHAT WE BELIEVE</h1>
        <h1 className="mt-10 text-4xl font-bold"> What’s in it for you.</h1>
        <div className="affiliate lg:py-20 md:py-16 md:pb-16 pb-12">
          <SliderComponenet
            setCurrentIndex={setCurrentIndex}
            sliderFor={"affiliate"}
            componenetData={believesData.map((believe, index) => {
              return (
                <div
                  key={believe.id}
                  className={` bg-[#F8F8F8] h-[100px] flex flex-row items-center justify-center ${
                    index === currentIndex ? "opacity-100" : "opacity-40"
                  }  lg:px-6 md:px-8 md:py-16 sm:px-5 px-4 py-2 rounded-lg `}
                >
                  <div className="h-full grid place-items-center">
                    <p
                      className="lg:text-[24px] md:text-[22px] sm:text-lg text-base max-w-lg font-bold lg:leading-9 md:leading-8  leading-7"
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
      {/* T&c */}
      <div className="container mx-auto px-4">
        <div className="bg-[#EA0000] flex flex-col lg:flex-row gap-1 lg:gap-10 rounded-md justify-center items-center md:py-16 py-10">
          <div className="flex flex-col gap-9 lg:w-1/2 w-full md:px-24 px-6 ">
            <h1 className="text-3xl text-white font-bold text-center lg:text-left">
              Affiliates T&Cs
            </h1>
            <p className="text-xl text-white leading-9">
              We want to deliver quality service to our customers - every time.
              Our terms & conditions protect us , our customers and our
              affiliates.
            </p>
            <div className="flex justify-center lg:justify-start">
              <button className="bg-transparent text-white text-lg rounded-full hover:bg-red-400 focus:bg-red-400  border border-white w-max px-4 py-2 uppercase font-bold mt-3 ">
                Learn more
              </button>
            </div>
          </div>
          <div className="px-8 pt-8 md:pt-16 lg:pt-0 lg:flex hidden">
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
      {/* what we belive */}

      <div className="relative lg:pt-32 ">
        <div className="container mx-auto sm:px-4 px-9 mt-12 z-50 ">
          <h1 className="text-xl font-normal ml-0.5">WHAT WE BELIEVE</h1>
          <h1 className="mt-10 text-4xl font-bold"> What’s in it for you.</h1>
          <div className="absolute  right-0 h-[1450px]">
            <Image
              src={Circle}
              width={100}
              alt="circle"
              height={100}
              className="w-[100%] h-[100%] sticky z-[-1000]"
            />
          </div>
          <div className="affiliate lg:py-20 md:py-16 md:pb-12 pb-12">
            <SliderComponenet
              setCurrentIndex={setCurrentIndex2}
              sliderFor={"affiliate"}
              componenetData={believesData2.map((believe, index) => {
                return (
                  <div
                    key={believe.id}
                    className={`bg-red-500 flex h-[100px] flex-row items-center justify-center ${
                      index === currentIndex2 ? "opacity-100" : "opacity-40"
                    } lg:px-6 md:px-8 md:py-16 lg:py-16 sm:px-5 sm:py-3 px-4 py-2 rounded-lg `}
                  >
                    <div className="h-full grid place-items-center">
                      <p
                        className="lg:text-[24px] md:text-[22px] sm:text-lg text-base max-w-lg font-bold lg:leading-9 md:leading-8  leading-7 text-white"
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
        <div className="container mx-auto px-4 ">
          <div className="bg-[#F8F8F8] flex flex-col lg:flex-row gap-1 lg:gap-10 rounded-md justify-center items-center md:py-16 py-10">
            <div className="flex flex-col gap-9 lg:w-1/2 w-full md:px-24 px-6 ">
              <h1 className="text-3xl text-black font-bold text-center lg:text-left">
                API Documentation
              </h1>
              <p className="text-xl text-black leading-9">
                Loren Ipsum text all else , we’re one team that trusts and
                supports each other –our unity gives us the.
              </p>
              <div className="flex justify-center lg:justify-start">
                <button className="bg-[#EA0000] text-white text-lg rounded-full border hover:bg-red-400 focus:bg-red-400 border-white w-max px-4 py-2 uppercase font-bold mt-3">
                  Learn more
                </button>
              </div>
            </div>
            <div className="px-8 pt-8 md:pt-16 lg:pt-0 lg:flex hidden">
              <Image
                src={Alexandru}
                alt={"alexandru"}
                width={600}
                height={400}
                className="rounded-lg "
              />
            </div>
          </div>
        </div>
        <ContactForm />
      </div>
    </div>
  );
};

Affiliate.getLayout = (page) => <Layout>{page}</Layout>;

export default Affiliate;
