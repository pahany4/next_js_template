import Head from "next/head";
import React, {useEffect} from "react";
import dynamic from "next/dynamic";
import SuperTokens from "supertokens-auth-react";
import {redirectToAuth} from "supertokens-auth-react";

const SuperTokensComponentNoSSR = dynamic(new Promise((res) => res(SuperTokens.getRoutingComponent)), {ssr: false});

export default function Auth() {
  useEffect(() => {
    if (SuperTokens.canHandleRoute() === false) {
      redirectToAuth({
        redirectBack: false,
      });
    }
  }, []);

  return (
    <div>
      <Head>
        {/**Основные метатеги*/}
        <title>Авторизация</title>
      </Head>
      <div className={"SuperTokensComponent"}>
        <SuperTokensComponentNoSSR/>
      </div>
    </div>
  );
}
