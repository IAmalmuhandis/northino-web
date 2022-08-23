import classes from "./_northinoServices.module.scss";
import Navigation from "../layout/Navigation";
import HeroSection from "../components/HeroSection/HeroSection";
import Footer from "../layout/Footer";
import AvailableServices from "../components/AvailableServices/AvailableServices";
const NorthinoServices = () => {
  return (
    <div className={classes.northinoServices}>
      <Navigation />
      <HeroSection
        pageNo="4"
        mainHeader={"IT Solutions"}
        subHeader="For Individuals, Businesses and Organisations"
        styleType="6"
      />
      <AvailableServices />
      <Footer />
    </div>
  );
};
export default NorthinoServices;
