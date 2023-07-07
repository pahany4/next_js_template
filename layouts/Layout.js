import React from "react";
import {ScrollToTop} from "./scroll-to-top";

const Layout = ({children}) => {
  return (
    <div className={"root"}>
      <main className={"main"}>
        {children}
      </main>
      <ScrollToTop/>
    </div>
  );
};

export default Layout;
