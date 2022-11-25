import { ReactNode } from "react";
import Footer from "./Footer";
import Navigation from "./Navigation";

type LayoutProps = {
  children: ReactNode;
  hideContact?: boolean;
};

const Layout = ({ hideContact, children }: LayoutProps) => {
  return (
    <div>
      <Navigation />
      {children}
      <Footer hideContact={hideContact} />
    </div>
  );
};

export default Layout;
