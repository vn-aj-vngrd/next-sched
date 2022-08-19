import Head from "next/head";
import Footer from "./Footer";

const Layout = ({ children }: any) => {
  return (
    <>
      <Head>
        <title>Scheduler</title>
        <meta name="description" content="Plan your week with scheduler" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="flex flex-col min-h-screen">
        <main className="flex-grow">{children}</main>
        <Footer />
      </div>
    </>
  );
};

export default Layout;
