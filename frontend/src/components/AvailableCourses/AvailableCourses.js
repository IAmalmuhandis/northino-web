import classes from "./_availableCourses.module.scss";
import "../../base/_typography.scss";
import "../../layout/_grid.scss";
import "../../base/_utilities.scss";
import Grid from "@mui/material/Grid";
import Card from "../Card/Card";
const AvailableCourses = () => {
  return (
    <section
      className={classes.section__availableCourses}
      id="section-availableCourses"
    >
      <div className="u-center-text u-margin-buttom-small">
        <h2
          className={
            "heading-secondary " + classes.section__availableCourses__heading
          }
        >
          Select a category
        </h2>
      </div>
      <Grid container component="main" sx={{ height: "auto" }}>
        <Grid item xs={12} sm={12} md={4}>
          <div className="row">
            <Card
              cardNumber="4"
              headingText="Techies Interviews"
              subHeadingText="Watch out our interview with some amazing Techies"
              descriptionTitle="Interview Sessions"
              description="Discussing with Techies on IT fields such as; Software development Blockchain
              Artificial Intelligence Software Engineering Startup Motivational
              Videos"
              btnText="Start Watching"
            />
          </div>
        </Grid>
        <Grid item xs={12} sm={12} md={4}>
          <div className="row">
            <Card
              cardNumber="5"
              headingText="Learn with Almuhandis"
              subHeadingText="Start your journey of becoming a professional developer with Almuhandis"
              descriptionTitle="Become a web Developer"
              description="I decided to share my experience and knowledge on Web Development to help those people interested in becoming professional web developers"
              btnText="Start Learning"
            />
          </div>
        </Grid>
        <Grid item xs={12} sm={12} md={4}>
          <div className="row">
            <Card
              cardNumber="6"
              headingText="Do it yourself!"
              subHeadingText="I provide crash courses on how to do things yourself"
              descriptionTitle="Learn things easily and start implementing it yourself"
              description="Provide crash course on how to do things yourself e.g Graphic Design, Use your Electronic Device, use the internet etc."
              btnText="Start Watching"
            />
          </div>
        </Grid>
        <Grid item xs={12} sm={12} md={4}>
          <div className="row">
            <Card
              cardNumber="7"
              headingText="Business Management Training"
              subHeadingText="Start your journey of acquiring enterprenuerial skills"
              descriptionTitle="Be your own Boss!"
              description="We discuss on how you can come up with a business idea, qualities of an enterprenuer, business plan, elevator pitch and pitch deck creation and business registeration with CAC"
              btnText="Start Watching"
            />
          </div>
        </Grid>
        <Grid item xs={12} sm={12} md={4}>
          <div className="row">
            <Card
              cardNumber="8"
              headingText="Motivational Videos"
              subHeadingText="Watch out these videos if you feel like you can't make it happen"
              descriptionTitle="You can be what your want!"
              description="We provide inspirational stories, and wise talks for you!"
              btnText="Start Watching"
            />
          </div>
        </Grid>
      </Grid>
    </section>
  );
};
export default AvailableCourses;
