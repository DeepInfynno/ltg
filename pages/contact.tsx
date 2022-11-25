import { Layout } from "@components/layouts";
import Image from "next/image";
import { NextPageWithLayout } from "./_app";
import Madrid from "@assets/images/madrid.jpg";
import Amsterdam from "@assets/images/amsterdam.jpg";
import SanFrancisco from "@assets/images/san-francisco.jpg";

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

const Contact: NextPageWithLayout = () => {
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
      <div className="max-w-6xl mx-auto px-4 bg-gray-100 rounded-xl my-16">
        <div className="md:flex items-center p-4 md:p-16">
          <div className="md:w-1/3 py-8">
            <h3 className="text-3xl font-semibold mb-4">Get in Touch!</h3>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry.
            </p>
          </div>
          <div className="md:w-2/3">
            <form className="space-y-4">
              <input
                type="text"
                name="name"
                placeholder="Name"
                className="border-none w-full rounded-lg px-4 py-2 placeholder:text-gray-400"
              />
              <input
                type="email"
                name="email"
                placeholder="Email"
                className="border-none w-full rounded-lg px-4 py-2 placeholder:text-gray-400"
              />
              <textarea
                name="message"
                placeholder="Your Message"
                className="border-none w-full rounded-lg px-4 py-2 placeholder:text-gray-400"
                rows={5}
              />
              <button className="bg-red-500 text-white hover:bg-red-600 px-10 py-2 rounded-full transition-all ease-in-out duration-200">
                Say hi!
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

Contact.getLayout = (page) => <Layout>{page}</Layout>;

export default Contact;
