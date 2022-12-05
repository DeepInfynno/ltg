import { Layout } from "@components/layouts";
import Newsletter from "@components/Newsletter";
import Offices from "@components/Offices";
import { NextPageWithLayout } from "./_app";

const Contact: NextPageWithLayout = () => {
  return <>
   <div className="mb-[88px]">
        <Offices />
        <div className="hidden md:block text-center mt-[99px]">
          <button className="bg-[#EA0000] text-white hover:bg-red-400 py-2 px-4   rounded-full transition-all ease-in-out duration-200 uppercase">
            <span className="text-[18px] leading-[21px] text-white">
            CONTACT US
            </span>
          </button>
        </div>
      </div>
    <Newsletter /> 
  </>;
};

Contact.getLayout = (page) => <Layout>{page}</Layout>;

export default Contact;
