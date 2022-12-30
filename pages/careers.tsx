import { ReactElement, useEffect, useState } from "react";
import { NextPageWithLayout } from "./_app";
import { ContactForm, Layout } from "@components/layouts";
import Offices from "@components/Offices";
import { RiArrowDownSLine, RiArrowUpSLine } from "react-icons/ri";
import Analytics from "@components/Analytics";
import Circle from "@assets/images/Circle.svg";
import Image from "next/image";
import SliderComponent from "@components/Slider";
import Button from "@components/form/Button";
import OgImage from "../assets/images/logo-1.svg";
import Meta from "@components/Meta";
import Link from "next/link";
import Newsletter from "@components/Newsletter";
import SliderImage1 from "../assets/images/careers/slider-image1.svg";
import SliderImage2 from "../assets/images/careers/slider-image2.svg";
import SliderImage3 from "../assets/images/careers/slider-image3.svg";
import SliderImage4 from "../assets/images/careers/slider-image4.svg";
import SliderImage5 from "../assets/images/careers/slider-image5.svg";

const imagesArray = [
  {
    id: 1,
    image: SliderImage1,
    title: "Image1",
  },
  {
    id: 2,
    image: SliderImage2,
    title: "Image2",
  },
  {
    id: 3,
    image: SliderImage3,
    title: "Image3",
  },
  {
    id: 4,
    image: SliderImage4,
    title: "Image4",
  },
  {
    id: 5,
    image: SliderImage5,
    title: "Image5",
  },
];
const believes = [
  {
    title: "We Raise the Bar",
    description:
      "We shape our industry – we are the competition. We’re ambitious and disciplined teammates who make smart plays and get better every day.",
  },
  {
    title: "We Create Exceptional Experiences",
    description:
      "Whether we’re engaging a fan, seller, partner, or teammate, we don’t compromise when it comes to the quality of their experience. We hold ourselves accountable and lean into every connection to make the moment count.",
  },
  {
    title: "We Commit as a Team",
    description:
      "Above all else, we’re one team that trusts and supports each other –our unity gives us the strength to tackle even the most difficult challenges facing our business. Driven in our pursuit of the optimal, we constructively voice our perspectives, and when the best play is called, we move forward together.",
  },
  {
    title: "We Embrace Change",
    description:
      "In our world, the only constant is change and we’re ready for it. As a team, we’re energized by working with speed and agility to anticipate; we aren’t afraid to be self-critical and we drive relentlessly to get the best results.",
  },
];

const benefits = [
  {
    title: "Health & Wellbeing",
    description:
      "We put employee wellbeing at the center of everything we do - we want you to be able to experience your life to the fullest. We offer benefits to support your total wellbeing - including a monthly wellbeing budget. ",
  },
  {
    title: "Time Off",
    description:
      "We provide generous paid time off, sick leave, local holidays and ‘happiness days’ - 1 day per quarter where you can take off, no questions asked, to do something you love.",
  },
  {
    title: "Flexibility",
    description:
      "We trust you to work where you work best - whether that’s in one of our offices in Madrid, Amsterdam, San Francisco or remote. You choose.",
  },
  {
    title: "Experience it LIVE benefits",
    description:
      "We enable you to go out and curate your own unforgettable moments by providing discounts on tickets and exclusive access to certain events. ",
  },
];

type RolesType = {
  title: string;
  description: string;
  department: string;
  location: string;
  // component: ReactElement;
};

const openRoles: RolesType[] = [
  {
    title: "Accounting",
    description: "Accounting",
    department: "Accounting",
    location: "Amsterdam",
    // component: <Analytics />,
  },
  {
    title: "Analytics",
    description: "Sr. Business Analyst, Gaming",
    department: "Analytics",
    location: "Madrid",
    // component: <Analytics />,
  },
  {
    title: "Service",
    description: "Service",
    department: "Service",
    location: "Madrid",
    // component: <Analytics />,
  },
  {
    title: "Product Owner San Francisco",
    description: "Product Owner",
    department: "Product Owner",
    location: "San Francisco",
    // component: <Analytics />,
  },
  {
    title: "Product Owner Madrid",
    description: "Product Owner",
    department: "Product Owner",
    location: "Madrid",
    // component: <Analytics />,
  },
  {
    title: "Product Owner Amsterdam",
    description: "Product Owner",
    department: "Product Owner",
    location: "Amsterdam",
    // component: <Analytics />,
  },
];
const departmentList = ["Accounting", "Analytics", "Service", "Product Owner"];
const locations = ["Amsterdam", "Madrid", "San Francisco"];

const Careers: NextPageWithLayout = () => {
  // const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [openAccordian, setOpenAccordian] = useState<number | null>(null);
  const [department, setDepartment] = useState<string>("all-departments");
  const [location, setLocation] = useState<string>("all-locations");
  const [accordionData, setaccordionData] = useState<RolesType[]>(openRoles);

  useEffect(() => {
    const data = openRoles
      .filter((acc) =>
        department === "all-departments" ? true : acc.department === department,
      )
      .filter((locations) =>
        location === "all-locations" ? true : locations.location === location,
      );
    setaccordionData(data);
  }, [department, location]);

  return (
    <>
      <Meta
        title={"Careers"}
        description={"Lorem, ipsum dolor sit amet consectetur"}
        og_title={"Careers"}
        og_description={"Lorem, ipsum dolor sit amet consectetur"}
        og_image={OgImage}
      />
      <div className="relative w-full max-w-[1920px] mx-auto overflow-hidden scroll-smooth">
        <div className="bg-careerBg bg-fixed bg-cover h-[300px] xs:h-[350px] md:h-[450px] lg:h-[550px] xl:h-[600px] 2xl:h-[850px] before:h-[300px] xs:before:h-[350px] md:before:h-[450px] lg:before:h-[550px] xl:before:h-[600px] 2xl:before:h-[850px] before:w-full before:bg-[#0000007A] before:absolute flex justify-center items-center w-full text-white">
          <div className="max-w-xl z-10 2xl:max-w-5xl w-full flex flex-col md:gap-4 lg:gap-5 xl:gap-10 2xl:gap-20">
            <h1 className="px-[16px] text-3xl md:text-5xl 2xl:text-8xl md:max-w-5xl font-semibold leading-snug text-center">
              Come create <span className="text-[#EA0000]">live</span>{" "}
              experiences with us
            </h1>
            <div className="flex justify-center items-center w-full">
              <Link href="#work-with-us">
                <Button className="mt-8 md:!px-10">VIEW OPENINGS</Button>
              </Link>
            </div>
          </div>
        </div>
        <div className="max-w-[280px] xs:max-w-xs sm:max-w-sm md:max-w-xl lg:max-w-3xl xl:max-w-4xl 2xl:max-w-[1364px] mx-auto my-10 md:my-14 lg:my-18 xl:my-26 2xl:my-28">
          <div className="md:text-lg 2xl:text-xl">
            <p>
              At LiveTicketGroup, people are encouraged to explore and learn
              about all aspects of our business as part of their career
              development journey. When it comes to your growth, we believe you
              should have as much exposure as possible so you can choose where
              to focus and how to grow your skills.
            </p>
            <p className="mt-6 font-semibold">
              We are a growing company and would love for you to join us on our
              journey!
            </p>
          </div>
        </div>
        {/* Beleives */}
        <div className="max-w-[280px] xs:max-w-xs  sm:max-w-sm md:max-w-xl lg:max-w-3xl xl:max-w-4xl 2xl:max-w-[1364px] mx-auto">
          <h3 className="uppercase text-base xl:text-lg 2xl:text-xl text-gray-700">
            What we believe
          </h3>
          <h1 className="text-xl xl:text-2xl 2xl:text-4xl font-semibold my-3 xl:my-6 2xl:my-10">
            Culture and core values.
          </h1>
          <div className="block md:grid grid-cols-2 md:gap-16 xl:gap-20 2xl:gap-24 py-8 lg:py-16 2xl:py-28 space-y-8 md:space-y-0">
            {believes.map((believe, i) => (
              <div key={i}>
                <h3 className="text-xl xl:text-2xl 2xl:text-4xl w-full max-w-[674px] font-semibold">
                  {believe.title}
                </h3>
                <p className="mt-5 2xl:mt-8 font-normal font-helvetica text-base xl:text-lg 2xl:text-xl">
                  {believe.description}
                </p>
              </div>
            ))}
          </div>
        </div>
        <div className="careers">
          <SliderComponent
            setCurrentIndex={setCurrentIndex}
            currentIndex={currentIndex}
            sliderFor={"careers"}
            componentData={imagesArray.map((data, index) => {
              return (
                <div
                  key={data.id}
                  onClick={() => setCurrentIndex(index)}
                  className={`relative w-full h-[200px] rounded-[20px] focus:outline-none xl:max-w-[750px] 2xl:max-w-none md:h-[300px] lg:h-[400px] xl:h-[450px] 2xl:h-[600px] ${
                    index === currentIndex ? "opacity-100" : "opacity-40"
                  }`}
                >
                  <Image
                    src={data.image}
                    alt={data.title}
                    layout="fill"
                    className="rounded-lg w-2 h-2"
                  />
                </div>
              );
            })}
          />
        </div>
        {/* Benefits */}
        <div className="max-w-[280px] xs:max-w-xs  sm:max-w-sm md:max-w-xl lg:max-w-3xl xl:max-w-4xl 2xl:max-w-[1364px] mx-auto py-8 lg:py-16 2xl:py-28">
          <h3 className="uppercase text-base xl:text-lg 2xl:text-xl text-gray-700">
            Care and Convenience
          </h3>
          <h1 className="text-xl xl:text-2xl 2xl:text-4xl font-semibold pt-5 2xl:pt-10">
            Our benefits.
          </h1>

          <div className="block md:grid grid-cols-2 md:gap-16 xl:gap-20 2xl:gap-24 py-8 lg:py-16 2xl:py-28 2xl:pb-0 space-y-8 md:space-y-0">
            {benefits.map((benefit, i) => (
              <div key={i}>
                <h3 className="text-xl xl:text-2xl 2xl:text-4xl w-full max-w-[674px] font-semibold">
                  {benefit.title.split(" ").includes("LIVE") ? (
                    <p>
                      Experience it <span className="text-[#EA0000]">LIVE</span>{" "}
                      benefits
                    </p>
                  ) : (
                    benefit.title
                  )}
                </h3>
                <p className="mt-5 2xl:mt-8 text-base xl:text-lg 2xl:text-xl">
                  {benefit.description}
                </p>
              </div>
            ))}
            <span id="work-with-us"></span>
          </div>
        </div>
        <div className="max-w-[280px] xs:max-w-xs  sm:max-w-sm md:max-w-xl lg:max-w-3xl xl:max-w-4xl 2xl:max-w-[1364px] mx-auto">
          <h3 className="uppercase text-base xl:text-lg 2xl:text-xl text-gray-700">
            Work with us
          </h3>
          <div className="md:flex justify-between items-center w-full pt-5 2xl:pt-10 block">
            <h1 className="text-xl xl:text-2xl 2xl:text-4xl font-semibold items-start">
              Open roles.
            </h1>
            <div className="flex w-max gap-2 my-8 md:my-0 md:mt-0">
              <select
                onChange={(e) => setDepartment(e.target?.value)}
                className="w-[140px] xs:w-[160px] xl:w-[200px] 2xl:w-[260px] cursor-pointer text-black font-bold text-base xl:text-lg 2xl:text-2xl rounded-md"
              >
                <option value="all-departments">All Departments</option>
                {departmentList.map((department) => {
                  return <option value={department}>{department}</option>;
                })}
              </select>
              <select
                onChange={(e) => setLocation(e.target?.value)}
                className="w-[140px] xs:w-[160px] xl:w-[200px] 2xl:w-[260px] cursor-pointer text-black font-bold text-base xl:text-lg 2xl:text-2xl rounded-md"
              >
                <option value="all-locations">All Locations</option>
                {locations.map((location) => {
                  return <option value={location}>{location}</option>;
                })}
              </select>
            </div>
          </div>
          <div className="md:mt-10 2xl:mt-[80px]">
            {accordionData.length > 0 ? (
              accordionData.map((role, i) => (
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
                      <div>
                        <Analytics location={role.location} />
                      </div>
                    </div>
                  )}
                </div>
              ))
            ) : (
              <div className="min-h-[100px] flex justify-center items-center">
                <p className="text-base xl:text-lg">No Data Found</p>
              </div>
            )}
          </div>
          <p className="py-8 lg:py-16 text-lg lg:text-xl lg:leading-[30px] leading-9">
            LiveTicketGroup is proud to be an equal opportunity employer. We do
            not discriminate based upon race, color, religion, national origin,
            sex, sexual orientation, gender identity, physical or mental
            disability, veteran status, or age. We celebrate diversity,
            equality, and inclusion and value the impact that different
            backgrounds and perspectives bring to our organization.
          </p>
        </div>
        <div className="mt-10 2xl:mt-[100px]">
          <Offices />
        </div>
        <div className="mt-24 2xl:mt-[191px]">
          {/* <ContactForm /> */}
          <Newsletter />
        </div>
        <div className="absolute -right-[450px] 2xl:-right-[250px] bottom-[800px] md:bottom-[200px] 2xl:bottom-[400px] -z-10">
          <Image src={Circle} alt="image" />
        </div>
      </div>
    </>
  );
};

Careers.getLayout = (page) => <Layout>{page}</Layout>;

export default Careers;
