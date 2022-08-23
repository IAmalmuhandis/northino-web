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
          Our Services
        </h2>
      </div>
      <div className="row">
        <div className="col-1-of-3">
          <Card
            cardNumber="1"
            headingText="Northino TV"
            subHeadingText="We provide video tutorials, Reviews and Tech interviews, discussing
            on important technology fields"
            descriptionTitle="Tutorials, Discussions and Interviews"
            description="Technology fields such as; Software development Blockchain
              Artificial Intelligence Software Engineering Startup Motivational
              Videos"
            btnText="Start Learning"
          />
        </div>
        <div className="col-1-of-3">
          <Card
            cardNumber="2"
            headingText="Northino Store"
            subHeadingText="We sell and recommend gadgets that suit your specific needs such as Laptops, phones, camera etc"
            descriptionTitle="Gadget Store"
            description="Using our platform our customers can be able to buy gadgets and also provide you with videos that will provide you with more details about the best gadget that suit your needs.
             "
            btnText="Coming Soon..."
          />
        </div>
        <div className="col-1-of-3">
          <Card
            cardNumber="3"
            headingText="IT Solutions"
            subHeadingText="We provide IT Solution services such as"
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
