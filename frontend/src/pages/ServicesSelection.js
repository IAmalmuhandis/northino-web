import classes from "./_servicesSelection.module.scss";
import Navigation from "../layout/Navigation";
import "../layout/_grid.scss";
import "../base/_utilities.scss";
import HeroSection from "../components/HeroSection/HeroSection";
import ServiceBody from "../components/ServiceBody/ServiceBody";
import Footer from "../layout/Footer";
const ServicesSelection = (props) => {
  const header =
    props.service === "custom-software"
      ? "Custom Software"
      : props.service === "branding-and-promotion"
      ? "Business Branding and Promotion"
      : props.service === "mentor"
      ? "Get a Mentor"
      : props.service === "custom-software-form" ||
        props.service === "branding-and-promotion-form" ||
        props.service === "custom-software-form" ||
        props.service === "mentor-form"
      ? "Reach out to us"
      : props.service === "previous-clients-projects"
      ? "Our Clients and Projects"
      : props.service === "our-builtIn-projects"
      ? "Our built Products"
      : props.service === "businesses-promoted"
      ? "Businesses we have promoted"
      : props.service === "mentors-list"
      ? "Our Mentors"
      : "";
  const subHeader =
    props.service === "custom-software"
      ? "Let us build a custom software for your business|Organisation"
      : props.service === "branding-and-promotion"
      ? "Let us take your business to the next level"
      : props.service === "mentor"
      ? "Lets get you connected with a Mentor"
      : "";
  const pageNo =
    props.service === "custom-software"
      ? "12"
      : props.service === "branding-and-promotion"
      ? "13"
      : props.service === "mentor"
      ? "14"
      : props.service === "custom-software-form" ||
        props.service === "branding-and-promotion-form" ||
        props.service === "custom-software-form" ||
        props.service === "mentor-form"
      ? "3"
      : props.service === "previous-clients-projects" ||
        props.service === "our-builtIn-projects"
      ? "12"
      : props.service === "businesses-promoted"
      ? "13"
      : props.service === "mentors-list"
      ? "14"
      : "";
  return (
    <div className={classes.service__section}>
      <Navigation />
      <HeroSection pageNo={pageNo} mainHeader={header} subHeader={subHeader} />
      <ServiceBody service={props.service} />
      <Footer />
    </div>
  );
};
export default ServicesSelection;
