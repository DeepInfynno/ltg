import { NextPageWithLayout } from "./_app";
import { Layout } from "@components/layouts";
import Offices from "@components/Offices";
import Analytics from "@components/Analytics";
import Circle from "@assets/images/Circle.svg";
import Amsterdam from "@assets/images/amsterdam.jpg";
import SanFrancisco from "@assets/images/san-francisco.jpg";
import Image from "next/image";
import Meta from "@components/Meta";
import OgImage from "../assets/images/logo-1.svg";
import aboutImage1 from "../assets/images/about-us/founder.svg";
import aboutImage2 from "../assets/images/about-us/who-we-are.svg";
import Stats from "@components/Stats";
import Newsletter from "@components/Newsletter";
import Button from "@components/form/Button";
import Link from "next/link";

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
  // const [openAccordian, setOpenAccordian] = useState<number | null>(null);

  return (
    <>
      <Meta
        title={"Curating unforgettable moments for fans worldwide - About Us"}
        description={
          "We are passionate fans, just like you. We believe in the magic of live events and the power they have to unite us."
        }
        og_title={
          "Curating unforgettable moments for fans worldwide - About Us"
        }
        og_description={
          "We are passionate fans, just like you. We believe in the magic of live events and the power they have to unite us."
        }
        og_image={OgImage}
      />
      <div className="relative mx-auto w-full max-w-[1920px] overflow-hidden">
        <div className="bg-aboutBg bg-fixed bg-no-repeat bg-cover bg-[100%_100%] h-[300px] xs:h-[350px] md:h-[450px] lg:h-[550px] xl:h-[600px] 2xl:h-[850px] before:h-[300px] xs:before:h-[350px] md:before:h-[450px] lg:before:h-[550px] xl:before:h-[600px] 2xl:before:h-[850px] before:w-full before:max-w-[1920px] before:bg-[#0000007A] before:absolute  flex justify-center items-center w-full text-white">
          <div className="max-w-xl z-10 2xl:max-w-5xl w-full flex flex-col md:gap-4 lg:gap-5 xl:gap-10 2xl:gap-20">
            <h1 className="px-[16px] text-3xl md:text-5xl 2xl:text-8xl md:max-w-5xl font-semibold xl:leading-[65px] leading-snug text-center">
              Who We <br /> Are
            </h1>
            <div className="flex justify-center items-center w-full">
              <Link href="/contact">
                <Button className="mt-8 md:!px-10">FIND OUT MORE</Button>
              </Link>
            </div>
          </div>
        </div>
        <div className="max-w-[280px] xs:max-w-xs sm:max-w-sm md:max-w-xl lg:max-w-3xl xl:max-w-4xl 2xl:max-w-[1364px] mx-auto my-10 md:my-14 lg:my-18 xl:my-26 2xl:my-28">
          <div className="flex flex-col gap-6">
            <h3 className="uppercase text-base xl:text-lg 2xl:text-xl text-gray-700">
              ABOUT US
            </h3>
            <h1 className="text-xl xl:text-2xl 2xl:text-4xl font-semibold my-3 xl:my-6 2xl:my-10">
              Who We Are
            </h1>
            <div className="text-base xl:text-lg 2xl:text-xl leading-7">
              <p>
                We’re passionate fans, just like you. We believe in the magic of
                live events and the power they have to unite us. We are on a
                mission to curate unforgettable moments for fans worldwide. We
                are a diverse group of professionals who work together to bring
                our mission to life.
              </p>
              <div className="relative w-full lg:max-w-[612px] 2xl:max-w-[812px] mx-auto mt-[35px] mb-[50px] sm:mt-[50px] sm:mb-[80px] xl:mt-[60px] xl:mb-[100px] 2xl:mt-[67px] 2xl:mb-[122px] ">
                <Image src={aboutImage2} width={812} height={603} alt="Image" />
              </div>
              <p className="mt-4">
                Through our trusted marketplace and customer-first approach, we
                deliver value for partners, customers and the live entertainment
                industry.
              </p>
            </div>
          </div>
        </div>
        <div className="max-w-[280px] flex flex-col lg:flex-row lg:items-center lg:gap-10 2xl:gap-[138px] 2xl:pl-[138px] lg:p-6 2xl:py-12 xs:max-w-xs sm:max-w-sm md:max-w-xl lg:max-w-3xl xl:max-w-4xl 2xl:max-w-[1640px] mx-auto bg-[#F8F8F8] rounded-[10px] mb-[120px]">
          <div className="relative w-full max-w-[812px]">
            <Image src={aboutImage1} width={812} height={603} alt="Image" />
          </div>
          <div className="max-w-full lg:max-w-[300px] xl:max-w-[360px] 2xl:max-w-[479px] w-full h-full flex flex-col justify-center py-9 px-4 md:py-10 md:px-6 lg:py-0 lg:px-0">
            <h3 className="uppercase text-base xl:text-lg 2xl:text-xl text-gray-700">
              OUR FOUNDER
            </h3>
            <h1 className="text-xl xl:text-2xl 2xl:text-4xl font-semibold my-3 xl:my-6 2xl:my-10">
              Name Of The Founder
            </h1>
            <p className="text-base xl:text-lg 2xl:text-xl leading-7 mt-7 lg:mt-3 2xl:mt-14">
              “We are obsessed with the fan experience. We are working to make
              it as seamless as possible for fans to purchase tickets from
              sellers - so they can focus on what’s most important - the magic
              of a live event, the energy of a roaring crowd, and all the
              special moments in between.”
            </p>
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
