import classes from "./styles/_northinoStore.module.scss";
import Navigation from "../layout/Navigation";
import HeroSection from "../components/HeroSection/HeroSection";
import Footer from "../layout/Footer";
import MentorsList from "../components/MentorsList/MentorsList";

const OurMentors = () => {
  return (
    <div className={classes.northinoStore}>
      <Navigation />
      <HeroSection
        pageNo="3"
        mainHeader="Our Mentors"
        subHeader="Connect, learn and grow"
        styleType="5"
      />
      <MentorsList />
      <Footer />
    </div>
  );
};
export default OurMentors;
