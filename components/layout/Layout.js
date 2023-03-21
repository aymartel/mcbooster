import { Fragment, useEffect } from "react";
import niceSelect from "react-nice-select";

import Footer from "./Footer";
import Header from "./Header";
import ScrollTop from "./ScrollTop";
import SideBar from "./SideBar";
import Image from "next/image";
import VideoPopup from "../secondaries-components/VideoPopup";
import ImageView from "../secondaries-components/ImageView";
import { animation, stickyNav } from "../../utils/utils";
import CallToAction from "../secondaries-components/CallToAction";
import Head from "next/head";

const Layout = ({ children, header, className, footer, noHeader }) => {
  useEffect(() => {
    animation();
    document.querySelector("body").className = className
      ? className
      : "oxence_body";
  }, [className]);

  useEffect(() => {
    window.addEventListener("scroll", stickyNav);
  }, []);
  useEffect(() => {
    return () => {
      niceSelect({ withoutwide: true });
    };
  }, []);
  return (
    <Fragment>
      <Head>
        <link
          rel="shortcut icon"
          href="images/favicon.png"
          type="image/x-icon"
        />
      </Head>

      <VideoPopup />
      {/* <Image  View /> */}
      <div className="page-wrapper">
        {!noHeader && <Header header={header} />}
        <SideBar />
        {children}
        <Footer footer={footer} />
        <ScrollTop />
      </div>
    </Fragment>
  );
};
export default Layout;
