import Head from "next/head";
import Header from "../sections/Header";
import Footer from "../sections/Footer";

const Layout = ({ children }: any) => {
  return (
    <>
      <Head>
        <title>Scheduler</title>
        <meta name="description" content="Generated by create-t3-app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-grow">{children}</main>
        <Footer />
      </div>
    </>
  );
};

export default Layout;
