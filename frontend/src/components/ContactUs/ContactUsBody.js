import classes from "./_contactUs.module.scss";
import Form from "../Form/Form";
import "../../base/_utilities.scss";
import "../../layout/_grid.scss";
import "../../base/_typography.scss";
const ContactUs = (props) => {
  return (
    <section id="contactUs">
      <div className="u-center-text">
        <h2 className="heading-secondary">{props.title}</h2>
      </div>
      <div className={classes.contactUs}>
        <div className={classes.contactUs__form}>
          <div className="row">
            <Form type={props.type} />
          </div>
        </div>
      </div>
    </section>
  );
};
export default ContactUs;
