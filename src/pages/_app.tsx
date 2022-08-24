import type { AppType } from "next/dist/shared/lib/utils";
import Layout from "../components/Layout";
import "../styles/globals.css";
import { wrapper } from "../app/store";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const MyApp: AppType = ({ Component, pageProps }) => {
  return (
    <>
      <ToastContainer
        position="bottom-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
      <ToastContainer />
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  );
};

export default wrapper.withRedux(MyApp);
