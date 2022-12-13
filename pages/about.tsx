import { useState } from "react";
import { NextPageWithLayout } from "./_app";
import { Layout } from "@components/layouts";
import Offices from "@components/Offices";
import { RiArrowDownSLine, RiArrowUpSLine } from "react-icons/ri";
import Analytics from "@components/Analytics";
import Circle from "@assets/images/Circle.svg";
import Amsterdam from "@assets/images/amsterdam.jpg";
import SanFrancisco from "@assets/images/san-francisco.jpg";
import Image from "next/image";
import Meta from "@components/Meta";
import OgImage from "../assets/images/logo-1.svg";
import Stats from "@components/Stats";
import Newsletter from "@components/Newsletter";

const dataArray = [
  {
    id: 1,
    title: "Affiliates",
    total: 5,
    image: Amsterdam,
  },
  {
    id: 2,
    title: "Sellers",
    total: 30,
    image: Amsterdam,
  },
  {
    id: 3,
    title: "Careers",
    total: 50,
    image: Amsterdam,
  },
  {
    id: 4,
    title: "Contacts",
    total: 60,
    image: SanFrancisco,
  },
];

const openRoles = [
  { title: "Accounting", description: "Accounting", component: <Analytics /> },
  {
    title: "Analytics",
    description: "Sr. Business Analyst, Gaming",
    component: <Analytics />,
  },
  { title: "Service", description: "Service", component: <Analytics /> },
  {
    title: "Product Owner",
    description: "Product Owner",
    component: <Analytics />,
  },
];

const AboutUs: NextPageWithLayout = () => {
  const [openAccordian, setOpenAccordian] = useState<number | null>(null);

  return (
    <>
      <div className="relative mx-auto w-full max-w-[1920px] overflow-hidden">
        <Meta
          title={"About-Us"}
          description={"Lorem, ipsum dolor sit amet consectetur"}
          og_title={"About-Us"}
          og_description={"Lorem, ipsum dolor sit amet consectetur"}
          og_image={OgImage}
        />
        <div className="absolute -right-40 -top-[280px]  md:right-0 lg:h-[1250px] h-[800px] md:-top-[350px]">
          <Image
            src={Circle}
            width={100}
            alt="circle"
            height={100}
            className="w-[100%] h-[100%] sticky"
          />
        </div>
        <div className="bg-black text-white text-center md:text-left">
          <div className="container mx-auto px-4 md:px-8 lg:px-8 py-24 lg:py-48 max">
            <h1 className="text-2xl md:text-3xl lg:text-6xl xl:text-7xl 2xl:text-8xl font-semibold md:leading-[1.1] w-full">
              About Us
            </h1>
            <h1 className="text-white lg:mt-20 mt-10 2xl:text-[22px] xl:text-xl lg:text-lg md:text-base text-sm font-semibold">
              When you market more, you’ll earn more.
            </h1>
          </div>
        </div>
        <div className="max-w-[280px] xs:max-w-xs sm:max-w-sm md:max-w-xl lg:max-w-3xl xl:max-w-4xl 2xl:max-w-[1364px] mx-auto my-10 md:my-14 lg:my-18 xl:my-26 2xl:my-28">
          <div className="flex flex-col gap-6">
            <h1 className="font-bold text-xl xl:text-2xl 2xl:text-4xl">
              What is Lorem Ipsum?
            </h1>
            <h3 className="text-base xl:text-lg 2xl:text-xl font-semibold">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry.
            </h3>
            <div className="text-base xl:text-lg 2xl:text-xl leading-7">
              <p>
                Lorem Ipsum has been the industry's standard dummy text ever
                since the 1500s, when an unknown printer took a galley of type
                and scrambled it to make a type specimen book. It has survived
                not only five centuries, but also the leap into electronic
                typesetting, remaining essentially unchanged. It was popularised
                in the 1960s with the release of Letraset sheets containing
                Lorem Ipsum passages, and more recently with desktop publishing
                software like Aldus PageMaker including versions of Lorem Ipsum.
              </p>
              <p className="mt-4">
                It is a long established fact that a reader will be distracted
                by the readable content of a page when looking at its layout.
                The point of using Lorem Ipsum is that it has a more-or-less
                normal distribution of letters, as opposed to using 'Content
                here, content here', making it look like readable English. Many
                desktop publishing packages and web page editors now use Lorem
                Ipsum as their default model text, and a search for 'lorem
                ipsum' will uncover many web sites still in their infancy.
                Various versions have evolved over the years, sometimes by
                accident, sometimes on purpose (injected humour and the like).
              </p>
            </div>
          </div>
        </div>
        {/* Beleives */}
        {/* <div className="bg-black  my-10 md:my-14 lg:my-18 xl:my-26 2xl:my-28">
          <div className="max-w-[280px] lg:grid lg:grid-cols-4 md:grid md:grid-cols-2 py-10 grid gap-4 justify-around xs:max-w-xs md:gap-5 lg:gap-0   sm:max-w-sm md:max-w-xl lg:max-w-3xl xl:max-w-4xl 2xl:max-w-[1364px] mx-auto">
            {dataArray.map((item) => {
              return (
                <div
                  key={item.id}
                  className="text-white flex flex-row  gap-4 md:justify-start lg:justify-center w-full"
                >
                  <Image
                    src={item.image}
                    width={70}
                    className="h-[80px] rounded-lg"
                    alt={item.title}
                  />
                  <div className="flex flex-col justify-center">
                    <p className="font-bold text-lg lg:text-2xl">
                      {item.total} +
                    </p>
                    <p className="font-bold text-lg 2xl:text-lg lg:text-base">
                      {item.title}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div> */}
        {/* <div className="max-w-[280px] xs:max-w-xs  sm:max-w-sm md:max-w-xl lg:max-w-3xl xl:max-w-4xl 2xl:max-w-[1364px] mx-auto">
          <h3 className="uppercase text-base xl:text-lg 2xl:text-xl text-gray-700">
            Work with us
          </h3>
          <div className="md:flex justify-between items-center w-full pt-5 2xl:pt-10 block">
            <h1 className="text-xl xl:text-2xl 2xl:text-4xl font-semibold items-start">
              Open roles.
            </h1>
            <div className="flex w-max gap-2 my-8 md:my-0 md:mt-0">
              <select className="w-[140px] xs:w-[160px] xl:w-[200px] 2xl:w-[260px] cursor-pointer text-black font-bold text-base xl:text-lg 2xl:text-2xl rounded-md">
                <option value="all-departments">All Departments</option>
              </select>
              <select className="w-[140px] xs:w-[160px] xl:w-[200px] cursor-pointer 2xl:w-[260px] text-black font-bold text-base xl:text-lg 2xl:text-2xl rounded-md">
                <option value="all-locations">All Locations</option>
              </select>
            </div>
          </div>
          <div className="md:mt-10 2xl:mt-[80px]">
            {openRoles.map((role, i) => (
              <div key={i} className="border-gray-300 border-b">
                <div
                  className="flex items-center justify-between cursor-pointer py-4 px-2"
                  onClick={() =>
                    openAccordian !== null && openAccordian === i
                      ? setOpenAccordian(null)
                      : setOpenAccordian(i)
                  }
                >
                  <div
                    className={`font-bold lg:text-2xl md:text-xl text-lg    ${
                      i === openAccordian && "text-[#EA0000]"
                    }`}
                  >
                    {role.title}
                  </div>
                  <div>
                    {openAccordian === i ? (
                      <RiArrowUpSLine className="h-6 w-6 text-gray-700" />
                    ) : (
                      <RiArrowDownSLine className="h-6 w-6 text-gray-700" />
                    )}
                  </div>
                </div>
                {openAccordian === i && (
                  <div className="p-4">
                    <div className="transition ease-in-out duration-1000 text-gray-700 lg:text-xl md:text-lg text-base">
                      {role.description}
                    </div>
                    <div>{role.component}</div>
                  </div>
                )}
              </div>
            ))}
          </div>
          <p className="py-8 lg:py-16 text-lg lg:text-xl lg:leading-[30px] leading-9">
            LiveTicketGroup is proud to be an equal opportunity employer. We do
            not discriminate based upon race, color, religion, national origin,
            sex, sexual orientation, gender identity, physical or mental
            disability, veteran status, or age. We celebrate diversity,
            equality, and inclusion and value the impact that different
            backgrounds and perspectives bring to our organization.
          </p>
        </div> */}
        <Stats headerClass="max-w-[280px] xs:max-w-xs sm:max-w-sm md:max-w-xl lg:max-w-3xl xl:max-w-4xl 2xl:max-w-[1364px] mx-auto" />
        <div className="mt-10 2xl:mt-[100px]">
          <Offices />
        </div>
        <div className="mt-24 2xl:mt-[191px] px-5 sm:px-10 xl:px-0 lg:max-w-[863px] xl:max-w-none mx-auto">
          <Newsletter />
        </div>
        <div className="absolute hidden md:block -right-[450px] 2xl:-right-[250px] bottom-[800px] md:bottom-[200px] 2xl:bottom-[400px] -z-10">
          <Image src={Circle} alt="image" />
        </div>
      </div>
    </>
  );
};

AboutUs.getLayout = (page) => <Layout>{page}</Layout>;

export default AboutUs;
