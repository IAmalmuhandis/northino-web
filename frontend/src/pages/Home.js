import Navigation from "../layout/Navigation";
import classes from "./_home.scss";
import HeroSection from "../components/HeroSection/HeroSection";
import OurServices from "../components/OurServices/OurServices";
import OurReports from "../components/OurReport/OurReports";
import CustomersReview from "../components/WhatDoCustomersSay/CustomersReview";
import ContactUsBody from "../components/ContactUs/ContactUsBody";
import Footer from "../layout/Footer";
const Home = () => {
  return (
    <div className={classes.home}>
      <Navigation />
      <HeroSection
        pageNo="1"
        mainHeader="northino"
        subHeader="North Innovation"
        headerType="header"
        styleType=""
      />
      <OurServices />
      <OurReports />
      <CustomersReview />
      <ContactUsBody type="subscribe" title="SUBSCRIBE FOR UPDATES" />
      <Footer />
    </div>
  );
};
export default Home;
