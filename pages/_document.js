import {Html, Head, Main, NextScript} from "next/document";

const MyDocument = () => {

  return (
    <Html lang="ru">
      <Head>
        <meta data-react-helmet="true" name="robots" content="all"/>
        {/*<meta data-react-helmet="true" name="yandex-verification" content="bbd1b5502082e163" />*/}
        <link rel="icon" href="/favicon.ico"/>
        {/*<link rel="preconnect" href="https://fonts.googleapis.com"/>
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true"/>
        <link
          href="https://fonts.googleapis.com/css2?family=Inter&family=Montserrat:wght@400;500;600&family=Public+Sans:wght@500&family=Roboto:wght@500&display=swap"
          rel="stylesheet"
        />*/}

        {/** google аналитика и яндекс метрика */}
        {process.env.NEXT_PUBLIC_STAGE_DEPlOY === "production" && process.env.NEXT_PUBLIC_YANDEX_ANALYTICS &&(
          <>
            <script
              dangerouslySetInnerHTML={{
                __html: `
              (function(m,e,t,r,i,k,a){m[i]=m[i]||function(){(m[i].a=m[i].a||[]).push(arguments)};
              m[i].l=1*new Date();k=e.createElement(t),a=e.getElementsByTagName(t)[0],k.async=1,k.src=r,a.parentNode.insertBefore(k,a)})
              (window, document, "script", "https://mc.yandex.ru/metrika/tag.js", "ym");
              ym(${process.env.NEXT_PUBLIC_YANDEX_ANALYTICS}, "init", {
                  defer: true,
                  clickmap:true,
                  trackLinks:true,
                  accurateTrackBounce:true,
                  webvisor:true,
                  trackHash:undefined
              });
              `,
              }}
            />
            <noscript>
              <div>
                <img
                  src={`https://mc.yandex.ru/watch/${process.env.NEXT_PUBLIC_YANDEX_ANALYTICS}`}
                  style={{position: "absolute", left: "-9999px"}}
                  alt=""
                />
              </div>
            </noscript>
          </>
        )}
        {process.env.NEXT_PUBLIC_STAGE_DEPlOY === "production" && process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS &&(
          <>
            <script async src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}`}/>
            <script
              dangerouslySetInnerHTML={{
                __html: `
                  window.dataLayer = window.dataLayer || [];
                  function gtag(){dataLayer.push(arguments);}
                  gtag('js', new Date());
                
                  gtag('config', '${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}');
              `,
              }}
            />
            <noscript>
              <iframe
                src={`https://www.googletagmanager.com/ns.html?id=${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}`}
                height="0"
                width="0"
                style={{display: "none", visibility: "hidden"}}
              />
            </noscript>
          </>
        )}
      </Head>
      <body>
      <Main/>
      <NextScript/>
      </body>
    </Html>
  );
};

export default MyDocument;
