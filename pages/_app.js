import "../styles/globals.css";
import Layout from "../layouts/Layout";
import {useEffect, useState} from "react";
import {useRouter} from "next/router";
import {pageview} from "../lib/gtm";
import Crisp from "../components/crisp/crisp";
import SuperTokensReact, {SuperTokensWrapper} from "supertokens-auth-react";
import * as SuperTokensConfig from "../config/superTokensConfig";
import {Provider} from "react-redux";
import {Preloader} from "../components/preloader/preloader";
import {store} from "./../reducers/index";

if (typeof window !== "undefined") {
  SuperTokensReact.init(SuperTokensConfig.frontendConfig());
}


function MyApp({Component, pageProps}) {
  const [loading, setLoading] = useState(false);


  const router = useRouter();
  useEffect(() => {
    router.events.on("routeChangeComplete", pageview);
    return () => {
      router.events.off("routeChangeComplete", pageview);
    };
  }, [router.events]);

  useEffect(() => {
    // Обработка начала загрузки
    router.events.on("routeChangeStart", () => {
      setLoading(true);
    });

    // Обработка окончания загрузки
    router.events.on("routeChangeComplete", () => {
      setLoading(false);
    });
  }, []);
  return (
    <SuperTokensWrapper>
      <Provider store={store}>
        <Layout>
          {
            // Если загружается то показываем прелоадер
            loading && <Preloader/>
          }

          <Component {...pageProps} />
          {process.env.NEXT_PUBLIC_STAGE_DEPlOY === "production" && process.env.NEXT_PUBLIC_CRISP_WEBSITE_ID &&
            <Crisp/>}
        </Layout>
      </Provider>
    </SuperTokensWrapper>
  );
}

export default MyApp;
