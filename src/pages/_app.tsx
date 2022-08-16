import "../styles/globals.css";
import { ThemeProvider } from "next-themes";
import type { AppType } from "next/dist/shared/lib/utils";
import Layout from "../components/Layout";

const MyApp: AppType = ({ Component, pageProps }) => {
  return (
    <ThemeProvider attribute="class">
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ThemeProvider>
  );
};

export default MyApp;
