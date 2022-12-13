import Brands from "@components/Brands";
import { Layout } from "@components/layouts";
import Newsletter from "@components/Newsletter";
import Offices from "@components/Offices";
import Stats from "@components/Stats";
import WhoWeAre from "@components/WhoWeAre";
import Image from "next/image";
import { NextPageWithLayout } from "./_app";
import Circle from "@assets/images/Circle.svg";
import football from "@assets/images/football.svg";
import { HiPlus } from "react-icons/hi";
import { useState } from "react";
import Logo from "@assets/images/LogoWhite.svg";
import Button from "@components/form/Button";
import Link from "next/link";
import Meta from "@components/Meta";
import OgImage from "../assets/images/logo-1.svg";

const Home: NextPageWithLayout = () => {
  const [showVideo, setShowVideo] = useState(false);
  return (
    <>
      <Meta
        title={"Home"}
        description={"Lorem, ipsum dolor sit amet consectetur"}
        og_title={"Home"}
        og_description={"Lorem, ipsum dolor sit amet consectetur"}
        og_image={OgImage}
      />
      <div className="mt-[45px] xl:-mt-[108px] max-w-[1920px] mx-auto w-full overflow-hidden relative">
        <div className="absolute -top-[193px] -right-[386px] xl:-right-[30px] xl:-top-[264px] -z-10">
          <Image src={Circle} alt="circle" />
        </div>
        <div className="hidden lg:block absolute rotate-180 -left-[42px] -bottom-[850px] -z-10">
          <Image src={Circle} alt="circle" />
        </div>
        <div className="flex items-start max-w-[80vw] md:max-w-none md:items-center md:-mt-[20px] lg:-mt-[100px] xl:mt-0 flex-col md:flex-row mx-auto w-full justify-end md:pr-[44px]">
          <div className="md:translate-x-[69px]">
            <h2 className="text-black max-w-[712px] text-5xl leading-[58px] xs:text-[58px] xs:leading-[67px] md:text-5xl md:leading-tight lg:text-6xl lg:leading-tight xl:text-7xl xl:leading-tight 2xl:text-[98px] 2xl:leading-[113px] font-bold">
              Experience
              <br />
              it <span className="text-[#EA0000]">Live</span>.
            </h2>
            <p className="hidden md:block text-[22px] mt-[66px] font-bold mb-[89px] leading-[26px] text-[#696969] max-w-[536px]">
              Curating unforgettable moments for
              <br /> fans worldwide.
            </p>
            <p className="md:hidden text-[16px] mt-[55px] font-bold mb-[89px] leading-[18px] text-[#696969] max-w-[322px]">
              Building lifetime memories, giving fans access to unforgettable
              live events.
            </p>
            <Link href="/contact">
              <button className="relative z-10 py-[10px] w-[260px] text-[#EA0000] before:content-[''] before:h-full before:w-[156px] before:absolute before:top-0 before:left-0 before:z-0 before:rounded-[10px_0px_0px_10px] before:bg-[#EA000045]">
                <span className="block leading-[21px] font-bold text-[18px]">
                  BECOME A SELLER
                </span>
              </button>
            </Link>
          </div>
          <div className="relative -right-[42px] md:right-auto self-end invisible">
            <div className="relative h-full w-full max-h-[399px] max-w-[399px] md:max-w-[1097px] md:max-h-[1098px] xl:max-w-[820px] 2xl:max-w-[1097px]">
              <Image src={football} alt="football" height={1098} width={1097} />
            </div>
            <div
              onClick={() => setShowVideo(!showVideo)}
              className="bg-[#EA0000] absolute bottom-[62px] right-[70px] md:hidden flex justify-center items-center p-[13px] rounded-full w-max h-max"
            >
              <HiPlus size={46} color="white" />
            </div>
            <div className="hidden md:flex items-center justify-center absolute w-[15vw] lg:w-auto lg:max-w-[170px] lg:max-h-[280px] 2xl:max-w-[301px] 2xl:max-h-[480px] top-1/2 -translate-y-1/2 right-[55px] overflow-hidden">
              <div className="relative">
                <div className="px-5 xl:px-10 absolute flex items-center justify-center h-full w-full bg-[#00000050]">
                  <div className="relative">
                    <Image src={Logo} alt="logo" />
                  </div>
                </div>
                <video className="w-full" autoPlay muted loop>
                  <source src="/video.mp4" />
                </video>
              </div>
            </div>
          </div>
        </div>
        <WhoWeAre />
        <Stats />
        <Brands />
        <div className="mb-[88px]">
          <Offices />
          <div className="hidden md:block text-center mt-[99px]">
            <Link href="/contact">
              <Button>contact us</Button>
            </Link>
          </div>
          <Newsletter />
        </div>
      </div>
      {showVideo && (
        <div className="md:hidden fixed overflow-hidden top-0 left-0 h-screen w-screen z-[999] flex items-center justify-center bg-black">
          <div
            onClick={() => setShowVideo(!showVideo)}
            className="z-50 absolute top-3 right-4 flex justify-center items-center p-2 w-max rotate-45 h-max"
          >
            <HiPlus size={46} color="white" />
          </div>
          <div className="absolute flex items-center justify-center h-full w-full bg-[#00000050]">
            <div className="relative">
              <Image src={Logo} alt="logo" />
            </div>
          </div>
          <div className="w-full overflow-hidden">
            <video className="w-full" autoPlay loop muted>
              <source src="/video.mp4" />
            </video>
          </div>
        </div>
      )}
    </>
  );
};

Home.getLayout = (page) => <Layout hideContact>{page}</Layout>;

export default Home;
