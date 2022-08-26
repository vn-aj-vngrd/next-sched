import Head from "next/head";
import { useRouter } from "next/router";
import Footer from "./Footer";
import Header from "./Header";
import Meta from "./Meta";

const Layout = ({ children }: any) => {
  const route = useRouter().route;

  return (
    <>
      <Head>
        <title>NextSched</title>
        <Meta />
      </Head>
      <div className="flex flex-col h-screen">
        <Header />
        <main
          // flex-grow;
          className={
            route === "/" || route === "/schedule/[id]"
              ? "flex-1 overflow-y-auto"
              : "grid justify-center h-full place-items-center"
          }
        >
          {children}
        </main>
        <Footer />
      </div>
    </>
  );
};

export default Layout;
