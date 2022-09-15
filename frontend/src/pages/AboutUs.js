import classes from "./styles/_aboutUs.module.scss";
import Navigation from "../layout/Navigation";
import HeroSection from "../components/HeroSection/HeroSection";
import Footer from "../layout/Footer";
import AboutUsBody from "../components/AboutUsBody/AboutUsBody";

const AboutUs = () => {
  return (
    <div className={classes.aboutUs}>
      <Navigation />
      <HeroSection
        pageNo="6"
        mainHeader="About Northino"
        subHeader="North Innovation"
        styleType="3"
      />
      <AboutUsBody />
      <Footer />
    </div>
  );
};
export default AboutUs;
