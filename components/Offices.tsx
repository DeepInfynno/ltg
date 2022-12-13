import Madrid from "@assets/images/madrid.jpg";
import Amsterdam from "@assets/images/amsterdam.jpg";
import SanFrancisco from "@assets/images/san-francisco.jpg";
import Image from "next/image";
import SliderComponent from "./Slider";
import { useState } from "react";

const offices = [
  {
    image: Madrid,
    location: "Madrid",
    title: "HQ",
    address: "Street Name - Street Number",
    contact: "Phone Number",
    email: "Email",
  },
  {
    image: Amsterdam,
    location: "Amsterdam",
    title: "Nordics Office",
    address: "Street Name - Street Number",
    contact: "Phone Number",
    email: "Email",
  },
  {
    image: SanFrancisco,
    location: "San Francisco",
    title: "US Office",
    address: "Street Name - Street Number",
    contact: "Phone Number",
    email: "Email",
  },
];

const Offices = () => {
  const [currentIndex, setCurrentIndex] = useState<number>(0);

  return (
    <div className="w-full">
      <div className="max-w-[280px] xs:max-w-xs sm:max-w-sm md:max-w-xl lg:max-w-3xl xl:max-w-4xl 2xl:max-w-[1364px] mx-auto">
        <h3 className="uppercase text-base xl:text-lg 2xl:text-xl text-gray-700">
          Where you can find us
        </h3>
        <h1 className="text-[22px] xl:text-2xl 2xl:text-4xl font-semibold pt-5 2xl:pt-10">
          Our Offices.
        </h1>
      </div>
      <div className=" w-full mt-11 2xl:mt-[88px]">
        <div className="office xs:px-4 md:px-18 lg:px-24 xl:px-48 2xl:px-32">
          <SliderComponent
            setCurrentIndex={setCurrentIndex}
            sliderFor={"office"}
            componentData={offices.map((office, i) => {
              return (
                <div key={i}>
                  <div className="relative w-full h-52 md:h-40 xl:h-44 2xl:h-72">
                    {office.image && (
                      <Image
                        src={office.image}
                        alt={office.title}
                        layout="fill"
                        className="rounded-lg w-2 h-2"
                      />
                    )}
                  </div>
                  <div className="px-8">
                    <h3 className="text-base 2xl:text-2xl font-bold my-4 2xl:my-7">
                      {office.location}
                    </h3>
                    <div className="text-sm 2xl:text-xl font-normal text-black">
                      <p className="mb-4 2xl:mb-7">{office.title}</p>
                      <p>{office.address}</p>
                      <p>{office.contact}</p>
                      <p>{office.email}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          />
        </div>
      </div>
    </div>
  );
};

export default Offices;
