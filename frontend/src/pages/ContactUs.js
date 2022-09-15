import classes from "./styles/_contactUs.module.scss";
import Navigation from "../layout/Navigation";
import HeroSection from "../components/HeroSection/HeroSection";
import Footer from "../layout/Footer";
import ContactUsBody from "../components/ContactUs/ContactUsBody";
const ContactUs = (props) => {
  return (
    <div className={classes.aboutUs}>
      <Navigation />
      <HeroSection
        pageNo="5"
        mainHeader={props.pageTitle}
        subHeader={props.pageSubTitle}
        styleType="4"
      />
      <ContactUsBody type={props.pageType} title={props.formTitle} />
      <Footer />
    </div>
  );
};
export default ContactUs;
