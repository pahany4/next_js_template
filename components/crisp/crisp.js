import {useEffect} from "react";

const Crisp = () => {
  useEffect(() => {
    window.$crisp = [];
    window.CRISP_WEBSITE_ID = process.env.NEXT_PUBLIC_CRISP_WEBSITE_ID;
    (function () {
      const d = document;
      const s = d.createElement("script");

      s.src = process.env.NEXT_PUBLIC_CRISP_WEBSITE_SRC;
      s.async = 1;
      d.getElementsByTagName("head")[0].appendChild(s);
    })();
  }, []);

  return <></>;
};

export default Crisp;
