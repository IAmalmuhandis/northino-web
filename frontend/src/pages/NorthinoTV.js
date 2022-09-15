import classes from "./styles/_northinoTV.module.scss";
import Navigation from "../layout/Navigation";
import HeroSection from "../components/HeroSection/HeroSection";
import Footer from "../layout/Footer";
import AvailableCourses from "../components/AvailableCourses/AvailableCourses";
const NorthinoTV = () => {
  return (
    <div className={classes.northinoTV}>
      <Navigation />
      <HeroSection
        pageNo="2"
        mainHeader="Northino TV"
        subHeader="Knowledge is Power"
        styleType="2"
      />
      <AvailableCourses />
      <Footer />
    </div>
  );
};
export default NorthinoTV;
