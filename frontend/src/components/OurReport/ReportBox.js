import classes from "./_reportBox.module.scss";
import "../../base/_typography.scss";
import "../../base/_utilities.scss";
const ReportBox = (props) => {
  // heading
  // details
  return (
    <div className={classes.feature__box}>
      <i className={classes.feature__box__icon}>{props.details}</i>
      <h3 className="heading-tertiary u-margin-bottom-small">
        {props.heading}
      </h3>
    </div>
  );
};
export default ReportBox;
