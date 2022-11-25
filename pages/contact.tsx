import { Layout } from "@components/layouts";
import Offices from "@components/Offices";
import { NextPageWithLayout } from "./_app";

const Contact: NextPageWithLayout = () => {
  return <Offices />;
};

Contact.getLayout = (page) => <Layout>{page}</Layout>;

export default Contact;
