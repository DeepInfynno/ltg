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
import { HiPlus } from 'react-icons/hi';


const Home: NextPageWithLayout = () => {
  return (
    <div className="mt-[153px] xl:mt-0 max-w-[1920px] mx-auto w-screen overflow-hidden relative">
      <div className="absolute -top-[193px] -right-[386px] xl:-right-[30px] xl:-top-[255px] -z-10">
        <Image
          src={Circle}
          alt="circle"
        />
      </div>
      <div className="hidden lg:block absolute rotate-180 -left-[0px] -bottom-[811px] -z-10">
        <Image
          src={Circle}
          alt="circle"
        />
      </div>
      <div className="flex items-start max-w-[80vw] md:max-w-none md:items-center flex-col md:flex-row mx-auto w-full justify-end md:pr-[44px]">
        <div className="md:translate-x-[69px]" >
          <h2 className="text-black max-w-[712px] text-[58px] leading-[67px] md:text-[98px] md:leading-[113px] font-bold">Experience<br />it <span className="text-[#EA0000]">Live</span>.</h2>
          <p className="hidden md:block text-[22px] mt-[66px] font-bold mb-[89px] leading-[26px] text-[#696969] max-w-[536px]">Curating unforgettable moments for<br /> fans worldwide.</p>
          <p className="md:hidden text-[16px] mt-[55px] font-bold mb-[89px] leading-[18px] text-[#696969] max-w-[322px]">
            Building lifetime memories, giving fans access to unforgettable live events.
          </p>
          <button className="relative z-10 py-[10px] w-[260px] text-[#EA0000] before:content-[''] before:h-full before:w-[156px] before:absolute before:top-0 before:left-0 before:z-0 before:rounded-[10px_0px_0px_10px] before:bg-[#EA000045]">
            <span className="block leading-[21px] font-bold text-[18px]">BECOME A SELLER</span></button>
        </div>
        <div className="relative -right-[42px] md:right-auto self-end">
          <div className="relative h-full w-full max-h-[399px] max-w-[399px] md:max-w-[1097px] md:max-h-[1098px]">
            <Image
              src={football}
              alt="football"
              height={1098}
              width={1097}
            />
          </div>
          <div className="bg-[#EA0000] absolute bottom-[62px] right-[70px] md:hidden flex justify-center items-center p-[13px] rounded-full w-max h-max">
            <HiPlus size={46} color="white" />
          </div>
          <div className="hidden md:block absolute w-[15vw] lg:w-auto lg:max-w-[301px] lg:max-h-[480px] top-1/2 -translate-y-1/2 right-[55px] overflow-hidden">
            <video className="w-full" autoPlay loop>
              <source src="/video.mp4" />
            </video>
          </div>
        </div>
      </div>
      <WhoWeAre />
      <Stats />
      <Brands />
      <div className="mb-[88px]">
        <Offices />
        <div className="hidden md:block text-center mt-[99px]">
          <button className="bg-[#EA0000] text-white hover:bg-red-600 px-5 pt-2 pb-[11px]  rounded-full transition-all ease-in-out duration-200 uppercase">
            <span className="text-[18px] leading-[21px] text-white">
            CONTACT US
            </span>
          </button>
        </div>
      </div>
    <Newsletter /> 
    </div>
  );
};

Home.getLayout = (page) => <Layout hideContact>{page}</Layout>;

export default Home;
