import { ContactForm, Layout } from "@components/layouts";
import Meta from "@components/Meta";
import Offices from "@components/Offices";
import { NextPageWithLayout } from "./_app";
import OgImage from "../assets/images/logo-1.svg";
import Newsletter from "@components/Newsletter";

const Contact: NextPageWithLayout = () => {
  return (
    <>
      <Meta
        title={"Contact"}
        description={"Lorem, ipsum dolor sit amet consectetur"}
        og_title={"Contact"}
        og_description={"Lorem, ipsum dolor sit amet consectetur"}
        og_image={OgImage}
      />
      <div className="relative mt-[84px] w-full max-w-[1920px] mx-auto overflow-hidden flex flex-col gap-4">
        <div className="mb-10" >
          <Offices />
        </div>
        <ContactForm />
        <div className="-mt-[88px] 2xl:-mt-[56px]">
          <Newsletter />  
        </div>
      </div>
    </>
  );
};

Contact.getLayout = (page) => <Layout>{page}</Layout>;

export default Contact;
