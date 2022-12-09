import Button from "@components/form/Button";
import { ContactForm, Layout } from "@components/layouts";
import Meta from "@components/Meta";
import Offices from "@components/Offices";
import { NextPageWithLayout } from "./_app";
import OgImage from "../assets/images/logo-1.svg";

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
      {/* <div className="mb-[88px]">
        <Offices />
        <div className="hidden md:block text-center mt-[99px]">
          <Button className="!px-4">contact us</Button>
        </div>
      </div> */}
      <ContactForm />
    </>
  );
};

Contact.getLayout = (page) => <Layout>{page}</Layout>;

export default Contact;
