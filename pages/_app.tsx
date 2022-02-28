import "antd/dist/antd.css";
import "@styles/globals.scss";

import { LayoutAll } from "@components/Layout";
import Auth from "./auth";
import { appWithTranslation } from "next-i18next";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import persistStore from "redux-persist/lib/persistStore";
import { store } from "@/reducer/store";

const persistor = persistStore(store);

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Provider store={store}>
        <PersistGate persistor={persistor}>
          <LayoutAll>

              <Component {...pageProps} />

          </LayoutAll>
        </PersistGate>
      </Provider>
    </>
  );
}

export default appWithTranslation(MyApp);
