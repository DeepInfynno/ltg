import { Layout } from "@components/layouts";
import { NextPageWithLayout } from "./_app";
import Login from "@components/Login";

const LoginPage: NextPageWithLayout = () => {
  return <Login />;
};

LoginPage.getLayout = (page) => <Layout hideContact>{page}</Layout>;

export default Login;
