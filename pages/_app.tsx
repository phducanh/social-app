import "antd/dist/antd.css";
import "@styles/globals.scss";

import { LayoutAll } from "@components/Layout";
import { appWithTranslation } from "next-i18next";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <LayoutAll>
        <Component {...pageProps} />
      </LayoutAll>
    </>
  );
}

export default appWithTranslation(MyApp);
