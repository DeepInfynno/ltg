import Button from "@components/form/Button";
import { ContactForm, Layout } from "@components/layouts";
import Offices from "@components/Offices";
import { NextPageWithLayout } from "./_app";

const Contact: NextPageWithLayout = () => {
  return (
    <>
      <div className="mb-[88px]">
        <Offices />
        <div className="hidden md:block text-center mt-[99px]">
          <Button className="!px-4">contact us</Button>
        </div>
      </div>
      <ContactForm />
    </>
  );
};

Contact.getLayout = (page) => <Layout>{page}</Layout>;

export default Contact;
