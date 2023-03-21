import Link from "next/link";
import Head from "next/head";
import { useTranslations } from "next-intl";
import logoen from "@/images/logos/logo.svg";
import logoru from "@/images/logos/logo.svg";
import i404 from "@/images/background/404.png";
import { useRouter } from "next/router";
import Image from "next/image";
import HeadTitle from "@/components/layout/HeadTitle";

const E404 = () => {
  const t = useTranslations('Messages');
  const router = useRouter();
  return (
    <div className="page-wrapper">
      {/* Preloader */}
      <div className="preloader" style={{ display: "none" }} />
      <HeadTitle text={t("title_404")}/>
      {/* Error Page Area start */}
      <section className="error-page-area py-130 rel z-1">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-5">
              <div className="error-content rmb-75 wow fadeInLeft delay-0-1s animated">
                <div className="logo mb-40">
                  <Link href="#">
                    <a>
                    <Image  
                      src={router.locale!=='ru'?logoen:logoru}
                      alt="Logo"
                      title="Logo"
                      width={150}
                      height={60}
                    />
                    </a>
                  </Link>
                </div>
                <h1>OPPS!</h1>
                <h3>This Page Can’t be Found</h3>
                <p>
                  Start building your first prototype in no time. Ogency
                  intuitive drag &amp; drop interface gives you all the building
                  blocks
                </p>
                <Link href="#">
                  <a className="theme-btn style-two mt-15 mb-50">
                    Go to Home <i className="fas fa-angle-double-right" />
                  </a>
                </Link>
                <div className="follow-us">
                  <h4>Follow Us</h4>
                  <div className="social-style-two">
                    <a href="#">
                      <i className="fab fa-facebook-f" />
                    </a>
                    <a href="#">
                      <i className="fab fa-twitter" />
                    </a>
                    <a href="#">
                      <i className="fab fa-linkedin-in" />
                    </a>
                    <a href="#">
                      <i className="fab fa-behance" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-7">
              <div className="error-image wow fadeInRight delay-0-1s animated">
                <Image   src={i404} alt="404 Error" />
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Error Page Area end */}
    </div>
  );
};
export default E404;

export async function getStaticProps(context) {
  return {
    props: {
      // You can get the messages from anywhere you like. The recommended
      // pattern is to put them in JSON files separated by language.
      messages: (await import(`../messages/${context.locale}.json`)).default
    }
  };
}