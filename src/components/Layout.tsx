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
        <meta name="title" content="NextSched" />
        <meta
          name="description"
          content="Organize your student schedule with NextSched. Currently in beta and more development coming soon."
        />
        <meta
          name="keywords"
          content="NextSched, Scheduler. College Planner, Planner"
        />
        <meta name="robots" content="index, follow" />
        <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
        <meta name="language" content="English" />
        <meta name="revisit-after" content="1 days" />
        <meta name="author" content="Van AJ Vanguardia" />
        <meta
          name="google-site-verification"
          content="jXwUO7i9wLIGvvlFOrOQd7XumxaOjrQzJV0slwIb9Fw"
        />
        <link rel="icon" href="/favicon.ico" />
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
