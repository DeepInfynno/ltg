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
        title={"Get in touch with LiveTicketGroup - Contact"}
        description={
          "Looking for information or need help with your ticket purchase? Our team is available to answer your questions and provide assistance."
        }
        og_title={"Get in touch with LiveTicketGroup - Contact"}
        og_description={
          "Looking for information or need help with your ticket purchase? Our team is available to answer your questions and provide assistance."
        }
        og_image={OgImage}
      />
      <div className="relative mt-[84px] w-full max-w-[1920px] mx-auto overflow-hidden flex flex-col gap-4">
        <div className="mb-10">
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
