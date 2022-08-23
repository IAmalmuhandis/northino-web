import classes from "./_northinoStore.module.scss";
import Navigation from "../layout/Navigation";
import HeroSection from "../components/HeroSection/HeroSection";

const NorthinoStore = () => {
  return (
    <div className={classes.northinoStore}>
      <Navigation />
      <HeroSection
        pageNo="3"
        mainHeader="Northino Store"
        subHeader="Coming Soon!"
        styleType="5"
      />
    </div>
  );
};
export default NorthinoStore;
