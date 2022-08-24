import Head from "next/head";
import { useRouter } from "next/router";
import Footer from "./Footer";
import Header from "./Header";

const Layout = ({ children }: any) => {
  const route = useRouter().route;

  return (
    <>
      <Head>
        <title>NextSched</title>
        <meta
          name="description"
          content="Organize your schedule with NextSched"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="flex flex-col h-screen">
        <Header />
        <main
          className={
            route === "/404" || route === "/505"
              ? "grid justify-center h-full place-items-center"
              : "flex-grow"
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
