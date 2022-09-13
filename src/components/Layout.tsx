import Head from "next/head";
import { useRouter } from "next/router";
import Footer from "./Footer";
import Header from "./Header";
import Meta from "./Meta";

const Layout = ({ children }: any) => {
  return (
    <>
      <Head>
        <title>NextSched</title>
        <Meta />
      </Head>
      <div className="flex flex-col min-h-screen justify-between">
        <Header />
        <main>{children}</main>
        <Footer />
      </div>
    </>
  );
};

export default Layout;
