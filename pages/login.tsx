import { Layout } from "@components/layouts";
import { NextPageWithLayout } from "./_app";

const Login: NextPageWithLayout = () => {
  return <div />;
};

Login.getLayout = (page) => <Layout hideContact>{page}</Layout>;

export default Login;
