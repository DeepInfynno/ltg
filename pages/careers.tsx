import { useState } from "react";
import { NextPageWithLayout } from "./_app";
import { Layout } from "@components/layouts";
import Offices from "@components/Offices";
import { RiArrowDownSLine, RiArrowUpSLine } from "react-icons/ri";
import Analytics from "@components/Analytics";
import Madrid from "@assets/images/madrid.jpg";
import Amsterdam from "@assets/images/amsterdam.jpg";
import SanFrancisco from "@assets/images/san-francisco.jpg";
import Image from "next/image";
import SliderComponenet from "@components/Slider";

const imagesArray = [
  {
    id: 1,
    image: Madrid,
    title: "madrid",
  },
  {
    id: 2,
    image: Amsterdam,
    title: "amsterdam",
  },
  {
    id: 3,
    image: SanFrancisco,
    title: "san",
  },
  {
    id: 4,
    image: Amsterdam,
    title: "amsterdam",
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

const Careers: NextPageWithLayout = () => {
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [openAccordian, setOpenAccordian] = useState<number | null>(null);

  return (
    <div>
      <div className="bg-gray-900 text-white">
        <div className="max-w-2xl mx-auto px-4 py-24 md:py-48">
          <h1 className="text-3xl md:text-6xl font-semibold leading-snug text-center">
            Come create <span className="text-red-500">live</span> experiences
            with us
          </h1>
          <div className="text-center">
            <button className="mt-8 bg-red-500 text-white hover:bg-red-600 px-10 py-4 rounded-full transition-all ease-in-out duration-200">
              View Opeanings
            </button>
          </div>
        </div>
      </div>
      <div className="max-w-6xl mx-auto px-4">
        <div className="py-24">
          <p>
            At LiveTicketGroup, people are encouraged to explore and learn about
            all aspects of our business as part of their career development
            journey. When it comes to your growth, we believe you should have as
            much exposure as possible so you can choose where to focus and how
            to grow your skills.
          </p>
          <p className="mt-4 font-semibold">
            We are a growing company and would love for you to join us on our
            journey!
          </p>
        </div>
      </div>
      {/* Beleives */}
      <div className="max-w-6xl mx-auto px-4 py-8">
        <h3 className="uppercase text-gray-700">What we believe</h3>
        <h1 className="text-3xl font-semibold py-6">
          Culture and core values.
        </h1>
        <div className="block md:grid grid-cols-2 gap-24 py-16 space-y-8 md:space-y-0">
          {believes.map((believe, i) => (
            <div key={i}>
              <h3 className="text-2xl font-semibold">{believe.title}</h3>
              <p className="mt-8">{believe.description}</p>
            </div>
          ))}
        </div>
      </div>
      <SliderComponenet
        setCurrentIndex={setCurrentIndex}
        componenetData={imagesArray.map((data, index) => {
          return (
            <div
              className={`relative w-full h-[600px] ${
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
      {/* Benefits */}
      <div className="max-w-6xl mx-auto px-4 py-8">
        <h3 className="uppercase text-gray-700">Care and Convenience</h3>
        <h1 className="text-3xl font-semibold py-6">Our benefits.</h1>
        <div className="block md:grid grid-cols-2 gap-24 py-16 space-y-8 md:space-y-0">
          {benefits.map((benefit, i) => (
            <div key={i}>
              <h3 className="text-2xl font-semibold">{benefit.title}</h3>
              <p className="mt-8">{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>
      <div className="container mx-auto px-6 md:pl-4 py-8">
        <h3 className="uppercase text-gray-700 lg:text-2xl md:text-xl text-lg">
          Work with us
        </h3>
        <div className="md:flex justify-between py-6 block">
          <h1 className="lg:text-4xl md:text-3xl text-2xl font-bold  items-start">
            Open roles.
          </h1>
          <div className="flex gap-2 mt-4 md:mt-0">
            <select className="w-[150px] sm:w-[200px] text-sm sm:text-lg rounded-md font-bold">
              <option
                value="all-departments"
                className="text-[#EA0000] lg:text-2xl md:text-xl text-lg"
              >
                All Departments
              </option>
            </select>
            <select className="w-[150px] sm:w-[200px] text-sm sm:text-lg rounded-md font-bold">
              <option
                value="all-locations"
                className="text-[#EA0000] lg:text-2xl md:text-xl text-lg"
              >
                All Locations
              </option>
            </select>
          </div>
        </div>
        <div>
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
          disability, veteran status, or age. We celebrate diversity, equality,
          and inclusion and value the impact that different backgrounds and
          perspectives bring to our organization.
        </p>
      </div>
      <Offices />
    </div>
  );
};

Careers.getLayout = (page) => <Layout>{page}</Layout>;

export default Careers;
