
import ContactUsPageArea from "../components/main-components/contact-us-page-area";
import Layout from "../components/layout/Layout";
import PageBanner from "../components/layout/PageBanner";
import OurLocationAddressArea from "../components/main-components/our-location-address-area";
import ContactPageMap from "../components/main-components/contact-page-map";
import { useTranslations } from "next-intl";
import HeadTitle from "@/components/layout/HeadTitle";

const Contact = () => {
   
  const t = useTranslations('Messages');

  return (
    <Layout>
      <HeadTitle text={t("title_contact")}/>
      {/* <PageBanner titleHtml={`Conta<span>ct Us</span>`} titleText="Contact" /> */}
      <ContactUsPageArea/>
      {/* Contact Us Page Area end */}
      {/* Our Location Address Area start */}
      <OurLocationAddressArea/>
      {/* Our Location Address Area end */}
      {/* Location Map Area Start */}
      <ContactPageMap/>
      {/* Location Map Area End */}
    </Layout>
  );
};
export default Contact;
export async function getStaticProps(context) {
  return {
    props: {
      // You can get the messages from anywhere you like. The recommended
      // pattern is to put them in JSON files separated by language.
      messages: (await import(`../messages/${context.locale}.json`)).default
    }
  };
}