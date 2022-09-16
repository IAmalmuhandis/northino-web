import classes from "./_availableServices.module.scss";
import "../../base/_typography.scss";
import "../../layout/_grid.scss";
import Card from "../Card/Card";
import Grid from "@mui/material/Grid";
const AvailableServices = () => {
  return (
    <section
      className={classes.section__availableServices}
      id="section-availableServices"
    >
      <div className="u-center-text u-margin-buttom-small">
        <h2
          className={
            "heading-secondary " + classes.section__availableServices__heading
          }
        >
          What can we do for you?
        </h2>
      </div>
      <Grid container component="main" sx={{ height: "auto" }}>
        <Grid item xs={12} sm={12} md={4}>
          <div className="row">
            <Card
              cardNumber="9"
              headingText="Custom Software"
              subHeadingText="Have your own Custom software such as business website, mobile or desktop application built for you."
              descriptionTitle="Take your business to the next level"
              description="Let us build a portfolio for you as an individual and a custom software for your business or organisation"
              btnText="Request for service"
            />
          </div>
        </Grid>
        <Grid item xs={12} sm={12} md={4}>
          <div className="row">
            <Card
              cardNumber="10"
              headingText="Branding and Promotion"
              subHeadingText="Let us do what we do the best by taking your business branding to a higher level."
              descriptionTitle="Attract new Customers"
              description="We have professional business branding agents who work with professional product designers and content creators to make your business look professional"
              btnText="Request for service"
            />
          </div>
        </Grid>
        <Grid item xs={12} sm={12} md={4}>
          <div className="row">
            <Card
              cardNumber="11"
              headingText="Photo and videography"
              subHeadingText="Book us for your events e.g seminar, conference, wedding, birthday and other events"
              descriptionTitle="Our Team is the best"
              description="We offer a high discount for our customers, and provide you with good photo and video edits for your memorable events"
              btnText="Request for Service"
            />
          </div>
        </Grid>
      </Grid>
    </section>
  );
};
export default AvailableServices;
