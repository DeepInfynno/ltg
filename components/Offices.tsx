import Madrid from "@assets/images/madrid.jpg";
import Amsterdam from "@assets/images/amsterdam.jpg";
import SanFrancisco from "@assets/images/san-francisco.jpg";
import Image from "next/image";

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
    location: "Amesterdam",
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
  return (
    <div>
      <div className="max-w-6xl mx-auto px-4 py-8">
        <h3 className="uppercase text-gray-700">Where you can find us</h3>
        <h1 className="text-3xl font-semibold py-6">Our Offices.</h1>
      </div>
      <div className="max-w-7xl mx-auto px-4">
        <div className="block space-y-8 md:space-y-0 md:grid grid-cols-3 gap-8">
          {offices.map((office, i) => (
            <div key={i}>
              <div className="relative w-full h-60">
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
                <h3 className="text-xl font-semibold py-4">
                  {office.location}
                </h3>
                <p className="py-4 text-gray-700">{office.title}</p>
                <p className="text-gray-700">{office.address}</p>
                <p className="text-gray-700">{office.contact}</p>
                <p className="text-gray-700">{office.email}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Offices;
