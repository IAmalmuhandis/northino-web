import classes from "./_ourServices.module.scss";
import "../../base/_typography.scss";
import "../../layout/_grid.scss";
import Card from "../Card/Card";
const OurServices = () => {
  return (
    <section className={classes.section__ourServices} id="section-ourServices">
      <div className="u-center-text u-margin-buttom-small">
        <h2
          className={
            "heading-secondary " + classes.section__ourServices__heading
          }
        >
          What we Do?
        </h2>
      </div>
      <div className="row">
        <div className="col-1-of-3">
          <Card
            cardNumber="1"
            headingText="Start Learning"
            subHeadingText="We provide Full Courses tutorials,
                            Reviews and Interviews with some amazing techies from our community"
            descriptionTitle="Full courses, Crash courses and Interviews"
            description="Technology fields such as; Software development,   Digital Marketing, Blockchain, AI, VR, Motivational
              Videos"
            btnText="Start Learning"
          />
        </div>
        <div className="col-1-of-3">
          <Card
            cardNumber="2"
            headingText="Connect with our mentors"
            subHeadingText="A mentor is an experienced and trusted adviser that will help you achieve your dream"
            descriptionTitle="You need a guidance!"
            description="Get advices from an experienced and professional Mentors nearby your area.
             "
            btnText="Connect"
          />
        </div>
        <div className="col-1-of-3">
          <Card
            cardNumber="3"
            headingText="IT Solutions"
            subHeadingText="We provide IT Solution services such as Custom software Development, Consultation and maintainance"
            descriptionTitle="Software Development, Business Promotion, Branding etc"
            description="We build mobile, desktop and web applications.
                Software Maintenance and Consultation.
                Business Promotion and other related services"
            btnText="Explore"
          />
        </div>
      </div>
    </section>
  );
};
export default OurServices;
