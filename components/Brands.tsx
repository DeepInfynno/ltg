import LiveFestivalTickets from "@assets/images/livefestivaltickets.svg";
import LiveFootballTickets from "@assets/images/livefootballtickets.svg";
import LiveRugbyTickets from "@assets/images/liverugbytickets.svg";
import LiveTennisTickets from "@assets/images/livetennistickets.svg";
import Image from "next/image";

type BrandLinkProps = {
  href: string;
  title: string;
  image: string;
};

const BrandLink = ({ href, image, title, ...props }: BrandLinkProps) => (
  <div className="w-auto max-w-[240px] 2xl:max-w-[280px] border cursor-pointer flex items-center bg-white border-[#EBECED] p-4 md:p-[18px] hover:border-[#EB4245] shadow-sm rounded-[3px] md:rounded-md ">
    <a href={href} {...props}>
      <Image src={image} alt={title} />
    </a>
  </div>
);

const Brands = () => {
  return (
    <div className="mb-[75px] md:mb-[144px] z-10 px-[35px] 2xl:px-0">
      <div className="max-w-[863px] w-full mx-auto">
        <h3 className="uppercase text-black text-[18px] md:text-xl font-light leading-[23px]">
          OUR BRANDS
        </h3>
        <h1 className="text-[22px] md:text-[28px] xl:text-[30px] 2xl:text-[35px] leading-[30px] md:leading-[39px] text-black font-bold mt-[36px] md:mt-[41px]">
          Empowering sports event experiences.
        </h1>
      </div>
      <div className="sm:max-w-[556px] md:max-w-[1056px] xl:max-w-[1156px] 2xl:max-w-[1456px] w-full mx-auto mt-[43px] md:mt-[76px]">
        <div className="flex items-stretch justify-center md:grid-cols-4 gap-x-2 sm:gap-x-6 md:gap-x-2 gap-y-6 md:gap-8 lg:gap-16 md:py-2">
          <BrandLink
            href="https://www.livefootballtickets.com/"
            image={LiveFootballTickets}
            title="football"
          />
          <BrandLink
            href="https://www.liverugbytickets.co.uk/"
            image={LiveRugbyTickets}
            title="rugby"
          />
          {/* <BrandLink
            href="https://www.livefestivaltickets.com/"
            image={LiveFestivalTickets}
            title="festival"
          />
          <BrandLink
            href="https://www.livetennistickets.com/"
            image={LiveTennisTickets}
            title="tennis"
          /> */}
        </div>
      </div>
    </div>
  );
};

export default Brands;
