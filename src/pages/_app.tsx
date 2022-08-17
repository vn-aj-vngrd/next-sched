import { ThemeProvider } from "next-themes";
import type { AppType } from "next/dist/shared/lib/utils";
import Layout from "../components/Layout";
import "../styles/globals.css";
import { store } from "../app/store";
import { Provider } from "react-redux";

const MyApp: AppType = ({ Component, pageProps }) => {
  return (
    <ThemeProvider attribute="class">
      <Provider store={store}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </Provider>
    </ThemeProvider>
  );
};

export default MyApp;
