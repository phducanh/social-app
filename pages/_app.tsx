import "antd/dist/antd.css";
import "@styles/globals.scss";
// import axios from 'axios';
import { LayoutAll } from "@components/Layout";
import { appWithTranslation } from "next-i18next";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import persistStore from "redux-persist/lib/persistStore";
import { store } from "@/reducer/store";
import Auth from "@/pages/auth";
// import setupAxios from '@/utils/setupAxios';

// axios.create();
// setupAxios(axios, store);

const persistor = persistStore(store);

function MyApp({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor} loading={<>Loading</>}>
        <LayoutAll>
          <Auth>
            <Component {...pageProps} />
          </Auth>
        </LayoutAll>
      </PersistGate>
    </Provider>
  );
}

export default appWithTranslation(MyApp);
